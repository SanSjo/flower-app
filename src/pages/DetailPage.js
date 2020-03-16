/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/void-dom-elements-no-children */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Comments } from '../components/Comments';
import { Header } from '../components/Header'
import './details.css'

export const DetailPage = ({ onToggle }) => {
  const { flowerId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://flowers-mock-data.firebaseio.com/flowers/${flowerId}.json`)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
      });
  }, []);

  return (

    <main className="detailMain">
      <Header />
      <div>
        <img className="detailImg" alt={details.cover_image} src={details.cover_image} />
      </div>

      <section className="detailInfo">

        <section className="detailContainer">
          <i className="fas fa-search-plus" />
          <div className="detailHeader">
            <h3>{details.common_name} </h3>
            <h6>Botanical name: {details.latin_name}</h6>
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div> */}
          </div>

          <div className="descriptionContainer">
            <p><i className="fas fa-seedling" /> Description:</p>
            <p>{details.notes}</p>

            <div className="emoji"><p>Season: {details.blooming_season}</p>
            </div>
            <div className="emoji"><p>Location: {details.sun === true ? <i className="fas fa-sun" /> : <i className="fas fa-cloud" />}</p></div>

          </div>
        </section>

        {/* <PostComment /> */}
        <Comments key={flowerId} />
      </section>

    </main>
  );
};

export default DetailPage;
