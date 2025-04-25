import React from 'react';
import Image from 'next/image';
const base = 'p-subpage-mv';

type SubPageMvProps = {
  pageName: string,
  pageTitle: string,
};

function SubPageMv({ pageName, pageTitle }: SubPageMvProps) {
  return (
    <section id="mv" className={base}>
      <div className={base + '__container'}>
        <h1 className={base + '__title'}>
            <Image
              className={base + '__title-mount c-title-mount'}
              src="/title-mount.webp"
              alt=""
              width={400}
              height={200}
            />
            <Image
              className={base + '__title-img c-menu-mv-title'}
              src={`/${pageName}/mv/title.webp`}
              alt={pageTitle}
              width={800}
              height={400}
            />
        </h1>
      </div>
    </section>
  );
}

export default SubPageMv;
