export function WorkArchiveModal({
  isOpen,
  onClose,
  designWorks,
  onSelectWork,
}) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-frame-bg/95 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Full creative archive"
      onClick={onClose}
    >
      <div
        className="flex max-h-full w-full max-w-7xl flex-col gap-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
              Full archive
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
              All selected work
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-12 border-2 border-frame-border px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
          >
            Close
          </button>
        </div>

        <div className="min-h-0 overflow-y-auto border-2 border-frame-border bg-frame-border p-px">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {designWorks.map((work) => (
              <article key={work.src} className="group bg-frame-bg">
                <button
                  type="button"
                  onClick={() => onSelectWork(work)}
                  className="relative block aspect-square w-full overflow-hidden bg-white text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                  aria-label={`View full image ${work.number}`}
                >
                  <img
                    src={work.src}
                    alt={`Frame Cipher selected work ${work.number}`}
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-95"
                    loading="lazy"
                  />
                  <span className="absolute inset-x-4 bottom-4 border-2 border-frame-border bg-frame-bg px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-frame-fg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Open preview
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function WorkImageModal({ work, onClose }) {
  if (!work) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-frame-bg/95 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Work image ${work.number} full preview`}
      onClick={onClose}
    >
      <div className="relative flex h-full w-full max-w-7xl flex-col gap-4" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Full preview</p>
          <button
            type="button"
            onClick={onClose}
            className="min-h-12 border-2 border-frame-border px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
          >
            Close
          </button>
        </div>
        <div className="min-h-0 flex-1 border-2 border-frame-border bg-white p-3 md:p-5">
          <img
            src={work.src}
            alt={`Frame Cipher selected work ${work.number}`}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export function VideoPlayerModal({ video, onClose }) {
  if (!video) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-frame-bg/95 p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${video.title} video player`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-7xl flex-col gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Video player</p>
            <h2 className="mt-2 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-5xl">
              {video.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="min-h-12 border-2 border-frame-border px-5 py-3 text-sm font-black uppercase tracking-tighter text-frame-fg transition-colors hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
          >
            Close
          </button>
        </div>
        <div className="border-2 border-frame-border bg-frame-muted p-3 md:p-5">
          <div className={video.isShort ? 'mx-auto aspect-[9/16] max-h-[70vh] w-full max-w-sm' : 'aspect-video w-full'}>
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function PreviewToast({ show, onClose }) {
  if (!show) return null

  return (
    <div
      className="fixed bottom-5 left-4 right-4 z-40 border-2 border-frame-border bg-frame-accent p-4 text-frame-accent-fg shadow-2xl md:right-auto md:max-w-md"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] opacity-80">Image archive</p>
          <p className="mt-2 text-sm font-black uppercase leading-tight tracking-tighter md:text-base">
            The showcase rotates automatically. View more opens all 25 pieces in a full-screen grid.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 border-2 border-frame-accent-fg/70 px-3 py-2 text-xs font-black uppercase tracking-tighter transition-colors hover:bg-frame-accent-fg hover:text-frame-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent-fg"
        >
          Close
        </button>
      </div>
    </div>
  )
}
