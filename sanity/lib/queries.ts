import { defineQuery } from "next-sanity";

const PUBLISHED_POST_FILTER =
  '_type == "post" && !(_id in path("drafts.**")) && defined(slug.current) && defined(publishedAt) && publishedAt <= now()';

export const POSTS_QUERY = defineQuery(`
  *[${PUBLISHED_POST_FILTER}]
  | order(publishedAt desc){
    _id,
    title,
    seoTitle,
    metaDescription,
    "slug": slug.current,
    publishedAt,
    body,
    mainImage,
    "author": author->{
      name,
      image
    },
    "categories": categories[]->{
      _id,
      title
    }
  }
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[${PUBLISHED_POST_FILTER} && slug.current == $slug][0]{
    _id,
    title,
    seoTitle,
    metaDescription,
    "slug": slug.current,
    publishedAt,
    body,
    mainImage,
    "author": author->{
      name,
      image
    },
    "categories": categories[]->{
      _id,
      title
    }
  }
`);
