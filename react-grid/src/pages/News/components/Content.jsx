/* eslint-disable react/prop-types */

import clsx from "clsx";
import cn from "./Content.module.css";

export const Content = ({ news, filters }) => {
  const viewType = filters.view;

  return (
    <div className={clsx(cn.container)}>
      <h1>Articles</h1>
      <div className={clsx(viewType === "grid" ? cn.grid : cn.list)}>
        {news.map((newsItem, idx) => (
          <NewsArticle key={idx} {...newsItem} />
        ))}
      </div>
    </div>
  );
};

const NewsArticle = ({ author, description }) => {
  if (!author || !description) return null;
  return (
    <div className={cn.article}>
      <h2>{author}</h2>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};
