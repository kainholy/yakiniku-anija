import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const base = 'p-top-recruit'

function Recruit() {
  return (
    <section id='recruit' className={base}>
        <div className={base+'__container'}>
            <div className={base+'__img-area --first'}>
                <Image
                    className={base+'__img c-img'}
                    src="/top/recruit/1.png"
                    alt=""
                    width={300}
                    height={200}
                />
            </div>
            <div className={base+'__img-area --second'}>
                <Image
                    className={base+'__img c-img'}
                    src="/top/recruit/2.png"
                    alt=""
                    width={300}
                    height={200}
                />
            </div>
            <div className={base+'__img-area --third'}>
                <Image
                    className={base+'__img c-img'}
                    src="/top/recruit/3.png"
                    alt=""
                    width={300}
                    height={200}
                />
            </div>
            <div className={base+'__img-area --fourth'}>
                <Image
                    className={base+'__img c-img'}
                    src="/top/recruit/4.png"
                    alt=""
                    width={300}
                    height={200}
                />
            </div>
            <div className={base+'__img-area --fifth'}>
                <Image
                    className={base+'__img c-img'}
                    src="/top/recruit/5.png"
                    alt=""
                    width={300}
                    height={200}
                />
            </div>

            <div className={base+'__circle'}>
            </div>
            <div className={base+'__content-area'}>
                <div className={base+'__title-area'}>
                    <Image
                        className={base+'__title-mount c-title-mount --center'}
                        src="/title-mount.png"
                        alt=""
                        width={200}
                        height={50}
                    />
                    <p className={base+'__title-en c-title-en gr'}>RECRUIT</p>
                    <h2>
                        <Image
                            className={base+'__title c-recruit-title-img --center'}
                            src="/top/recruit/title.png"
                            alt="働く仲間募集中"
                            width={200}
                            height={50}
                        />
                    </h2>
                </div>
                <div className={base+'__text-area'}>
                    <p className={base+'__text c-top-recruit-text wh'}>
                        焼肉が好き、おしゃれが好き、<br />
                        調理経験を積みたい、接客が好き、<br />
                        お客様をおもてなしするのが好きな人、歓迎。<br />
                        経験は問いません。<br />
                        譲れないこだわりがある、毎日をワクワクさせたい、<br />
                        そんな仲間を募集中です。
                    </p>
                </div>
                <div className={base+'__button-area'}>
                    <Link href='/' className={base+'__button c-button bk --wh'}>
                        採用情報
                    </Link>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Recruit
