import { Page as PageType } from '../types'

// Full trust to source of the page conten (it has html)
export function Page({ page }: { page: PageType }) {
  return (
    <div className="px-4 py-12 mx-auto max-w-7xl card page">
      <h1 className="text-4xl text-center pb-10 font-bold">{page.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </div>
  )
}
