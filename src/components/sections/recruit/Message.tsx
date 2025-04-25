import React from 'react';
const base = 'p-recruit-message';

function Message() {
  return (
    <section id="message" className={base}>
      <div className={base + '__container'}>
        <div className={base + '__text-area'}>
          <p className={base + '__title c-recruit-message-title'}>
            「みんなで笑顔を届けよう」
          </p>
          <p className={base + '__text c-recruit-message-text'}>
            焼肉兄者は、2024年3月グランドオープンし、
            お客様の笑顔を第一に考え「神戸牛１頭買い」にこだわりました。
            <br />
            厳選した神戸牛をお客様のお好みに合わせてご提供できるのが
            当店の魅力となっております。
            <br />
            <br />
            まだまだ知名度のない焼肉店ですが、店舗責任者の年齢は21歳ながらも
            スタッフとお客様の笑顔を大切に努めております。
            <br />
            <br />
            私たち焼肉兄者と共に「次世代の焼肉店」を目指しましょう！
          </p>
        </div>
      </div>
    </section>
  );
}

export default Message;
