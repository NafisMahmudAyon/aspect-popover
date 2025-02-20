export function PopoverAction({ children, className, asChild, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
    asChild?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
export function PopoverContent({ children, className, showCloseButton, ...props }: {
    [x: string]: any;
    children: any;
    className: any;
    showCloseButton?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
export function Popover({ children, position, className, isOpen: controlledIsOpen, onOpenChange, offset, animation, duration, customVariants, customTransition, closeOnClickOutside, }: {
    children: any;
    position?: string | undefined;
    className?: string | undefined;
    isOpen: any;
    onOpenChange: any;
    offset?: number | undefined;
    animation?: string | undefined;
    duration: any;
    customVariants: any;
    customTransition: any;
    closeOnClickOutside?: boolean | undefined;
}): import("react/jsx-runtime").JSX.Element;
