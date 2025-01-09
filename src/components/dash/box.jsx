import React from 'react'
import './box.css'
function Box({ title, fig, perc, bg }) {
  return (
    <div style={{ backgroundColor: bg }} className={`box flex flex-col justify-start text-left p-4 `} >
      <h4 className="text-left">{title}</h4>
      <div className="num flex">
        <span className="text-3xl font-bold m-0">{fig}</span><span>{perc}</span>
      </div>
    </div>
  )
}

export default Box
