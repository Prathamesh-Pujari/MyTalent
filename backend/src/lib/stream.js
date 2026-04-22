import streampkg from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";   // named import
import { ENV } from "./env.js";

const { StreamChat } = streampkg;

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("Stream API KEY OR SECRET is missing");
}

// For video calls (Stream Video)
export const streamClient = new StreamClient(apiKey, apiSecret);

// For chat (Stream Chat)
export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upserted successfully:", userData);
  } catch (error) {
    console.error("Error upserting Stream user", error);
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting Stream user", error);
  }
};