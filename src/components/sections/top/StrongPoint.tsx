import React from 'react'
import Image from 'next/image'
const base = 'p-top-strong-point'

const data = [
	{
		number: '01',
		subtitle: '/top/strong-point/subtitle1.webp',
		title: '当店では最高な空間と共に味わえる和牛、職人の工夫が最大限活かされた料理をお客様に届けていきます。カット方法、味付けからこだわったお肉たちをご堪能下さい。',
		img: '/top/strong-point/1.webp',
		className: '--first'
	},
	{
		number: '02',
		subtitle: '/top/strong-point/subtitle2.webp',
		title: '肉が上手いだけじゃない！ドリンクもリーズナブルに来ていただいたお客様が満足してもらえる、そんな兄者ドリンクをお肉と一緒に楽しんでください。',
		img: '/top/strong-point/2.webp',
		className: '--second'
	},
	{
		number: '03',
		subtitle: '/top/strong-point/subtitle3.webp',
		title: '「和」の落ち着いた伝統的な雰囲気と、「楽」の明るい活気のある空間。二つのコンセプトから創造する唯一無二の食体験をご用意しております。お客様の好みや気分に合わせた刻の一滴をご堪能下さい。',
		img: '/top/strong-point/3.webp',
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
						src="/title-mount.webp"
						alt=""
						width={200}
						height={50}
					/>
					<p className={base+'__title-en c-title-en dark'}>STRONG POINT</p>
					<h2>
						<Image
							className={base+'__title c-title-img'}
							src="/top/strong-point/title.webp"
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
										className={base+'__item__title'+ index + ' c-title-img'}
										src={item.subtitle}
										alt={item.subtitle}
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
