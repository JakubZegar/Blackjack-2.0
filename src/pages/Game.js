import React from 'react'
import useFetch from '../hooks/useFetch'
import { Preloader } from '../partials/components/Preloader';
import { newDeckShuffledLink, decksCount } from '../const/api';
import GameInterface from '../partials/GameInterface';

export default function Game() {

  const {data, loaded, error} = useFetch(newDeckShuffledLink + decksCount)

  return (
      loaded !== true ? <></> : (error !== null ? <>Error</> : data.deck_id && <GameInterface deck={data} />)
  )
}
