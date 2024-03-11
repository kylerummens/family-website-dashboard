import { Section } from "@/components/ui/section";

export default function Projects({ projects }: { projects: string }) {
  return (
    <Section>
      <h3 className="text-lg font-medium mb-3">Project</h3>
      {JSON.stringify(projects, null, 2)}
    </Section>
  );
}
