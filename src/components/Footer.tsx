import React, { MouseEvent } from 'react'
import { getTelegraphPage } from '../api/ApiPages'
import { state } from '../state'
import { PageLinks } from '../types'

// TODO Unharcode
const termPages: PageLinks[] = [
  { title: 'Terms', url: 'https://telegra.ph/Terms-and-Conditions-11-23' },
  { title: 'Privacy', url: 'https://telegra.ph/Privacy-Policy-11-23-13' },
]

export function Footer() {
  return (
    <footer className="px-4 py-12 mx-auto max-w-7xl">
      <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">
          © Copyright {new Date().getFullYear()}{' '}
          <a href="https://github.com/lis-dev">lis-dev</a>
        </p>
        <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
          {termPages.map((link) => (
            <a
              key={link.title}
              onClick={(e) => {
                goToPage(e)
              }}
              href={link.url}
              className="text-sm text-gray-600 transition hover:text-primary"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
async function goToPage(e: MouseEvent) {
  e.preventDefault()
  const href = (e.target as any).getAttribute('href')
  state.page = await getTelegraphPage(href)
}
