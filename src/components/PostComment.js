import React, { useState } from 'react';

export const PostComment = (flowerId) => {
  const [comments, setComments] = useState('');

  const handleSubmitComment = (comment) => {
    fetch(
      `https://flowers-mock-data.firebaseio.com/comments/sansjo/${flowerId}.json`,
      {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' }
      }
    )
      .catch((err) => console.log('error:', err))
      .then(() => setComments(comment));
    console.log('commen', comment)
  };

  return (
    <div>
      <form submitForm={handleSubmitComment}>
        <h1>Tell us what you think about this flower</h1>
        {/* <textarea
          id="name"

          onChange={((event) => setComment(event.target.value))}
          rows="1"
          maxLength="20" /> */}
        <textarea

          rows="3"
          maxLength="300"
          onChange={(event) => setComments(event.target.value)} />
        <button type="submit" onClick={handleSubmitComment}>
          Send comment
        </button>
      </form>
    </div>
  );
};
