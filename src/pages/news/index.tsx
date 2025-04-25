// pages/index.tsx
import { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { client } from '../../../libs/client';
import Header from '@/components/sections/common/Header';
import Footer from '@/components/sections/common/Footer';
import NewsList from '@/components/sections/news/NewsList';
import Head from 'next/head';
import SubPageMv from '@/components/sections/common/SubPageMv';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'news' });
  return {
    props: {
      news: data.contents,
    },
  };
};

const headData = {
  title: 'ニュース | 焼肉兄者',
  description:
    '焼肉兄者の最新ニュースとお知らせ。新メニューやイベント情報、キャンペーン、店舗展開など、焼肉兄者に関する最新情報をいち早くお届けします。焼肉兄者の魅力をお見逃しなく。',
  keywords:
    '焼肉, 神戸牛, 焼肉兄者, 足立区, おいしい, おもてなし, お祝い, 会食, デート, 宴会, おしゃれ, おすすめ, 人気, お得, 安い, 予約, メニュー, ランチ, ディナー, 食べ放題, 飲み放題, 個室, 駐車場, アクセス, イベント, キャンペーン, クーポン, お知らせ, 採用, お問い合わせ, 予約, オンライン予約, ネット予約, お土産, プレゼント, ギフト, お祝い, 誕生日, 記念日, 結婚記念日, 新年会, 歓迎会, 忘年会, 送別会, 歓送迎会, 二次会, お花見, 桜, 花火, 夏祭り, 祭り, イベント, クリスマス, ハロウィン, バレンタイン, ホワイトデー, ゴールデンウィーク, お盆, お彼岸, お中元, お歳暮',
  ogUrl: 'http://yakiniku-anija/news/',
};

const Home: NextPage<Props> = ({ news }) => {
  const page = 'news';
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
        <SubPageMv pageName={page} pageTitle="お知らせ" />
        <NewsList news={news} />
      </main>
      <Footer page={page} />
    </>
  );
};

export default Home;
