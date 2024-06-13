import React from "react";
import { News } from "../../../../types/news";

type Props = {
  news: News;
};

const NewsDescription = ({ news }: Props) => {
  return (
    <section id="news" className="p-top-news">
      <div>
        <div>
          <h1>{news.title}</h1>
        </div>

        <div>
          <div>
            <img src={news.eye_catch.url} alt="news" />
          </div>

          <div>
            <div dangerouslySetInnerHTML={{ __html: `${news.content}` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDescription;
