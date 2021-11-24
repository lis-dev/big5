import { useSnapshot } from 'valtio'
import './App.css'
import { Quiz } from './components/Quiz'
import { state } from './state'
import { Page } from './components/Page'

type Props = {
  lang?: string
}

export function App(props: Props) {
  const snap = useSnapshot(state)
  if (snap.page) {
    return <Page page={snap.page} />
  }

  return <Quiz lang={snap.lang}></Quiz>
}

export default App
