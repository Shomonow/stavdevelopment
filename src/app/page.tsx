import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Grid,
  Tag,
  InlineCode,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import { baseURL, routes } from "@/app/resources";
import { home, about, company, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [],
    },
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Company",
              name: company.companyName,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${company.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              <InlineCode> {home.headline}</InlineCode>
            </Text>
          </RevealFx>
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Heading
              wrap="balance"
              variant="display-strong-l"
              style={{ color: "#FFD700" }}
            >
              {home.title}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.3}
            fillWidth
            horizontal="start"
            paddingBottom="m"
          >
            <Flex flex={3} mobileDirection="column">
              <Grid columns={6} mobileColumns="1" marginBottom="8">
                <Column gap="8" vertical="center" horizontal="center">
                  <Heading style={{ fontSize: "40px" }}>2020</Heading>
                  <Tag key="1" label={"rok založení"} variant="neutral" />
                </Column>
                <Column gap="8" vertical="center" horizontal="center">
                  <Heading style={{ fontSize: "40px" }}>24</Heading>
                  <Tag key="1" label="partnerů" variant="neutral" />
                </Column>
                <Column gap="8" vertical="center" horizontal="center">
                  <Heading style={{ fontSize: "40px" }}>30</Heading>
                  <Tag
                    padding="0"
                    key="1"
                    label="zaměstnanců budu sa starat o vás"
                    variant="neutral"
                  />
                </Column>
              </Grid>
            </Flex>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4} horizontal="start">
            <Button
              id="about"
              data-border="rounded"
              href="/about"
              variant="secondary"
              size="m"
              arrowIcon
            >
              <Flex gap="8" vertical="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={company.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Flex fillWidth mobileDirection="column" wrap gap="24">
          <Heading as="h1" paddingX="32">
            Naše služby
          </Heading>
          <Grid columns={3} gap="32" mobileColumns="1">
            {about.work.services.map((service, index) => (
              <Flex
                gap="8"
                direction="column"
                vertical="center"
                horizontal="center"
                border="brand-weak"
                padding="32"
                radius="m"
                background="page"
                key={index}
              >
                <Heading as="h1">{service?.icon}</Heading>
                <Text align="center" wrap="balance">
                  {service?.serviceName}
                </Text>
              </Flex>
            ))}
          </Grid>
        </Flex>
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Nejnovější z blogu
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="1" />
          </Flex>
        </Flex>
      )}
      <Projects range={[1, 1]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
