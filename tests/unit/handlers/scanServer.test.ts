import { InteractionResponseType } from "discord-interactions";
import { responseJson } from "../../../src/typeDefinitions/default.types";
import JSONResponse from "../../../src/utils/JsonResponse";
import { scanServer } from "../../../src/controllers/scanServer";

describe("Test scanServer function", () => {
  it("Should be an instance of JSONResponse", () => {
    const response = scanServer();
    expect(response).toBeInstanceOf(JSONResponse);
  });
  it("Should have type as channelMessageWithSource", async () => {
    const response: responseJson = await scanServer().json();
    expect(response?.type).toBe(
      InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE
    );
  });
  it("Should have content as 'Scanned!'", async () => {
    const response: responseJson = await scanServer().json();
    expect(response.data.content).toBe("Scanned!");
  });
});
