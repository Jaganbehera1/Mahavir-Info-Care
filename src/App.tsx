import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Hardware } from "@/components/Hardware";
import { Software } from "@/components/Software";
import { Repair } from "@/components/Repair";
import { Refurbished } from "@/components/Refurbished";
import { PrinterParts } from "@/components/PrinterParts";
import { DriverSupport } from "@/components/DriverSupport";
import { Education } from "@/components/Education";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServiceProcess } from "@/components/ServiceProcess";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <Hardware />
        <Software />
        <Repair />
        <Refurbished />
        <PrinterParts />
        <DriverSupport />
        <Education />
        <WhyChooseUs />
        <ServiceProcess />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
