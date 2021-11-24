import { proxy } from 'valtio'
import { Page } from './types'

type CommonState = {
  lang: string
  page?: Page
}

const stateObject: CommonState = {
  lang: process.env.REACT_APP_DEFAULT_LANG || 'en',
  page: undefined,
}

export const state = proxy(stateObject)
