export interface AuthorProfile {
  id: string;
  name: string;
  slug: string;
  jobTitle: string;
  image: {
    url: string;
    alt: string;
    hasAlt: boolean;
  };
  shortBio: string;
  bio: string;
  email: string;
  website: string;
  worksFor: string;
  socialLinks: Record<string, string>;
  status: "published" | "draft";
  publishDate: string;
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  tags: string[];
  postsCount?: number;
  views?: number;
}