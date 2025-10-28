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


export function Cases() {
    return (
        <section className="py-16 w-full flex flex-col justify-center items-center px-12 md:py-24 bg-[#0C2136]" id="cases">
        <div className="container">
          <div className="text-center text-white space-y-4 mb-12">
            <Badge variant="outline" className="text-white w-[100px]">Portfólio</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              Cases em destaque
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Projetos que transformaram negócios
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                alt="Tegbe"
                src="/tegbe.png"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>Tegbe</CardTitle>
                <CardDescription>Landing page institucional</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                  <Icon icon="solar:arrow-up-bold" className="size-4" />
                  <span>+40% conversões</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Ver case completo
                  <Icon icon="solar:arrow-right-bold" className="size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                alt="TegPro"
                src="/tegpro.png"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>TegPro</CardTitle>
                <CardDescription>Página de produto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                  <Icon icon="solar:check-circle-bold" className="size-4" />
                  <span>Lançamento</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Ver case completo
                  <Icon icon="solar:arrow-right-bold" className="size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                alt="FAIP"
                src="/faef.png"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>FAIP</CardTitle>
                <CardDescription>Campanha de captação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-[#10B981] font-semibold">
                  <Icon icon="solar:users-group-rounded-bold" className="size-4" />
                  <span>+250 leads</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full">
                  Ver case completo
                  <Icon icon="solar:arrow-right-bold" className="size-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="pt-0 overflow-hidden group hover:shadow-lg transition-shadow">
              <img
                alt="Instituto do Sorriso"
                src="/instituto-sorriso.png"
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>Instituto do Sorriso</CardTitle>
                <CardDescription>Website institucional</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">A publicar nesta semana</Badge>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" disabled className="w-full">
                  Em breve
                  <Icon icon="solar:clock-circle-bold" className="size-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="shadow-lg shadow-[#3B82F6]/20 bg-[#04A15E] hover:bg-[#06BB6E]"
            >
              Ver todos os cases
              <Icon icon="solar:arrow-right-bold" className="size-4" />
            </Button>
          </div>
        </div>
      </section>
    );
}