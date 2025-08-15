import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import homeContent from '../data/homeContent.json';

interface HomeContentData {
  heading: string;
  tagLine: string;
  btnText: string;
  introduction: {
    heading: string;
    content: string;
  };
  features: {
    heading: string;
    featureList: string[];
  };
  cta: {
    heading: string;
    content: string;
    btnText: string;
  }
}

const Home: React.FC = (props) => {

  const { language } = props;
  const [content, setContent] = useState<HomeContentData | null>(null);

  useEffect(() => {
    const selectedContent = homeContent[language as keyof typeof homeContent];
    setContent(selectedContent || homeContent.en);
  }, [language]);

  if (!content) return <p>Loading...</p>;

  return (
    <section className="home">
      <div className="home-content">
        <h1>{content.heading}</h1>
        <p className="tagline">{content.tagLine}</p>

        <button className="btn-primary">{content.btnText}</button>

        <div className="intro">
          <h2>{content.introduction.heading}</h2>
          <p>
            {content.introduction.content}
          </p>
        </div>

        <div className="features">
          <h2>{content.features.heading}</h2>
          <ul>
            {content.features.featureList.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="cta">
          <h2>{content.cta.heading}</h2>
          <p>{content.cta.content}</p>
          <button className="btn-secondary">{content.cta.btnText}</button>

        </div>
      </div>
    </section>
  );
};

export default Home;
