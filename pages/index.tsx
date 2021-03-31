import ContactMe from "../components/contact-me";
import Footer from "../components/footer";
import Head from "../components/head";
import Header from "../components/header";
import HeroImage from "../components/hero-image";
import MeetNicole from "../components/meet-nicole";
import SignUpForUpdates from "../components/sign-up-for-updates";
import WhatICareAbout from "../components/what-i-care-about";

function main(): JSX.Element {
  return (
    <main>
      <Head />
      <Header />
      <HeroImage />
      <MeetNicole />
      <WhatICareAbout />
      <SignUpForUpdates />
      <ContactMe />
      <Footer />
    </main>
  );
}

export default main;
