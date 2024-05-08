import React from 'react'
import Image from 'next/image'
const base = 'p-top-news'

function News() {
  return (
    <section id='news' className={base}>
      <div className={base+'__container'}>
        <div className={base+'__title-area'}>
            <Image
                className={base+'__title-mount c-title-mount'}
                src="/title-mount.png"
                alt=""
                width={200}
                height={50}
            />
            <p className={base+'__title-en c-title-en gr'}>NEWS</p>
            <h2>
                <Image
                    className={base+'__title c-title-img'}
                    src="/top/news/title.png"
                    alt="お知らせ"
                    width={200}
                    height={50}
                />
            </h2>
        </div>
        <ul className={base+'__list'}>
            <li className={base+'__item'}>
                <p className={base+'__date c-top-news-date gr'}>2024.03.15</p>
                <p className={base+'__text c-top-news-text wh'}>グランドオープンしました</p>
            </li>
            <li className={base+'__item'}>
                <p className={base+'__date c-top-news-date gr'}>2024.03.15</p>
                <p className={base+'__text c-top-news-text wh'}>グランドオープンしました</p>
            </li>
            <li className={base+'__item'}>
                <p className={base+'__date c-top-news-date gr'}>2024.03.15</p>
                <p className={base+'__text c-top-news-text wh'}>グランドオープンしました</p>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default News
