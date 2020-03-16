import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from './Form'
import './comments.css'

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const [postMessage, setPostMessage] = useState('')

  const { flowerId } = useParams();

  useEffect(() => {
    fetch(
      `https://flowers-mock-data.firebaseio.com/comments/sansjo/${flowerId}.json`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json !== null) {
          setComments(json);
        }
      })
  }, [flowerId, postMessage]);

  const handleSubmitComment = (comment) => {
    fetch(
      `https://flowers-mock-data.firebaseio.com/comments/sansjo/${flowerId}.json`,
      {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' }
      }
    )
      .then(() => {
        console.log('postat')
        window.location.reload()
      })
      .catch((err) => console.log('error:', err))
      .then(() => setPostMessage(comment));
  };

  return (
    <article className="commentsContainer">
      <Form submitForm={handleSubmitComment} />
      <div className="comments">
        {Object.values(comments).map((comment) => (
          <div>
            <p className="comment"><i className="far fa-comment-dots" /> {comment.comment}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Comments
