import axios from "axios";

export const get = async (url, data) => {
  return await axios.get(url, data);
};

export const blogData = async () => {
  return await axios.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pranjaltiwari515",
  );
};
