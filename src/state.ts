import { proxy } from 'valtio'

export const state = proxy({ lang: process.env.REACT_APP_DEFAULT_LANG || 'en' })
