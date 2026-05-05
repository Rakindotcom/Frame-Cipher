'use client'

import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const title = project.title || project.name
  const tags = project.tools || project.services || []
  const role = project.role || project.scope

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <button
        type="button"
        className="absolute inset-0 bg-frame-bg/90"
        onClick={onClose}
        aria-label="Close project details"
      />

      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto border-2 border-frame-border bg-frame-bg animate-slideUp">
        <button
          type="button"
          onClick={onClose}
          className="group absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center border-2 border-frame-border bg-frame-bg text-frame-fg transition-colors duration-300 hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
          aria-label="Close project details"
        >
          <svg className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="aspect-video w-full border-b-2 border-frame-border bg-frame-muted">
          {project.videoUrl ? (
            <iframe
              className="h-full w-full"
              src={project.videoUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img src={project.preview} alt={title} className="h-full w-full object-cover saturate-0" />
          )}
        </div>

        <div className="p-7 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-frame-accent">Project details</p>
          <h2 className="mt-5 font-heading text-[clamp(2.8rem,8vw,7rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
            {title}
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.category && <Tag>{project.category}</Tag>}
            {role && <Tag>{role}</Tag>}
          </div>

          <div className="mt-10 grid gap-px bg-frame-border md:grid-cols-2">
            <section className="bg-frame-bg p-6">
              <h3 className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Overview</h3>
              <p className="mt-4 text-lg font-medium leading-tight text-frame-muted-fg">{project.description}</p>
            </section>

            <section className="bg-frame-bg p-6">
              <h3 className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Tools and services</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tool) => (
                  <span key={tool} className="border-2 border-frame-border px-3 py-2 text-xs font-black uppercase tracking-tighter text-frame-fg">
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {typeof project.status === 'number' && (
            <section className="mt-10 border-t-2 border-frame-border pt-8">
              <h3 className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">Project timeline</h3>
              <div className="mt-5 grid gap-px bg-frame-border">
                {['Concept and planning', 'Production', 'Post-production', 'Final delivery'].map((stage, index) => {
                  const isDone = index * 25 < project.status
                  return (
                    <div key={stage} className="grid items-center gap-4 bg-frame-bg p-4 md:grid-cols-[0.12fr_0.5fr_1fr]">
                      <span className={`font-heading text-3xl font-bold leading-none tracking-tighter ${isDone ? 'text-frame-accent' : 'text-frame-muted'}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-sm font-black uppercase tracking-tighter ${isDone ? 'text-frame-fg' : 'text-frame-muted-fg'}`}>
                        {stage}
                      </span>
                      <span className="h-2 bg-frame-muted">
                        <span
                          className="block h-full bg-frame-accent transition-all duration-700"
                          style={{ width: `${Math.min(100, Math.max(0, (project.status - index * 25) * 4))}%` }}
                        />
                      </span>
                    </div>
                  )
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="border-2 border-frame-accent bg-frame-accent px-4 py-2 text-sm font-black uppercase tracking-tighter text-frame-accent-fg">
      {children}
    </span>
  )
}
