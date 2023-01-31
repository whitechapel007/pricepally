import React from "react";
import Carousel from "../components/carousel";
import Categories from "../components/categories";
import DesktopCarousel from "../components/desktop-carousel";
import DesktopHeader from "../components/desktop-header";
import TimeLine from "../components/desktop-timeline";
import DownloadDesktop from "../components/download-desktop";
import Footer from "../components/footer";
import Header from "../components/header/Header";
import Hero from "../components/hero";
import Partners from "../components/partners";
import Shop from "../components/shop";
import SubFooter from "../components/subfooter";
import { useViewport } from "../components/viewPort";

const HomePage = () => {
  const { width } = useViewport();
  const breakpoint = 620;
  return width < breakpoint ? (
    <div>
      <Header />
      <Carousel />
      <Hero />
      <Categories />

      <Shop />
    </div>
  ) : (
    <div>
      <DesktopHeader />
      <DesktopCarousel />
      <Categories />
      <TimeLine />
      <Partners />
      <DownloadDesktop />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default HomePage;
