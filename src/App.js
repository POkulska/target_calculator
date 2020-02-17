import React, { useState, useEffect } from 'react';
import Weights from './Components/Weights/Weights'
import { Results } from './Components/Results'
import { TargetView } from './Components/TargetView'
import { Form } from './Components/Form'
import './App.css';

function App() {
  const [videoNum, setVideoNum] = useState(0)
  const [commentNum, setCommentNum] = useState(0)
  const [liveSNum, setLiveSNum] = useState(0)
  const [videoT, setVideoT] = useState(null)
  const [commentT, setCommentT] = useState(null)
  const [weights, setWeights] = useState({
    videoW: 0,
    commentW: 0,
    liveSW: 0,
  })

  useEffect(() => {
    let videoW;
    let commentW;
    let liveSW;
    if (videoT && commentT && videoT < commentT) {
      videoW = +videoT / videoT;
      commentW = +(videoT / commentT).toFixed(2);
      liveSW = 1.5 * +videoW;
    } else if (videoT && commentT &&  videoT > commentT) {
      videoW = +(videoT / commentT).toFixed(2);
      commentW = +commentT / commentT;
      liveSW = 1.5 * +videoW;
    } else if (videoNum && commentNum) {
      videoW = 1;
      commentW = 1;
      liveSW = 1.5;
    }
    console.log('weights reset')
    setWeights({
      videoW,
      commentW,
      liveSW
    })
  }, [videoT, videoNum, commentT, commentNum, liveSNum])

  const clickHandler = e => {
    const parent = e.currentTarget.dataset.parent
    const job = e.currentTarget.dataset.job;

    if (parent === 'video' && videoNum >= 0) {
      if (job === 'plus') {
        setVideoNum(videoNum+1)
      } else if(videoNum !== 0) {
        setVideoNum(videoNum-1)
      }
    } else if (parent === 'comment') {
      if (job === 'plus') {
        setCommentNum(commentNum+1)
      } else if(commentNum !== 0) {
        setCommentNum(commentNum-1)
      }
    
    } else {
      console.log({liveSNum})
      if (job === 'plus') {
        setLiveSNum(liveSNum+1)
      } else if(liveSNum !== 0) {
        setLiveSNum(liveSNum-1)
      }
    }
  }

  const changeHandler = (videoVal, commentVal) => {
    if (videoVal) {
      setVideoT(+videoVal)
    }
    if (commentVal) {
      setCommentT(+commentVal)
    }
  }
  return (
    <div className="App">
      <div className="main"><h1>TARGET COUNTER</h1></div>
      <div className="flexContainer">
      <Form changeHandler={changeHandler}/>
      <TargetView commentT={commentT} videoT={videoT}/>
      <Weights weights={weights}/>
      </div>

      <div id="video">
        <span className="button" onClick={clickHandler} data-parent="video" data-job="minus">-</span>
        <span className="text">Video</span>
        <span className="button" onClick={clickHandler} data-parent="video" data-job="plus">+</span>
        {' : '}{videoNum}
      </div>
      <div id="comment">
        <span className="button" onClick={clickHandler} data-parent="comment" data-job="minus">-</span>
        <span className="text">Comment</span>
        <span className="button" onClick={clickHandler} data-parent="comment" data-job="plus">+</span>
        {' : '}{commentNum}
      </div>
      <div id="livestream">
        <span className="button" onClick={clickHandler} data-parent="livestream" data-job="minus">-</span>
        <span className="text">Live Stream</span>
        <span className="button" onClick={clickHandler} data-parent="livestream" data-job="plus">+</span>
        {' : '}{liveSNum}
      </div>

      <Results commentNum={commentNum} liveSNum={liveSNum} weights={weights} LiveSNum={liveSNum} videoNum={videoNum} videoT={videoT} commentT={commentT} />
    </div>
  );
}

export default App;
