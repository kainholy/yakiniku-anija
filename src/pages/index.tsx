import Footer from "@/components/sections/common/Footer";
import Header from "@/components/sections/common/Header";
import Concept from "@/components/sections/top/Concept";
import Menu from "@/components/sections/top/Menu";
import Message from "@/components/sections/top/Message";
import Mv from "@/components/sections/top/Mv";
import News from "@/components/sections/top/News";
import Recruit from "@/components/sections/top/Recruit";
import StrongPoint from "@/components/sections/top/StrongPoint";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Mv />
        <News />
        <Message />
        <Concept />
        <Menu />
        <StrongPoint />
        <Recruit />
      </main>
      <Footer />
    </>
  );
}
