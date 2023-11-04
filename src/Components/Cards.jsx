import React from 'react'
import './cards.scss'

export default function Cards(props) {

    const {body,id,title} = props.object;
  return (
    <div onClick={()=>props.delCard(id)} className='block'>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='content'>
        <p>{body}</p>
      </div>
    </div>
  )
}
