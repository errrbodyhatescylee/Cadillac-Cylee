//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/errrbodyhatescylee/teddyBot-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/0y887q.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/gfbkd0.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZ6Z0REdFp4YmR2d2FWanRoR0hnVzhqclkvSVd0cnJ1S2VnWm9INUtFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjJxUGJIV3RINTIrbEszQzR3cE9vVlIvQ293VzJQa1VOd1Y3Rm1sc2N3ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS2JvdWJKdWYxUVBNU2d4TXNKN20zRldGSFJ5eEZ2bjVqc1hBUDhiMFc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUWtZajNIYURwMW9NemhyOE1ienJQUkRZQ1NtdWpJN3RQSEhhZG1nS2xZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BekZNQ1lVR3lCcmVIU2lleFp0SWpzV3J1b0xBcENidFF3SU1rM2hWWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1WRHg0Nk96bnFnMmNUSS9IUFN1eXRNemptMnQ1enZ3OFBuejg4OEViVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUc5dk5ScTBDUVNhektsOFVoOVN0ZTQyRldrc2FXTEhLM25seDlkUVYyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnZ5b1Vub1crTWNJV1FMMHo4QjdsUWxudjBjU3JwQUxLQ2dKK3RoVk5rND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY1aW85cEc4RDhHRzNEam5DT29tRWlxZXNocHdNb1ZubUlYTWRvR0xqRU5KbTFSbmgrNjJsaGVKdnRqMFQvWVZVeWRtVHlnbDFDdnV3YSszWERSNGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJ3WWFidXVCeEpSb2pScGxEbjZidVNUMFhQMmVGTlN1TjRuZnpMWTFUL2JrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDg4MDUzMDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzZGMEVDRjdBM0M2RTA0Njc3QzU4ODVFNjc1NTNBMEIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjQyOTExNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0ODgwNTMwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFNTQ5QjA3Mzc5MkYzNkVDRUI4MTgxREQzMEU5QTBBMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyNDI5MTE1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDQ4ODA1MzA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM3OEIwMDUxMEQyQUE5MDNGOUIyRDE2Q0Q5QjJDOTVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI0MjkxMTl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDg4MDUzMDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTI3NTQ1NDIwMkU1NTMzMUVGRjQ4Q0RDQjdENTZCQjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjQyOTExOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVzFWSkpSOVBTQk8wa3F1b1JKN3dLUSIsInBob25lSWQiOiJlZDdmZDE2Mi1mZjlhLTQ3M2ItYTM3Ni04YzM1NmE2YzNlZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTRJUkYvM2tpbzUyR2JWSjlBR25Fc2s3U0hRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjluY05EanBXSHNIeXVDQmZrSmYyN08wNzNJOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJLODFCMTE4MyIsIm1lIjp7ImlkIjoiMjM0NzA0ODgwNTMwODoxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPajE5dlFCRUsyS2k3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXZEZMd3dydFNVMEhzSE5uT1dSaGc5NDY0RXJKVmJHU1NsVStnanU2amp3PSIsImFjY291bnRTaWduYXR1cmUiOiJTQkkybzcwSCtZS2swNWpCZXhSaWhEcGxVWlVLZGZxVnlOQkQyQlFtNFdoaVE4Z1R4NjYvVDNmT2lGTjZ5RkNDWk03ZVBxNmdCZGdCd0t4UHNFSDhBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSTlsSmdSWmgycDUwV2xRUnZsOFBlbWxZdUpJZEpoZ3ZMclZjdWdmNmduZmNuNDVMcW1CWjRLTWxyUEtjYktMdzhJSWEwUU1OVlJOUWE2bVZTNzVYaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ4ODA1MzA4OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVm5SUzhNSzdVbE5CN0J6Wnpsa1lZUGVPdUJLeVZXeGtrcFZQb0k3dW80OCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjQyOTExNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIZmsifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "teddyBot-V1 ❤️🧸, powered by QUEEN_KYLIE 👸❤️™",
  author: process.env.PACK_AUTHER || "Cadillac Cylee",
  packname: process.env.PACK_NAME || "teddyBot-V1 ❤️🧸",
  botname: process.env.BOT_NAME || "teddyBot-V1",
  ownername: process.env.OWNER_NAME || "Cadillac Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "t e d d y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
