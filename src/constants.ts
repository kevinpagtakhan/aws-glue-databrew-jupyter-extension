import { subdomain } from "./subdomain.json";

export const GLUE_DATABREW_RENDER = "gluedatabrew:render";
export const CLOUDFRONT_HOST = `https://${subdomain}.cloudfront.net`;
export const CONTENT_PREFIX = CLOUDFRONT_HOST + "/content";
export const PREFIX_URL = CLOUDFRONT_HOST + "/prefixes/main";
export const jsFileName = "main.js";
export const styleFileName = "styles.css";
