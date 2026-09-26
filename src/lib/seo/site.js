import { siteUrl } from "../../data/agency";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  siteUrl ||
  "https://framecipher.info"
).replace(/\/$/, "");

export const SITE_NAME = "Frame Cipher";

export const BASE_URL = SITE_URL;