import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const base = 'p-top-message'

function Message({ page }: { page: string}) {
  return (
    <section id='message' className={base}>
        <div className={base+'__container'}>
            <div className={base+'__left-img-area'}>
                <Image
                    className={base+'__left-img c-img'}
                    src="/top/message/1.png"
                    alt=""
                    width={400}
                    height={400}
                />
            </div>
            <div className={base+'__right-img-area'}>
                <Image
                    className={base+'__right-img c-img'}
                    src="/top/message/2.png"
                    alt=""
                    width={400}
                    height={400}
                />
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
                    <p className={base+'__title-en c-title-en dark'}>MESSAGE</p>
                    <h2>
                        <Image
                            className={base+'__title c-title-img --center'}
                            src="/top/message/title.png"
                            alt="極上の味でおもてなし"
                            width={200}
                            height={50}
                        />
                    </h2>
                </div>
                <div className={base+'__text-area'}>
                    <p className={base+'__text p-top-message-text'}>
                        ”足立区の焼肉”として全国に広めていきたい。<br />
                        私たちはこの精神を、<br />
                        料理のクオリティと、
                        生きたサービスでおもてなしします。<br /><br />

                        兄者独自のサービス空間で<br />
                        お客様一人ひとりに、特別な瞬間を創造します。
                    </p>
                </div>
                {page === 'top' &&
                    <div className={base+'__button-area'}>
                        <Link href='/' className={base+'__button c-button wh'}>
                            兄者の思い
                        </Link>
                    </div>
                }
            </div>
        </div>
    </section>
  )
}

export default Message
