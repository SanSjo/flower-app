import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const Home = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
      .then((res) => res.json())
      .then((json) => {
        setFlowers(json);
        console.log(json);
      });
  }, []);

  return (
    <main>
      <Header />
      <div className="flowers">
        {flowers.map((flower, flowerId) => (
          <div key={flowerId} className="card">
            <Link to={`/detailpage/${flowerId}`}>
              <img className="flower-img" alt="flower" src={flower.cover_image} />
            </Link>
            <div className="mask">
              <h3 className="name">{flower.common_name}</h3>
              <p className="season">Blooming season: {flower.blooming_season}</p>
            </div>
            <div className="buttonContainer" />
          </div>
        ))}
      </div>
      <Footer />
    </main>

  );
};

export default Home;
