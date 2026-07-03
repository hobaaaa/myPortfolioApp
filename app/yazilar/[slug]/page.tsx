import Image from "next/image";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { getPostMetaDescription, getPostSeoTitle } from "@/sanity/lib/postText";
import { POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";
import { portableTextComponents } from "./portableTextComponents";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatPublishedAt(value?: string) {
  if (!value) {
    return "YayÄ±n planÄ±nda";
  }

  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

async function getPost(slug: string) {
  try {
    return await client.fetch<SanityPost | null>(
      POST_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } },
    );
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "YazÄ± bulunamadÄ±",
    };
  }

  const seoTitle = getPostSeoTitle(post);
  const metaDescription = getPostMetaDescription(post);
  const heroImageUrl = post.mainImage
    ? urlFor(post.mainImage)
        .width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : undefined;

  return {
    title: seoTitle,
    description: metaDescription || undefined,
    openGraph: {
      title: seoTitle,
      description: metaDescription || undefined,
      type: "article",
      url: `/yazilar/${slug}`,
      images: heroImageUrl
        ? [{ url: heroImageUrl, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: metaDescription || undefined,
      images: heroImageUrl ? [heroImageUrl] : undefined,
    },
    alternates: {
      canonical: `/yazilar/${slug}`,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const heroImageUrl = post.mainImage
    ? urlFor(post.mainImage)
        .width(1200)
        .height(675)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <>
      <section className="section-space">
        <div className="shell">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-sky-100/70">
              <span>{formatPublishedAt(post.publishedAt)}</span>
              {post.author?.name ? <span>{post.author.name}</span> : null}
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              {post.title || "Ä°simsiz yazÄ±"}
            </h1>

            {post.categories?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            ) : null}

            {heroImageUrl ? (
              <div className="relative mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
                <Image
                  src={heroImageUrl}
                  alt={post.title || "Blog yazÄ±sÄ± gÃ¶rseli"}
                  width={1200}
                  height={675}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1280px) 960px, 100vw"
                />
              </div>
            ) : null}

            <article className="article-rich mt-10 max-w-none">
              {post.body?.length ? (
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              ) : (
                <p className="article-paragraph text-[1.04rem] leading-8 text-slate-200">
                  Bu yazÄ±ya ait iÃ§erik kÄ±sa sÃ¼re iÃ§inde yayÄ±na alÄ±nacaktÄ±r.
                </p>
              )}
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

