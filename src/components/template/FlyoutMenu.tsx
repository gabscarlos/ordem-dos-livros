import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { EnvelopeIcon, HomeIcon } from '@heroicons/react/20/solid'
import {
  Bars4Icon,
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

export interface FlyoutMenuProps {
  className?: string
}

const solutions = [
  { name: 'Séries', description: 'Conheça as séries das histórias que você ama!', href: '/series', icon: BookOpenIcon },
  { name: 'Autores', description: 'Descubra mais sobre escritores famosos, suas obras e trajetórias.', href: '/autores', icon: UsersIcon },
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
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-white focus:outline-none">
        <Bars4Icon aria-hidden="true" className="w-8 h-8 hover:text-indigo-400 transition-colors drop-shadow-md" />
      </PopoverButton>

      {/* Painel do menu */}
      <PopoverPanel
        transition
        className="absolute left-0 z-50 mt-5 w-screen max-w-xs md:max-w-md lg:max-w-lg px-4 transition-all transform origin-top-left"
      >
        <div className="w-full overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/5">
          {/* Conteúdo do menu */}
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex w-12 h-12 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 group-hover:bg-white transition-colors">
                  <item.icon aria-hidden="true" className="w-6 h-6 text-indigo-600 group-hover:text-indigo-700" />
                </div>
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Calls to Action */}
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <item.icon aria-hidden="true" className="w-5 h-5 flex-none text-gray-400" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
