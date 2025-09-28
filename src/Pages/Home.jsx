import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [text, setText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const texts = [
    'Crafting seamless digital experiences through code and design',
    'Building innovative web solutions with modern technologies',
    'Turning ideas into reality with creative development'
  ];
  const period = 2000;
  const speed = 50;

  useEffect(() => {
    let ticker = null;
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      ticker = setTimeout(handleType, isDeleting ? speed / 2 : speed);
    };

    ticker = setTimeout(handleType, speed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum]);
  

  return (
    <section className="container">
      <div className="content">
        <h3 className="text-3xl pb-2 font-light">Hi, I am</h3>
        <h1 className="text-6xl pb-5 font-bold">Bhargav Guthula</h1>
        <h2 className="text-2xl font-light text-gray-600">
          Full Stack Developer / UI Designer
        </h2>
        <p className="mt-5 text-lg font-light pt-4 " id="typewriter">
          {text}
        </p>
      </div>
    </section>
  );
};

export default Home;
