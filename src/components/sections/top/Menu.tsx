import React from 'react';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menulist } from '../../../../types/menu';

const base = 'p-top-menu';
interface MenuListProps {
  menulist: Menulist[];
}

const Menu: FC<MenuListProps> = ({ menulist }) => {
  return (
    <section id="menu" className={base}>
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
            <p className={base + '__title-en c-title-en dark'}>MENU</p>
            <h2>
              <Image
                className={base + '__title c-title-img'}
                src="/top/menu/title.webp"
                alt="お品書き"
                width={200}
                height={50}
              />
            </h2>
          </div>

          {menulist.map((menu) => (
            <div key={menu.id}>
              {menu.menu && (
                <ul className={base + '__list'}>
                  {menu.menu.slice(0, 6).map((item, index) => (
                    <li className={base + '__item'} key={index}>
                      {item.image && (
                        <div className={base + '__item__img-area'}>
                          <Image
                            className={base + '__item__img'}
                            src={item.image.url}
                            alt={item.title}
                            width={2000}
                            height={1000}
                          />
                        </div>
                      )}
                      <p className={base + '__item__name c-top-menu-name'}>
                        {item.title}
                      </p>
                      <p className={base + '__item__price c-top-menu-price'}>
                        {item.price.toLocaleString()}円
                      </p>
                      <p className={base + '__item__price c-top-menu-price'}>
                        （税込{Math.round(item.price * 1.1).toLocaleString()}円）
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className={base + '__button-area'}>
            <Link href="/menu" className={base + '__button c-button wh'}>
              メニューを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
