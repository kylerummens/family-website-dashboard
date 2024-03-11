"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Minus, MinusCircle, Plus } from "lucide-react";
import { useState } from "react";
import { saveSkills } from "./actions/save-skills";

export default function Skills({
  skills: initSkills,
  config,
}: {
  skills: string[];
  config: any;
}) {
  const [skills, setSkills] = useState(initSkills);

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const removeSkill = (index: number) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleUpdateSkill = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleSubmit = saveSkills.bind(null, skills, config);

  return (
    <Section>
      <form action={handleSubmit}>
        <h3 className="text-lg font-medium mb-3">Skills</h3>
        <div className="flex justify-end">
          <Button type="button" variant="outline" onClick={addSkill}>
            <Plus size={16} />
            <span>Add</span>
          </Button>
        </div>
        <div className="flex flex-col gap-2 py-2">
          {skills.map((skill, index) => (
            <div key="index" className="flex items-center gap-2">
              <Input
                type="text"
                value={skill}
                onChange={(e) => handleUpdateSkill(e, index)}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => removeSkill(index)}
              >
                <MinusCircle size={16} />
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Section>
  );
}
