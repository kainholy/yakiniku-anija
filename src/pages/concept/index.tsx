import Footer from "@/components/sections/common/Footer";
import Header from "@/components/sections/common/Header";
import Mv from "@/components/sections/concept/Mv";
import Concept from "@/components/sections/top/Concept";
import Message from "@/components/sections/top/Message";
import StrongPoint from "@/components/sections/top/StrongPoint";
import MessageFromCEO from "@/components/sections/concept/MessageFromCEO";
import CompanyInfo from "@/components/sections/concept/CompanyInfo";

const page = 'concept'

export default function Home() {
  return (
    <>
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
