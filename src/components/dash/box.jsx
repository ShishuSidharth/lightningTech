import React from 'react'
import './box.css'
function Box(props) {
  return (
    <div className="box flex flex-col justify-start text-left">
      <h4 className="text-left">{props.title}</h4>
      <div className="num flex">
        <span>{props.fig}</span><span>{props.perc}</span>
      </div>
    </div>
  )
}

export default Box
