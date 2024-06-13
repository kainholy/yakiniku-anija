// pages/index.tsx
import { GetStaticProps, NextPage, InferGetStaticPropsType } from "next";
import { client } from "../../../libs/client";
import Header from "@/components/sections/common/Header";
import Footer from "@/components/sections/common/Footer";
import Mv from "@/components/sections/news/Mv";
import NewsList from "@/components/sections/news/NewsList";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });
  return {
    props: {
      news: data.contents,
    },
  };
};
const Home: NextPage<Props> = ({ news }) => {
  const page = "news";
  return (
    <>
      <Header />
      <main>
        <Mv />
        <NewsList news={news} />
      </main>
      <Footer page={page} />
    </>
  );
};

export default Home;
