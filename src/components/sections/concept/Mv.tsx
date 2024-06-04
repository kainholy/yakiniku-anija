import React from 'react'
import Image from 'next/image'
const base = 'p-concept-mv'

function Mv() {
  return (
    <section id='mv' className={base}>
        <div className={base+'__container'}>
            <h1 className={base+'__title'}>
                <Image
                    className={base+'__title-img c-concept-mv-title'}
                    src='/concept/mv/title.png'
                    alt="兄者の思い"
                    width={200}
                    height={50}
                />
            </h1>
        </div>
    </section>
  )
}

export default Mv
