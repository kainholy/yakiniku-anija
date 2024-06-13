import Footer from "@/components/sections/common/Footer";
import Header from "@/components/sections/common/Header";
import Message from "@/components/sections/recruit/Message";
import Mv from "@/components/sections/recruit/Mv";
import RecruitInfo from "@/components/sections/recruit/RecruitInfo";

const page = 'recruit'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Mv />
        <Message />
        <RecruitInfo />
      </main>
      <Footer page={ page } />
    </>
  );
}
