import { state } from '../state'
import { useSnapshot } from 'valtio'
import { languages } from '../languages'

export function SelectLanguage() {
  const snap = useSnapshot(state)
  return (
    <select
      className="form-select mx-auto"
      value={snap.lang}
      onChange={(e) => (state.lang = e.target.value)}
    >
      {Object.keys(languages).map((code) => {
        return (
          <option key={code} value={code}>
            {languages[code]}
          </option>
        )
      })}
    </select>
  )
}
