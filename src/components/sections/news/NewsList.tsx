// components/sections/menu/MenuList.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image from 'next/image'
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
                  <Image
                    className={base + '__item__img'}
                    src={item.eye_catch.url}
                    alt={item.title}
                    width={2000}
                    height={1000}
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
