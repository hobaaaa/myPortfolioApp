import Image from "next/image";
import type { Metadata } from "next";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatPublishedAt(value?: string) {
  if (!value) {
    return "Taslak yayın";
  }

  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(value));
}

async function getPost(slug: string) {
  try {
    return await client.fetch<SanityPost | null>(
      POST_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 60 } }
    );
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Yazı bulunamadı"
    };
  }

  return {
    title: post.title || "Yazı",
    alternates: {
      canonical: `/yazilar/${slug}`
    }
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const heroImageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1600).height(900).fit("crop").url()
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
              {post.title || "İsimsiz yazı"}
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
                  alt={post.title || "Sanity yazısı görseli"}
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1280px) 960px, 100vw"
                />
              </div>
            ) : null}

            <article className="prose prose-invert mt-10 max-w-none prose-headings:font-display prose-headings:text-white prose-p:text-slate-200 prose-a:text-sky-200 prose-strong:text-white">
              {post.body?.length ? (
                <PortableText
                  value={post.body}
                  components={{
                    marks: {
                      link: ({ children, value }) => (
                        <a
                          href={value?.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {children}
                        </a>
                      )
                    },
                    types: {
                      image: ({ value }) => {
                        const imageUrl = urlFor(value)
                          .width(1400)
                          .fit("max")
                          .auto("format")
                          .url();

                        return (
                          <Image
                            src={imageUrl}
                            alt={value.alt || post.title || "Yazı görseli"}
                            width={1400}
                            height={900}
                            className="rounded-[24px]"
                            sizes="(min-width: 1280px) 960px, 100vw"
                          />
                        );
                      }
                    }
                  }}
                />
              ) : (
                <p>Bu yazıda henüz gövde içeriği bulunmuyor.</p>
              )}
            </article>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
