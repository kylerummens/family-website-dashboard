import { getProfileWithResume } from "@/api/profile";
import Summary from "./summary";
import About from "./about";
import WorkExperience from "./work-experience";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";

export default async function ResumePage() {
  const profile = await getProfileWithResume();

  return (
    <div className="space-y-6 divide-y">
      <div>
        <h1 className="text-2x font-medium">Resume</h1>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Summary summary={profile!.resume.summary} />
      <About about={profile!.resume.about} />
      <WorkExperience workExperience={profile!.resume.config.workExperience} />
      <Education education={profile!.resume.config.education} />
      <Skills
        skills={profile!.resume.config.skills}
        config={profile!.resume.config}
      />
      <Projects projects={profile!.resume.config.projects} />
    </div>
  );
}
