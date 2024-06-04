import Footer from "@/components/sections/common/Footer";
import Header from "@/components/sections/common/Header";
import Mv from "@/components/sections/menu/Mv";

const page = 'menu'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Mv />
      </main>
      <Footer page={ page } />
    </>
  );
}
