import React from 'react'

export default function GameInterface({deck}) {

    console.log(deck);

  return (
    deck ? <div>{deck.deck_id}</div> : <></>
  )
}
