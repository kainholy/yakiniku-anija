import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "../../../libs/client";
import Link from "next/link";
import { News } from "../../../types/news";
import Header from "@/components/sections/common/Header";
import Footer from "@/components/sections/common/Footer";
import NewsDescription from "@/components/sections/news/NewsDescription";
import Mv from "@/components/sections/news/Mv";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content: any) => `/news/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};

export default function NewsPage({ news }: Props) {
  const page = "news";
  return (
    <>
      <Header />
      <main>
        <Mv />
        <NewsDescription news={news} />
      </main>
      <Footer page={page} />
    </>
  );
}
