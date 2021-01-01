import React from "react";
import posts from "./writes/posts.json";
import "./App.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="hero">
          <h1 className="hero-title">Erdem Yilmaz</h1>
          <div className="hero-social-links">
            <a href="https://www.twitter.com/eyilmazX" className="social-link">
              Twitter
            </a>
            <a href="http://www.erdemyilmaz.me" className="social-link">
              Personal Website
            </a>
          </div>
        </div>

        {posts.map((post) => {
          return (
            <div className="blog">
              <div className="blog-title">
                <a href="./test">{post.title}</a>
              </div>
              <div className="blog-content">{post.details}</div>
              <div className="blog-date">{post.date}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
