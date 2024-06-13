import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const base = 'p-recruit-recruit-info'

const hole = [
    {
        title: '月給',
        text: '中途採用 / 22～30万円（経験・能力に応じて決定します。）',
    },
    {
        title: '賞与',
        text: '年2回（ただし、会社業績によっては支給しない。）',
    },
    {
        title: '勤務時間',
        text: '10:00〜23:00（実働8時間・交替制）\n※店舗営業時間により異なる',
    },
    {
        title: '休日・休暇',
        text: '月4〜8日 / 交替制\n有給休暇、慶弔休暇',
    },
    {
        title: '諸手当',
        text: '家族手当、通勤交通費（規定あり）など',
    },
    {
        title: '保険',
        text: '健康保険、厚生年金保険、雇用保険、労災保険',
    },
    {
        title: '福利厚生',
        text: '◎退職金制度\n◎慶弔見舞金制度\n◎受動喫煙防止措置\n◎直行直帰OK！\n◎屋内原則禁煙（喫煙専用室設置）',
    },
    {
        title: '連絡先',
        text: '株式会社アール・ウェイブ\n〒120-0006 東京都足立区神明1-2-8\n03-5697-9333',
    },
]
const owner = [
    {
        title: '月給',
        text: '中途採用 / 30～44万円（経験・能力に応じて決定します。）',
    },
    {
        title: '賞与',
        text: '年2回（ただし、会社業績によっては支給しない。）',
    },
    {
        title: '勤務時間',
        text: '10:00〜23:00（実働8時間・交替制）\n※店舗営業時間により異なる',
    },
    {
        title: '休日・休暇',
        text: '月4〜8日 / 交替制\n有給休暇、慶弔休暇',
    },
    {
        title: '諸手当',
        text: '家族手当、通勤交通費（規定あり）など',
    },
    {
        title: '保険',
        text: '健康保険、厚生年金保険、雇用保険、労災保険',
    },
    {
        title: '福利厚生',
        text: '◎退職金制度\n◎慶弔見舞金制度\n◎受動喫煙防止措置\n◎直行直帰OK！\n◎屋内原則禁煙（喫煙専用室設置）',
    },
    {
        title: '連絡先',
        text: '株式会社アール・ウェイブ\n〒120-0006 東京都足立区神明1-2-8\n03-5697-9333',
    },
]
const kitchen = [
    {
        title: '月給',
        text: '中途採用 / 22～30万円（経験・能力に応じて決定します。）',
    },
    {
        title: '賞与',
        text: '年2回（ただし、会社業績によっては支給しない。）',
    },
    {
        title: '勤務時間',
        text: '10:00〜23:00（実働8時間・交替制）\n※店舗営業時間により異なる',
    },
    {
        title: '休日・休暇',
        text: '月4〜8日 / 交替制\n有給休暇、慶弔休暇',
    },
    {
        title: '諸手当',
        text: '家族手当、通勤交通費（規定あり）など',
    },
    {
        title: '保険',
        text: '健康保険、厚生年金保険、雇用保険、労災保険',
    },
    {
        title: '福利厚生',
        text: '◎退職金制度\n◎慶弔見舞金制度\n◎受動喫煙防止措置\n◎直行直帰OK！\n◎屋内原則禁煙（喫煙専用室設置）',
    },
    {
        title: '連絡先',
        text: '株式会社アール・ウェイブ\n〒120-0006 東京都足立区神明1-2-8\n03-5697-9333',
    },
]

function RecruitInfo() {
  return (
    <section className={base +'__recruitInfo'} id='recruit-info'>
        <div className={base +'__container'}>
            <div className={base + '__titleArea'}>
                <Image
                    className={base+'__title-mount c-title-mount'}
                    src="/title-mount.webp"
                    alt=""
                    width={200}
                    height={50}
                />
                <p className={base+'__title-en c-title-en dark'}>RECRUIT INFO</p>
                <h2>
                    <Image
                        className={base+'__title c-title-img'}
                        src="/recruit/recruit-info/title.webp"
                        alt="募集要項"
                        width={200}
                        height={50}
                    />
                </h2>
            </div>
            <div className={base +'__content'}>
                <p className={base+'__name c-recruit-recruit-info-name'}>ホールスタッフ</p>
                <p className={base+'__description c-recruit-recruit-info-description'}>
                    お客様とのコミュニケーションや気遣いが好きな方
                    接客サービスはお客様の笑顔が最大のやりがいです。<br />
                    焼肉兄者を笑顔であふれる店舗にしていきましょう。
                </p>
                <table className={base +'__table'}>
                    <tbody className={base+'__tbody'}>
                        {
                            hole.map((item, index) => (
                                <tr key={index} className={base +'__tr'}>
                                    <th className={base +'__th c-recruit-recruit-info-title'}>{item.title}</th>
                                    <td className={base +'__td c-recruit-recruit-info-text'}>{item.text}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className={base +'__content'}>
                <p className={base+'__name c-recruit-recruit-info-name'}>店長候補</p>
                <p className={base+'__description c-recruit-recruit-info-description'}>
                    焼肉兄者は今後他店舗展開に向けて、<br />
                    メニュー開発や店舗のマネジメントの業務をできる方・行いたい方は焼肉兄者で学び実践していきませんか。
                </p>
                <table className={base +'__table'}>
                    <tbody className={base+'__tbody'}>
                        {
                            owner.map((item, index) => (
                                <tr key={index} className={base +'__tr'}>
                                    <th className={base +'__th c-recruit-recruit-info-title'}>{item.title}</th>
                                    <td className={base +'__td c-recruit-recruit-info-text'}>{item.text}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className={base +'__content'}>
                <p className={base+'__name c-recruit-recruit-info-name'}>キッチンスタッフ</p>
                <p className={base+'__description c-recruit-recruit-info-description'}>
                    日々に神戸牛と向き合い、お客様の好みに合わせたカットや
                    美味しい商品開発をする楽しさをしてみたい方は
                    焼肉兄者で尽力してみてください。
                </p>
                <table className={base +'__table'}>
                    <tbody className={base+'__tbody'}>
                        {
                            kitchen.map((item, index) => (
                                <tr key={index} className={base +'__tr'}>
                                    <th className={base +'__th c-recruit-recruit-info-title'}>{item.title}</th>
                                    <td className={base +'__td c-recruit-recruit-info-text'}>{item.text}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <Link className={base +'__btn c-btn'} href="tel:0356979333">
                <span className={base +'__btn__text c-btn-text wh'}>相談する</span>
                <span><svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.59255 1.2314C0.630598 1.85528 0.441626 3.80541 0.804806 5.39482C1.08765 6.63256 1.68899 8.2929 2.70301 9.85636C3.65692 11.3272 4.98777 12.646 6.00255 13.4091C7.30567 14.3889 9.16332 15.0116 10.1253 14.3878C10.6117 14.0723 11.3344 13.2104 11.3673 13.0557C11.3673 13.0557 10.9436 12.4023 10.8506 12.2589L9.42946 10.0678C9.32386 9.90492 8.66159 10.0538 8.32516 10.2443C7.87133 10.5015 7.45338 11.1914 7.45338 11.1914C7.14221 11.3712 6.88157 11.192 6.33699 10.9414C5.6677 10.6335 4.9152 9.67666 4.31629 8.81005C3.76928 7.90981 3.20252 6.8325 3.19432 6.0958C3.18757 5.49637 3.13031 5.18536 3.42138 4.97454C3.42138 4.97454 4.22179 4.8743 4.64165 4.56483C4.95285 4.33536 5.35882 3.79138 5.25322 3.62852L3.83211 1.43736C3.73912 1.29397 3.31534 0.640559 3.31534 0.640559C3.16066 0.60761 2.07897 0.915938 1.59255 1.2314Z" fill="white"/></svg></span>
            </Link>

        </div>
    </section>
  )
}

export default RecruitInfo
