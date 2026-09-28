import { Metadata } from "next";
import { BlogPageClient } from "@/components/blog/BlogPageClient";
import { getPublicBlogPosts } from "@/lib/blog/serverBlogStorage";
import { isLegacyDemoPost, getMergedPostsFromStorage } from "@/lib/blog/getBlogPosts";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageSchema } from "@/lib/seo/schema";
import { BASE_URL } from "@/lib/seo/site";

export const dynamic = "force-dynamic";

const description =
  "Proprietary frameworks, front-end architecture benchmarks, and conversion engineering from the FrameCipher senior strategy team.";

export const metadata: Metadata = {
  title: "Blog & Growth Playbooks | FrameCipher",
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    siteName: "FrameCipher",
    title: "Blog & Growth Playbooks | FrameCipher",
    description,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "FrameCipher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Growth Playbooks | FrameCipher",
    description,
    images: ["/logo.png"],
  },
};

export default async function BlogPage() {
  const rawPosts = await getPublicBlogPosts();
  const detailedPosts = getMergedPostsFromStorage(rawPosts);
  const cleanPosts = detailedPosts.filter((p) => !isLegacyDemoPost(p));

  const schema = generatePageSchema({
    pageType: "blog",
    data: {
      canonicalUrl: `${BASE_URL}/blog`,
      title: "Blog & Growth Playbooks | FrameCipher",
      description,
    },
  });

  return (
    <>
      <JsonLd data={schema} />
      <BlogPageClient initialPosts={cleanPosts} />
    </>
  );
}