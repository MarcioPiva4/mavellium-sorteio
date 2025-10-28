"use client";

import { Cases } from "@/components/Home/cases";
import { Footer } from "@/components/Home/footer";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Clients } from "@/components/Home/clients";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Sorteio() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
        e.preventDefault()
        const section = document.querySelector(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border flex justify-center bg-white px-10">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a href="/" className="flex items-center">
                            <img
                                src="/logo-mavellium.svg"
                                alt="Mavellium"
                                width={180}
                                height={40}
                                className="object-contain"
                            />
                        </a>
                    </div>

                    <div className="hidden md:flex">
                        <Button className="shadow-lg shadow-primary/20 bg-[#008E52] hover:bg-[#017346]">
                            <a
                                href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 justify-center items-center"
                            >
                                <img src="/ic_baseline-whatsapp.svg" className="w-6" />
                                Fale com a gente
                            </a>
                        </Button>
                    </div>

                    <Button size="icon" variant="ghost" className="md:hidden">
                        <Icon icon="solar:hamburger-menu-bold" className="size-6" />
                    </Button>
                </div>
            </header>

            <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-[#041526] via-[#1F3E5D] to-[#041526] px-6 md:px-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-white">

                    <div className="flex-1 text-center md:text-left space-y-4 flex flex-col items-center">
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center">
                            Sua presença digital
                            <span className="block text-[#01EE89] text-5xl sm:text-7xl lg:text-8xl xl:text-8xl mt-2">
                                começa aqui
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 text-white/90 max-w-2xl">
                            Participe do nosso sorteio e concorra a uma landing page
                            <span className="block">exclusiva feita para o seu negócio.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full sm:w-auto px-6 py-4 text-base sm:text-lg"
                            >
                                <a
                                    href="#form"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const section = document.querySelector("#form");
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }
                                    }}
                                    className="flex gap-2 justify-center items-center"
                                >
                                    Quero participar do sorteio
                                </a>
                            </Button>

                        </div>

                        <div className="flex justify-center md:justify-start items-center gap-2 mt-8">
                            <p className="text-base sm:text-lg md:text-xl">
                                🗓️ O sorteio acontece em <strong>30/10/2025, às 17h.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 w-full p-10 flex flex-col justify-center items-center bg-[#041526] md:py-24" id="servicos">
                <div className="container w-full flex flex-col justify-center items-center">
                    {/* Título */}
                    <div className="text-center text-white space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#04A15E] mb-10">
                            Mais do que código — criamos experiências.
                        </h2>
                        <p className="text-xl max-w-4xl mx-auto text-start">
                            <span className="block">A Mavellium é uma empresa de desenvolvimento web com sede em Garça-SP, formada</span>
                            <span className="block mb-10">por profissionais apaixonados por tecnologia, design e inovação.</span>

                            <span className="block">Nossa missão é impulsionar negócios locais e regionais no ambiente digital, criando</span>
                            <span className="block">soluções sob medida que combinam estratégia, performance e experiência do usuário.</span>
                        </p>
                    </div>

                </div>
            </section>
            <section className="py-16 w-full p-10 flex flex-col justify-center items-center bg-[#03111F] md:py-24" id="servicos">
                <div className="container w-full flex flex-col justify-center items-center">
                    {/* Título */}
                    <div className="text-center text-white space-y-4 mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#04A15E] mb-10">
                            Sorteio Exclusivo
                        </h2>
                        <p className="text-xl max-w-4xl mx-auto text-start">
                            <span className="block">No evento da FATEC Garça, estamos realizando um sorteio exclusivo: uma landing page </span>
                            <span className="block">profissional, desenvolvida pela nossa equipe com design moderno, foco em conversão e </span>
                            <span className="block mb-10">otimização SEO.</span>

                            <span className="block">📅 Data do sorteio: 30 de outubro de 2025</span>
                            <span className="block">🕔 Horário: 17h</span>
                            <span className="block mb-10">📍 Local: Ao vivo no nosso Instagram — @mavellium</span>

                            <span>💡 Essa é a sua oportunidade de transformar sua presença digital e destacar sua marca com um site que realmente gera resultados.</span>
                        </p>
                    </div>

                </div>
            </section>
            <section
                id="contato"
                className="py-16 md:py-20 w-full flex flex-col justify-center items-center bg-[#030F1B]"
            >
                <div className="container px-4">
                    <div className="mx-auto max-w-5xl">
                        {/* Título */}
                        <div className="text-center text-white space-y-4 mb-12">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#04A15E]">
                                Participe do Sorteio
                            </h2>
                            <p className="text-base sm:text-lg max-w-3xl mx-auto">
                                Preencha o formulário abaixo e concorra a uma landing page completa, desenvolvida especialmente para sua marca.
                            </p>
                        </div>
                        <div className="w-full max-w-xl mx-auto mt-10">
                            <form
                                onSubmit={async (e) => {
                                    e.preventDefault();

                                    const form = e.currentTarget;
                                    const nome = (form.querySelector('input[name="nome"]') as HTMLInputElement).value;
                                    const whatsapp = (form.querySelector('input[name="whatsapp"]') as HTMLInputElement).value;
                                    const interesse = (form.querySelector('select[name="interesse"]') as HTMLSelectElement).value;

                                    const res = await fetch("/api/sorteio", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ nome, whatsapp, interesse }),
                                    });

                                    if (res.ok) {
                                        alert("🎉 Cadastro realizado com sucesso! Boa sorte!");
                                        form.reset();
                                    } else {
                                        alert("❌ Erro ao enviar os dados. Tente novamente.");
                                    }
                                }}
                                className="flex flex-col gap-4 bg-[#193551]/30 p-5 rounded-xl justify-center items-center" id="form"
                            >
                                <input
                                    type="text"
                                    name="nome"
                                    placeholder="Qual seu nome completo?"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#04A15E] transition-all"
                                />

                                <input
                                    type="text"
                                    name="whatsapp"
                                    placeholder="Digite seu número de WhatsApp"
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#04A15E] transition-all"
                                />

                                <div className="relative w-full">
                                    <select
                                        name="interesse"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#04A15E] transition-all appearance-none pr-12 custom-select"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Como você se conecta com o mundo digital?
                                        </option>
                                        <option value="landing">Landing Page</option>
                                        <option value="site">Site Institucional</option>
                                        <option value="loja">Loja Virtual</option>
                                    </select>

                                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                        <Icon icon="solar:alt-arrow-down-line-duotone" className="w-6 h-6 text-white" />
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 w-full">
                                    <button
                                        type="submit"
                                        className="shadow-lg shadow-primary/20 bg-gradient-to-br from-[#01EE89] to-[#017346] w-full px-6 py-4 text-base sm:text-lg rounded-lg text-white font-semibold hover:opacity-90 transition-all"
                                    >
                                        QUERO PARTICIPAR DO SORTEIO
                                    </button>
                                </div>
                                <div className="text-white/50 text-[12px]">
                                    <p>Ao enviar este formulário, você concorda com os termos do sorteio e autoriza a Mavellium a entrar em contato por WhatsApp.</p>
                                </div>
                            </form>


                            {/* CSS embutido para estilizar as opções */}
                            <style jsx>{`
                                select.custom-select option {
                                background-color: #0e2238; /* fundo escuro */
                                color: white; /* texto branco */
                                }
                                select.custom-select option:checked {
                                background-color: #04a15e; /* cor de destaque */
                                color: white;
                                }
                            `}</style>
                        </div>

                    </div>
                </div>
            </section>

            <footer className="border-t w-full flex flex-col justify-center items-center border-[#04A15E] py-12 px-6 md:px-12 md:py-16 bg-[#030F1B]">
                <div className="container mx-auto">
                    <div className="flex justify-center items-center mb-10">
                        {/* Logo e Instagram */}
                        <div className="space-y-4 flex flex-col items-center">
                            <img src="/logo-mavellium-footer.svg" alt="Mavellium" width={233} height={52} />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row justify-center items-center gap-25 text-sm text-[#A7B4CE] text-center md:text-left">
                        <p>© 2024 Mavellium — Todos os direitos reservados.</p>
                        <div className="flex items-center gap-4">
                            <a href="/privacidade" className="text-[#A7B4CE]">
                                Privacidade
                            </a>
                            <a href="/termos" className="text-[#A7B4CE]">
                                Termos
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
