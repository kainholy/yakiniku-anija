import Footer from "@/components/sections/common/Footer";
import Header from "@/components/sections/common/Header";
import Mv from "@/components/sections/recruit/Mv";
import RecruitInfo from "@/components/sections/recruit/RecruitInfo";

const page = 'recruit'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Mv />
        <RecruitInfo />
      </main>
      <Footer page={ page } />
    </>
  );
}
