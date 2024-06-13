import Footer from "@/components/sections/common/Footer";
import Header from "@/components/sections/common/Header";
import Mv from "@/components/sections/concept/Mv";
import Concept from "@/components/sections/top/Concept";
import Message from "@/components/sections/top/Message";
import StrongPoint from "@/components/sections/top/StrongPoint";
import MessageFromCEO from "@/components/sections/concept/MessageFromCEO";
import CompanyInfo from "@/components/sections/concept/CompanyInfo";
import Head from "next/head";

const page = 'concept'

const headData = {
  title: "兄者とは | 焼肉兄者",
  description: "焼肉兄者のこだわりをご紹介。最高の神戸牛とオリジナル秘伝のたれで生み出される極上の焼肉を提供し、お客様一人ひとりに特別な食体験をお届けします。サービスと美味を追求し、共に成長する焼肉兄者の魅力をご覧ください。",
  keywords: "兄者, 焼肉兄者, 神戸牛, 焼肉, 足立区, おいしい, おもてなし, お祝い, 会食, デート, 宴会, おしゃれ, おすすめ, 人気, お得, 安い, 予約, メニュー, ランチ, ディナー, 食べ放題, 飲み放題, 個室, 駐車場, アクセス, イベント, キャンペーン, クーポン, お知らせ, 採用, お問い合わせ, 予約, オンライン予約, ネット予約, お土産, プレゼント, ギフト, お祝い, 誕生日, 記念日, 結婚記念日, 新年会, 歓迎会, 忘年会, 送別会, 歓送迎会, 二次会, お花見, 桜, 花火, 夏祭り, 祭り, イベント, クリスマス, ハロウィン, バレンタイン, ホワイトデー, ゴールデンウィーク, お盆, お彼岸, お中元, お歳暮",
  ogUrl: "http://yakiniku-anija/concept/"
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>{headData.title}</title>
        <meta name="description" content={headData.description} />
        <meta name="keywords" content={headData.keywords}/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={headData.title}/>
        <meta property="og:description" content={headData.description}/>
        <meta property="og:url" content={headData.ogUrl} />
        <meta property="og:site_name" content={headData.title}/>
      </Head>
      <Header />
      <main>
        <Mv />
        <Message page={ page } />
        <Concept page={ page } />
        <StrongPoint />
        <MessageFromCEO />
        <CompanyInfo />
      </main>
      <Footer page={ page } />
    </>
  );
}
