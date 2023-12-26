const URL =
  "https://newsapi.org/v2/everything?q=Apple&from=2023-12-25&to=2023-12-25&sortBy=popularity&apiKey=7e06f918cc4849c59e98cbb247e0bda6";

export const fetchNews = async () => {
  const data = await fetch(URL);
  return await data.json();
};
