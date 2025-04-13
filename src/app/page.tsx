import { Hero } from "@/components/Hero/Hero";
import Product from "@/components/Product/Product";
import Location from "@/components/Location/Location";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* กำหนดให้ content ไม่เลยออกมาจากกล่องนี้ */}
      <div className="overflow-x-hidden">
        {/* นำไฟล์ Hero มาแสดงในส่วนนี้ */}
        <Hero />
        <Product />
        <Location />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

