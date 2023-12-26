import { useState } from "react";
import { useEffect } from "react";
import { fetchNews } from "./controllers/fetchNews";
import cn from "./News.module.css";
import { Filter } from "./components/Filter";
import { Content } from "./components/Content";

export const News = () => {
  const [news, setNews] = useState([]);

  const [filters, setFilters] = useState({ view: "grid" });

  useEffect(() => {
    (async () => {
      setNews(await fetchNews());
    })();
  }, []);

  return (
    <div className={cn.container}>
      <Filter filters={filters} setFilters={setFilters} />
      <Content news={news} filters={filters} />
      <div></div>
    </div>
  );
};
