import React from 'react'
import foodImage from '../assets/images/restauranfood.jpg';
import './Home.css'

function Home() {
  return (
    <div className="homepage-container">
      <div id='homepage' className="homepage">
        <div className="homepage-cards">
          <div
            className="card"
            style={{marginTop: "40px"}}
          >
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              <span
                style={{display: "block"}}
              >
                   We are a family-owned
              </span>
                Mediterranean restaurant,
              <span
                style={{display: "block"}}
              >
                focused on traditional
              </span>
                recipes served with a modern
              <span
                style={{display: "block"}}
              >
                twist.
              </span>
            </p>
            <button>Reserve a table</button>
          </div>
          <div className="card restaurant-image">
              <img id='img-restaurantFood' src={foodImage} alt="Restaurant Food" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home