import type {SyntheticEvent} from 'react'

export default function StopPropagation() {
  const OnDivClick = (e: SyntheticEvent) => console.log('click event bubbles on <div>')
  const onButtonClick = (e: SyntheticEvent) => {
    console.log('mouse click occurs on <button> and call stopPropagation')
    e.stopPropagation()
  }
  return (
    <div onClick={OnDivClick}>
      <p>StopPropagation</p>
      <button onClick={onButtonClick}>Click Me and stop event propagation</button>
    </div>
  )
}
