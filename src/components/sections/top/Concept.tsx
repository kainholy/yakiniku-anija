import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const base = 'p-top-concept';

function Concept({ page }: { page: string }) {
  return (
    <section id="concept" className={page === 'concept' ? base + ' concept' : base}>
      <div className={base + '__container'}>
        <div className={base + '__content-area'}>
          <div className={base + '__title-area'}>
            <Image
              className={base + '__title-mount c-title-mount'}
              src="/title-mount.webp"
              alt=""
              width={200}
              height={50}
            />
            <p className={base + '__title-en c-title-en dark'}>CONCEPT</p>
            <h2>
              <Image
                className={base + '__title c-title-img'}
                src="/top/concept/title.webp"
                alt="最高の神戸牛を一番美味しい食べ方で"
                width={200}
                height={50}
              />
            </h2>
          </div>
          <div className={base + '__text-area'}>
            <p className={base + '__text p-top-concept-text'}>
              足立区で唯一、黒毛和牛にこだわる。
              <br />
              一番おいしい食べ方を常に追求しています。
              <br />
              一口ごとに感じる極上の味わいを体験下さい。
            </p>
          </div>
          {page === 'top' && (
            <div className={base + '__button-area'}>
              <Link href="/concept" className={base + '__button c-button wh'}>
                詳しく見る
              </Link>
            </div>
          )}
        </div>
        <div className={base + '__img-area'}>
          <Image
            className={base + '__img c-img'}
            src="/top/concept/1.webp"
            alt=""
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

export default Concept;
