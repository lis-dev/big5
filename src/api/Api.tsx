// TODO Use transport
import { Choices, Question, ResultText } from '../types'

const server = process.env.REACT_APP_QUIZ_SERVER_URL || process.env.PUBLIC_URL

export function getQuestions(lang: string): Promise<Question[]> {
  return getData('test', 'questions.json', lang)
}

export function getChoices(lang: string): Promise<Choices> {
  return getData('test', 'choices.json', lang)
}

export function getResultTexts(lang: string): Promise<ResultText[]> {
  return getData('result', 'index.json', lang)
}

const getData = async (
  dir: 'test' | 'result',
  filename: string,
  lang: string
) => {
  return (await fetch(server + `/data/${dir}/${lang}/` + filename)).json()
}
