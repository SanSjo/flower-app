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
    <div>
      <form>
        <label>Tell us what you think about this flower</label>
        <textarea
          rows="1"
          maxLength="300"
          onChange={(event) => setComment(event.target.value)} />
        <button type="submit" onClick={handleSubmitComment}>
          Send comment
        </button>
      </form>
    </div>
  )
}