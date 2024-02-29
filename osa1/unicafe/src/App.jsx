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

const Statistics = ({clicks}) => {
  return (
    <div>
      <h1>
        statistics
      </h1>
      <p>good {clicks.good}</p>
      <p>neutral {clicks.neutral}</p>
      <p>bad {clicks.bad}</p>
    </div>
  )
}


const App = () => {
  const [clicks, setReviewClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const handleGoodClicks = () => {
    const newGoodClicks = {
      good: clicks.good + 1,
      neutral: clicks.neutral,
      bad: clicks.bad
    }
    console.log('New good reviews:', newGoodClicks)
    setReviewClicks(newGoodClicks)
  }

  const handleNeutralClicks = () => {
    const newNeutralClicks = {
      good: clicks.good,
      neutral: clicks.neutral + 1,
      bad: clicks.bad
    }
    console.log('New neutral reviews:', newNeutralClicks)
    setReviewClicks(newNeutralClicks)
  }

  const handleBadClicks = () => {
    const newBadClicks = {
      good: clicks.good,
      neutral: clicks.neutral,
      bad: clicks.bad + 1
    }
    console.log('New bad reviews:', newBadClicks)
    setReviewClicks(newBadClicks)
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