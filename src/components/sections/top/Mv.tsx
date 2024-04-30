import React from 'react'
import Image from 'next/image'
import styles from '@/styles/sections/top/Mv.module.scss'
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/top/mv/1.png",
  "/top/mv/1.png",
  "/top/mv/1.png",
//   "/top/mv/3.webp",
//   "/top/mv/4.webp",
//   "/top/mv/2.webp",
//   "/top/mv/5.webp",
//   "/top/mv/6.webp",
//   "/top/mv/7.webp",
];

function Mv() {
  return (
    <section className={styles.container} id='mv'>

      <div className={styles.bg}>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // スライドの切り替わりのアニメーション
        fadeEffect={{ crossFade: true }} // クロスフェード
        loop={true} // スライドをループさせる
        loopAdditionalSlides={1} // ループ時に追加するスライド数
        speed={1000} // スライドが切り替わる時の速度
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          waitForTransition: true,
        }} // スライド表示時間
        followFinger={false} // ユーザーの操作によるスライドの停止
        pagination={{
          el: '.swiper-pagination',
          clickable: false,
        }} // ページネーション, クリックで対象のスライドに切り替わる
        className={styles.slideWrapper}
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <Image
              src={src}
              width={1920}
              height={1038}
              alt="Slider Image"
              className={styles.slideImage + ' slider-img'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.titleArea} ref={titleRef}>
      </div>
    </section>
  )
}

export default Mv
