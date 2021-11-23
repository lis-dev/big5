import { Choice, Question } from '../types'
import { ChoiceButton } from './ChoiceButton'

interface Props {
  question: Question
  choices: Choice[]
  number: number
  totalNumber?: number
  onAnswer: (c: Choice) => void
}

export function QuestionCard(props: Props) {
  let choices = props.choices.map((choice, i) => (
    <ChoiceButton
      key={choice.score + '_' + i}
      choice={choice}
      onClick={props.onAnswer}
    />
  ))
  return (
    <div className="h-full">
      <div className="grid place-items-center md:p-10 md:w-2/3 m-auto">
        <div className="rounded-xl transform shadow-lg bg-gradient-to-r from-purple-500 to-indigo-300 -rotate-1 sm:-rotate-2 p-2">
          <div className=" card  rounded-xl sm:rounded-xl overflow-hidden flex p-8 transform rotate-1 sm:rotate-2">
            <div className="grid grid-cols-12">
              <div className="col-span-10 pb-10 text-2xl text-center">
                <div className="card-body">{props.question.text}</div>
              </div>
              <div className="col-span-2 text-2xl text-right">
                <span className="whitespace-nowrap"># {props.number}</span>
                <br />
                {props.totalNumber ? (
                  <sup className="text-sm whitespace-nowrap">
                    {' '}
                    of {props.totalNumber}
                  </sup>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="justify-end card-footer flex-col md:flex-row">
              {choices}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
