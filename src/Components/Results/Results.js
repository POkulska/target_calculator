import React from 'react'
import './results_style.css'

export const Results = ({videoNum, commentNum, liveSNum, weights, videoT, commentT}) => {
  const {videoW, commentW, liveSW} = weights
  const achievedFraction = +videoNum*+videoW + +liveSNum*+liveSW + +commentNum*+commentW
  const targetFraction = (videoT < commentT) ? (videoT*videoW) : (commentT*commentW)
  console.log({achievedFraction, targetFraction, videoT, commentT, liveSNum, weights,commentNum, videoNum})
  return (
   ((videoNum && videoT) || (commentNum && commentT) || liveSNum) && (
      <div className="resultsDisplay">
       <section className="achieved">
        <div>Achieved target: {(achievedFraction)}</div>
        <div>Achieved percent: {(achievedFraction/targetFraction*100).toFixed(2)} % </div>
       </section>

       <section className="remaining">
        <div >Remaining target percent:  {((targetFraction - achievedFraction)/targetFraction*100).toFixed(2)} %</div>
        <div> Remaining target : {targetFraction - achievedFraction}</div>
      </section>

        

        
      </div>
    )
  )
}
