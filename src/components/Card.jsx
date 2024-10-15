// import React from 'react';
// import './Card.css'; // Import the CSS file for styles

// const Card = ({ title, content }) => {
//   return (
//     <div className="card">
//       <h2 className="card-title">{title}</h2>
//       <p className="card-content">{content}</p>
//     </div>
//   );
// };

// export default Card;


import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {children}
    </div>
  );
};

export default Card;
