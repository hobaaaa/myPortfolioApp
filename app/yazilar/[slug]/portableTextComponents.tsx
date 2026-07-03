import Image from "next/image";
import type { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-12 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="article-paragraph text-[1.04rem] leading-8 text-slate-200">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-10 border-l-2 border-accent/50 pl-6 font-display text-xl italic leading-8 text-sky-100/88">
        {children}
      </blockquote>
    )
  },
  list: {
    bullet: ({ children }) => <ul className="article-list article-list-bullet">{children}</ul>,
    number: ({ children }) => <ol className="article-list article-list-number">{children}</ol>
  },
  listItem: {
    bullet: ({ children }) => <li className="article-list-item">{children}</li>,
    number: ({ children }) => <li className="article-list-item">{children}</li>
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#";
      const isExternal = /^https?:\/\//.test(href);

      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="font-medium text-sky-200 underline decoration-sky-300/50 underline-offset-4 transition hover:text-white"
        >
          {children}
        </a>
      );
    }
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(1400).fit("max").auto("format").quality(82).url();
      const alt = typeof value?.alt === "string" ? value.alt : "Blog görseli";

      return (
        <figure className="article-figure">
          <Image
            src={imageUrl}
            alt={alt}
            width={1400}
            height={900}
            className="w-full rounded-[28px] border border-white/10 bg-white/[0.03] object-cover shadow-panel"
            sizes="(min-width: 1280px) 960px, 100vw"
          />
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="article-code-block">
        <code>{typeof value?.code === "string" ? value.code : ""}</code>
      </pre>
    )
  }
};
