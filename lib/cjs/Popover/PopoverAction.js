import { jsx as _jsx } from "react/jsx-runtime";
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
