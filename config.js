const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348143319231";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_36_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICA1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkyLFxuICAgICAgICA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICA5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OCxcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDQzLFxuICAgICAgICA2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODhRVkZ2SXlybkpyUUdDSHg4SllRUXVOODZBTkZwRTlmeWp5MWhHL29NQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQzMzE5MjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MjE2RDBFQzAxRTZDNzdBNzg0RTM4NzY4REFGN0ExNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQxMjkzOTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUEcyRmZPYlBTbGFod2xqdE51VEFqQVwiLFxuICBcInBob25lSWRcIjogXCI3OGIyYzZhNS1hMDVjLTQyODUtYjI1NC02ZDljNGFmMDE3MmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICA3OCxcbiAgICAgIDEzMyxcbiAgICAgIDI0OCxcbiAgICAgIDIyNSxcbiAgICAgIDE1NyxcbiAgICAgIDE5MyxcbiAgICAgIDk3LFxuICAgICAgMTMzLFxuICAgICAgOTcsXG4gICAgICAxMyxcbiAgICAgIDEzOSxcbiAgICAgIDMxLFxuICAgICAgMTI0LFxuICAgICAgMjI5LFxuICAgICAgMjI5LFxuICAgICAgMTEyLFxuICAgICAgMjM4LFxuICAgICAgNSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgODAsXG4gICAgICA2MyxcbiAgICAgIDE4NCxcbiAgICAgIDEzNCxcbiAgICAgIDksXG4gICAgICA5NCxcbiAgICAgIDU2LFxuICAgICAgMTUwLFxuICAgICAgMTE0LFxuICAgICAgMTczLFxuICAgICAgNyxcbiAgICAgIDE1NyxcbiAgICAgIDAsXG4gICAgICA4NixcbiAgICAgIDEzMCxcbiAgICAgIDM3LFxuICAgICAgMjEsXG4gICAgICAyNTAsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbWZ3TkVIRU9mdDhyb0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFmS28xaHRUcGZGR0lKWDl6dlp1aHcxc2tnbzRCMmVYend0NVN2ZUJQanM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT0dRSWQ2dVdMZWd3Z1lSNmdFQ3VlRG4yVEFzQ3NZaUo5WnpENXZpMS9ncVFNSXJzMCttNExrSEVMQ1h1WHIrR09oK29hRzV6TUg0cXdsd2U1VzV0QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM0RVL0YvdCtiNWdXWWtaWUVvWVdQdG5YS29IVzZockwwRTRtbE5RYWZvQ2xOdS9Pa3dGRC9xREFLNlJIS3Z3WWNXdEhnMy9sQldCeHFqMk00YkdHakE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQzMzE5MjMxOjg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU0FNTVlcIixcbiAgICBcImxpZFwiOiBcIjI3Mzc0ODQxNDQ4NDY4OTo4NEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDMzMTkyMzE6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxMjkzODgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLckNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtxX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVNE0zK3FzaGxQTEVuVy9UeXhHVUlSK0RyanI1ZVFkM1N3YThUc1A3Qit3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDk5NzAwNzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDAzNzY2NzgxN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtyQS5qc29uIjogIntcImtleURhdGFcIjpcIm8rTVo0eVRUeXRPVnNHbGM5aWlYTjhMVUxsWUdaSWRTTlJ4R0c0Y29XS0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0OTk3MDA3MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MDM4MTM3MDkzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3JCLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWndyMFcrUk84a2xyTGtiZisyRDhqQ1JsK0x3TXNOVlVkY1FEaERSVkIzcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDQ5OTcwMDczLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLckMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXb2xOUnNjcGhFM3gzL0k3Vjh1SVJIR0tUMnp0aG9QcG54TlZrcVVHbzFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDk5NzAwNzMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtyRC5qc29uIjogIntcImtleURhdGFcIjpcIk1uQzRvSUZLWVQyRmVmOThDaE94NDU0TXBYVGttazFTbU5Ham1JRHFZNmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0OTk3MDA3MyxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MTI5MzY4NzEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "SAMMY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
