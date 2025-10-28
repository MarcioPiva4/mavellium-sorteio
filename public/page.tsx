import { About } from "@/components/Home/about";
import { Cases } from "@/components/Home/cases";
import { Clients } from "@/components/Home/clients";
import { Header } from "@/components/Home/header";
import { Headline } from "@/components/Home/headline";
import { Methodology } from "@/components/Home/methodology";
import { NextStep } from "@/components/Home/nextStep";
import { Solution } from "@/components/Home/solution";
import { Footer } from "@/components/Home/footer";
import ButtonWhatsapp from "@/components/Home/ButtonWhatsapp";


export default function Home() {
  return (
    <>
    <main>
    <Header></Header>
    <Headline></Headline>
    <About></About>
    <Solution></Solution>
    <Cases></Cases>
    <Methodology></Methodology>
    <Clients></Clients>
    <NextStep></NextStep>
    </main>
    <Footer></Footer>
    <ButtonWhatsapp></ButtonWhatsapp>
    </>
  );
}
