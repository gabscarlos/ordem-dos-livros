import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { EnvelopeIcon, HomeIcon } from '@heroicons/react/20/solid'
import {
  Bars4Icon,
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
  CurrencyDollarIcon,
  MapIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export interface FlyoutMenuProps {
  className?: string
}

const solutions = [
  { name: 'Séries', description: 'Conheça as séries das histórias que você ama!', href: '/series', icon: BookOpenIcon },
  { name: 'Autores', description: 'Descubra mais sobre escritores famosos, suas obras e trajetórias.', href: '/autores', icon: UsersIcon },
  { name: 'Guias', description: 'Listas para escolher a próxima série', href: '/guias', icon: MapIcon },
  { name: 'Blog', description: "Resenhas de Livros, Listas Temáticas, Curiosidades Literárias e Mais", href: '/blog', icon: ChatBubbleBottomCenterIcon },
  { name: 'Mais Vendidos', description: 'Explore os livros mais vendidos do mercado', href: '/mais-vendidos', icon: CurrencyDollarIcon },
]
const callsToAction = [
  { name: 'Pagina Inicial', href: '/', icon: HomeIcon },
  { name: 'Contato', href: '/contato', icon: EnvelopeIcon },
]

export default function FlyoutMenu(props: FlyoutMenuProps) {
  return (
    <Popover className={`relative ${props.className}`}>
      {/* Botão que abre o menu */}
      <PopoverButton
        aria-label="Abrir menu"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full text-areia-900 hover:bg-areia-200/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-marca-400 transition-colors"
      >
        <Bars4Icon aria-hidden="true" className="w-6 h-6" />
      </PopoverButton>

      {/* Painel do menu */}
      <PopoverPanel
        transition
        className="absolute left-0 z-50 mt-3 w-[calc(100vw-2rem)] max-w-sm transition-all transform origin-top-left"
      >
        <div className="w-full overflow-hidden rounded-2xl bg-areia-50 shadow-2xl ring-1 ring-areia-900/10">
          {/* Conteúdo do menu */}
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-areia-50 transition-colors">
                <div className="flex w-12 h-12 flex-shrink-0 items-center justify-center rounded-lg bg-marca-50 group-hover:bg-white transition-colors">
                  <item.icon aria-hidden="true" className="w-6 h-6 text-marca-600 group-hover:text-marca-700" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-areia-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-sm text-areia-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Calls to Action */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-areia-900/5 bg-areia-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-areia-900 hover:bg-areia-100 transition-colors"
              >
                <item.icon aria-hidden="true" className="w-5 h-5 flex-none text-areia-400" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
