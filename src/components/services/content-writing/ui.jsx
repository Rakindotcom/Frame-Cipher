export function CheckIcon({ className = 'h-2.5 w-2.5' }) {
  return (
    <span
      aria-hidden="true"
      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-[#A855F7]/40 bg-[#A855F7]/10 text-[#A855F7]"
    >
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  )
}
