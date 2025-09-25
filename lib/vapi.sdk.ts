import Vapi from "@vapi-ai/web";
import { VapiClient } from '@vapi-ai/server-sdk';

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!);