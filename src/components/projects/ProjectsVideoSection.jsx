import { SectionHeading } from '../GrowthPortfolioSection'

export default function ProjectsVideoSection({
  longVideos,
  shortVideos,
  isLongVideosVisible,
  isShortVideosVisible,
  onPlayVideo,
}) {
  return (
    <>
      {/* Category 02: Long Videos */}
      {isLongVideosVisible && (
        <section
          id="long-video-work"
          className="scroll-mt-36 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20"
        >
          <div id="media-work" className="-mt-36 pt-36" aria-hidden="true" />
          <div className="mx-auto max-w-[95vw]">
            <SectionHeading
              number="02"
              title="Long videos"
              count={`${longVideos.length} pieces`}
            />

            <div className="mt-7 grid border-l border-t border-frame-border bg-frame-bg lg:grid-cols-3">
              {longVideos.map((video, index) => (
                <article
                  key={video.videoId}
                  className="border-b border-r border-frame-border bg-frame-bg"
                >
                  <div className="p-5">
                    <button
                      type="button"
                      onClick={() => onPlayVideo(video)}
                      className="group block aspect-video w-full overflow-hidden rounded-md border-2 border-frame-border bg-frame-muted text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                      aria-label={`Play the video: ${video.title}`}
                    >
                      <img
                        src={video.thumbnailUrl}
                        alt={`${video.title} thumbnail`}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                        loading="lazy"
                      />
                    </button>
                  </div>
                  <div className="grid gap-5 p-5 pt-0">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                        {String(index + 1).padStart(2, '0')} / Long
                      </p>
                      <h3 className="mt-2 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-3xl">
                        {video.title}
                      </h3>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => onPlayVideo(video)}
                        className="border-2 border-frame-accent bg-frame-accent px-4 py-3 text-xs font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                      >
                        Play the video
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category 03: Short Videos */}
      {isShortVideosVisible && (
        <section
          id="short-video-work"
          className="scroll-mt-36 border-b-2 border-frame-border px-4 py-14 md:px-8 md:py-20"
        >
          <div className="mx-auto max-w-[95vw]">
            <SectionHeading
              number="03"
              title="Short videos"
              count={`${shortVideos.length} pieces`}
            />

            <div className="mt-7 grid border-l border-t border-frame-border bg-frame-bg sm:grid-cols-2 lg:grid-cols-4">
              {shortVideos.map((video, index) => (
                <article
                  key={video.videoId}
                  className="border-b border-r border-frame-border bg-frame-bg"
                >
                  <div className="p-5">
                    <button
                      type="button"
                      onClick={() => onPlayVideo(video)}
                      className="group block aspect-[9/16] w-full overflow-hidden rounded-md border-2 border-frame-border bg-frame-muted text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                      aria-label={`Play the short video: ${video.title}`}
                    >
                      <img
                        src={video.thumbnailUrl}
                        alt={`${video.title} thumbnail`}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                        loading="lazy"
                      />
                    </button>
                  </div>
                  <div className="grid gap-5 p-5 pt-0">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                        {String(index + 1).padStart(2, '0')} / Short
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-2xl">
                        {video.title}
                      </h3>
                      {video.category && (
                        <p className="mt-2 text-xs font-black uppercase tracking-wider text-frame-muted-fg">
                          {video.category}
                        </p>
                      )}
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => onPlayVideo(video)}
                        className="border-2 border-frame-accent bg-frame-accent px-4 py-3 text-xs font-black uppercase tracking-tighter text-frame-accent-fg transition-colors hover:bg-frame-bg hover:text-frame-fg focus:outline-none focus-visible:ring-4 focus-visible:ring-frame-accent"
                      >
                        Play the short
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
