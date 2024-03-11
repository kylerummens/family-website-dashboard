import { updateResume } from "@/api/profile";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";

export default function About({ about }: { about: string }) {
  async function handleSubmit(formData: FormData) {
    "use server";

    await updateResume({
      about: formData.get("about") as string,
    });
  }

  return (
    <Section>
      <form action={handleSubmit}>
        <h3 className="text-lg font-medium mb-3">About</h3>
        <div className="flex flex-col gap-2">
          <Textarea name="about" defaultValue={about} rows={8} />
          <div className="flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </div>
      </form>
    </Section>
  );
}
