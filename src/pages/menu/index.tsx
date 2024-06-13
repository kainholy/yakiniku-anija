// pages/index.tsx
import { GetStaticProps, NextPage } from "next";
import { client } from "../../../libs/client";
import { Menulist, ApiResponse } from "../../../types/menu";
import Header from "@/components/sections/common/Header";
import Footer from "@/components/sections/common/Footer";
import Mv from "@/components/sections/menu/Mv";
import MenuList from "@/components/sections/menu/List";
import Head from "next/head";

interface Props {
  menulist: Menulist[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const response = await client.get<ApiResponse>({
    endpoint: "food",
    queries: { limit: 50 },
  });
  return {
    props: {
      menulist: response.contents,
    },
  };
};

const headData = {
  title: "お品書き | 焼肉兄者",
  description: "焼肉兄者のお品書きページ。厳選された神戸牛を使った多彩なメニューをご紹介。タン、カルビ、ハラミなど、他では味わえない極上の焼肉をお楽しみください。オリジナルドリンクとのペアリングで、さらに豊かな食体験を。",
  keywords: "焼肉, 神戸牛, 焼肉兄者, 足立区, おいしい, おもてなし, お祝い, 会食, デート, 宴会, おしゃれ, おすすめ, 人気, お得, 安い, 予約, メニュー, ランチ, ディナー, 食べ放題, 飲み放題, 個室, 駐車場, アクセス, イベント, キャンペーン, クーポン, お知らせ, 採用, お問い合わせ, 予約, オンライン予約, ネット予約, お土産, プレゼント, ギフト, お祝い, 誕生日, 記念日, 結婚記念日, 新年会, 歓迎会, 忘年会, 送別会, 歓送迎会, 二次会, お花見, 桜, 花火, 夏祭り, 祭り, イベント, クリスマス, ハロウィン, バレンタイン, ホワイトデー, ゴールデンウィーク, お盆, お彼岸, お中元, お歳暮",
  ogUrl: "http://yakiniku-anija/menu/"
}

const Home: NextPage<Props> = ({ menulist }) => {
  const page = "menu";
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
        <MenuList menulist={menulist} />
      </main>
      <Footer page={page} />
    </>
  );
};

export default Home;
