// components/sections/menu/MenuList.tsx
import { FC } from "react";
import { Menu } from "../../../../types/menu";
const base = "p-top-menu";

interface MenuListProps {
  menulist: Menu[];
}

const MenuList: FC<MenuListProps> = ({ menulist }) => {
  return (
    <section className={base}>
      <div className={base + "__container"}>
        <div className={base + "__content-area"}>
          <h1>メニュー</h1>

          {menulist.map((menu) => (
            <div key={menu.id}>
              <h2 className={base + "__item__name c-top-menu-name"}>
                {menu.title}
              </h2>

              <ul className={base + "__list"}>
                {menu.menu.map((item) => (
                  <li className={base + "__item"} key={item.title}>
                    <div>
                      <div>
                        {item.image && (
                          <img
                            className={base + "__item__img"}
                            src={item.image.url}
                            alt={item.title}
                          />
                        )}
                      </div>
                      <p className={base + "__item__name c-top-menu-name"}>
                        {item.title}
                      </p>
                      <p className={base + "__item__price c-top-menu-price"}>
                        {item.price}円
                      </p>
                      <p className={base + "__item__price c-top-menu-price"}>
                        （税込{Math.round(item.price * 1.1)}円）
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <ul>
                {menu.menu_noeye.map((item) => (
                  <li key={item.title}>
                    <p className={base + "__item__name c-top-menu-name"}>
                      {item.title}
                    </p>
                    <p className={base + "__item__price c-top-menu-price"}>
                      {item.price}円
                    </p>
                    <p className={base + "__item__price c-top-menu-price"}>
                      （税込{Math.round(item.price * 1.1)}円）
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
