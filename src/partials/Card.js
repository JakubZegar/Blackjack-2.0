import React from 'react'

export default function Card({image, text}) {

  return (
    <img alt={text} src={image}/>
  )
}
