// Import axios package
import axios from "axios";

// Initialize terraInstance to interact with the Terra API
const terraInstance = axios.create({
  baseURL: "https://api.tryterra.co/v2",
});

const terraDevId = process.env.TERRA_DEV_ID;
const terraAuthKey = process.env.TERRA_AUTH_KEY;

terraInstance.interceptors.request.use(
  // Called before making request to attach the auth keys
  async (config) => {
    if (terraDevId) config.headers["dev-id"] = terraDevId;
    if (terraAuthKey) config.headers["x-api-key"] = terraAuthKey;
    config.headers["content-type"] = "application/json";
    return config;
  },
  // Called if there is an error
  (err) => {
    return Promise.reject(err);
  }
);

module.exports = {

};