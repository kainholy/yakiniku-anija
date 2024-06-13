import React from 'react'
import Image from 'next/image'
const base = 'p-recruit-mv'

function Mv() {
  return (
    <section id='mv' className={base}>
        <div className={base+'__container'}>
            <h1 className={base+'__title'}>
                <Image
                    className={base+'__title-mount c-title-mount'}
                    src="/title-mount.png"
                    alt=""
                    width={200}
                    height={50}
                />
                <Image
                    className={base+'__title-img'}
                    src='/recruit/mv/title.png'
                    alt="採用情報"
                    width={200}
                    height={50}
                />
            </h1>
        </div>
    </section>
  )
}

export default Mv
