const env = process.env.ENV || "local";

const masterConfig = {
  local: {
    serverUrl: "http://localhost:5000/api/v1",
  },
  staging: {
    serverUrl: "https://your_api.com/api/v1",
  },
};

//@ts-ignore
export const serverurl = masterConfig[env].serverUrl;
