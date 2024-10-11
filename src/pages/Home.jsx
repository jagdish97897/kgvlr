

import React from "react";
import crausal1 from "../resource/crausal1.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";
import crausal10 from "../resource/crausal10.png";
import crausal11 from "../resource/crausal11.png";
import crausal12 from "../resource/crausal12.png";
import crausal13 from "../resource/crausal13.png";
import crausal14 from "../resource/crausal14.png";
import crausal15 from "../resource/crausal15.png";
import crausal16 from "../resource/crausal16.jpg";
import crausal17 from "../resource/crausal17.png";

import sdg1 from "../resource/sdg1.png";
import sdg2 from "../resource/sdg2.png";
import sdg3 from "../resource/sdg3.png";
import sdg4 from "../resource/sdg4.png";
import sdg5 from "../resource/sdg5.png";
import sdg6 from "../resource/sdg6.png";
import sdg7 from "../resource/sdg7.png";
import sdg8 from "../resource/sdg8.png";

import combo from "../resource/combo.jpg";
import kgvcombo from "../resource/kgvcombo.jpg";
import kgvwherehouse from "../resource/kgvwherehouse.jpg";
import kgvwherehouse1 from "../resource/kgvwherehouse1.png";
import kgvwherehouse2 from "../resource/kgvwherehouse2.jpeg";
import zamatoboy from "../resource/zamatoboy.mp4";
import zamatoboy2 from "../resource/zamatoboy2.mp4";
import zamatoboy3 from "../resource/zamatoboy3.mp4";


import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { MissionVision } from "../components/MissionVision";
import { Button2 } from "../components/Button2";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";

import news from "../resource/news_clipping.jpeg";
import news1 from "../resource/news1.jpg";
import news2 from "../resource/news2.jpg";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import bike5 from '../resource/bike_main.png';
import bike1 from '../resource/bike1.jpg';
import bike2 from '../resource/bike2.jpg';
import bike4 from '../resource/bike4.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = () => {
  const images = [
    crausal1,
    crausal2,
    crausal3,
    crausal4,
    crausal5,
    crausal6,
    crausal7,
    crausal8,
  
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">
<div className="w-full h-screen">

  <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    interval={3000}
    className="h-full"
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
        >
          {/* Left arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10"
        >
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )
    }
  >

    <div>
      <img src={crausal16} alt="Slide 1" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
    </div>
    <div>
      <img src={crausal15} alt="Slide 2" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
    </div>
    <div>
      <img src={crausal17} alt="Slide 3" className="object-cover w-full h-screen sm:h-[70vh] md:h-[80vh] lg:h-screen" />
    </div>
    
  </Carousel>
</div>



<div className="w-full h-screen flex flex-col justify-center relative items-center z-10 ">
  <img src={wave} className="w-full absolute h-full top-0 -z-10 opacity-60" />
  
  <div className="hover:scale-110 transition-all duration-500 box-content flex flex-col justify-center rounded-xl shadow-2xl h-[50%] p-6 w-[80%] min-w-[320px] max-w-[600px] items-center gap-y-6 bg-white border-4 border-yellow-200"
    style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.9)' }}
  >
    
    <div
      className="text-4xl font-extrabold text-center text-transparent bg-clip-text text-yellow-300"
      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
    >
      About Us
    </div>

    <div className="text-center text-lg max-w-[85%]">
      KGV is a smart e-mobility solution provider that aims to cater to society by reducing the immense burden on the middle and lower segments of the community, lowering commuting costs by more than 90%.
    </div>
    
    <div className="flex justify-center items-center gap-4">
      <Book />
      <Button2 />
    </div>
  </div>
</div>




<div className="p-6 rounded-lg shadow-lg">
      {/* First Row: Image and Description */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        {/* Left Side: Description */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300"
           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>KARISHMA GLOBAL VENTURES</h2>
          <p className="text-lg text-black">
          KGV, situated in the heart of NSP(Delhi), is a leading provider of innovative e-mobility solutions, dedicated to revolutionizing the transportation industry. With a focus on sustainability and efficiency, KGV offers a wide range of products and services tailored to meet the evolving needs of modern commuters. Our mission at KGV is to empower individuals and communities by providing affordable, eco-friendly alternatives to traditional modes of transportation. Through cutting-edge technology and forward-thinking initiatives, we aim to reduce carbon emissions, alleviate traffic congestion, and promote a cleaner, greener future for all. At the core of KGV's ethos is a commitment to excellence and customer satisfaction. Our team of experts works tirelessly to deliver superior quality products and exceptional service, ensuring a seamless and enjoyable experience for our valued customers. Whether you're a daily commuter, business owner, or environmental advocate, KGV has the solutions you need to drive positive change and make a meaningful impact on the world. Join us on our journey towards a brighter, more sustainable future with KGV.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src={kgvwherehouse2} alt="Illustrative" className="rounded-lg shadow-md max-w-md h-auto" />
        </div>
      </div>

{/* 
      <div className="flex flex-col md:flex-row items-center">
   
        <div className="md:w-1/2 p-4 flex justify-center">
          <img src={kgvwherehouse1} alt="Illustrative" className="rounded-lg shadow-md max-w-full h-auto" />
        </div>

        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 text-yellow-300"
           style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>KARISHMA GLOBAL VENTURE'S HEADQUARTERS</h2>
          <p className="text-lg text-black">
          KGV's headquarters, situated in the bustling city center of NSP(Delhi), serves as the epicenter of our innovative e-mobility solutions. With state-of-the-art facilities and a dynamic team of experts, we are driving forward the future of transportation with passion and purpose. Our headquarters embodies KGV's commitment to excellence and sustainability, featuring modern architecture and eco-friendly design elements. From here, we coordinate our research and development efforts, product manufacturing, and customer support services to ensure seamless operations and exceptional customer experiences. At KGV, we believe in fostering a collaborative and inclusive work environment where creativity thrives and ideas flourish. Our dedicated team works tirelessly to push the boundaries of innovation and deliver cutting-edge solutions that empower individuals and communities. Join us at KGV Headquarters and be part of a journey towards a cleaner, greener future. Together, we can revolutionize the way we move and create a more sustainable world for generations to come.
          </p>
        </div>
      </div> */}
    </div>

<MissionVision />

{/* SDG Goals Section */}
<div className="w-full min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
  {/* Background Wave */}
  <img src={wave} className="w-full h-full absolute top-0  opacity-60 object-cover" alt="Background Wave" />

  {/* Header Section */}
  <div className="text-center z-10 mb-8">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
       SDG Goals
    </h1>
    <p className="text-sm md:text-lg font-bold max-w-4xl mx-auto leading-relaxed">
    At KGV, we are committed to achieving several Sustainable Development Goals (SDGs) set by the United Nations. Our primary focus areas include providing affordable and sustainable mobility solutions, reducing carbon emissions, promoting renewable energy usage, and contributing to economic growth and social equity. Through innovation and collaboration, we aim to make a positive impact on the environment and society, creating a better and more sustainable future for all.
  </p>
  </div>

  <div className="absolute bottom-10 left-10 flex flex-col gap-4">
    <img
      src={sdg1}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 7"
    />
    <img
      src={sdg2}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 9"
    />
    <img
      src={sdg3}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 11"
    />
    <img
      src={sdg7}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 11"
    />
    
  </div>

  <div className="absolute bottom-10 right-10 flex flex-col gap-4">
    <img
      src={sdg4}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 13"
    />
    <img
      src={sdg5}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 15"
    />
    <img
      src={sdg6}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 17"
    />
    <img
      src={sdg8}
      className="w-20 h-20 sm:w-56 sm:h-40 object-cover rounded-lg border-2 border-white shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
      alt="SDG 17"
    />
  </div>
</div>



{/* Key benefits section */}
<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  <div className="font-extrabold text-4xl md:text-5xl text-yellow-300 text-center mb-8"
  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
    Key Benefits
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
    {keyBenefits.map((benefits, index) => {
      return <BenefitCard key={index} passed={benefits} />;
    })}
  </div>
</div>





<div className=" relative  justify-center gap-6 mb-8">
<h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300 text-center" style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
       Problem Statements
    </h1>
  
    <div className=" relative flex flex-wrap justify-center gap-6 mb-8 mt-16">
  <div className=" relative w-[calc(33.33% - 20px)]  ">
    <video controls className="w-full h-[550px] rounded-lg shadow-lg hover:scale-105 hover:transition-all hover:duration-500  ">
      <source src={zamatoboy} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  <div className="w-[calc(33.33% - 20px)] relative">
    <video controls className="w-full h-[550px] rounded-lg shadow-lg lg:hover:scale-105 lg:hover:transition-all lg:hover:duration-500 ">
      <source src={zamatoboy2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className="w-[calc(33.33% - 20px)] relative">
    <video controls className="w-full h-[550px] rounded-lg shadow-lg lg:hover:scale-105 lg:hover:transition-all lg:hover:duration-500 ">
      <source src={zamatoboy3} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  </div>
</div>




<div className="w-screen h-auto relative z-10 p-6 md:p-12 overflow-hidden">
  <img
    src={goldenwave}
    className="w-full h-full object-cover absolute inset-0 scale-110"
    loading="lazy"
  />
  <div className="relative flex flex-col justify-evenly gap-8 md:gap-12 max-w-[1204px] mx-auto h-full">
    <div className="text-white text-3xl md:text-5xl font-extrabold text-center">
      #KGVPhotoWall
    </div>
    <div className="flex justify-center w-full gap-6 md:gap-10">
      <div className="w-full max-w-2xl md:max-w-4xl mx-auto">
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          className="rounded-lg shadow-lg relative hover:scale-105 transition-transform duration-500"
        >
          {images.map((image, index) => (
            <div key={index}>
           
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
</div>


<div className="w-11/12 max-w-[1204px] mx-auto pt-11 pb-16">
  <div className="uppercase pb-5 text-center text-4xl md:text-5xl font-bold mb-4 text-yellow-300" 
    style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)" }}>
    Our Recent achievements...
  </div>
  <div className="w-full mx-auto pt-11 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <Link 
      className="items-center hover:scale-110 transition-all duration-500" 
      to={"https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158"}
    >
      <img src={news} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
    <Link 
      className="items-center hover:scale-110 transition-all duration-500" 
      to={"https://www.ehitavada.com/index.php?edition=NCpage&date=2024-08-29&page=3"}
    >
      <img src={news1} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
    <Link 
      className="items-center hover:scale-110 transition-all duration-500" 
      to={"https://epaper.bhaskarhindi.com/3911626/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD#page/19/1"}
    >
      <img src={news2} className="w-[300px] h-[300px] max-w-[300px] mx-auto border-black border-2 rounded-md" loading="lazy" />
    </Link>
  </div>
</div>


      <BusinessBook />
    </div>
  );
};









// import React from "react";
// import wave from "../resource/wave_final.png";
// import { useState, useEffect,useRef  } from "react";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";
// import bikeleft from "../resource/bike_left.jpeg";
// import bikeright from "../resource/bike_right.jpeg";
// import biketop from "../resource/bike_top.jpeg";
// import news from "../resource/news_clipping.png";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import bike5 from "../resource/bike_main.png";
// import heroImg from "../resource/homehero.png";
// import Slider from "react-slick";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoChevronForwardCircleSharp } from "react-icons/io5";

// import { IoChevronBackCircle } from "react-icons/io5";

// export const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const video1Ref = useRef(null);
//   const video2Ref = useRef(null);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//   const goToPreviousVideo = () => {
//     if (currentVideoIndex === 1) {
//       video2Ref.current.pause();
//     } else {
//       video1Ref.current.pause();
//     }
//     setCurrentVideoIndex((prevIndex) => Math.max(0, prevIndex - 1));
//   };

//   const goToNextVideo = () => {
//     if (currentVideoIndex === 0) {
//       video1Ref.current.pause();
//     } else {
//       video2Ref.current.pause();
//     }
//     setCurrentVideoIndex((prevIndex) => Math.min(1, prevIndex + 1));
//   };




//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? posts.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === posts.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,permalink&access_token=IGQWRQM0dndmFLSFNHTGhxUXpyUHhIUTFZAanRkcndmN1pzSll0M3RteXVaUWNMVW1KU3NVblJmdXYzYWM3QU40TnkzTDA5clMxbjQ3bXYwTGpwMFFvVWdndVF0NHFkQURZAX0lNM2dURlhKeDJJcklTdEZAvMmU5SUkZD`
//         );
//         if (res.ok) {
//           const data = await res.json();
//           setPosts(data.data);
//         } else console.log("failed to fetch");
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//     console.log(posts);
//   }, []);

//   useEffect(() => {
//     const divElement = document.getElementById("custom-slider");
//     if (divElement) {
//       divElement.style.display = "flex";
//       divElement.style.flexDirection = "row"; // Optional: Set flex direction to row
//     }
//   }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//   };
//   return (
//     <div className="w-screen  overflow-hidden  min-[320px]:w-full ">
//       {/* Hero section */}
//       {/* <div className="hero min-[320px]:w-full min-[320px]:scale-[0.25] sm:scale-[1]  flex flex-col sm:h-screen justify-center items-center" >
//       <h1 className="text-4xl font-extrabold absolute top-32 font-serif text-center z-10 min-[320px]:text-4xl min-[320px]:top-5" style={{ fontFamily: 'Anybody' }}>Welcome to the world of smart E-MOBILITY solution{" "}</h1>
//          <img
//           src={bike5}
//           className="z-40  lg:postion-relative lg:left-[270px] hover:lg:scale-[1.2] md:pt-[50px] md:pl-[14%]  md:scale-[0.8] md:left-[-0.1%] bikeimg absolute top-[4%] left-[20%] scale-75 hover:scale-100 transition-all duration-500 min-[320px]:[5%]    "
//         />
//          <div className=" h-full w-full  flex flex-col justify-center items-center sm:absolute sm:scale-[0.47] md:absolute md:scale-[0.55] lg:absolute lg:scale-[1]">
//             <h1 className="relative top-[400px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Sustainable</h1>
//            <h1 className="relative top-[150px] uppercase font-extrabold  scale-75  text-[20rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Energy</h1>
//            <h1 className=" relative top-[-150px]  uppercase  font-extrabold text-transparent  text-[15rem]  z-20" style={{textShadow: "0px 3px 0px #55ff17db, 0px 14px 10px green, 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)", WebkitTextFillColor: "transparent",
//             WebkitTextStrokeWidth: "3px",
//             WebkitTextStrokeColor: "green",
//             }} >INNOVATE</h1>
//            <h1 className=" relative top-[-300px]  uppercase  font-extrabold   text-[10rem] text-[#55ff17db] opacity-50" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>TRANSFERABILITY</h1>
//            <h1 className="relative top-[-450px]  uppercase font-extrabold text-[12rem] text-[#55ff17db] opacity-20" style={{textShadow: "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)"}}>Affordable</h1>
//          </div>
//       </div> */}
//       <div className="w-screen h-full flex flex-col items-center justify-center">
//         <img src={heroImg} className="w-screen h-screen" loading="lazy" />
//         <img src={bike5} className="absolute" />
//       </div>
//       {/* About Us */}
//       <div className="about-us w-screen  flex flex-col mb-10 justify-center relative items-center   z-10 ">
//         <img src={wave} className="w-full absolute h-full top-0 -z-10" />
//         <div className="flex flex-col  justify-center rounded-lg h-[60%]  p-4 w-full  items-center  gap-y-5 min-[320px]:max-w-[70%] md:max-w-[70%] lg:max-w-[50%] lg:p-10 bg-black bg-opacity-10">
//           <div className="text-4xl font-bold text-center">About us </div>
//           <div className="w-full text-center  sm:text-2xl min-[320px]:text-lg min-[320px]:leading-6">
//             KGV is a smart e-mobility solution provider that aims to cater to
//             the society as it reduces the immense burden on the middle and lower
//             segment of the community by reducing the cost of commuting by more
//             than 90%.{" "}
//           </div>
//           <div className="flex  justify-center items-center gap-2">
//             <Book />
//             <Button2 />
//           </div>
//         </div>
//       </div>
//       {/* Key benefits sections */}
//       <div className=" sm:h-[100%] sm:pt-[6%] sm:pb-[6%] w-full   bg-[#56e422c4]  relative z-10 p-5 md:h-100 ">
//         <div className=" md:text-[200%] sm:text-5xl font-extrabold text-5xl mb-10 text-black text-center  md:text-center md:text-2xl min-[320px]:font-bold min-[320px]:text-5xl">
//           Key Benefits
//         </div>
//         <div className=" flex flex-col justify-start h-[80%] pb-5 mx-auto max-w-[1204px] w-11/12 md:flex-wrap md:flex-row md:grid md:grid-cols-2 gap-10 ">
//           {keyBenefits.map((benefits, index) => {
//             return <BenefitCard key={index} passed={benefits} />;
//           })}
//         </div>
//       </div>
//       {/* Vision and mission */}
//       <div className="max-w-[1204px]  mx-auto flex pt-7 pb-14  gap-3 text-l  flex-col   items-center">
//         <div className="flex flex-col  rounded-lg h-[70%]  p-4 w-[90%] min-w-[300px]   gap-y-5 text-center   bg-black bg-opacity-10 py-10">
//           <div className="text-2xl font-bold uppercase mt-2 text-center">
//             {" "}
//             Vision{" "}
//           </div>

//           <div>
//             {" "}
//             We started from the bike and we’ll make its delivery shortly to all
//             the commuters worldwide.
//           </div>
//           <div>
//             Our team of engineering excellence is also working on bringing up
//             the system to each and every mode of transportation including{" "}
//             <span className="font-semibold">
//               3-wheelers, cars, LMVs, LCVs, and even HCVs.
//             </span>
//           </div>
//         </div>
//         <div className="flex flex-col  justify-start rounded-lg h-[70%] p-4 w-[90%] min-w-[300px]   gap-y-5 text-center  bg-black bg-opacity-10 py-10  ">
//           <div className="text-2xl font-bold uppercase mt-5 text-center">
//             {" "}
//             Mission{" "}
//           </div>
//           <div>
//             To empower every common man in the world to save his/her hard earned
//             moneyspent on fossil fuels
//           </div>
//           <div>
//             To save mother Earth from air and noise pollutionas well as a green
//             and cleaner environment for saving life and humanity
//           </div>
//           <div>
//             To ensure trouble free and tension free drive to each and every
//             rider reducing the anxiety of being stuckanywhere in the middle of
//             his/her journey
//           </div>
//           <div>
//             To reduce the traveling cost of companies, corporate and enterprizes
//             by more than 90% and add to their profits
//           </div>
//           <div>
//             Our plug-in hybrid was designed to get to the battery fit our and
//             can be charged inside the home
//           </div>
//         </div>
//       </div>
//       {/* photo gallery */}
//       <div className="w-full lg:h-screen  bg-black relative z-10 pb-7 ">
//         <div className="flex flex-col justify-evenly  max-w-[1204px] mx-auto pt-8 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
//             {" "}
//             #KGVPhotoWall{" "}
//           </div>
//           <div className="w-full h-1/2 flex justify-evenly items-start gap-10 min-[320px]:flex-col sm:flex-row px-5">
//             <div className="w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={bikeleft}
//                 className=" w-full  mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//             <div className="  w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={bikeright}
//                 className=" w-full   mt-1  rounded-md hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//             <div className="w-[85%] h-1/3  rounded-md opacity-90">
//               <img
//                 src={biketop}
//                 className=" w-full  mt-1  rounded-md  hover:scale-110 transition-all duration-500 min-[320px]:h-80"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* social media gallery */}
//       <div className="w-full h-screen  bg-black relative z-10 pb-7 mt-7">
//         <div className="flex flex-col justify-evenly items-center gap-3 mx-auto pt-8 h-full  ">
//           <div className="text-yellow-500 text-5xl  font-extrabold text-center min-[320px]:text-3xl">
//             {" "}
//             Social Media Gallery{" "}
//           </div>
//           <div className="border-2 w-20 border-yellow-500 inline-block mb-5"></div>
//           <div className="w-full h-full flex  justify-around items-center gap-5  px-5">
//             <div
//               className="flex w-1/12 items-center h-full"
//               onClick={handlePrev}
//             >
//               <IoChevronBackCircle className="text-white text-2xl cursor-pointer" />
//             </div>
//             <div className="w-10/12 relative">
//               {posts.map((el, index) => (
//                 <div
//                   key={el.id}
//                   className={`absolute top-0 left-0 w-full h-full  transition-transform duration-300 flex flex-row items-center justify-between ${
//                     index === currentIndex
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                   style={{
//                     transform: `translateX(${(index - currentIndex) * 100}%)`,
//                   }}
//                 >
//                   <img
//                     src={el.media_url}
//                     className="w-[40%] rounded-md"
//                     alt={`Slide ${index + 1}`}
//                   />
//                   <div className="w-[40%] flex flex-col gap-5  items-center">
//                     <p className="text-white">{el.caption}</p>
//                     <Link to={el.permalink}>
//                       <button
//                         className="p-4  rounded-lg text-white font-semibold"
//                         style={{
//                           background:
//                             "linear-gradient(45deg, #F9CE34, #EE2A7B, #6228D7)",
//                         }}
//                       >
//                         View On Instagram
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div
//               className="flex w-1/12 items-center h-full"
//               onClick={handleNext}
//             >
//               <IoChevronForwardCircleSharp className="text-white text-2xl cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* recent achievement section  */}
//       <div className="w-11/12 max-w-[1204px] mx-auto   pt-11 pb-16 flex flex-col justify-center items-center ">
//         <div className="uppercase text-3xl font-semibold pb-7 min-[320px]:text-lg min-[320px]:text-center sm:text-2xl md:text-3xl">
//           {" "}
//           Our Recent achievements...
//         </div>
//         <Link
//           className="flex justify-center items-center hover:scale-110 transition-all duration-500 "
//           to={
//             "https://hindi.news18.com/news/auto/bike-will-run-100-km-in-just-rs-14-this-kit-will-make-bike-hybrid-8111585.html?1709286970"
//           }
//         >
//           <img
//             src={news}
//             className="w-[70%]  border-black border-2 rounded-md"
//             loading="lazy"
//           />
//         </Link>
//       </div>
//       {/* Media gallery */}
//       <div className="w-full lg:h-screen relative z-10 pb-7 mt-7 bg-black">
//       <div className="flex flex-col justify-evenly items-center gap-2 max-w-[1204px] mx-auto pt-8 h-full">
//         <div className="text-yellow-500 text-5xl font-extrabold text-center min-[320px]:text-3xl">
//           Media Gallery
//         </div>
//         <div className="border-2 w-20 border-yellow-500 inline-block mb-5"></div>
//         <div className="w-full h-full flex justify-around items-center gap-10 sm:flex-row px-5">
//           <div
//             className="flex w-1/12 items-center h-full"
//             onClick={goToPreviousVideo}
//           >
//             <IoChevronBackCircle className="text-white text-2xl cursor-pointer" />
//           </div>

//           <div className="w-10/12 relative flex justify-center items-center">
//             <video
//               ref={video1Ref}
//               controls
//               width="800"
//               style={{ display: currentVideoIndex === 0 ? "block" : "none" }}
//               className="rounded-lg"
//             >
//               <source src="/video1.mp4" type="video/mp4" />
//             </video>
//             <video
//               ref={video2Ref}
//               controls
//               width="800"
//               style={{ display: currentVideoIndex === 1 ? "block" : "none" }}
//               className="rounded-lg"
//             >
//               <source src="/video2.mp4" type="video/mp4" />
//             </video>
//           </div>

//           <div
//             className="flex w-1/12 items-center h-full"
//             onClick={goToNextVideo}
//           >
//             <IoChevronForwardCircleSharp className="text-white text-2xl cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>

//       <div></div>
//       <BusinessBook />
//     </div>
//   );
// };
