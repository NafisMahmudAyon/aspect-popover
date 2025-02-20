import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function PopoverContent({ children, className, showCloseButton = true, ...props }) {
    const { onClose } = usePopover();
    return (_jsxs("div", { className: `relative ${className}`, ...props, children: [showCloseButton && (_jsx("button", { onClick: onClose, className: "absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors", children: _jsx(Icon, { size: 16, className: "text-gray-500" }) })), children] }));
}
