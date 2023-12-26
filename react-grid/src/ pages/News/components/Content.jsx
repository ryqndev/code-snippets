import clsx from "clsx";
import cn from "./Content.module.css";

export const Content = ({ news, filters }) => {
  const viewType = filters.news;
  console.log(news);
  return (
    <div className={clsx(viewType === "grid" ? cn.grid : cn.list)}>
      {news.map((newsItem, idx) => (
        <NewsArticle key={idx} {...newsItem} />
      ))}
    </div>
  );
};

const NewsArticle = ({}) => {
  return <div></div>;
};
