import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { client } from "@/sanity/lib/client";
import { getPostMetaDescription } from "@/sanity/lib/postText";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import type { SanityPost } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Web Tasarım ve Dijital Pazarlama Yazıları",
  description:
    "DG Digital'in web tasarım, dijital pazarlama, SEO ve marka konumlandırması odaklı yazılarını keşfedin.",
  alternates: {
    canonical: "/yazilar"
  }
};

function formatPublishedAt(value?: string) {
  if (!value) {
    return "Yayın planında";
  }

  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(value));
}

async function getPosts() {
  try {
    return await client.fetch<SanityPost[]>(POSTS_QUERY, {}, {
      next: { revalidate: 60 }
    });
  } catch {
    return [];
  }
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Web Tasarım ve Dijital Pazarlama Yazıları"
        description="Web tasarım, dijital pazarlama, SEO, kullanıcı deneyimi ve marka konumlandırması üzerine seçili DG Digital yazıları."
      />

      <section className="section-space">
        <div className="shell">
          {posts.length ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="rounded-[30px] border border-white/10 bg-white/[0.035] p-7 shadow-panel backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.05]"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-sky-100/70">
                    <span>{formatPublishedAt(post.publishedAt)}</span>
                    {post.author?.name ? <span>{post.author.name}</span> : null}
                  </div>
                  <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white">
                    {post.title || "İsimsiz yazı"}
                  </h2>
                  {post.categories?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
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
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    {getPostMetaDescription(post) ||
                      "Web tasarım, dijital görünürlük ve dönüşüm odaklı büyüme üzerine profesyonel içgörüler."}
                  </p>
                  <Link href={`/yazilar/${post.slug}`} className="button-secondary mt-7 inline-flex">
                    Yazıyı Oku
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[30px] border border-dashed border-white/15 bg-white/[0.025] p-8 text-slate-200">
              <p className="text-sm uppercase tracking-[0.22em] text-sky-100/70">Blog</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white">
                Bu kategoride şu anda yayınlanmış içerik bulunmuyor.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Yeni yazılar yayınlandıkça bu alanda web tasarım, dijital pazarlama ve büyüme odaklı içerikler yer alacaktır.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
