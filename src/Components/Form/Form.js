import React from 'react'

export const Form = ({changeHandler}) => {
  const changehandle = e => {
    e.preventDefault()
    changeHandler(e)
  }
  return (
    <form action="">
      <ul>
        <li>in videos: <input data-parent="video" type="number" placeholder="Write value"/></li>
        <li>in comments:<input data-parent="comment" type="number" placeholder="Write value"/></li>
      </ul>
      <button onClick={changehandle}>submit</button>
    </form>
  )
}
