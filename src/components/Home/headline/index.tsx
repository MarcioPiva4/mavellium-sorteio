import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";

export function Headline() {
  return (
    <section className="relative w-full flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-[#041526] via-[#1F3E5D] to-[#041526] py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-white text-center space-y-8">
          <Badge variant="secondary" className="mb-4 bg-black text-white">
            Desenvolvimento de software
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold tracking-tight">
            Transformamos ideias em experiências digitais de alto impacto.
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Desenvolvemos sites, landing pages e aplicações sob medida com foco em performance,
            design e conversão.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] cursor-pointer"
            >
              <a href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F" className="flex gap-2 justify-center items-center">
                <img src="/ic_baseline-whatsapp.svg" className="w-6" />
                Fale com a gente
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-[#fff]/20">
              <Icon icon="solar:gallery-bold" className="size-5" />
              Ver portfólio
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  );
}