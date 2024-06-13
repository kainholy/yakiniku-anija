import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const base = 'p-top-menu'

const menuList = [
    {
        name: '神戸牛漢の特選カルビ',
        img: '/top/menu/1.webp',
        price: '2970',
    },
    {
        name: '男の特選ハラミ',
        img: '/top/menu/2.webp',
        price: '2970',
    },
    {
        name: '至極の肉厚赤身',
        img: '/top/menu/3.webp',
        price: '2640',
    },
    {
        name: 'タン3種盛り',
        img: '/top/menu/4.webp',
        price: '5500',
    },
    {
        name: 'ホルモン3種盛り\n（ホルモン、ミノ、レバー）',
        img: '/top/menu/5.webp',
        price: '1430',
    },
    {
        name: '牛レバー',
        img: '/top/menu/6.webp',
        price: '990',
    },
]

function Menu() {
  return (
    <section id='menu' className={base}>
        <div className={base+'__container'}>
            <div className={base+'__content-area'}>
                <div className={base+'__title-area'}>
                    <Image
                        className={base+'__title-mount c-title-mount'}
                        src="/title-mount.webp"
                        alt=""
                        width={200}
                        height={50}
                    />
                    <p className={base+'__title-en c-title-en dark'}>MENU</p>
                    <h2>
                        <Image
                            className={base+'__title c-title-img'}
                            src="/top/menu/title.webp"
                            alt="お品書き"
                            width={200}
                            height={50}
                        />
                    </h2>
                </div>
                
                <ul className={base+'__list'}>
                    {menuList.map((menu, index) => (
                        <li className={base+'__item'} key={index}>
                            <div className={base+'__item__container'}>
                                <div className={base+'__item__img-area'}>
                                    <Image
                                        className={base+'__item__img'}
                                        src={menu.img}
                                        alt=""
                                        width={600}
                                        height={600}
                                    />
                                </div>
                                <p className={base+'__item__name c-top-menu-name'}>{menu.name}</p>
                                <p className={base+'__item__price c-top-menu-price'}>{menu.price}円</p>
                            </div>
                        </li>
                    ))}
                </ul>
                
                <div className={base+'__button-area'}>
                    <Link href='/menu' className={base+'__button c-button wh'}>
                        メニューを見る
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu
