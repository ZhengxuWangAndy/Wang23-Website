import React, { useState, useEffect } from 'react';
import '../styles/About.css';

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Andy Wang",
      role: "Founder",
      bio: "Andy is part coder, part problem-solver, and part tech enthusiast. I believe software shouldn’t just work; it should work elegantly, scale smartly, and maybe even make you smile once in a while. At Wang23, we blend creativity with solid engineering to deliver professional software services—turning complex ideas into reliable, scalable solutions that actually work."
    },
    {
      name: "Priscilla Sheetal",
      role: "Web Design Intern",
      bio: "Priscilla is a UX designer and researcher who loves creating experiences that feel simple, thoughtful, and humane. With a background that blends interaction design, fashion, and visual storytelling, she brings creativity and problem-solving together in unique ways. Outside of design work, she’s often at the movies, photographing, or cooking."
    },
    {
      name: "Ragasree Thatipamula",
      role: "Software Engineer Intern",
      bio: "Ragasree recently graduated with a master’s in computer science and is a frontend developer passionate about blending design with code. She creates sleek, modern, and responsive interfaces that prioritize user experience. Always eager to learn, she loves bringing creative ideas to life on the web."
    },
    {
      name: "Ro-Ann Shen",
      role: "Web Design Intern",
      bio: "Ro-Ann is a recent M.P.S. graduate from Cornell University’s Information Science program. When she’s not on Figma, she can often be found curating playlists on Spotify and baking cinnamon rolls :)"
    },
    {
      name: "Sai Ganesh Bhukya",
      role: "Software Engineer Intern",
      bio: "Full stack dev & ML enthusiast who loves building AI-powered apps, scaling systems, and turning ideas into real-world solutions. Always curious, always learning."
    },
    {
      name: "Sam Abalayan",
      role: "Web Design Intern",
      bio: "Sam is a current student studying B.S and M.S in Computer Science at University of Southern California. They enjoy collecting CDs and vinyls as music is a great inspiration when designing!"
    },
    {
      name: "Sumit Gawali",
      role: "Web Design Intern",
      bio: "Sumit is a UX designer with a background in architecture and an M.P.S. in Information Science from Cornell. He designs human-centered digital experiences across platforms. Outside of work, he enjoys cultural tours and hiking trails."
    }
  ];

  const maxSlide = teamMembers.length - (window.innerWidth > 768 ? 2 : 1);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev >= maxSlide ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev <= 0 ? maxSlide : prev - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, maxSlide]);

  return (
    <div className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      
      <div className="carousel-container">
        <img src="/icons/Leftbutton.svg" alt="Previous" className="carousel-nav-button" onClick={prevSlide} />
        <div className="cards-wrapper">
          <div className="cards-container" style={{ transform: `translateX(calc(-${currentSlide} * (50% + 1rem)))` }}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-card-header">
                  <div className="team-avatar" />
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <div className="team-socials">
                      <img src="/icons/Linkedin.svg" alt="Linkedin" className="social-icon" />
                      <img src="/icons/Website.svg" alt="Website" className="social-icon" />
                      <img src="/icons/Github.svg" alt="Github" className="social-icon" />
                    </div>
                  </div>
                </div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <img src="/icons/Rightbutton.svg" alt="Previous" className="carousel-nav-button" onClick={nextSlide} />
      </div>
      <style>{`
      @media (max-width: 768px) {
        .cards-container {
          gap: 1rem;
          transform: translateX(calc(-${currentSlide} * (100% + 1rem))) !important;
        }
      }`}</style>
    </div>
  );
};

const About: React.FC = () => (
  <div className="about-container">
    <TeamSection />
  </div>
);

export default About;
