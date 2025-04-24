// components/sections/menu/MenuList.tsx
import React from 'react';
import Link from 'next/link';
import { News } from '../../../../types/news';
const base = 'p-news-news-list';

type Props = {
  news: News[];
};

export const NewsList = (props: Props) => {
  const { news } = props;

  return (
    <section id="news" className={base}>
      <div className={base + '__container'}>
        <ul className={base + '__list'}>
          {news.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id}>
              <li className={base + '__item'}>
                <div className={base + '__item__img-area'}>
                  <img
                    className={base + '__item__img'}
                    src={item.eye_catch.url}
                    alt={item.title}
                  />
                </div>
                <p className={base + '__date c-top-news-date bk'}>
                  {new Date(item.publishedAt).toLocaleDateString()}
                </p>
                <p className={base + '__text c-top-news-text bk'}>
                  {item.title}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NewsList;
