import { useState } from 'react'

const Header = () => {
  return (
    <div>
      <h1>
        give feedback
      </h1>
    </div>
  )
}

const Statistics = ({ clicks }) => {
  const { good, neutral, bad} = clicks
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positivePercentage = total === 0 ? 0 : (good/total) * 100

  return (
    <div>
      <h1>
        statistics
      </h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positivePercentage} %</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 })

  const handleGoodClicks = () => {
    setClicks({ ...clicks, good: clicks.good + 1})
  }

  const handleNeutralClicks = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1})
  }

  const handleBadClicks = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1})
  }

  return (
    <div>
      <Header />
      <button onClick={handleGoodClicks}>good</button>
      <button onClick={handleNeutralClicks}>neutral</button>
      <button onClick={handleBadClicks}>bad</button>
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App