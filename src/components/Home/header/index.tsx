"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
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

          <nav className="hidden md:flex gap-6">
            <a
              href="/"
              onClick={(e) => handleScroll(e, "#")}
              className="text-sm font-medium text-black hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleScroll(e, "#servicos")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </a>
            <a
              href="#cases"
              onClick={(e) => handleScroll(e, "#cases")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Cases
            </a>
            <a
              href="#sobre"
              onClick={(e) => handleScroll(e, "#sobre")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </a>
            <a
              href="#blog"
              onClick={(e) => handleScroll(e, "#blog")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <a
              href="#contato"
              onClick={(e) => handleScroll(e, "#contato")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </a>
          </nav>
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
  )
}
