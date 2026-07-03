import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(coalesce(publishedAt, _createdAt) desc){
    _id,
    title,
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
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
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
