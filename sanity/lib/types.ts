import type { PortableTextBlock } from "next-sanity";
import type { Image } from "sanity";

export type SanityAuthor = {
  name?: string;
  image?: Image;
};

export type SanityCategory = {
  _id: string;
  title?: string;
};

export type SanityPost = {
  _id: string;
  title?: string;
  seoTitle?: string;
  metaDescription?: string;
  slug?: string;
  publishedAt?: string;
  body?: PortableTextBlock[];
  mainImage?: Image;
  author?: SanityAuthor;
  categories?: SanityCategory[];
};
