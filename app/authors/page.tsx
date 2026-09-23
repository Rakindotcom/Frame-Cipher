import Link from "next/link";
import { Metadata } from "next";
import { getAllAuthors } from "@/lib/authors/getAuthors";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Authors | FrameCipher",
  description:
    "Meet the strategists and contributors behind FrameCipher's Webflow builds, B2B growth systems and technical SEO insights.",
};

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default async function AuthorsIndexPage() {
  const authors = (await getAllAuthors()).filter(
    (a) => a.status === "published" && a.name
  );

  return (
    <main className="author-page">
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 sm:px-10 lg:px-16 border-b border-frame-border">
        <div className="max-w-6xl mx-auto">
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-frame-accent font-semibold mb-4">
            The People Behind FrameCipher
          </p>
          <h1 className="font-heading font-bold uppercase tracking-tight text-frame-fg [font-size:clamp(2.4rem,7vw,6rem)] leading-[0.9]">
            Author Profiles
          </h1>
          <p className="font-body text-frame-muted-fg mt-6 max-w-2xl text-sm sm:text-base leading-relaxed">
            Every strategy, build and insight on this site is signed by a real human.
            Profiles below carry structured <span className="text-frame-accent font-semibold">Person schema</span>,
            so search engines recognize exactly who wrote and stands behind the work.
          </p>
        </div>
      </section>

      {/* Authors Grid */}
      <section className="py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {authors.length === 0 ? (
            <p className="font-body text-frame-muted-fg text-sm">No published authors yet.</p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
              {authors.map((author) => {
                const hasImage = Boolean(author.image?.url);
                return (
                  <Link
                    key={author.id}
                    href={`/authors/${author.slug}`}
                    className="group rounded-2xl border border-frame-border bg-frame-muted/20 p-6 flex flex-col gap-5 transition-colors duration-200 hover:border-frame-accent/60"
                  >
                    <div className="flex items-center gap-4">
                      {hasImage ? (
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border border-frame-border bg-frame-muted shrink-0 flex items-center justify-center group-hover:border-frame-accent/60 transition-colors">
                          <img
                            src={author.image.url}
                            alt={author.image.alt || author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-frame-accent text-frame-accent-fg flex items-center justify-center font-heading font-bold text-lg shrink-0">
                          {initialsOf(author.name)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h2 className="font-heading font-bold text-frame-fg text-lg leading-tight truncate">
                          {author.name}
                        </h2>
                        <p className="font-body text-frame-muted-fg text-xs mt-1 truncate">
                          {author.jobTitle}
                        </p>
                        <p className="font-body text-frame-accent text-[11px] font-semibold mt-0.5 truncate">
                          {author.worksFor}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-frame-muted-fg text-xs leading-relaxed line-clamp-3">
                      {author.shortBio || author.bio}
                    </p>
                    <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-frame-accent">
                      View Profile →
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}