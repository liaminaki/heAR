import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassButton from '../components/GlassButton';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const GoTo = (path: string) => {
    navigate(path);
  };
  
  return (
    <main className='app-container bg'>
        <section className='ui-container'>
            <h1>he<em>AR</em></h1>
            <p>
                Learn Filipino Sign Language <br/>
                through Augmented Reality
            </p>

            <div className='cta'>
                <GlassButton onClick={() => GoTo('/lessons')}>
                    Start Now
                </GlassButton>
            </div>

            <nav>
                <div><Link to="/lessons">Lessons</Link></div>
                <div><Link to="/camera">Camera App</Link></div>
            </nav>
            <model-viewer
              src="./hand-r.glb"
              auto-rotate
              camera-controls
              disable-zoom
              style={{ width: '100%', height: '500px' }}
              autoplay
              shadow-intensity="1"
            ></model-viewer>
        </section>
    </main>
  );
};

export default Home;