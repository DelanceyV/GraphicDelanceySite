// import Link from 'next/link'
// import { Component } from 'react'
// import Header from '../components/Header'
// import { PIECES } from '../shared/pieces'
import React from 'react';
import GalleryCard from '../components/GalleryCard';

export default function Gallery () {

  // First attempted solution. Put props in card component Not pulling from array.
  
  // const pieceImage = ({pieces}) => (
  //   <>
  //     {pieces.map(piece => (
  //       <div key={piece.image}>{piece.image}</div>
  //     ))}
  //   </>
  // );

  // const pieceLink = ({pieces}) => (
  //   <>
  //     {pieces.map(piece => (
  //       <div key={piece.linkTo}>{piece.linkTo}</div>
  //     ))}
  //   </>
  // );

  // const pieceName = ({pieces}) => (
  //   <>
  //     {pieces.map(piece => (
  //       <div key={piece.name}>{piece.name}</div>
  //     ))}
  //   </>
  // );

  // const pieceDescription = ({pieces}) => (
  //   <>
  //     {pieces.map(piece => (
  //       <div key={piece.description}>{piece.description}</div>
  //     ))}
  //   </>
  // );
  return (

    <div className="center">
      <style type="text/css">
        {`.card {
          margin: 1rem;
          padding: 1rem;
          width: 18rem;
          flex-basis: 45%;
          text-align: center;
          text-decoration: none;
          color: white;
          background: -webkit-linear-gradient(left, rgb(133, 48, 85), rgba(228, 164, 85), rgba(255, 246, 139), rgba(130, 182, 106), rgba(121, 116, 169));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-color: transparent;
          border: .01em solid rgba(255, 255, 255, 0.171);
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          } 
        `}
      </style>
      {/* <head>
        <title>Graphic Delancey</title>
        <link rel="icon" href="/Favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/rym1jja.css"
        />
      </head> */}

        <GalleryCard/>

    </div>
  );
}
