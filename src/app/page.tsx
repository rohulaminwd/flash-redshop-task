import Banner from "@/components/home/Banner";
import HomeProducts from "@/components/home/HomeProducts";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <HomeProducts />
      <Footer />
    </div>
  )
}
