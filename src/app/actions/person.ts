"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function addPerson(formData: FormData) {
  try {
    const name = (formData.get("personName") as string) || "";
    if (name === "") {
      throw new Error("name is empty");
    }
    await sql`INSERT INTO Person (NAME) VALUES (${name})`;
    revalidatePath("/");
  } catch (error) {
    return { error, status: 500 };
  }
}

export async function deletePerson(name: string) {
  try {
    if (name === "") {
      throw new Error("name is empty");
    }
    await sql`DELETE FROM Person WHERE NAME = ${name}`;
    console.log("DELETE SUCCESS");
    revalidatePath("/");
  } catch (error) {
    return { error, status: 500 };
  }
}
