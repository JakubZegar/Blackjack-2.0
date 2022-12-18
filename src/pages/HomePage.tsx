import React from 'react'
import {MenuButton} from '../partials/components/Button'

export default function HomePage() {
  return (
    <>
        <MenuButton to="/game">Game</MenuButton>
        <MenuButton to="about">About</MenuButton>
    </>
  )
}
