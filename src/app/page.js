
import BannerSlider from "@/components/BannerSlider";
import Comany from "@/components/Comany";
import Teams from "@/components/Teams";
import SubInfo from "@/components/SubInfo";
import CricketPoster from "@/components/CricketPoster";
import WhyVPL from "@/components/WhyVPL";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Video from "@/components/Video";

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
        <Video/>
        <Gallery limit={9}/>
          
      </main>

      {/* Footer */}
     

    </div>
  );
}