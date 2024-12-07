import React from "react";
import "./App.css";
function PhotoCard({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default function App() {
  const cards = [
    {
      image:
        "https://osteonhospital.com/wp-content/uploads/2021/10/d6-1.jpg",
      title: "DR.DEVIRATHNA TUPE M.B.B.S.",
      description: "General physician and Medician consultant",
    
    },
    {
      image:
        "https://osteonhospital.com/wp-content/uploads/2021/10/d5-1.jpg",
      title: "Dr.NIKITA  PHAPHAGIRE (KUNTWAD) M.D. ANAESTHESIA",
      description: "regional anastheesia,intensive care and pain medicine consultant",
    },
    {
      image:
        "https://osteonhospital.com/wp-content/uploads/2021/10/d4.jpg",
      title: "Dr.SUPRIYA LOKHANDE, M.S. OBGY",
      description: "painless labour ,laparoscopy and infertility consultant",
    },
    {
      image:
        "https://osteonhospital.com/wp-content/uploads/2021/10/d3.jpg",
      title: "DR.PRAMOD TUPE ,MBBS,MS ORTHOPAEDIC",
      description: "fellowship in MIS Spine surgery(Mumbai ,Nanavati Hospital )(minimally ,invasive)",
    },
    {
      image:
        "https://osteonhospital.com/wp-content/uploads/2021/10/d2.jpg",
      title: "DR.VIKAS KUNTHWAD ,MBBS,DNB(ORTHO),HINDUJA HOSPITAL,MUMBAI.",
      description: "fellowship in shoulder ,knee surgery, & sport trauma(Banglore) ",
    },
    {
      image:
        "https://osteonhospital.com/wp-content/uploads/2021/10/d1.jpg",
      title: "DR.NITIN MUNDHE ,MBBS D.ORTHO(COOPER HOSPITAL MUMBAI)",
      description: "Consultant orthopeadic at Osteon arthroscopy &spine clinic",
    },
  ];

  return (
    <>
      <div className="App">
        {cards.map((card, index) => (
          <PhotoCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            Instaicon={card.Instaicon}
          />
        ))}
      </div>
    </>
  );
}