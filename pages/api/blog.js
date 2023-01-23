import { get } from "../../services/api";

export const getBlogData = async () => {
  const res = await get(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pranjaltiwari515",
  );
  console.log("----", res.data);
  return res.data;
};
