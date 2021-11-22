import { SelectLanguage } from './SelectLanguage'

export function Base(props: { children: any }) {
  return (
    <section className="min-h-screen bg-gray-50 ">
      <header className="sticky top-0 bg-white shadow z-10">
        <div className="flex flex-row items-center justify-between p-4 mx-auto max-w-7xl">
          <div className="justify-center logo items-center">
            <a href="/">The Big Five Personality Test</a>
          </div>
          <div className="flex flex-row">
            <SelectLanguage />
          </div>
        </div>
      </header>
      <main className="p-4 mx-auto max-w-7xl">{props.children}</main>
    </section>
  )
}
