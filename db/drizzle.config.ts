import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: "../.env.local" });

console.log(process.env.DATABASE_URL);

export default defineConfig({
  schema: "./schema.ts",
  dialect: "postgresql",
  migrations: {
    prefix: "supabase",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
