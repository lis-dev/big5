export const domains = ['N', 'E', 'A', 'C', 'O']

export type Domain = typeof domains[number]

export type Result = 'low' | 'neutral' | 'high'

export type Question = {
  text: string
  keyed: 'plus' | 'minus'
  domain: Domain
  facet: number
}

export type Choices = {
  plus: Choice[]
  minus: Choice[]
}

export type Choice = {
  text: string
  score: number
}

export type ScoreResult = {
  score: Result
  text: string
}

type Facet = {
  facet: number
  title: string
  text: string
}

export type FacetResult = Facet & {
  result: Result
}

// Bunch of texts from json file
export type ResultText = {
  domain: Domain
  title: string
  shortDescription: string
  description: string
  results: ScoreResult[]
  facets: Facet[]
}

// Result of quiz
export type ResultTextItem = {
  domain: Domain
  title: string
  shortDescription: string
  description: string
  resultText: string
  facets: FacetResult[]
}

export class Answer {
  constructor(
    public domain: Domain,
    public facet: number,
    public score: number
  ) {}
}

export type DomainFacetResult = {
  [k: number]: ResultObject
}

export type DomainResult = Record<Domain, DomainResultObject>

export type DomainResultObject = ResultObject & {
  facets: DomainFacetResult
}

export class ResultObject {
  constructor(
    public score: number,
    public count: number,
    public result: Result
  ) {}
}
