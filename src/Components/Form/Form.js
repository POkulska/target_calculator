import React, { useRef } from 'react'

export const Form = ({changeHandler}) => {
  const form = useRef(null)
  const video = useRef(null)
  const comment = useRef(null)
  const changehandle = e => {
    e.preventDefault()
    const videoVal = video.current.value;
    const commentVal = comment.current.value;
    changeHandler(videoVal, commentVal)
    form.current.reset()
  }
  return (
    <form action="" ref={form}>
      <ul>
        <li>in videos: <input ref={video} data-parent="video" type="number" placeholder="Write value"/></li>
        <li>in comments:<input ref={comment} data-parent="comment" type="number" placeholder="Write value"/></li>
      </ul>
      <button onClick={changehandle}>submit</button>
    </form>
  )
}
