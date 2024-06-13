// pages/index.tsx
import { GetStaticProps, NextPage } from "next";
import { client } from "../../../libs/client";
import { Menu, ApiResponse } from "../../../types/menu";
import Header from "@/components/sections/common/Header";
import Footer from "@/components/sections/common/Footer";
import Mv from "@/components/sections/menu/Mv";
import MenuList from "@/components/sections/menu/List";

interface Props {
  menulist: Menu[];
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

const Home: NextPage<Props> = ({ menulist }) => {
  const page = "menu";
  return (
    <>
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
