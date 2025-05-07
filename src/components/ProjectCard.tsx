"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  Line,
  Row,
  SmartImage,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images?: string[];
  imagesBefore?: string[];
  imagesAfter?: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  range: boolean | any;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  images = [],
  imagesBefore = [],
  imagesAfter = [],
  title,
  description,
  range = false,
}) => {
  return (
    <Row fillWidth gap="20">
      <Column fillWidth>
        <Flex flex={5} direction="column" gap="8">
          {title && (
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          )}
          <Line />
          {description && (
            <Text wrap="balance" variant="label-default-s">
              {description}
            </Text>
          )}
        </Flex>
        {!range && imagesBefore.length > 0 && (
          <Flex paddingTop="m" gap="24">
            <Flex flex={3} direction="column" paddingTop="m" gap="12">
              <Heading as="h3">Do</Heading>
              <Flex gap="12" wrap>
                {imagesBefore.map((image, index) => (
                  <Flex
                    key={index}
                    border="neutral-medium"
                    radius="m"
                    minWidth={12}
                    height={9}
                    background="neutral-weak"
                  >
                    <SmartImage
                      objectFit="contain"
                      enlarge
                      radius="m"
                      alt={image}
                      src={image}
                      sizes="20"
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex flex={3} direction="column" paddingTop="m" gap="12">
              <Heading as="h3">Po</Heading>
              <Flex gap="12" wrap>
                {imagesAfter.map((image, index) => (
                  <Flex
                    key={index}
                    border="neutral-medium"
                    radius="m"
                    minWidth={12}
                    height={9}
                    background="neutral-weak"
                  >
                    <SmartImage
                      objectFit="contain"
                      enlarge
                      radius="m"
                      alt={image}
                      src={image}
                      sizes="20"
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Flex>
        )}
        {range && imagesAfter.length > 0 && (
          <Carousel
            sizes="(max-width: 960px) 100vw, 960px"
            images={imagesAfter.map((image, index) => ({
              src: image,
              alt: title,
            }))}
          />
        )}
      </Column>
    </Row>
  );
};
