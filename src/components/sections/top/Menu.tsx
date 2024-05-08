import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const base = 'p-top-menu'

const menuList = [
    {
        name: 'タン',
        img: '/top/menu/1.png',
        price: '1000',
    },
    {
        name: 'カルビ',
        img: '/top/menu/2.png',
        price: '1000',
    },
    {
        name: 'ハラミ',
        img: '/top/menu/3.png',
        price: '1000',
    },
    {
        name: 'ホルモン',
        img: '/top/menu/4.png',
        price: '1000',
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
                        src="/title-mount.png"
                        alt=""
                        width={200}
                        height={50}
                    />
                    <p className={base+'__title-en c-title-en dark'}>MENU</p>
                    <h2>
                        <Image
                            className={base+'__title c-title-img'}
                            src="/top/menu/title.png"
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
                                        className={base+'__item__img c-img'}
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
                    <Link href='/' className={base+'__button c-button wh'}>
                        メニューを見る
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu
