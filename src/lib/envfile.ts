import {z} from "zod";

const menv = z.object({
 VITE_IPIFY_API_KEY: z.string(),
});

const env = menv.parse(import.meta.env);
export const IPIFY_API_KEY = env.VITE_IPIFY_API_KEY;
