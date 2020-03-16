import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import { Header } from '../components/Header'

export const Home = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
      .then((res) => res.json())
      .then((json) => {
        setFlowers(json);
        console.log(json);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Header />

      <div className="flowers">

        {flowers.map((flower, flowerId) => (
          <div key={flowerId} className="card">
            <Link to={`/detailpage/${flowerId}`}>

              <img alt="flower" src={flower.cover_image} onError="null" />

              {!flower.cover_image ? <img alt="" src=".../assets/growing-plant.svg" /> : null}
              <h3>{flower.common_name}</h3>
              <p>Blooming season: {flower.blooming_season}</p>

            </Link>

            <div className="buttonContainer" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
