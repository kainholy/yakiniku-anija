import FixedButton from '@/components/sections/common/FixedButton';
import Footer from '@/components/sections/common/Footer';
import Header from '@/components/sections/common/Header';
import Concept from '@/components/sections/top/Concept';
import Menu from '@/components/sections/top/Menu';
import Message from '@/components/sections/top/Message';
import Mv from '@/components/sections/top/Mv';
import News from '@/components/sections/top/News';
import Recruit from '@/components/sections/top/Recruit';
import StrongPoint from '@/components/sections/top/StrongPoint';
import Head from 'next/head';
import { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import { client } from '../../libs/client';
import { Menulist, ApiResponse } from '../../types/menu';
import { NewsApiResponse } from '../../types/news';

const headData = {
  title: '焼肉兄者',
  description:
    '焼肉兄者は、神戸牛一頭買いによる厳選された最高の牛肉と、オリジナル秘伝のたれが織りなす絶品の焼肉を提供します。足立区で唯一の特別な焼肉体験を、ぜひご堪能ください。最高の味と心温まるおもてなしでお客様をお迎えします。',
  keywords:
    '焼肉, 神戸牛, 焼肉兄者, 足立区, おいしい, おもてなし, お祝い, 会食, デート, 宴会, おしゃれ, おすすめ, 人気, お得, 安い, 予約, メニュー, ランチ, ディナー, 食べ放題, 飲み放題, 個室, 駐車場, アクセス, イベント, キャンペーン, クーポン, お知らせ, 採用, お問い合わせ, 予約, オンライン予約, ネット予約, お土産, プレゼント, ギフト, お祝い, 誕生日, 記念日, 結婚記念日, 新年会, 歓迎会, 忘年会, 送別会, 歓送迎会, 二次会, お花見, 桜, 花火, 夏祭り, 祭り, イベント, クリスマス, ハロウィン, バレンタイン, ホワイトデー, ゴールデンウィーク, お盆, お彼岸, お中元, お歳暮',
  ogUrl: 'http://yakiniku-anija/',
};

const page = 'top';

interface Props {
  menulist: Menulist[];
  news: NewsApiResponse['contents'];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const menuResponse = await client.get<ApiResponse>({
    endpoint: 'food',
    queries: { limit: 1 },
  });

  const newsResponse = await client.get<NewsApiResponse>({ endpoint: 'news' });

  return {
    props: {
      menulist: menuResponse.contents,
      news: newsResponse.contents,
    },
  };
};

const Home: NextPage<Props> = ({ menulist, news }) => {
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
        <FixedButton />
        <Mv />
        <News news={news} />
        <Message page={page} />
        <Concept page={page} />
        <Menu menulist={menulist} />
        <StrongPoint />
        <Recruit />
      </main>
      <Footer page={page} />
    </>
  );
};

export default Home;
