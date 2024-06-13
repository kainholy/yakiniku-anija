import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const base = 'p-header'

function Header() {

    const [open, setOpen] = useState(false)
    const toggleFunction = () => {
        setOpen(!open)
    }

  return (
    <header id='header' className={base}>
        <div className={base+'__container'}>
            <Link href="/">
                <div className={base+'__logo-area'}>
                    <Image
                        className={base+'__logo c-img'}
                        src="/common/header/logo.png"
                        alt=""
                        width={200}
                        height={50}
                    />
                </div>
            </Link>
            <nav className={base+'__nav pc'}>
                <ul className={base+'__list'}>
                    <li className={base+'__item'}>
                        <Link href="/" className={base+'__link c-header-link bk'}>トップ</Link>
                    </li>
                    <li className={base+'__item'}>
                        <Link href="/concept" className={base+'__link c-header-link bk'}>兄者の思い</Link>
                    </li>
                    <li className={base+'__item'}>
                        <Link href="/menu" className={base+'__link c-header-link bk'}>お品書き</Link>
                    </li>
                    <li className={base+'__item'}>
                        <Link href="/news" className={base+'__link c-header-link bk'}>お知らせ</Link>
                    </li>
                    <li className={base+'__item'}>
                        <Link href="/recruit" className={base+'__link c-header-link bk'}>採用情報</Link>
                    </li>
                </ul>
            </nav>
            <button className={base+'__btn sp'} onClick={toggleFunction} aria-expanded={open}>
                <span className={base+'__btn-line line1'}></span>
                <span className={base+'__btn-line line2'}></span>
            </button>
        </div>
        <div className={base+'__detail pc'}>
            <ul className={base+'__detail__list'}>
                <li className={base+'__detail__item'}>
                    <p className={base+'__detail__text c-header-detail-text bk'}>12時~15時, 17時~23時 火曜日定休</p>
                </li>
                <li className={base+'__detail__item'}>
                    <Link href="https://www.google.com/maps?ll=35.761206,139.82669&z=13&t=m&hl=ja&gl=JP&mapclient=embed&cid=13721843411329241504" target='_blank' className={base+'__detail__map__link'}>
                        <span className={base+'__detail__map'}>
                            <Image
                                className={base+'__map c-img'}
                                src="/common/header/map.png"
                                alt=""
                                width={200}
                                height={50}
                            />
                        </span>
                        <p className={base+'__detail__text c-header-detail-text bk'}>東京都足立区綾瀬2丁目24-11 ホワイトハウス2F</p>
                    </Link>
                </li>
                <li className={base+'__detail__item'}>
                    <Link href="https://www.instagram.com/yakiniku_anija315/" target='_blank' className={base+'__detail__instagram__link'}>
                        <span className={base+'__detail__instagram'}>
                            <Image
                                className={base+'__instagram c-img'}
                                src="/common/header/instagram.png"
                                alt=""
                                width={200}
                                height={50}
                            />
                        </span>
                        <p className={base+'__detail__text c-header-detail-text bk'}>最新情報はこちらから</p>
                    </Link>
                </li>
            </ul>
        </div>
        <div className={base+'__ham sp'} aria-hidden={!open}>
            <nav className={base+'__ham__nav'}>
                <ul className={base+'__ham__list'}>
                    <li className={base+'__ham__item'}>
                        <Link href="/" className={base+'__ham__link c-header-link bk'}>トップ</Link>
                    </li>
                    <li className={base+'__ham__item'}>
                        <Link href="/concept" className={base+'__ham__link c-header-link bk'}>兄者の思い</Link>
                    </li>
                    <li className={base+'__ham__item'}>
                        <Link href="/menu" className={base+'__ham__link c-header-link bk'}>お品書き</Link>
                    </li>
                    <li className={base+'__item'}>
                        <Link href="/news" className={base+'__link c-header-link bk'}>お知らせ</Link>
                    </li>
                    <li className={base+'__ham__item'}>
                        <Link href="/recruit" className={base+'__ham__link c-header-link bk'}>採用情報</Link>
                    </li>
                </ul>
                <div className={base+'__ham__detail'}>
                    <ul className={base+'__ham__detail__list'}>
                        <li className={base+'__ham__detail__item'}>
                            <p className={base+'__detail__text c-header-detail-text bk'}>12時~15時, 17時~23時 火曜日定休</p>
                        </li>
                        <li className={base+'__detail__item'}>
                            <Link href="https://www.google.com/maps?ll=35.761206,139.82669&z=13&t=m&hl=ja&gl=JP&mapclient=embed&cid=13721843411329241504" target='_blank' className={base+'__detail__map__link'}>
                                <span className={base+'__detail__map'}>
                                    <Image
                                        className={base+'__map c-img'}
                                        src="/common/header/map.png"
                                        alt=""
                                        width={200}
                                        height={50}
                                    />
                                </span>
                                <p className={base+'__ham__detail__text c-header-detail-text bk'}>東京都足立区綾瀬2丁目24-11 ホワイトハウス2F</p>
                            </Link>
                        </li>
                        <li className={base+'__detail__item'}>
                            <Link href="https://www.instagram.com/yakiniku_anija315/" target='_blank' className={base+'__detail__instagram__link'}>
                                <span className={base+'__detail__instagram'}>
                                    <Image
                                        className={base+'__instagram c-img'}
                                        src="/common/header/instagram.png"
                                        alt=""
                                        width={200}
                                        height={50}
                                    />
                                </span>
                                <p className={base+'__ham__detail__text c-header-detail-text bk'}>最新情報はこちらから</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
