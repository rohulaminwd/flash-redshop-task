import Banner from "@/components/home/Banner";
import HomeProducts from "@/components/home/HomeProducts";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import SearchBar from "@/components/ui/SearchBar";
import SmallNavbar from "@/components/ui/SmallNavbar";


export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-white z-50 lg:hidden sticky top-0 pt-5 py-2 px-4">
        <SearchBar />
      </div>
      <Banner />
      <HomeProducts />
      <Footer />
      <SmallNavbar />
    </div>
  )
}
