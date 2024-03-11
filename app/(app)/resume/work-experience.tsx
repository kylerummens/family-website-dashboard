import { Section } from "@/components/ui/section";

export default function WorkExperience({
  workExperience,
}: {
  workExperience: string;
}) {
  return (
    <Section>
      <h3 className="text-lg font-medium mb-3">Work Experience</h3>
      {JSON.stringify(workExperience, null, 2)}
    </Section>
  );
}
