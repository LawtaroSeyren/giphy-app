import React from 'react';

const GifCard = ({ title, url, category }) => {
  
  let titleCard = ""

  let newTitle = title.trim();

  if (newTitle == "" ) {
    titleCard = (category + " GIF")
  } else {
    titleCard = newTitle
  }

  return (
    <a href={url} target="_blank" className="gifLink">
      <div className="card">
        <div className="image-container">
          <img src={url} alt={title} className="gif-image" />
        </div>
        <div className="title-bar">
          <p className="title-text">
            {titleCard}
          </p>
        </div>
      </div>
    </a>
  );
};

export default GifCard;
