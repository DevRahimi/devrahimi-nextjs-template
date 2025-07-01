import { vercel } from "@t3-oss/env-core/presets-zod";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    APP_BASE_URL: z.string().url(),
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    NEXT_PUBLIC_APP_BASE_URL: z.string().url(),
    NEXT_PUBLIC_NODE_ENV: z.enum(["development", "test", "production"]),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
  isServer: typeof window === "undefined",
  emptyStringAsUndefined: true,
  extends: [vercel()],
});
