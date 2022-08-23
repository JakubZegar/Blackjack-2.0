import React from 'react'

export default function Card({image, text}) {

  return (
    <div>
      <img alt={text} src={image}/>
    </div>
  )
}
