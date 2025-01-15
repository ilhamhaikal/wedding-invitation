import Hero from '@/components/Hero'
import OpeningText from '@/components/OpeningText'
import BrideGroom from '@/components/BrideGroom'
import DateVenue from '@/components/DateVenue'
import Countdown from '@/components/Countdown'
import Story from '@/components/Story'
import Gallery from '@/components/Gallery'
import GiftRegistry from '@/components/GiftRegistry'
import Location from '@/components/Location'
import Wishes from '@/components/Wishes'
import QRCode from '@/components/QRCode'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="main-container">
      <Hero />
      <OpeningText />
      <BrideGroom />
      <Countdown />
      <DateVenue />
      <Story />
      <Gallery />
      <GiftRegistry />
      <Location />
      <Wishes />
      <QRCode />
      <Footer />
    </main>
  );
}