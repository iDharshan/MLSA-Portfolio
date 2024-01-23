/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Slide3.jpg";

const imageAltText = "a picture of wall e from the movie wall e";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Heart Disease Prediction",
    description:
      "The Heart Disease Prediction Model project was a comprehensive exercise in predictive analytics, with the intent of diagnosing heart disease using various clinical parameters.",
    url: "https://github.com/iDharshan/Heart-Disease-Prediction",
  },
  {
    title: "Drug Review Sentiment Analysis",
    description:
      "Contributed to predict the sentiment of the drug Users, according to their reviews and various other features like the condition they are suffering from, the rating of the drug used, and others.",
    url: "https://github.com/iDharshan/Drug-Review-Sentiment",
  },
  {
    title: "Amazon Reviews Sentiment Analysis",
    description:
      "Amazon Reviews Sentiment Analysis: Using Wordcloud and Logistic regression, this project analyzes Amazon reviews to determine sentiment (positive/negative).",
    url: "https://github.com/iDharshan/Amazon-Review-Sentiment-Analysis",
  },
  {
    title: "Real-Time Video Dehazing",
    description:
      "Video explains the implementation of a real-time video dehazing algorithm using the FFA-Net model.",
    url: "https://youtu.be/WjI38sMLjFg?si=NaqgnuVsZuUxKgE4",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
