import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import {
  AvatarGroup,
  Button,
  Column,
  Heading,
  Row,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { company } from "@/app/resources/content";
import ScrollToHash from "@/components/ScrollToHash";

interface BlogParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params: { slug } }: BlogParams) {
  let post = getPosts(["src", "app", "blog", "posts"]).find(
    (post) => post.slug === slug
  );

  if (!post) {
    return;
  }

  let { title, summary: description, images, image, team } = post.metadata;
  let ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://${baseURL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: BlogParams) {
  let post = getPosts(["src", "app", "blog", "posts"]).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((company) => ({
      src: company.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="xs" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: company.companyName,
            },
          }),
        }}
      />
      <Button
        href="/blog"
        weight="default"
        variant="tertiary"
        size="s"
        prefixIcon="chevronLeft"
      >
        Posts
      </Button>
      <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      <Row gap="12" vertical="center">
        {avatars.length > 0 && <AvatarGroup size="s" avatars={avatars} />}
      </Row>
      <Column as="article" fillWidth>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
