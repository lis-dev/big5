import { Choice } from '../types';

interface Props {
  choice: Choice;
  onClick: (choice: Choice) => void;
}

export function ChoiceButton(props: Props) {
  return (
    <button className='w-full md:w-auto btn btn-light' onClick={(e) => {props.onClick(props.choice)}}>
      {props.choice.text}
    </button>
  );
}
