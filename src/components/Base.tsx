import { SelectLanguage } from './SelectLanguage'
import logo from '../logo.svg'

export function Base(props: { children: any }) {
  return (
    <section className="min-h-screen bg-gray-50 ">
      <header className="sticky top-0 bg-white shadow z-10">
        <div className="flex justify-between p-4 mx-auto max-w-7xl">
          <a
            href="/"
            className="flex items-center text-2xl items-center min-w-100 space-x-4 text-purple-900"
          >
            <img src={logo} alt="logo" className="w-12 h-12" />
            <span className="hidden md:inline">
              The Big Five Personality Test
            </span>
          </a>
          <div className="flex flex-row">
            <SelectLanguage />
          </div>
        </div>
      </header>
      <main className="p-4 mx-auto max-w-7xl">{props.children}</main>
    </section>
  )
}
