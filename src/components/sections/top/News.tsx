import React from "react";
import Image from "next/image";
const base = "p-top-news";
import type { News } from "../../../../types/news";

interface NewsProps {
  news: News[];
}

function News({ news }: NewsProps) {
  return (
    <section id="news" className={base}>
      <div className={base + "__container"}>
        <div className={base + "__title-area"}>
          <Image
            className={base + "__title-mount c-title-mount"}
            src="/title-mount.webp"
            alt=""
            width={200}
            height={50}
          />
          <p className={base + "__title-en c-title-en gr"}>NEWS</p>
          <h2>
            <Image
              className={base + "__title c-title-img"}
              src="/top/news/title.webp"
              alt="お知らせ"
              width={200}
              height={50}
            />
          </h2>
        </div>
        <ul className={base + "__list"}>
          {news.slice(0, 3).map((item, index) => (
            <li key={index} className={base + "__item"}>
              <p className={base + "__date c-top-news-date gr"}>
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>
              <p className={base + "__text c-top-news-text wh"}>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default News;
