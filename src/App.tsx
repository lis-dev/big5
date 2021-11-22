import { useSnapshot } from 'valtio'
import './App.css'
import { Quiz } from './components/Quiz'
import { state } from './state'

type Props = {
  lang?: string
}

export function App(props: Props) {
  const snap = useSnapshot(state)

  return <Quiz lang={snap.lang}></Quiz>
}

export default App
