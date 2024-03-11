import { Section } from "@/components/ui/section";

export default function Education({ education }: { education: string }) {
  return (
    <Section>
      <h3 className="text-lg font-medium mb-3">Education</h3>
      {JSON.stringify(education, null, 2)}
    </Section>
  );
}
