import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const base = 'p-footer'

const data = [
  {
    title: '住所',
    text: '東京都足立区綾瀬2丁目24-11 ホワイトハウス2F',
  },
  {
    title: '電話番号',
    text: '0120-029-001',
  },
  {
    title: '営業時間',
    text: '17:00〜23:00',
  },
  {
    title: '定休日',
    text: '火曜日',
  },
  {
    title: '交通手段',
    text: '東武伊勢崎線 綾瀬駅より徒歩5分',
  }
]

function Footer() {
  return (
    <footer id='footer' className={base}>
      <div className={base+'__map-area'}>
        <iframe className={base+'__iframe'} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25990.506069581163!2d139.817644501677!3d35.7612929810335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f005f9a6cdb%3A0xbe6dc7e193d051a0!2z54S86IKJ5YWE6ICF!5e0!3m2!1sja!2sjp!4v1715147395130!5m2!1sja!2sjp" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className={base+'__container'}>
        <div className={base+'__main-content-area'}>
          <div className={base+'__main-content'}>
            <div className={base+'__left'}>
              <div className={base+'__logo-area'}>
                <Image
                    className={base+'__logo c-img'}
                    src="/common/footer/logo.png"
                    alt=""
                    width={200}
                    height={50}
                />
              </div>
              <table className={base+'__detail'}>
                <tbody>
                  {
                    data.map((item, index) => {
                      return (
                        <tr key={index} className={base+'__detail__row'}>
                          <th className={base+'__detail__title c-footer-detail-title wh'}>{item.title}</th>
                          <td className={base+'__detail__text c-footer-detail-text wh'}>{item.text}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className={base+'__right'}>
              <div className={base+'__sub-logo-area'}>
                <Image
                  className={base+'__sub-logo c-img'}
                  src="/common/footer/sub-logo.png"
                  alt=""
                  width={200}
                  height={50}
                />
              </div>
              <div className={base+'__parent-company'}>
                <p className={base+'__parent-company-title c-footer-parent-company-title wh'}>Parent Company</p>
                <p className={base+'__parent-company__name c-footer-parent-company-name wh'}>アール・ウェイブ株式会社</p>
              </div>
            </div>
          </div>
        </div>
        <div className={base+'__sub-content-area'}>
          <ul className={base+'__list'}>
            <li className={base+'__item'}>
              <Link href="/" className={base+'__link c-footer-link wh'}>トップ</Link>
            </li>
            <li className={base+'__item'}>
              <Link href="/concept" className={base+'__link c-footer-link wh'}>コンセプト</Link>
            </li>
            <li className={base+'__item'}>
              <Link href="/menu" className={base+'__link c-footer-link wh'}>お品書き</Link>
            </li>
            <li className={base+'__item'}>
              <Link href="/recruit" className={base+'__link c-footer-link wh'}>採用情報</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
