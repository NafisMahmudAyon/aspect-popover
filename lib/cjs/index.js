'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect, createContext, useContext, } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';
const PopoverContext = createContext(null);
const usePopover = () => {
    const context = useContext(PopoverContext);
    if (!context) {
        throw new Error('Popover compound components must be used within a Popover');
    }
    return context;
};
const presetVariants = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
    zoom: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 },
    },
    slide: {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 10 },
    },
    none: {
        initial: {},
        animate: {},
        exit: {},
    },
};
const presetTransitions = {
    fade: { duration: 0.2 },
    zoom: { type: 'spring', damping: 20, stiffness: 300 },
    slide: { type: 'spring', damping: 25, stiffness: 350 },
    none: {},
};
export function PopoverAction({ children, className, asChild = false, ...props }) {
    const { onToggle } = usePopover();
    if (asChild) {
        return React.cloneElement(children, {
            onClick: onToggle,
            ...props,
        });
    }
    return (_jsx("div", { onClick: onToggle, className: className, ...props, children: children }));
}
export function PopoverContent({ children, className, showCloseButton = true, ...props }) {
    const { onClose } = usePopover();
    return (_jsxs("div", { className: `relative ${className}`, ...props, children: [showCloseButton && (_jsx("button", { onClick: onClose, className: "absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors", children: _jsx(Icon, { size: 16, className: "text-gray-500" }) })), children] }));
}
export function Popover({ children, position = 'bottom', className = '', isOpen: controlledIsOpen, onOpenChange, offset = 8, animation = 'zoom', duration, customVariants, customTransition, closeOnClickOutside = true, }) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const [popoverPosition, setPopoverPosition] = useState({});
    const [adjustedPosition, setAdjustedPosition] = useState(position);
    const popoverRef = useRef(null);
    const triggerRef = useRef(null);
    const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
    const updatePosition = () => {
        if (!triggerRef.current || !popoverRef.current)
            return;
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const popoverRect = popoverRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        // Calculate available space in each direction
        const spaceAbove = triggerRect.top;
        const spaceBelow = windowHeight - triggerRect.bottom;
        const spaceLeft = triggerRect.left;
        const spaceRight = windowWidth - triggerRect.right;
        // Determine best position based on available space
        let bestPosition = position;
        if (position === 'bottom' &&
            spaceBelow < popoverRect.height &&
            spaceAbove > spaceBelow) {
            bestPosition = 'top';
        }
        else if (position === 'top' &&
            spaceAbove < popoverRect.height &&
            spaceBelow > spaceAbove) {
            bestPosition = 'bottom';
        }
        else if (position === 'left' &&
            spaceLeft < popoverRect.width &&
            spaceRight > spaceLeft) {
            bestPosition = 'right';
        }
        else if (position === 'right' &&
            spaceRight < popoverRect.width &&
            spaceLeft > spaceRight) {
            bestPosition = 'left';
        }
        setAdjustedPosition(bestPosition);
        let newPosition = {};
        switch (bestPosition) {
            case 'top':
                newPosition = {
                    bottom: windowHeight - triggerRect.top + offset,
                    left: triggerRect.left + (triggerRect.width - popoverRect.width) / 2,
                };
                break;
            case 'bottom':
                newPosition = {
                    top: triggerRect.bottom + offset,
                    left: triggerRect.left + (triggerRect.width - popoverRect.width) / 2,
                };
                break;
            case 'left':
                newPosition = {
                    top: triggerRect.top + (triggerRect.height - popoverRect.height) / 2,
                    right: windowWidth - triggerRect.left + offset,
                };
                break;
            case 'right':
                newPosition = {
                    top: triggerRect.top + (triggerRect.height - popoverRect.height) / 2,
                    left: triggerRect.right + offset,
                };
                break;
        }
        // Ensure the popover stays within viewport bounds
        if (newPosition.left !== undefined) {
            const rightEdge = newPosition.left + popoverRect.width;
            if (rightEdge > windowWidth - offset) {
                newPosition.left = windowWidth - popoverRect.width - offset;
            }
            if (newPosition.left < offset) {
                newPosition.left = offset;
            }
        }
        if (newPosition.top !== undefined) {
            const bottomEdge = newPosition.top + popoverRect.height;
            if (bottomEdge > windowHeight - offset) {
                newPosition.top = windowHeight - popoverRect.height - offset;
            }
            if (newPosition.top < offset) {
                newPosition.top = offset;
            }
        }
        if (newPosition.right !== undefined) {
            const leftEdge = windowWidth - newPosition.right - popoverRect.width;
            if (leftEdge < offset) {
                newPosition.right = windowWidth - popoverRect.width - offset;
            }
            if (leftEdge > windowWidth - offset) {
                newPosition.right = offset;
            }
        }
        setPopoverPosition(newPosition);
    };
    useEffect(() => {
        if (isOpen) {
            updatePosition();
            window.addEventListener('resize', updatePosition);
            window.addEventListener('scroll', updatePosition);
        }
        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        };
    }, [isOpen, position]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (closeOnClickOutside &&
                popoverRef.current &&
                !popoverRef.current.contains(event.target) &&
                !triggerRef.current?.contains(event.target)) {
                handleClose();
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen, closeOnClickOutside]);
    const handleToggle = () => {
        const newIsOpen = !isOpen;
        setInternalIsOpen(newIsOpen);
        onOpenChange?.(newIsOpen);
    };
    const handleClose = () => {
        setInternalIsOpen(false);
        onOpenChange?.(false);
    };
    const variants = customVariants || {
        initial: {
            ...presetVariants[animation].initial,
            ...(adjustedPosition === 'top' && { y: 8 }),
            ...(adjustedPosition === 'bottom' && { y: -8 }),
            ...(adjustedPosition === 'left' && { x: 8 }),
            ...(adjustedPosition === 'right' && { x: -8 }),
        },
        animate: {
            ...presetVariants[animation].animate,
            y: 0,
            x: 0,
        },
        exit: {
            ...presetVariants[animation].exit,
            transition: { duration: 0.1 },
        },
    };
    const transition = customTransition || {
        ...presetTransitions[animation],
        ...(duration ? { duration } : {}),
    };
    let trigger = null;
    let content = null;
    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (child.type === PopoverAction) {
                trigger = React.cloneElement(child, {
                    ref: triggerRef,
                });
            }
            else if (child.type === PopoverContent) {
                content = child;
            }
        }
    });
    return (_jsxs(PopoverContext.Provider, { value: { isOpen, onClose: handleClose, onToggle: handleToggle }, children: [trigger, createPortal(_jsx(AnimatePresence, { children: isOpen && content && (_jsx(motion.div, { ref: popoverRef, initial: "initial", animate: "animate", exit: "exit", variants: variants, transition: transition, style: {
                        position: 'fixed',
                        ...popoverPosition,
                    }, className: `
                z-50 min-w-[200px]
                bg-white rounded-lg shadow-lg
                border border-gray-200
                ${className}
              `, children: content })) }), document.body)] }));
}
