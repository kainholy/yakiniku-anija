import React from 'react';
import Image from 'next/image';

const base = 'p-about-messageFromCEO';

function MessageFromCEO() {
  return (
    <section id="message-from-CEO" className={base}>
      <div className={base + '__container'}>
        <div className={base + '__titleArea'}>
          <Image
            className={base + '__title-mount c-title-mount'}
            src="/title-mount.webp"
            alt=""
            width={200}
            height={50}
          />
          <p className={base + '__title-en c-title-en dark'}>
            MESSAGE FROM CEO
          </p>
          <h2>
            <Image
              className={base + '__title-img c-title-img'}
              src="/concept/message-from-CEO/title.webp"
              alt="責任者メッセージ"
              width={200}
              height={50}
            />
          </h2>
        </div>
        <div className={base + '__content'}>
          <div className={base + '__imgArea'}>
            <Image
              src="/concept/message-from-CEO/1.webp"
              alt="責任者"
              className={base + '__img'}
              width={1000}
              height={1000}
            />
          </div>
          <div className={base + '__inner'}>
            <div className={base + '__textArea'}>
              <h3 className={base + '__title'}>
                <Image
                  src="/concept/message-from-CEO/message.webp"
                  alt="食べるなら旨い肉食べようぜ！"
                  className={base + '__img'}
                  width={1000}
                  height={1000}
                />
              </h3>
              <p className={base + '__text c-concept-messageFromCEO-text bk'}>
                皆さん！初めまして！美味い肉・楽しい食事が大好きなまさやです！
                焼肉兄者はお客様が当店にもう一度足を運んでいただけるように”神戸牛”を取り入れた本格焼肉屋です。
                神戸牛を当店自慢のタレとの相性は抜群です！
                サイドメニュー・兄者オリジナルドリンク・デザートは焼肉兄者でしか堪能できない商品をリーズナブルにご提供しております。
                又、若い従業員が多いため、”元気がありながらサービス心は常に一番”をモットーに営業しております。
                お客様が楽しいひと時を過ごせるよう焼肉兄者も精進してまいります。
              </p>
              <p className={base + '__name c-concept-messageFromCEO-text bk'}>
                焼肉兄者　店舗責任者　小尾将也
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MessageFromCEO;
