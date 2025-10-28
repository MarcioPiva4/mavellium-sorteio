import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Clients() {
    return (
         <section className="py-16 w-full flex flex-col justify-center items-center md:py-24 bg-[#030F1B]">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="text-white w-[100px]">Depoimentos</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="Cliente"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                    />
                    <AvatarFallback>DC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Doni</p>
                    <p className="text-sm text-muted-foreground">Fundador, Tegbe</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "A Mavellium entregou exatamente o que precisávamos. O resultado superou nossas
                  expectativas."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="Cliente"
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                    />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Marcos</p>
                    <p className="text-sm text-muted-foreground">Diretor, FAIP</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Profissionalismo e qualidade em cada detalhe. Recomendo para qualquer projeto
                  digital."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage
                      alt="Cliente"
                      src="https://randomuser.me/api/portraits/men/67.jpg"
                    />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Roberto Silva</p>
                    <p className="text-sm text-muted-foreground">Fundador, TegPro</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Parceria de longo prazo. Eles entendem nosso negócio e entregam soluções que
                  funcionam."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
}