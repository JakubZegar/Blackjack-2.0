import React from 'react'

type Props = {
  image: string,
  text: string
}

export default function Card({image, text}: Props) {

  return (
    <div>
      <img alt={text} src={image}/>
    </div>
  )
}
