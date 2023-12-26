import newsArticles from "./news.json";

const URL =
  "https://newsapi.org/v2/everything?q=tesla&language=en&from=2023-11-26&sortBy=publishedAt&apiKey=2e99e8e5ba7c4df88e8a6b6ddf9d23e2";

export const fetchNews = async () => {
  //   const data = await fetch(URL);
  //   return await data.json();
  return newsArticles;
};
