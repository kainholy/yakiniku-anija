import React from 'react'
import Image from 'next/image'
const base = 'p-menu-mv'

function Mv() {
  return (
    <section id='mv' className={base}>
        <div className={base+'__container'}>
            <h1 className={base+'__title'}>
                <Image
                    className={base+'__title-mount c-title-mount'}
                    src="/title-mount.webp"
                    alt=""
                    width={200}
                    height={50}
                />
                <Image
                    className={base+'__title-img c-menu-mv-title'}
                    src='/menu/mv/title.webp'
                    alt="お品書き"
                    width={200}
                    height={50}
                />
            </h1>
        </div>
    </section>
  )
}

export default Mv
