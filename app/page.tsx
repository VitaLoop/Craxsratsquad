import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ChevronRight, Shield, ShieldCheck, Instagram, Youtube, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function Home() {
  // Social media links
  const socialLinks = {
    instagram: "https://www.instagram.com/crasxratbrofc?igsh=Y2xzd29jNHJuOGh3",
    youtube: "https://www.youtube.com/@craxsratbrsquad",
    whatsapp: "https://wa.me/5511951791332",
    telegram: "@Craxsratsquad",
    telegramChannel: "https://t.me/crasxratbrsquade",
    website: "https://craxsratsquadofc.netlify.app/",
    telegramGroup: "https://web.telegram.org/a/#-1001809590871",
  }

  // Official accounts
  const officialAccounts = ["@Craxsratsquad", "@A1rzayer"]

  // Custom links data
  const customLinks = [
    { title: "Grupo VIP", description: "Acesse conteúdo exclusivo", url: socialLinks.telegramGroup },
    { title: "Canal Oficial", description: "Fique por dentro das novidades", url: socialLinks.telegramChannel },
    { title: "Suporte", description: "Tire suas dúvidas", url: socialLinks.whatsapp },
    { title: "Website", description: "Visite nosso site oficial", url: socialLinks.website },
  ]

  // Product data
  const products = [
    {
      id: "01",
      name: "Craxsrat",
      description: "CraxsRAT é um Trojan de acesso remoto (RAT) capaz de infectar sistemas operacionais Android.",
      imageUrl: "https://iili.io/3IQzWg9.jpg",
    },
    {
      id: "02",
      name: "Bypass Play Protect",
      description: "Infecte suas vítimas com mais profissionalismo, Burle a proteção da play story e a configuração restrita do Android +13.",
      imageUrl: "https://iili.io/3IQRkKl.jpg",
    },
    {
      id: "03",
      name: "Grupo VIP",
      description: "Explore hacking ético, estelionato, Black Hat e automação avançada em um só lugar, com conteúdo narrado e de alta qualidade.",
      imageUrl: "https://iili.io/3IZEnB1.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-[#1a0505] text-gray-100 flex flex-col items-center justify-start py-10 px-4 relative">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Banner section */}
        <div className="w-full relative overflow-hidden rounded-xl mb-8 h-48 md:h-64">
          {/* Banner image - Replace with your actual banner image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950 to-black overflow-hidden">
            {/* You can replace this div with an Image component when you have your banner */}
            <Image
              src="https://iili.io/3ILpO79.png"
              alt="Banner"
              fill
              className="object-cover opacity-40 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          {/* Banner content */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              <span className="text-red-500"></span>
            </h1>
          </div>

          {/* Verification ribbon */}
          <div className="absolute top-4 right-0 transform translate-x-1/4 rotate-45 z-10">
            <div className="bg-gradient-to-r from-red-800 to-red-900 text-white text-xs font-medium px-8 py-1 shadow-lg">
              VERIFICADO
            </div>
          </div>
        </div>

        {/* Profile section */}
        <div className="flex flex-col items-center space-y-4 animate-fade-in -mt-16 z-20 relative">
          <div className="relative">
            <div className="p-1.5 bg-[#1a0505] rounded-full">
              <Avatar className="w-28 h-28 border-2 border-red-900/50 shadow-xl">
                {/* Replace with your actual profile image */}
                <AvatarImage src="https://iili.io/3Isi9kl.md.jpg" alt="@Craxsratsquad" />
                <AvatarFallback className="bg-red-900/40 text-white text-3xl">Craxsratsquad</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="text-center pt-2">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl font-bold text-white">Craxsratsquad</h2>
              <div className="inline-flex items-center justify-center">
                <div className="relative">
                  <ShieldCheck className="h-5 w-5 text-red-500" />
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mx-auto mt-2">
            Vendas de KL Remota - Acesse nossas opções abaixo! 
            </p>
          </div>
        </div>

        {/* Warning alert */}
        <Alert className="bg-red-900/20 border border-red-800 text-white max-w-xl mx-auto">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 mt-0.5 text-red-500" />
            <AlertDescription className="text-gray-200">
              <p className="font-medium mb-1">
                Prezados clientes, cuidado com lotters! Adquira nossos produtos apenas com @ oficiais:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {officialAccounts.map((account, index) => (
                  <span key={index} className="inline-flex items-center bg-black/30 px-2 py-1 rounded text-sm">
                    {account} <ShieldCheck className="h-3.5 w-3.5 ml-1 text-red-500" />
                  </span>
                ))}
              </div>
            </AlertDescription>
          </div>
        </Alert>

        {/* Verification bar */}
        <div className="max-w-xl mx-auto -mt-6 mb-6">
          <div className="bg-gradient-to-r from-black/60 via-black/80 to-black/60 backdrop-blur-sm rounded-lg border border-red-900/20 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 bg-gradient-to-br from-red-800 to-red-900 p-2 rounded-full">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Perfil Oficial Verificado</p>
                <p className="text-gray-400 text-xs">Autenticidade confirmada pela plataforma</p>
              </div>
            </div>
            <div className="flex-shrink-0 h-8 w-8 relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="url(#verifiedGradient)"
                    strokeWidth="2"
                    className="animate-[spin_10s_linear_infinite]"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#FF0000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="verifiedGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF0000" />
                      <stop offset="1" stopColor="#7E0000" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Social media links */}
        <div className="grid gap-3 max-w-xl mx-auto">
          <h2 className="text-white font-semibold text-xl px-1 flex items-center gap-2 mb-2">
            <span className="w-1.5 h-6 bg-red-800 rounded-full"></span>
            Redes Sociais Oficiais
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              variant="outline"
              className="bg-black/30 backdrop-blur-sm border-red-900/20 hover:bg-black/50 text-white flex items-center justify-between group transition-all h-auto py-3"
              asChild
            >
              <Link href={socialLinks.instagram} target="_blank">
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-red-500" />
                  <span className="text-sm">Instagram</span>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="bg-black/30 backdrop-blur-sm border-red-900/20 hover:bg-black/50 text-white flex items-center justify-between group transition-all h-auto py-3"
              asChild
            >
              <Link href={socialLinks.youtube} target="_blank">
                <div className="flex items-center gap-3">
                  <Youtube className="h-5 w-5 text-red-500" />
                  <span className="text-sm">YouTube</span>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="bg-black/30 backdrop-blur-sm border-red-900/20 hover:bg-black/50 text-white flex items-center justify-between group transition-all h-auto py-3"
              asChild
            >
              <Link href={socialLinks.whatsapp} target="_blank">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm">WhatsApp</span>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="bg-black/30 backdrop-blur-sm border-red-900/20 hover:bg-black/50 text-white flex items-center justify-between group transition-all h-auto py-3"
              asChild
            >
              <Link href={socialLinks.telegramChannel} target="_blank">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-500"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="text-sm">Canal Telegram</span>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Custom links section */}
        <div className="grid gap-3 max-w-xl mx-auto">
          <h2 className="text-white font-semibold text-xl px-1 flex items-center gap-2 mb-2">
            <span className="w-1.5 h-6 bg-red-800 rounded-full"></span>
            Links Importantes
          </h2>

          <div className="grid gap-3">
            {customLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="bg-black/30 backdrop-blur-sm border-red-900/20 hover:bg-black/50 text-white w-full flex items-center justify-between group transition-all h-auto py-3"
                asChild
              >
                <Link href={link.url} target="_blank">
                  <div className="flex flex-col items-start">
                    <span className="text-base font-medium">{link.title}</span>
                    <span className="text-xs text-gray-400">{link.description}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-red-700 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Products section */}
        <div className="space-y-6">
          <h2 className="text-white font-semibold text-xl px-1 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-red-800 rounded-full"></span>
            Produtos Exclusivos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-gradient-to-br from-black/80 to-black/60 border-red-900/20 backdrop-blur-sm text-white overflow-hidden hover:scale-[1.02] transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <CardHeader className="relative pb-0">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 to-transparent"></div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-red-500 font-bold">{product.id}</span>
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative pt-4">
                  <div className="w-full h-36 bg-gradient-to-br from-red-900/30 to-black/80 rounded-md mb-4 flex items-center justify-center overflow-hidden relative">
                    {/* Replace with your actual product image */}
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
                  </div>
                  <p className="text-sm text-gray-400">{product.description}</p>
                </CardContent>
                <CardFooter className="relative">
                  <Button className="w-full bg-red-900/80 hover:bg-red-800 border-none text-white" asChild>
                    <Link
                      href={socialLinks.telegramGroup}
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      Saiba Mais
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Team ready message */}
        <div className="max-w-xl mx-auto bg-gradient-to-r from-black/60 via-black/80 to-black/60 backdrop-blur-sm rounded-lg border border-red-900/20 p-4 text-center">
          <p className="text-white">Equipe pronta para seu atendimento.</p>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-4 pb-8">
          <p>© 2025 Craxsratsquad • Todos os direitos reservados</p>
        </footer>
      </div>
    </main>
  )
}

