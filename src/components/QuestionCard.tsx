import { Choice, Question } from '../types';
import { ChoiceButton } from './ChoiceButton';

interface Props {
  question: Question;
  choices: Choice[];
  number: number;
  totalNumber?: number;
  onAnswer: (c: Choice) => void;
}

export function QuestionCard(props: Props) {
  let choices = props.choices.map((choice, i) => (
    <ChoiceButton
      key={choice.score + '_' + i}
      choice={choice}
      onClick={props.onAnswer}
    />
  ));
  return (
    <div className='card w-2/3 mx-auto mb-8 rounded-r-xl sm:rounded-xl overflow-hidden flex p-8'>
      <div className='grid grid-cols-4'>
        <div className='col-span-1 p-5 text-4xl'>
          # {props.number}
          {props.totalNumber ? <sup className="text-sm"> of {props.totalNumber}</sup> : ''}
        </div>
        <div className='col-span-3 p-5 pb-10 text-2xl'>
          <div className='card-body'>{props.question.text}</div>
        </div>
      </div>
      <div className='justify-end card-footer'>{choices}</div>
    </div>
  );
}
