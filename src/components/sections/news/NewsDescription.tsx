import React from 'react';
import { News } from '../../../../types/news';
import Link from 'next/link';
import Image from 'next/image';

const base = 'p-news-news-description';

type Props = {
  news: News;
};

const NewsDescription = ({ news }: Props) => {
  return (
    <section id="news" className={base}>
      <div className={base + '__container'}>
        <div className={base + '__title-area'}>
          <p className={base + '__date c-top-news-date bk'}>
            {new Date(news.publishedAt).toLocaleDateString()}
          </p>
          <h1
            className={
              base + '__title c-news-description-title c-top-news-text'
            }
          >
            {news.title}
          </h1>
        </div>

        <div className={base + '__content'}>
          <div className={base + '__img-area'}>
            <Image
              className={base + '__img'}
              src={news.eye_catch.url}
              alt="news"
              width={600}
              height={600}
            />
          </div>

          <div className={base + '__description-area c-top-news-text'}>
            <div dangerouslySetInnerHTML={{ __html: `${news.content}` }}></div>
          </div>
        </div>
        <div className={base + '__button-area'}>
          <Link href="/news" className={base + '__button c-button wh'}>
            一覧に戻る
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsDescription;
