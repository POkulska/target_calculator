import React from 'react'

export const Results = ({videoNum, commentNum, liveSNum, weights, videoT, commentT}) => {
  const {videoW, commentW, liveSW} = weights
  const achievedFraction = +videoNum*+videoW + +liveSNum*+liveSW + +commentNum*+commentW
  const targetFraction = (videoT < commentT) ? (videoT*videoW) : (commentT*commentW)
  console.log({achievedFraction, targetFraction, videoT, commentT, liveSNum, weights,commentNum, videoNum})
  return (
   ((videoNum && videoT) || (commentNum && commentT) || liveSNum) && (
      <div>
        <div> Remaining target : {targetFraction - achievedFraction}</div>
        <div>Achieved percent: {(achievedFraction/targetFraction*100).toFixed(2)}</div>
      </div>
    )
  )
}
