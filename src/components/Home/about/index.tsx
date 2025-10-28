import { Button } from "@/components/ui/button";

export function About() {
    return (
        <section className="py-16 w-full flex flex-col justify-center items-center md:py-24 bg-[#041526]" id="sobre">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-[#04A15E]">
              Mais do que código — criamos experiências.
            </h2>
            <p className="text-lg text-white">
              A Mavellium une design, tecnologia e estratégia para impulsionar negócios no ambiente
              digital. Criamos soluções digitais sob medida que geram resultado.
            </p>
            <Button variant="outline" className="mt-5 bg-[#041526] w-[200px] h-auto text-white">
              Saiba mais sobre nós
            </Button>
          </div>
        </div>
      </section>
    );
}