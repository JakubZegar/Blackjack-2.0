import React from 'react'
import { Link } from 'react-router-dom'
import {MenuButton} from '../partials/Button'
import { HomePageContainer } from '../partials/HomePageElements'

export default function HomePage() {
  return (
    <HomePageContainer>
        <MenuButton to="/">Home</MenuButton>
        <MenuButton to="about">About</MenuButton>
    </HomePageContainer>
  )
}
