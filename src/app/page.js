import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import BannerSlider from "@/components/BannerSlider";
import Comany from "@/components/Comany";
import Teams from "@/components/Teams";
import SubInfo from "@/components/SubInfo";
import CricketPoster from "@/components/CricketPoster";
import WhyVPL from "@/components/WhyVPL";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
    

      {/* Main Content */}
      <main className="w-full">
        <BannerSlider />
        <Comany />
        <Teams />
        <SubInfo />
        <CricketPoster />
        <WhyVPL />
        <Gallery />
          
      </main>

      {/* Footer */}
     

    </div>
  );
}