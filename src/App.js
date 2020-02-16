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
      (job === 'plus') ? setCommentNum(commentNum+1) : setCommentNum(commentNum-1)
    } else {
      (job === 'plus') ? setLiveSNum(liveSNum+1) : setLiveSNum(liveSNum-1)
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
      <Form changeHandler={changeHandler}/>
      <TargetView commentT={commentT} videoT={videoT}/>
    </div>
  );
}

export default App;
