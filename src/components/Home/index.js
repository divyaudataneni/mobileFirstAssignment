
import React, { useState } from 'react';
import './index.css'

function Home() {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10');
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className='text-center'>Jokes Home Page</h2>
          <button className="btn btn-primary mt-3" onClick={fetchJokes}>Fetch Jokes</button>
          <div className="mt-3">
            <h4>Jokes:</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Joke</th>
                </tr>
              </thead>
              <tbody>
                {jokes.map((joke, index) => (
                  <tr key={index}>
                    <td>{joke.id}</td>
                    <td>{joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
