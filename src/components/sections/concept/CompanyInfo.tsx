import React from 'react'
import Image from 'next/image'

const dataList = [
    {
        title: '会社名',
        text: '株式会社アール・ウェイブ',
    },
    {
        title: '設立',
        text: '平成18年7月20日',
    },
    {
        title: '所在地',
        text: '東京都足立区谷中1-23-15',
    },
    {
        title: '役員',
        text: '取締役会長　山田 勝久\n代表取締役　山田 正太',
    },
    {
        title: 'TEL',
        text: '03-5697-9333',
    },
    {
        title: 'FAX',
        text: '03-5697-9336',
    },
]

const base = "p-concept-company-info"

function CompanyInfo() {
  return (
    <section id="company-info" className={base}>
        <div className={base + '__container'}>
            <div className={base + '__titleArea'}>
                <Image
                    className={base+'__title-mount c-title-mount'}
                    src="/title-mount.png"
                    alt=""
                    width={200}
                    height={50}
                />
                <p className={base+'__title-en c-title-en dark'}>COMPANY INFO</p>
                <h2>
                    <Image
                        className={base+'__title c-title-img'}
                        src="/concept/company-info/title.png"
                        alt="会社概要"
                        width={200}
                        height={50}
                    />
                </h2>
            </div>
            <div className={base + '__content'}>
                <table className={base + '__table'}>
                    <tbody className={base+'__tbody'}>
                        {
                            dataList.map((item, index) => (
                                <tr key={index} className={base + '__tr'}>
                                    <th className={base + '__th c-concept-company-info-title'}>{item.title}</th>
                                    <td className={base + '__td c-concept-company-info-text'}>{item.text}</td>
                                </tr>
                            ))
                        }
                        <tr className={base + '__tr'}>
                            <th className={base + '__th c-concept-company-info-title'}>グループ事業</th>
                            <td className={base + '__td c-concept-company-info-text'}>
                                <p className={base + '__name'}>株式会社アール・ウェイブ</p>
                                <p className={base + '__department'}>洗車・コーティング部門</p>
                                <p className={base + '__department'}>モーターサイクル部門</p>
                                <p className={base + '__department'}>警備部門</p>
                                <p className={base + '__department'}>飲食店部門</p>
                                <p className={base + '__name'}>ウィンズ株式会社</p>
                                <p className={base + '__department'}>車両部門</p>
                                <p className={base + '__name'}>株式会社アース</p>
                                <p className={base + '__department'}>不動産部門</p>
                            </td>
                        </tr>
                        <tr className={base + '__tr'}>
                            <th className={base + '__th c-concept-company-info-title'}>警備事業内容</th>
                            <td className={base + '__td c-concept-company-info-text'}>
                                <p>雑踏(イベント)警備、交通誘導警備、駐車場警備</p>
                                <p className={base + '__caption'}>※詳細は「サービス内容」ページをご覧ください。</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default CompanyInfo
