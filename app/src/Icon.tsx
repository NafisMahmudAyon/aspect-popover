const Icon = ({ className, size=24, ...rest }: { className?: string, size?: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...rest}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
  )
}

export default Icon