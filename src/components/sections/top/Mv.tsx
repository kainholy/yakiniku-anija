import React from 'react'
import Image from 'next/image'
import SwiperCore, { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/top/mv/1.png",
  "/top/mv/2.png",
  "/top/mv/3.png",
  "/top/mv/4.png",
  "/top/mv/5.png",
];

function Mv() {
  return (
    <section className='p-top-mv' id='mv'>

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
        className='p-top-mv__slideWrapper'
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide className='p-top-mv__swiperSlide' key={index}>
            <Image
              src={src}
              width={1920}
              height={1038}
              alt="Slider Image"
              className='p-top-mv__slideImage slider-img'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='p-top-mv__titleArea'>
        <Image
            src={"/top/mv/logo.png"}
            width={1920}
            height={1038}
            alt="兄者"
            className={'p-top-mv__logo'}
        />
      </div>
    </section>
  )
}

export default Mv
