const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(text, fault = 'true') {
  return String(text).toLowerCase() === String(fault).toLowerCase();
}

module.exports = {
  // SESSION & OWNER
  SESSION_ID: process.env.SESSION_ID || "ANTAGONISTE~MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5LbndvTm5ZMGhzOEhQalFTNGlvRkYwWWdNSnY2Ty9rVmtmV0dRcXdWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmhYcFozSTFhNjM0QldEemtjM0s0Wms0aDVEVkQ2Yk9od0ppKzczVWFodz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTEFNa1ZSOHFlMjM1V1JGMzFJRXdzekNncjZMcGNFVHBJWC92RWR5UmxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SHlFZ0hxVVpPQlhJUmlQSjBkckI2UFdGR3hHdVorT3hGRWZ4UENXVFNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIQlExOVl2QkdMOEZoYmVFQ1JhcHhFdVJWZXBhSldIYyswODE0TnBBR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU3UGpGYkk4ZGgyZ3F4Q0VZUFlULzMyUS9WU3N6SDhqRkhXYzVoRzE1Z2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lYdWtjckIvY1g2LzhYai9VQkt6ejVOMmpoV0JQK3hxMXlaczRQam5ucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYndTa21qZzJVRUJpKzhXVmsvc09oRXNzNmNyTStXdS9IeE1ERWZlMVNFOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1EM2VTOGtla2h3Ri9vM2lDVmRrYnlmVDlkdE1jUjBDUDJvZFZITDkrWVNnSW9WM1RGYjNqMGRhRG53czZlcGxZZU9kb3pBSWNMalFLOGo1VnRFWGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiJBQ0JPbGV3TWNKQzRNckxiaWh4Tm16VCtUL3FOOVlRd2JjTXltNVovWnlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQyMzY0Njc3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJBMzZGQjhGQjA3QTNCMDgzRDE2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkwMTk0MTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlhFSDc3MjNTIiwibWUiOnsiaWQiOiI1MDk0MjM2NDY3Nzo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkIHwnZCT8J2QgyDwnZCG8J2QjvCdkIMg8J2Qg/CdkIDwnZCW8J2QhPCdkI3wnZCSIiwibGlkIjoiMzk1NjU5MjY2NDE5MTA6OEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09haDk5Y0VFSldENHNZR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRpSDVZMGNxWUpjeXBiTVBwU3BYNFZKTU9hY1FjcDRqOHFxN1crY2NObjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdnaVVOMUdEditsbnJxZWJpV3Z6QWNiSG8waU04TTF4bjhuWHBTWDFsOW1IeGhJaEZnVHUzelltRjBFUjY1alhHUmh4bjJQZ1FPc3JCNVNFS2RBckJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRSnBKUWtxWTFsbFArSGh5dThmMHA2ejY0VzhWdkdBNHNuQXY4VWVWdFdkUkV2eHYxSFRGeVhBWkg2ZmhHSW1CbEtVbEN0dG45eDJBVW00YTZpNWJqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQyMzY0Njc3OjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTRoK1dOSEttQ1hNcVd6RDZVcVYrRlNURG1uRUhLZUkvS3F1MXZuSERaLyJ9fV0sInBsYXRmb3JtIjoic21iaSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5MDE5NDE2LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5sUiJ9",
  OWNER_NUMBER: (process.env.OWNER_NUMBER || "13058962443") + "@s.whatsapp.net",
  OWNER_NAME: process.env.OWNER_NAME || "DAWENS BOY",
  DEV: (process.env.DEV || "50942241547") + "@s.whatsapp.net",

  // BOT INFO
  BOT_NAME: process.env.BOT_NAME || "MINI-JESUS-CRASH",
  STICKER_NAME: process.env.STICKER_NAME || "MINI-JESUS-CRASH",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ by dawens boy*",
  PREFIX: process.env.PREFIX || ".",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/x16nfd.png",

  // WELCOME / GOODBYE / ADMIN
  WELCOME: toBool(process.env.WELCOME, "true"),
  GOODBYE: toBool(process.env.GOODBYE, "true"),
  ADMIN_EVENTS: toBool(process.env.ADMIN_EVENTS, "true"),      // Logs normal promote/demote
  SECURITY_ALERT: toBool(process.env.SECURITY_ALERT, "true"),  // Kick unauthorized promotes/demotes

  // STATUS
  AUTO_STATUS_SEEN: toBool(process.env.AUTO_STATUS_SEEN, "true"),
  AUTO_STATUS_REPLY: toBool(process.env.AUTO_STATUS_REPLY, "true"),
  AUTO_STATUS_REACT: toBool(process.env.AUTO_STATUS_REACT, "true"),
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MINI-JESUS-CRASH*",

  // AUTO FEATURES
  AUTO_REACT: toBool(process.env.AUTO_REACT, "false"),
  CUSTOM_REACT: toBool(process.env.CUSTOM_REACT, "false"),
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  AUTO_VOICE: toBool(process.env.AUTO_VOICE, "false"),
  AUTO_STICKER: toBool(process.env.AUTO_STICKER, "true"),
  AUTO_REPLY: toBool(process.env.AUTO_REPLY, "true"),
  AUTO_TYPING: toBool(process.env.AUTO_TYPING, "false"),
  AUTO_RECORDING: toBool(process.env.AUTO_RECORDING, "true"),
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE, "false"),

  // ANTI SYSTEM
  ANTI_LINK: toBool(process.env.ANTI_LINK, "true"),
  ANTI_LINK_KICK: toBool(process.env.ANTI_LINK_KICK, "true"),
  DELETE_LINKS: toBool(process.env.DELETE_LINKS, "true"),
  ANTI_BAD: toBool(process.env.ANTI_BAD, "true"),
  ANTI_VV: toBool(process.env.ANTI_VV, "true"),
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same",
  GHOST_MODE: toBool(process.env.GHOST_MODE, "true"),
  ANTI_CALL: toBool(process.env.ANTI_CALL, "true"),
  

  // ALIVE
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x16nfd.png",
  ALIVE_MSG: process.env.ALIVE_MSG || "> Zinda Hun Yar *MINI-JESUS-CRASH*⚡",

  // OTHER
  MENTION_REPLY: toBool(process.env.MENTION_REPLY, "true"),
  MODE: process.env.MODE || "public",
  PUBLIC_MODE: toBool(process.env.PUBLIC_MODE, "true"),
  READ_MESSAGE: toBool(process.env.READ_MESSAGE, "false"),
  READ_CMD: toBool(process.env.READ_CMD, "false"),
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

  // ADMIN ACCESS
  SUDO: process.env.SUDO || "989910713754,13058962443",

  //dawens boy
  TWILIO_SID: process.env.TWILIO_SID || "",
  TWILIO_TOKEN: process.env.TWILIO_TOKEN || "",
  TWILIO_NUMBER: process.env.TWILIO_NUMBER || "",
};
