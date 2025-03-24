
# Craxsratsquad

![Craxsratsquad](public/placeholder.svg)

Uma landing page moderna e responsiva no estilo Linktree para @Cra, com links de mídia social, links importantes e vitrines de produtos com um tema elegante em vermelho escuro e preto.

## 📋 Características

- Design responsivo que funciona em todos os dispositivos
- UI moderna com animações e efeitos sutis
- Seção de perfil com indicadores de verificação
- Seção de links de mídia social
- Seção de links personalizados
- Vitrine de produtos com suporte de imagem
- Alertas de aviso para prevenção de golpes
- Tema escuro com detalhes em vermelho

## 🛠️ Tecnologias utilizadas

- [Next.js 14](https://nextjs.org/) - Estrutura React
- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário
- [TypeScript](https://www.typescriptlang.org/) - JavaScript tipado
- [Tailwind CSS](https://tailwindcss.com/) - Estrutura CSS de utilidade
- [Lucide React](https://lucide.dev/) - Biblioteca de ícones
- [Shadcn/UI](https://ui.shadcn.com/) - Biblioteca de componentes de IU

## 🚀 Começando

### Pré-requisitos

- Node.js 18.x ou posterior
- npm ou yarn ou pnpm

### Installation

1. Clone o repositório:

```bash
git clone https://github.com/yourusername/cra-linktree.git
cd cra-linktree






cra-linktree/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page component
├── components/           # UI components
│   ├── ui/               # shadcn/ui components
│   └── theme-provider.tsx # Theme provider component
├── public/               # Static assets
│   └── pattern.svg       # Background pattern
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── tailwind.config.ts    # Tailwind configuration
└── next.config.mjs       # Configuração do Next.js





<Image 
  src="/your-banner-image.jpg"  #mudar imagem de banner
  alt="Banner"
  fill
  className="object-cover opacity-40 mix-blend-overlay"
  priority
/>



const products = [
  {
    id: "01",
    name: "Cra1",
    description: "...",
    imageUrl: "/product1.jpg" #mudar imagem dos produtos
  },
  // ...
]