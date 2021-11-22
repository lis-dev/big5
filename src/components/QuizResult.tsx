import { Component } from 'react'
import { Loading } from './Loading'
import {
  Answer,
  DomainResult,
  FacetResult,
  ResultText,
  ResultTextItem,
} from '../types'
import { getResultTexts } from '../api/Api'

import { ResultCalculator } from '../b5/ResultCalculator'
import { calculationFunction } from '../b5/CalculationFunction'

type Props = { lang: string; answers: Answer[] }

type State = {
  answers: Answer[]
  resultTexts: ResultText[]
  result: DomainResult
  lang: string
}

export class QuizResult extends Component<Props, State> {
  private resultCalculator: ResultCalculator

  state: State = {
    answers: [],
    result: {},
    resultTexts: [],
    lang: 'en',
  }

  constructor(props: Props) {
    super(props)
    this.resultCalculator = new ResultCalculator(calculationFunction)
  }

  componentDidMount() {
    getResultTexts(this.props.lang).then((res) => {
      return this.setState({ resultTexts: res })
    })
  }

  // TODO Move from here
  private resultToTextResult(result: DomainResult): ResultTextItem[] {
    let resultTextItem: ResultTextItem[] = []

    for (const textData of this.state.resultTexts) {
      let domainResultText = textData.results.find(
        (el) => el.score === result[textData.domain].result
      )
      let facets: FacetResult[] = textData.facets.map((el) => ({
        result: result[textData.domain].facets[el.facet]
          ? result[textData.domain].facets[el.facet].result
          : 'neutral',
        ...el,
      }))

      resultTextItem.push({
        domain: textData.domain,
        title: textData.title,
        shortDescription: textData.shortDescription,
        description: textData.description,
        resultText: domainResultText!.text,
        facets,
      })
    }
    return resultTextItem
  }

  render() {
    if (!this.state.resultTexts) {
      return <Loading></Loading>
    }

    let result: DomainResult = this.resultCalculator.calculate(
      this.props.answers
    )

    let resultText: ResultTextItem[] = result
      ? this.resultToTextResult(result)
      : []

    return resultText.map((data, i) => {
      return (
        <div
          key={data.domain}
          className="card w-2/3 mx-auto rounded-r-xl sm:rounded-xl overflow-hidden flex p-8 mb-8"
        >
          <div className="card-header">
            <div className="font-semibold text-gray-900">{data.title}</div>
          </div>
          <div className="card-body">{data.description}</div>
          <div className="card-body">{data.resultText}</div>
          <div className="card-body">
            <table className="table-auto border-separate">
              <tbody>
                {data.facets.map((facet, i) => (
                  <tr key={'facet' + i} className="border-separate border">
                    <td className="p-2">{facet.title}</td>
                    <td className="p-2">{facet.result}</td>
                    <td className="p-2">{facet.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    })
  }
}
