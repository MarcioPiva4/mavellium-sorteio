import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export function Solution() {
  return (
    <section className="py-16 w-full flex flex-col justify-center items-center bg-[#030F1B] md:py-24" id="servicos">
      <div className="container">
        <div className="text-center text-white space-y-4 mb-12">
          <Badge variant="outline" className="text-white w-[100px]">Serviços</Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
            Nossas soluções
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Oferecemos serviços completos de desenvolvimento digital
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 place-items-center lg:flex lg:justify-center w-full">
          <Card className="group hover:shadow-lg transition-shadow w-[262px] h-[272px]">
            <a href="/Servicos_details">
              <CardHeader>
                <div className="size-12 rounded-lg bg-gradient-to-br from-[#285AD9] to-[#285AD9]/90 flex items-center justify-center mb-4">
                  <Icon icon="solar:rocket-bold" className="size-6 text-white" />
                </div>
                <CardTitle>Landing Pages de Alta Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Páginas que encantam e
                  <span className="block">convertem leads com</span>
                  <span className="block">design e performance</span>
                  otimizada.
                </p>
              </CardContent>
            </a>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow w-[262px] h-[272px]">
            <a href="/Servicos_institucionais">
              <CardHeader>
                <div className="size-12 rounded-lg bg-gradient-to-r from-[#1E40AF] to-[#1E40AF]/90 flex items-center justify-center mb-4">
                  <Icon icon="solar:code-bold" className="size-6 text-white" />
                </div>
                <CardTitle>Sites Institucionais que fortalecem sua marca</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Páginas que encantam e
                  <span className="block">convertem leads com</span>
                  <span className="block">design e performance</span>
                  otimizada.
                </p>
              </CardContent>
            </a>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow w-[262px] h-[272px]">
            <CardHeader>
              <div className="size-12 rounded-lg bg-[#04A15E]/30 flex items-center justify-center mb-4">
                <Icon icon="solar:code-bold" className="size-6 text-[#04A15E]" />
              </div>
              <CardTitle>Desenvolvimento Web</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sites institucionais e
                <span className="block">sistemas escaláveis com as </span>
                melhores tecnologias.
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-shadow w-[262px] h-[272px]">
            <CardHeader>
              <div className="size-12 rounded-lg bg-[#04A15E]/30 flex items-center justify-center mb-4">
                <Icon icon="solar:widget-bold" className="size-6 text-[#04A15E]" />
              </div>
              <CardTitle>Aplicações Personalizadas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Gerenciadores, portais e
                <span className="block">ferramentas sob medida </span>
                que otimizam processos.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-white/30 text-white">
            <a href="/Servicos" className="flex justify-center items-center gap-2">
              Ver todos os serviços
              <Icon icon="solar:arrow-right-bold" className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}