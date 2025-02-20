export function PopoverContent({
	children,
	className,
	showCloseButton = true,
	...props
}) {
	const { onClose } = usePopover();

	return (
		<div className={`relative ${className}`} {...props}>
			{showCloseButton && (
				<button
					onClick={onClose}
					className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
					<Icon size={16} className="text-gray-500" />
				</button>
			)}
			{children}
		</div>
	);
}
