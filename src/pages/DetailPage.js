/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/void-dom-elements-no-children */
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PostComment } from 'components/PostComment';
import { Comments } from '../components/Comments';
import { Header } from '../components/Header'
import './details.css'

export const DetailPage = () => {
  const { flowerId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/flowers/${flowerId}.json`)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
      });
  }, []);

  const toggleIcon = () => {

  }
  return (

    <section>
      <Header />

      <div>
        <img className="detailImg" alt={details.cover_image} src={details.cover_image} />
        <h3>{details.common_name} </h3>
        <h6>Botanical name: {details.latin_name}</h6>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div> */}
      </div>
      <section className="emojiContainer">

        <div className="emoji"><i className="fas fa-seedling" />{details.blooming_season}
        </div>
        <div className="emoji">{details.sun === true ? <i className="fas fa-sun" /> : <i className="fas fa-cloud" />}</div>
        <div className="emoji" />

      </section>
      <div><p><i className="fas fa-seedling" /> Description</p>
        <p>{details.notes}</p>
      </div>
      {/* <PostComment /> */}
      <Comments key={flowerId} />
    </section>
  );
};

export default DetailPage;
