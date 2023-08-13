import { useState } from 'react'

const Header = () => (<h1>give feedback</h1>)
const Button = ({handleClick, title}) => (
  <button onClick={handleClick}>{title}</button>
)
const StatHeader = () => (<h1>statistics</h1>)
const Stat = ({title, frequency}) => (
 <tr><td>{title} {frequency}</td></tr>
)
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const avg = (good*1+bad*-1) / all 
  const positiveRate = (good/all) * 100
  if (good + neutral + bad === 0) {
    return 'No feedback given'
  }
  else {
    return (
      <table>
        <tbody>
          <Stat title='good' frequency={good}/>
          <Stat title='neutral' frequency={neutral}/>
          <Stat title='bad' frequency={bad}/>
          <Stat title='all' frequency={all}/>
          <Stat title='average' frequency={avg}/>
          <Stat title='postive' frequency={positiveRate + " %"}/>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <Header/>
      <Button handleClick={() => setGood(good+1)} title='good'/>
      <Button handleClick={() => setNeutral(neutral+1)} title='neutral'/>
      <Button handleClick={() => setBad(bad+1)} title='bad'/>
      <StatHeader/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>

  )
}

export default App