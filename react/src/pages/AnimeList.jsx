import React, { useState } from "react";

// Example array of anime information
const animeList = [
  {
    id: 1,
    title: "Attack on Titan",
    image: "src/assets/images/attack on titan.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 2,
    title: "Chainsaw Man",
    image: "src/assets/images/chainsaw  man.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 3,
    title: "Demon Slayer",
    image: "src/assets/images/demon slayer.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 4,
    title: "Hunter x Hunter",
    image: "src/assets/images/hunter hunter.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 5,
    title: "My Hero Academia",
    image: "src/assets/images/my hero academia.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 6,
    title: "Tokyo Ghoul",
    image: "src/assets/images/tokyo ghoul.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 7,
    title: "Death Note",
    image: "src/assets/images/death note.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 8,
    title: "Jujutsu Kaisen",
    image: "src/assets/images/jujutsu kaisen.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 9,
    title: "Dragon Ball Z",
    image: "src/assets/images/dragon ball z.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 10,
    title: "Mob Psycho 100",
    image: "src/assets/images/mob.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 11,
    title: "Bleach",
    image: "src/assets/images/bleach.jpg",
    description: "Enter to view the Newest Releases.",
  },
  {
    id: 12,
    title: "Ghost in the Shell",
    image: "src/assets/images/ghost in the shell.jpg",
    description: "Enter to view the Newest Releases.",
  },
];

function AnimeList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the end index for slicing, ensuring it doesn't go out of bounds
  const endIndex = Math.min(currentIndex + 3, animeList.length);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % animeList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + animeList.length) % animeList.length
    );
  };

  // Calculate indexes for the left, middle, and right images
  const leftIndex = (currentIndex - 1 + animeList.length) % animeList.length;
  const rightIndex = (currentIndex + 1) % animeList.length;

  const getImageStyle = (index) => {
    let style = {
      margin: ' 0 .5rem'
    }
    if (index === currentIndex) {
      // Middle image
      return { ...style, height: '400px', width: '250px', objectFit: 'cover' };
    } else {
      // Left and right images
      return { ...style,  height: '350px', width: '200px', objectFit: 'cover' };
    }
  };

  const displayAnime = animeList.slice(currentIndex, endIndex);

  const carouselStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px", // Space between carousel and full list
  };

  const buttonStyle = {
    cursor: "pointer",
    padding: "10px",
    margin: "0 10px",
    background: "blue",
    color: "white",
    border: "none",
  };

  const imageStyle = {
    width: "250px", // Adjusted for responsive design
    height: "auto",
    objectFit: "cover",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const colStyle = {
    maxWidth: "50%", // Adjust for 2 columns layout
    flex: "0 0 50%",
    padding: "1rem",
  };

  // const caraImage = {
  //   heigh
  // }

  return (
    <>
      <div style={carouselStyle}>
        <button onClick={handlePrev} style={buttonStyle}>{"<"}</button>
        
        {/* Left image */}
        <img
          src={animeList[leftIndex].image}
          alt={animeList[leftIndex].title}
          style={getImageStyle(leftIndex)}
        />

        {/* Middle (current) image */}
        <img
          src={animeList[currentIndex].image}
          alt={animeList[currentIndex].title}
          style={getImageStyle(currentIndex)}
        />

        {/* Right image */}
        <img
          src={animeList[rightIndex].image}
          alt={animeList[rightIndex].title}
          style={getImageStyle(rightIndex)}
        />
        
        <button onClick={handleNext} style={buttonStyle}>{">"}</button>
      </div>
      <div className="row g-4" style={rowStyle}>
        {animeList.map((anime) => (
          <div className="col" key={anime.id} style={colStyle}>
            <div className="card h-100">
              <img
                src={anime.image}
                alt={anime.title}
                className="card-img-top"
                style={imageStyle}
              />
              <div className="card-body">
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">{anime.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AnimeList;