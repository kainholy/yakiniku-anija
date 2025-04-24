// components/sections/menu/MenuList.tsx
import { FC } from 'react';
import { Menulist } from '../../../../types/menu';
import Image from 'next/image';
const base = 'p-menu-list';

interface MenuListProps {
  menulist: Menulist[];
}

const MenuList: FC<MenuListProps> = ({ menulist }) => {
  return (
    <section className={base}>
      <div className={base + '__container'}>
        <div className={base + '__content-area'}>
          {menulist.map((menu) => (
            <div key={menu.id} className={base + '__category'}>
              <h2 className={base + '__item__title c-menu-category-name'}>
                {menu.title}
              </h2>

              {menu.menu && (
                <ul className={base + '__list'}>
                  {menu.menu.map((item) => (
                    <li className={base + '__item'} key={item.title}>
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
                      <div className={base + '__item__price-area'}>
                        <p className={base + '__item__price c-top-menu-price'}>
                          {item.price}円
                        </p>
                        <p className={base + '__item__price c-top-menu-price'}>
                          （税込{Math.floor(item.price * 1.1)}円）
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {menu.menu_noeye && (
                <ul className={base + '__sub-menu__list'}>
                  {menu.menu_noeye.map((item) => (
                    <li key={item.title} className={base + '__sub-menu__item'}>
                      <p
                        className={
                          base + '__sub-menu__item__name c-top-menu-name'
                        }
                      >
                        {item.title}
                      </p>
                      <div className={base + '__sub-menu__item__price-area'}>
                        <p
                          className={
                            base + '__sub-menu__item__price c-top-menu-price'
                          }
                        >
                          {item.price}円
                        </p>
                        <p
                          className={
                            base + '__sub-menu__item__price c-top-menu-price'
                          }
                        >
                          （税込{Math.floor(item.price * 1.1)}円）
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
