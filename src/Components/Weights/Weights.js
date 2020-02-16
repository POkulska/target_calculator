import React from 'react'
import './weights.style.css'

const Weights = ({weights}) => {
  const {videoW, commentW, liveSW} = weights
  return (
    <div>
      <div className="header">Weights:
        <div>video weight: {videoW}</div>
        <div>        comment weight: {commentW}
        </div>
        <div>        live stream weight: {liveSW}
        </div>
      </div>
    </div>
  )
}

export default Weights