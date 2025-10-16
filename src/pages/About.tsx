import React, { useState, useEffect, useCallback, useRef } from "react";
import "../styles/About.css";
const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Andy Wang",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/zhengxuwang/",
      website: "",
      github: "",
      bio: "Andy is part coder, part problem-solver, and part tech enthusiast. I believe software shouldn’t just work; it should work elegantly, scale smartly, and maybe even make you smile once in a while. At Wang23, we blend creativity with solid engineering to deliver professional software services—turning complex ideas into reliable, scalable solutions that actually work."
    },
    {
      name: "Ghanashyam Vagale Srinivas",
      role: "Web Developer Intern",
      linkedin: "https://www.linkedin.com/in/ghanashyamvagale",
      website: "www.ghanashyamvagale.com",
      github: "",
      bio: "As a dedicated Computer Science graduate student at Northeastern University, Ghanashyam specializes in Artificial Intelligence and Web Development."
    },
    {
      name: "Priscilla Sheetal",
      role: "Web Design Intern",
      linkedin: "https://www.linkedin.com/in/priscilla-s-097b89b3/",
      website: "",
      github: "",
      bio: "Priscilla is a UX designer and researcher who loves creating experiences that feel simple, thoughtful, and humane. With a background that blends interaction design, fashion, and visual storytelling, she brings creativity and problem-solving together in unique ways. Outside of design work, she’s often at the movies, photographing, or cooking."
    },
    {
      name: "Ragasree Thatipamula",
      role: "Software Engineer Intern",
      linkedin: "https://www.linkedin.com/in/ragasree-thatipamula-4a83a2184/",
      website: "https://ragasree-thatipamula.netlify.app/",
      github: "https://github.com/ragasree123/",
      bio: "Ragasree recently graduated with a master’s in computer science and is a frontend developer passionate about blending design with code. She creates sleek, modern, and responsive interfaces that prioritize user experience. Always eager to learn, she loves bringing creative ideas to life on the web."
    },
    {
      name: "Akhil Reddy Motakatla",
      role: "Software Engineer Intern",
      linkedin: "https://www.linkedin.com/in/akhil-reddy-motakatla/",
      website: "",
      github: "https://github.com/akhilMotakatla",
      bio: "He’s a versatile Software Engineer with over 4 years of experience in .NET, C#, ASP.NET Core, and Azure. Recently completing his Master’s in Computer Science from the University of North Texas, he’s passionate about building scalable web and cloud solutions"
    },
    {
      name: "Ro-Ann Shen",
      role: "Web Design Intern",
      linkedin: "https://www.linkedin.com/in/ro-ann-shen/",
      website: "",
      github: "",
      bio: "Ro-Ann is a recent M.P.S. graduate from Cornell University’s Information Science program. When she’s not on Figma, she can often be found curating playlists on Spotify and baking cinnamon rolls :)"
    },
    {
      name: "Sai Ganesh Bhukya",
      role: "Software Engineer Intern",
      linkedin: "https://www.linkedin.com/in/sai-ganesh-bhukya-08a409160/",
      website: "",
      github: "https://github.com/saiganeshbhukya",
      bio: "Full stack dev & ML enthusiast who loves building AI-powered apps, scaling systems, and turning ideas into real-world solutions. Always curious, always learning."
    },
    {
      name: "Sam Abalayan",
      role: "Web Design Intern",
      linkedin: "https://www.linkedin.com/in/samantha-abalayan",
      website: "https://samabalayan.wixsite.com/portfolio",
      github: "",
      bio: "Sam is a current student studying B.S and M.S in Computer Science at University of Southern California. They enjoy collecting CDs and vinyls as music is a great inspiration when designing!"
    },
    {
      name: "Sumit Gawali",
      role: "Web Design Intern",
      linkedin: "https://www.linkedin.com/in/sumit-gawali227/",
      website: "",
      github: "",
      bio: "Sumit is a UX designer with a background in architecture and an M.P.S. in Information Science from Cornell. He designs human-centered digital experiences across platforms. Outside of work, he enjoys cultural tours and hiking trails."
    }
  ];

  const maxSlide = teamMembers.length - (window.innerWidth > 768 ? 2 : 1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
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
        <img
          src="/icons/Leftbutton.svg"
          alt="Previous"
          className="carousel-nav-button"
          onClick={prevSlide}
        />
        <div className="cards-wrapper">
          <div
            className="cards-container"
            style={{
              transform: `translateX(calc(-${currentSlide} * (50% + 1rem)))`
            }}
          >
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-card-header">
                  <div className="team-avatar" />
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <div className="team-socials">
                      {member?.linkedin && (
                        <a href={member.linkedin} target="_blank">
                          <img
                            src="/icons/Linkedin.svg"
                            alt="Linkedin"
                            className="social-icon"
                          />
                        </a>
                      )}
                      {member?.website && (
                        <a href={member.website} target="_blank">
                          <img
                            src="/icons/Website.svg"
                            alt="Website"
                            className="social-icon"
                          />
                        </a>
                      )}
                      {member?.github && (
                        <a href={member.github} target="_blank">
                          <img
                            src="/icons/Github.svg"
                            alt="Github"
                            className="social-icon"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="/icons/Rightbutton.svg"
          alt="Previous"
          className="carousel-nav-button"
          onClick={nextSlide}
        />
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

/* ===================== About with TeamSection added ===================== */
const GAP_PX = 28;
const MOBILE_Q = "(max-width: 720px)";
const AUTOPLAY_MS = 3000;

const About: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean>(() => matchMedia(MOBILE_Q).matches);
  const autoplayRef = useRef<number | null>(null);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.querySelector<HTMLElement>(".vc-card");
    if (!first) return 0;
    return first.offsetWidth + GAP_PX; // scroll exactly one card
  }, []);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth - 1; // -1 for rounding
    setCanPrev(track.scrollLeft > 0);
    setCanNext(track.scrollLeft < max);
  }, []);

  const scrollByStep = useCallback(
    (dir: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;

      const step = getStep() || track.clientWidth * 0.9;
      const max = track.scrollWidth - track.clientWidth;
      const next = track.scrollLeft + dir * step;

      // Wrap around only on mobile
      if (isMobile) {
        if (next > max - 2) track.scrollTo({ left: 0, behavior: "smooth" });
        else if (next < 0) track.scrollTo({ left: max, behavior: "smooth" });
        else track.scrollBy({ left: dir * step, behavior: "smooth" });
      } else {
        track.scrollBy({ left: dir * step, behavior: "smooth" });
      }

      window.setTimeout(updateArrows, 320);
    },
    [getStep, isMobile, updateArrows]
  );

  // Breakpoint / resize
  useEffect(() => {
    updateArrows();
    const onResize = () => setIsMobile(matchMedia(MOBILE_Q).matches);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateArrows]);

  // Autoplay on mobile
  useEffect(() => {
    if (!isMobile) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = null;
      return;
    }
    autoplayRef.current = window.setInterval(() => scrollByStep(1), AUTOPLAY_MS);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
  }, [isMobile, scrollByStep]);

  // Pause autoplay on user interaction; resume after a delay
  useEffect(() => {
    if (!isMobile) return;
    const track = trackRef.current;
    if (!track) return;

    let resumeTimer: number | null = null;
    const pause = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = null;
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        autoplayRef.current = window.setInterval(() => scrollByStep(1), AUTOPLAY_MS);
      }, 2500);
    };

    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("wheel", pause, { passive: true });
    track.addEventListener("scroll", () => window.setTimeout(updateArrows, 50), { passive: true });

    return () => {
      track.removeEventListener("touchstart", pause as any);
      track.removeEventListener("wheel", pause as any);
      if (resumeTimer) clearTimeout(resumeTimer);
    };
  }, [isMobile, scrollByStep, updateArrows]);

  return (
    <div className="about-page">
      {/* Top heading (full-bleed gradient behind) */}
      <section className="about-header">
        <h1 className="section-title">About</h1>
        <p>Together, Wang23 filler filler filler</p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2 className="section-title">Our Story</h2>
        <p>
          Wang23 is a creative technology company dedicated to making digital
          transformation simple and effective. Our philosophy is: “Working with
          Wang23 is as easy as 1-2-3.” We help businesses and individuals turn
          ideas into impactful digital experiences.
        </p>
      </section>

      <div className="our-story-media">
        <img
          src="/our_story_image.png"
          alt="Our team collaborating"
          width={820}
          height={389}
          className="our-story-img"
        />
      </div>

      {/* Our Values */}
      <section className="values-section no-frame">
        <h2 className="section-title">Our Values</h2>

        {/* Left arrow */}
        <button
          className="vc-nav vc-left"
          aria-label="Previous"
          onClick={() => scrollByStep(-1)}
          disabled={!canPrev && !isMobile}
          type="button"
        >
          <img className="vc-icon-img" src="/icons/Leftbutton.svg" alt="" aria-hidden="true" />
        </button>

        {/* Scroll viewport */}
        <div className="vc-viewport">
          <div className="vc-track" ref={trackRef}>
            <article className="vc-card">
              <div className="vc-body">
                Always pushing boundaries to deliver fresh, effective solutions.
              </div>
              <footer className="vc-bar">Innovation</footer>
            </article>

            <article className="vc-card">
              <div className="vc-body">
                Making complex digital tools easy and intuitive.
              </div>
              <footer className="vc-bar">Simplicity</footer>
            </article>

            <article className="vc-card">
              <div className="vc-body">
                Designing with imagination to create unique experiences.
              </div>
              <footer className="vc-bar">Creativity</footer>
            </article>
          </div>
        </div>

        {/* Right arrow */}
        <button
          className="vc-nav vc-right"
          aria-label="Next"
          onClick={() => scrollByStep(1)}
          disabled={!canNext && !isMobile}
          type="button"
        >
          <img className="vc-icon-img" src="/icons/Rightbutton.svg" alt="" aria-hidden="true" />
        </button>
      </section>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default About;