import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import GlassButton from '../components/GlassButton';
import Modal from '../components/Modal';

const Lesson: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const items = [
    { id: 1, title: 'A' },
    { id: 2, title: 'B' },
    { id: 3, title: 'C' },
    { id: 4, title: 'D' },
    { id: 5, title: 'E' },
    { id: 6, title: 'F' },
    { id: 7, title: 'G' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
    { id: 10, title: 'Item 10' },
    { id: 11, title: 'Item 11' },
    { id: 12, title: 'Item 12' },
    { id: 13, title: 'Item 13' },
    { id: 14, title: 'Item 14' },
    { id: 15, title: 'Item 15' },
    { id: 16, title: 'Item 16' },
    { id: 17, title: 'Item 17' },
    { id: 18, title: 'Item 18' }
  ];

  return (
    <main className='app-container bg'>
      <NavBar backPath="/Lessons"/>
      <section className='ui-container'>
        <header className='lesson-header'>
          <h2 className='lesson-title'>Lesson {id}</h2>
          <p className='lesson-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </header>
        <div className='lessons-container signs-container'>
          {items.map((item) => (
            <GlassButton 
              key={item.id}
              className='card'
              onClick={handleModalOpen}
            >
              <model-viewer
                src="./RobotExpressive.glb"
                autoplay
                shadow-intensity="1"
              ></model-viewer>
              <p>{item.title}</p>
            </GlassButton>
          ))}
        </div>
      </section>
      {isModalOpen && <Modal onClose={handleModalClose} src={"./RobotExpressive.glb"} />}
    </main>
  );
};

export default Lesson;