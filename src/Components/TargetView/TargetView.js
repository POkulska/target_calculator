import React from 'react'
import './target_style.css'


export const TargetView = ({videoT, commentT}) => <div className="targetView">
  <div> Target Video : {videoT}</div>
  <div> Target Comment : {commentT}</div>
</div>