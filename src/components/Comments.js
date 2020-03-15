import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from './Form'

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

        console.log(json);
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postMessage]);

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

  console.log(comments);

  const result = Object.keys(comments).map((key) => {
    return [key, comments[key]];
  });
  return (
    <article>
      <Form submitForm={handleSubmitComment} />
      {/* <form>
        <h1>Tell us what you think about this flower</h1>

        <textarea
          rows="3"
          maxLength="300"
          onChange={(event) => setComments(event.target.value)} />
        <button type="submit" onClick={handleSubmitComment}>
          Send comment
        </button>
      </form> */}

      <h3> Comments</h3>
      {Object.values(comments).map((comment) => (

        <div>

          <p>{comment.comment}</p>

        </div>
      ))}
    </article>
  );
};

export default Comments

