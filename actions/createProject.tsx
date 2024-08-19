"use server";

import { db } from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function createProject(formData: FormData) {
  const { userId } = auth();

  const project = {
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    url: formData.get("url") as string,
    userId,
  };
  console.log(`Creating new project with data: ${JSON.stringify(project)}`);

  console.log(`Current user: ${JSON.stringify(userId)}`);

  const [newProject] = await db
    .insert(projects)
    .values(project)
    .returning({ insertedId: projects.id });

  redirect(`/projects/${newProject.insertedId}/instructions`);
}
