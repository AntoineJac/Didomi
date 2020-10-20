import React, { useState, useEffect } from 'react';
import './App.css';
import DidomiDemo from './components/DidomiDemo';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Challenge 1:
        </p>
        <a
          className="App-link"
          href="https://www.didomi.io/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src="https://images.saasworthy.com/didomi_5000_logo_1579848473_yn5np.png" />
        </a>
        
      </header>
      <div className="container">
  <main id='test' >
    <DidomiDemo />

    <h1 className="title">
      Welcome to <a href="https://www.didomi.io/en/"><br/>Didomi Challenge Page!</a>
    </h1>

    <p className="description">
      Please refuse the consent, then check the "Consent Preference". <br/> 
      All settings should be "Disagree" <br/>
      Then scroll down the page (more than 30%)!
    </p>

    <div className="grid">
      <a href="https://nextjs.org/docs" className="card">
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className="card">
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className="card"
      >
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h3>Deploy &rarr;</h3>
        <p>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
      <a href="https://nextjs.org/docs" className="card">
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className="card">
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className="card"
      >
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>
      <p className="description_2">
      Please check again the "Consent Preference". All settings should be now "Agree"! :)
      </p>
      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h3>Deploy &rarr;</h3>
        <p>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
      <a href="https://nextjs.org/docs" className="card">
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className="card">
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className="card"
      >
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h3>Deploy &rarr;</h3>
        <p>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div>
  </main>
</div>
  <footer>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by {'Didomi'}
    </a>
  </footer>
    </div>

  );
}

export default App;
