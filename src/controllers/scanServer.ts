import { discordTextResponse } from "../utils/discordResponse";
import JSONResponse from "../utils/JsonResponse";

export function scanServer(): JSONResponse {
  return discordTextResponse(`Scanned!`);
}
