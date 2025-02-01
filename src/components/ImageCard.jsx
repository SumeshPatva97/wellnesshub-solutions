import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  First  from "../image/card/about-img-1.jpg";
import  Second  from "../image/card/our-approach-img.jpg";
import  Third  from "../image/card/case-study-img-4.jpg";
import  Fourt  from "../image/card/service-entry-img-1.jpg";
import  Five  from "../image/card/gallery-4.jpg";
import  Six  from "../image/card/gallery-5.jpg";

const ImageCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const data = [
    { id: 1, image: First, title: 'Online Psychological Counselling', description: 'Unlocking your potential through Psychologist’s Expert Guidance', link: '/Online-Psychological-Counselling' },
    { id: 2, image: Second, title: 'Online Speech Therapy for Kids', description: 'Nurturing young voices through Expert Speech Therapy', link: '/Online-Speech-Therapy' },
    { id: 3, image: Third, title: 'Online Autism Therapy', description: 'Therapy driven by experts for the child’s holistic development', link: '/Online-Autism-Therapy' },
    { id: 4, image: Fourt, title: 'Online Behavioral Therapy for Kids', description: 'Nurturing young voices through Expert Speech Therapy', link: '/Online-Behavioral-Therapy' },
    { id: 5, image: Five, title: 'Aphasia Management', description: 'Empowering communication through effective aphasia management strategies', link: '/Aphasia-Management' },
    { id: 6, image: Six, title: 'Therapy Apps', description: 'Innovative Therapy Apps to empower parents and nurture child’s growth', link: '/Therapy-Apps' },
  ];

  return (
   
    <div className='container ' id="image-container">
       <div className="row">
        <div className="image-container ">
          {data.map((item, index) => (
            <div
              className={`image-card ${hoveredIndex === index ? 'hovered' : ''}  col-6 col-md-4 col-lg-2 image-single`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
                <Link to={item.link} className="image-link">
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className='image-container-gradient'></div>
              <div className="content">
                <h3>{item.title}</h3>
                {hoveredIndex === index && <p>{item.description}</p>}
              </div>
              </Link>
            </div>
          ))}
        </div>
        </div>
    </div>


    /*<div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item.link} className="block relative">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  {hoveredIndex === index && <p className="text-white text-sm mt-1">{item.description}</p>}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>*/
  );
};

export default ImageCard;
