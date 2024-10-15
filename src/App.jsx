// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/Header';
// import Rounds from './components/Rounds';
// import Certificate from './components/Certificate';
// import Payment from './components/Payment';
// import Footer from './components/Footer';
// import ImageLoader from './components/ImageLoader';
// import Card from './components/Card';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Header />

//       <Card
//         title="About the Event"
//         content="WebExpo is an electrifying website design competition that invites designers, developers, and digital enthusiasts from around all the branches to showcase their talent, push boundaries, and redefine the digital landscape. It's not just a competition; it's a celebration of creativity, collaboration, and the limitless possibilities of the digital realm."
//       />
//       <Card
//         title="Another Card"
//         content="Here is some more content for a different card."
//       />

//     </>
//   )
// }

// export default App

import React from "react";
import Card from "./components/Card";
import Header from './components/Header';
import poster from './poster.jpg';
import ImageNewTab from "./components/ImageNewTab";
// const imageUrl = "/web-expo.png";
// const ImageNewTab = () => {
//    // Path to the image in the public folder

 
  
// }
const handleClick = () => {
  window.open("/web-expo.png", '_blank'); // Open the image in a new tab
};


const App = () => {

 

  return (
    <>
    <Header/>
    <div className="grid grid-cols-1 justify-center gap-8 p-6 m-1">
      
      
      <Card>
        {/* ADD POSTER  */}
        <img
          // src="./assets/poster.jpg"
          src={poster}
          alt="Poster"
          className="w-full  object-cover"
        />
        <div className=" p-4">
          <h1 className="text-center text-2xl font-bold text-gray-800">
            About the Event
          </h1>
          <p className="text-gray-600 mt-2">
            WebExpo is an electrifying website design competition that invites
            designers, developers, and digital enthusiasts from around all the
            branches to showcase their talent, push boundaries, and redefine the
            digital landscape. It's not just a competition; it's a celebration
            of creativity, collaboration, and the limitless possibilities of the
            digital realm.
          </p>
        </div>
      </Card>

      {/* card-2 */}

      <Card>
        <div className=" p-4">
          <h1 className="text-center text-2xl font-bold text-gray-800">
            Why Participate?
          </h1>
          <h3 className="text-lg font-semibold text-gray-800 mt-2">
            Showcase Your Talent:
          </h3>
          <p className="text-gray-600 mt-1">
            Whether you're a student or a seasoned professional or a budding
            enthusiast, WebExpo is your platform to shine. Showcase your skills,
            flaunt your creativity, and leave a lasting impression on the
            digital landscape.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mt-2">
            Learn and Grow:
          </h3>
          <p className="text-gray-600 mt-1">
            Immerse yourself in a world of learning, experimentation, and
            growth.Gain insights from teams, receive constructive feedback, and
            elevate your craft to new heights.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mt-2">
            Be Part of a Community:
          </h3>
          <p className="text-gray-600 mt-1">
            Join a vibrant community of designers, developers, and digital
            enthusiasts who share insights for your passion, creativity, and
            innovation. Collaborate, support, and inspire one another as you
            embark on this exhilarating journey together.
          </p>
        </div>
      </Card>

      {/* card-3 */}

      <Card>
        <div className=" p-4">
          <h1 className="text-center text-2xl font-bold text-gray-800">
          Rounds!
          </h1>
          <h3 className="text-xl font-semibold text-gray-800 mt-2">
          Round 1: Web Wanderer
          </h3>
          <p className="text-gray-600 mt-1">
          Design and develop your very own website from scratch.The theme 
          for this round is open-ended. You have
           the freedom to choose any topic or concept that ignites your
            passion and sparks your imagination.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-2">
          Round 2: Web developer (Time-Bound Web Design Challenge)
          </h3>
          <p className="text-gray-600 mt-1">
          Complete a web design project within the given time frame. 
          The topic for this round will be revealed at the beginning of the challenge.
          </p>
          
        </div>
      </Card>

      {/* card-4 */}

      <Card>
        <div className=" p-4">
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-800">
          Certificate for Everyone
          </h1>
          <p className="text-gray-600 mt-1">
          Participation certificates will be awarded to all registered students 
          who contribute their creativity and enthusiasm to our event.In addition to participation certificates, 
          winners of WebExpo event will be presented with distinct certificates of achievement.
          </p>
        </div>
      </Card>

      {/* card-5 */}

      <Card>
        <div className="text-center  p-4">
          <h1 className="mt-2 text-2xl font-bold text-gray-800">
          Cash Prize
          </h1>
          <h3 className="text-red-500 mt-2 font-bold">
          All winners of our competition will be honored with cash prizes.
          </h3>
        </div>
      </Card>

      {/* card-6 */}

      <Card>
        <div className="text-center  p-4">
          <h1 className="mt-1 text-2xl font-bold text-gray-800">
          Register Now!
          </h1>
          <h3 className="text-red-500 mt-2 font-bold">
          Hurry up!!
          </h3>
          <p className="text-gray-600 mt-2 font-semibold">
          Don't miss out on the chance to showcase your talent. Click the button below to register:
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            <a href="https://forms.gle/Z5jYLVTfyqmJm1a89" target="_blank">Register Now</a>
          </button>
        </div>
      </Card>

      {/* card-7 */}


      <Card>
        <div className="text-center  p-4">
          <h1 className="mt-2 text-2xl font-bold text-gray-800">
          Payment
          </h1>
          <h3 className="text-gray-600 mt-2 font-semibold">
          Secure your spot by making the payment of <span className="font-bold">100</span>.
          </h3>
          <button
          onClick={handleClick}
           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
           Pay Now
          </button>
        </div>
      </Card>

      {/* card-8 */}


      <Card>
        <div className="p-4 px-6">
          <h1 className="mt-2 text-center text-2xl font-bold text-gray-800">
          Have questions or need assistance?
          </h1>
          <h3 className="text-gray-600 mt-2 font-semibold">
          We're here to help! Feel free to reach out to us with any queries, concerns, or feedback you may have regarding WebExpo . 
          Our team is dedicated to providing you with the support and assistance you 
          need to make the most of your experience.
          </h3>
         <h1 className="mt-2  text-2xl font-bold text-gray-800">
          Contacts
         </h1>
         <div className="px-2 py-2 m-1">
          <h1 className="font-semibold">P.Navadeep</h1>
          <h1>Contact : 7207523499</h1>
          <h1>Email : b22in014@kitsw.ac.in</h1>
         </div>
         <div className="px-2 py-2 m-1">
          <h1 className="font-semibold">B.Sathwik</h1>
          <h1>Contact : 7780365413</h1>
          <h1>Email : b22cn106@kitsw.ac.in</h1>
         </div>
        </div>
      </Card>

      <div className="text-center m-4 p-3">
        <h1>©WebExpo. All rights reserved.</h1>
      </div>
    </div>
    </>
  );
};

export default App;
