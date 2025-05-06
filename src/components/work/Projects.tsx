import { getPosts } from "@/app/utils/utils";
import { Column, Row } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const displayedProjects = range
    ? allProjects.slice(range[0] - 1, range[1] ?? allProjects.length)
    : allProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <Row fillWidth>
          <ProjectCard
            range={range}
            priority={index < 2}
            key={post.slug}
            href={`work/${post.slug}`}
            imagesBefore={post.metadata.imagesBefore}
            imagesAfter={post.metadata.imagesAfter}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={
              post.metadata.team?.map((member) => ({ src: member.avatar })) ||
              []
            }
            link={post.metadata.link || ""}
          />
        </Row>
      ))}
    </Column>
  );
}
