import React from 'react'
import './weights_style.css'

const Weights = ({weights}) => {
  const {videoW, commentW, liveSW} = weights
  return (
    <div className="header">
      <div >Weights:
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