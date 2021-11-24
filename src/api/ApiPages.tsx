import {
  Page,
  TelegraphApiNodeElement,
  TelegraphApiPageResponse,
} from '../types'

// TODO Use transport
export async function getTelegraphPage(url: string): Promise<Page> {
  url = url.replace('https://telegra.ph/', 'https://api.telegra.ph/getPage/')

  const pageResponse: TelegraphApiPageResponse = (await (
    await fetch(url + '?return_content=true')
  ).json()) as TelegraphApiPageResponse

  return new Page(
    pageResponse.result.title,
    pageContentToString({ tag: 'div', children: pageResponse.result.content })
  )
}

function pageContentToString(pageContent: TelegraphApiNodeElement): string {
  const doc = document.createElement(pageContent.tag, pageContent.attrs)

  if (pageContent.children && pageContent.children.length > 0) {
    let contentParst: string[] = []
    for (let child of pageContent.children) {
      contentParst.push(
        typeof child === 'string' ? child : pageContentToString(child)
      )
    }
    doc.innerHTML = contentParst.join('\n')
  }

  return doc.outerHTML
}
