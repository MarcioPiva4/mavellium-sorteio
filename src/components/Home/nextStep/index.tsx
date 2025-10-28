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

export function NextStep() {
  return (
    <section className="py-20 w-full flex flex-col justify-center items-center bg-[#041526] md:py-32" id="contato">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <Card className="border-2 border-[#04A15E] bg-[#030E19]">
            <CardHeader className="text-center space-y-4">
              <Badge variant="outline" className="w-fit mx-auto text-white">
                Vamos conversar?
              </Badge>
              <CardTitle className="text-3xl md:text-4xl text-[#04A15E]">
                Pronto para dar o próximo passo?
              </CardTitle>
              <CardDescription className="text-lg text-white">
                Vamos construir algo incrível juntos. Entre em contato e descubra como podemos
                ajudar seu negócio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] cursor-pointer"
                >
                  <a href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F" className="flex gap-2 justify-center items-center">
                    <img src="/ic_baseline-whatsapp.svg" className="w-6" />
                    Fale com a gente
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}