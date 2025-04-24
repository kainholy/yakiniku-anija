import Footer from '@/components/sections/common/Footer';
import Header from '@/components/sections/common/Header';
import Message from '@/components/sections/recruit/Message';
import Mv from '@/components/sections/recruit/Mv';
import RecruitInfo from '@/components/sections/recruit/RecruitInfo';
import Head from 'next/head';

const page = 'recruit';

const headData = {
  title: '採用情報 | 焼肉兄者',
  description:
    '焼肉兄者の採用情報。私たちは、最高の神戸牛と心温まるおもてなしでお客様に感動を提供するスタッフを募集しています。情熱を持って働ける方、共に成長し、一緒に焼肉兄者の未来を築きましょう。応募はこちらから！',
  keywords:
    '採用, 求人, アルバイト, パート, 正社員, ホールスタッフ, キッチンスタッフ, 店長候補, 焼肉兄者, 神戸牛, 焼肉, 足立区, おいしい, おもてなし, お祝い, 会食, デート, 宴会, おしゃれ, おすすめ, 人気, お得, 安い, 予約, メニュー, ランチ, ディナー, 食べ放題, 飲み放題, 個室, 駐車場, アクセス, イベント, キャンペーン, クーポン, お知らせ, 採用, お問い合わせ, 予約, オンライン予約, ネット予約, お土産, プレゼント, ギフト, お祝い, 誕生日, 記念日, 結婚記念日, 新年会, 歓迎会, 忘年会, 送別会, 歓送迎会, 二次会, お花見, 桜, 花火, 夏祭り, 祭り, イベント, クリスマス, ハロウィン, バレンタイン, ホワイトデー, ゴールデンウィーク, お盆, お彼岸, お中元, お歳暮',
  ogUrl: 'http://yakiniku-anija/recruit/',
};

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
        <meta name="keywords" content={headData.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={headData.title} />
        <meta property="og:description" content={headData.description} />
        <meta property="og:url" content={headData.ogUrl} />
        <meta property="og:site_name" content={headData.title} />
      </Head>
      <Header />
      <main>
        <Mv />
        <Message />
        <RecruitInfo />
      </main>
      <Footer page={page} />
    </>
  );
}
