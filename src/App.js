import React, { useState} from 'react';
// import Video from './Components/Video/Video'
import { TargetView } from './Components/TargetView'
import { Form } from './Components/Form'
import './App.css';

function App() {
  const [videoNum, setVideoNum] = useState(0)
  const [commentNum, setCommentNum] = useState(0)
  const [liveSNum, setLiveSNum] = useState(0)

  const [videoT, setVideoT] = useState(null)
  const [commentT, setCommentT] = useState(null)


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
      if (job === 'plus') {
        setLiveSNum(liveSNum+1)
      } else if(liveSNum !== 0) {
        setLiveSNum(liveSNum-1)
      }
    }


  }

  const changeHandler = e => {
    const value = e.currentTarget.value
    const parent = e.currentTarget.dataset.parent
    if (parent === 'video') {
      setVideoT(value)
    } else if (parent === 'comment') {
      setCommentT(value)
    }
  }
  return (
    <div className="App">
      <div id="video">
        <span className="button" onClick={clickHandler} data-parent="video" data-job="minus">-</span>
        <span>Video</span>
        <span className="button" onClick={clickHandler} data-parent="video" data-job="plus">+</span>
        {' : '}{videoNum}
      </div>
      <div id="comment">
        <span className="button" onClick={clickHandler} data-parent="comment" data-job="minus">-</span>
        <span>Comment</span>
        <span className="button" onClick={clickHandler} data-parent="comment" data-job="plus">+</span>
        {' : '}{commentNum}
      </div>
      <div id="livestream">
        <span className="button" onClick={clickHandler} data-parent="livestream" data-job="minus">-</span>
        <span>Live Stream</span>
        <span className="button" onClick={clickHandler} data-parent="livestream" data-job="plus">+</span>
        {' : '}{liveSNum}
      </div>
      <Form changeHandler={changeHandler}/>
      <TargetView commentT={commentT} videoT={videoT}/>
    </div>
  );
}

export default App;
