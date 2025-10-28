import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";


export function Methodology () {
    return (
        <section className="py-16 w-full flex flex-col justify-center bg-[#0C2136] items-center md:py-24">
        <div className="container">
          <div className="text-center text-white space-y-4 mb-12">
            <Badge variant="outline" className="text-white w-[100px]">Processo</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              Como trabalhamos
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Uma metodologia ágil e orientada a resultados
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#19383B] flex items-center justify-center z-10">
                    <Icon icon="solar:magnifer-bold" className="size-8 text-[#04A15E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#04A15E] mb-2">Descoberta</h3>
                    <p className="text-sm text-white">
                      Entendemos seu negócio e objetivos
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#19383B] flex items-center justify-center z-10">
                    <Icon icon="solar:palette-bold" className="size-8 text-[#04A15E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#04A15E] mb-2">Design</h3>
                    <p className="text-sm text-white">Criamos interfaces que encantam</p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#19383B] flex items-center justify-center z-10">
                    <Icon icon="solar:code-bold" className="size-8 text-[#04A15E] z-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#04A15E] mb-2">Desenvolvimento</h3>
                    <p className="text-sm text-white">
                      Transformamos design em código limpo
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              </div>
              <div className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="size-16 rounded-full bg-[#19383B] flex items-center justify-center z-10">
                    <Icon icon="solar:chart-bold" className="size-8 text-[#04A15E]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#04A15E] mb-2">Otimização</h3>
                    <p className="text-sm text-white">
                      Refinamos para máxima performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}