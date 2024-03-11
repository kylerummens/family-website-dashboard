import { updateResume } from "@/api/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";

export default function Summary({ summary }: { summary: string }) {
  async function handleSubmit(formData: FormData) {
    "use server";

    await updateResume({
      summary: formData.get("summary") as string,
    });
  }

  return (
    <Section>
      <form action={handleSubmit}>
        <h3 className="text-lg font-medium mb-3">Summary</h3>
        <div className="flex gap-2">
          <Input name="summary" defaultValue={summary} />
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Section>
  );
}
