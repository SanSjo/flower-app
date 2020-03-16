import React, { useState } from 'react'
import './form.css'

export const Form = (props) => {
  const [comment, setComment] = useState('')

  const handleSubmitComment = (event) => {
    event.preventDefault()
    props.submitForm(comment)
    setComment('')

    if (comment < 5) {
      return alert('Message needs to have at least 5 letters')
    }
  }

  return (
    <div className="formContainer">
      <form>

        <label>Comment:</label>
        <div className="input">

          <input
            type="text"
            rows="1"
            maxLength="300"
            resize="false"
            onChange={(event) => setComment(event.target.value)} />

          <button type="submit" onClick={handleSubmitComment}>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}