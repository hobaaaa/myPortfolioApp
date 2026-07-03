import type { PortableTextBlock } from "next-sanity";
import type { SanityPost } from "@/sanity/lib/types";

type PortableChild = {
  _type?: string;
  text?: string;
};

type PortableBlockWithChildren = PortableTextBlock & {
  children?: PortableChild[];
};

type PortableCodeBlock = {
  _type?: string;
  code?: string;
};

function collapseWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function extractPortableTextText(blocks?: PortableTextBlock[]) {
  if (!blocks?.length) {
    return "";
  }

  return collapseWhitespace(
    blocks
      .map((block) => {
        const typedBlock = block as PortableBlockWithChildren & PortableCodeBlock;

        if (typedBlock._type === "code") {
          return typedBlock.code || "";
        }

        if (Array.isArray(typedBlock.children)) {
          return typedBlock.children
            .filter((child) => child?._type === "span" && typeof child.text === "string")
            .map((child) => child.text)
            .join(" ");
        }

        return "";
      })
      .filter(Boolean)
      .join(" ")
  );
}

export function getPostSeoTitle(post?: Pick<SanityPost, "seoTitle" | "title"> | null) {
  return post?.seoTitle?.trim() || post?.title?.trim() || "Yazı";
}

export function getPostMetaDescription(
  post?: Pick<SanityPost, "metaDescription" | "body"> | null,
  maxLength = 160
) {
  const explicitDescription = post?.metaDescription?.trim();

  if (explicitDescription) {
    return explicitDescription;
  }

  const fallbackText = extractPortableTextText(post?.body);

  if (!fallbackText) {
    return "";
  }

  if (fallbackText.length <= maxLength) {
    return fallbackText;
  }

  return `${fallbackText.slice(0, maxLength).trimEnd()}...`;
}
