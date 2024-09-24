

import React from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const card = {
    title: 'Card Title',
    text: 'Card text',
    href: 'https://netology.ru/',
    btnTitle: 'Go to Netology',
    width: '20rem',
    src: [
      "https://avatars.githubusercontent.com/u/25052038?s=200&v=4",
      "https://avatars.githubusercontent.com/u/25052038?s=200&v=4"
    ],
  }

  return (
    <React.Fragment>
      <Card {...card}>
        {card.src.map((src) => <img src={src} alt="netology" className="card-img-top"/>)}
      </Card>

      <Card {...card}>

      </Card>
    </React.Fragment>
  )
}

export default App
