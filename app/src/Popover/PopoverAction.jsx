export function PopoverAction({
	children,
	className,
	asChild = false,
	...props
}) {
	const { onToggle } = usePopover();

	if (asChild) {
		return React.cloneElement(children, {
			onClick: onToggle,
			...props,
		});
	}

	return (
		<div onClick={onToggle} className={className} {...props}>
			{children}
		</div>
	);
}
