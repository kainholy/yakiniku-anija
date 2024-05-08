import React from 'react'
import Image from 'next/image'
const base = 'p-top-strong-point'

const data = [
	{
		number: '01',
		subtitle: '/top/strong-point/subtitle1.png',
		title: '焼肉兄者だけの特権、他では手に入らない厳選された神戸牛のタン、カルビ、ハラミ。私たちの独自のルートで仕入れた極上の味を、あなたのテーブルへ。',
		img: '/top/strong-point/1.png',
		className: '--first'
	},
	{
		number: '02',
		subtitle: '/top/strong-point/subtitle2.png',
		title: '焼肉兄者だけの特権、他では手に入らない厳選された神戸牛のタン、カルビ、ハラミ。私たちの独自のルートで仕入れた極上の味を、あなたのテーブルへ。',
		img: '/top/strong-point/2.png',
		className: '--second'
	},
	{
		number: '03',
		subtitle: '/top/strong-point/subtitle3.png',
		title: '焼肉兄者だけの特権、他では手に入らない厳選された神戸牛のタン、カルビ、ハラミ。私たちの独自のルートで仕入れた極上の味を、あなたのテーブルへ。',
		img: '/top/strong-point/3.png',
		className: '--third'
	}
]

function StrongPoint() {
    return (
        <section id='strong-point' className={base}>
            <div className={base+'__container'}>
				<div className={base+'__title-area'}>
					<Image
						className={base+'__title-mount c-title-mount'}
						src="/title-mount.png"
						alt=""
						width={200}
						height={50}
					/>
					<p className={base+'__title-en c-title-en dark'}>STRONG POINT</p>
					<h2>
						<Image
							className={base+'__title c-title-img'}
							src="/top/strong-point/title.png"
							alt="兄者の強み"
							width={200}
							height={50}
						/>
					</h2>
				</div>
				<div className={base+'__content-area'}>
					{data.map((item, index) => (
						<div key={index} className={base+'__item '+item.className}>
							<div className={base+'__item__bg'}>
							</div>
							<div className={base+'__item__text-area'}>
								<p className={base+'__item__number wh c-top-strong-point-number'}>{item.number}</p>
								<p>
									<Image
										className={base+'__item__title c-title-img'}
										src={item.subtitle}
										alt="兄者の強み"
										width={200}
										height={50}
									/>
								</p>
								<p className={base+'__item__text wh c-top-strong-point-text'}>{item.title}</p>
							</div>
							<div className={base+'__item__img-area'}>
								<Image
									className={base+'__item__img c-img'}
									src={item.img}
									alt=""
									width={600}
									height={600}
								/>
							</div>
						</div>
					))}
				</div>
            </div>
        </section>
    )
}

export default StrongPoint
