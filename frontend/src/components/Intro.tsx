import React, { useState } from 'react';

const Intro = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeOnOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div id="intro" className="flex flex-col sm:flex-row mt-16 ml-2 lg:ml-52 lg:mr-40 pt-32">
      <div className="text-white lg:text-left pr-8">
        <h1 className="flex text-4xl lg:text-5xl font-bold mb-4">Hi everyone! <span className="animate-[wave_5s_ease-in-out_5]">👋🏻</span></h1>
        <p className="text-6xl lg:text-6xl text-blue-400">
          <span className="text-red-500">My name is Cristian,</span> I'm a Software Developer. 🚀📚
        </p>
        <div
          className="border rounded-3xl p-6 inline-block mt-10 text-3xl hover:text-blue-800 cursor-pointer hover:border-blue-800 hover:scale-110 sm:mb-5"
          onClick={toggleModal}
        >
          Check My CV
        </div>
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center" onClick={closeOnOverlayClick}>
            <div className="inline-block align-bottom bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center rounded-lg overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
              <h3 className="text-xl leading-6 font-medium text-gray-900">Choose a Language</h3>
              <div className="mt-4">
                <a href='https://drive.google.com/file/d/1rifcokFKCg6O-8Y8J2VY2aHhU3noVx3x/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                  <button className="inline-block w-24 px-4 py-2 border border-transparent text-md font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-10"
                  >
                    English
                  </button>
                </a>
                <a href='https://drive.google.com/file/d/1nNjBxR6G2cGhhikFFjPCQUIqXAv7bhfJ/view?usp=sharing' target='_blank' rel="noopener noreferrer">
                  <button
                    className="inline-block w-24 px-4 py-2 border border-transparent text-md font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    French
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <img src="avatar.png" alt="avatar" className="mx-auto mt-10 lg:mt-0 md:-mb-7 lg:-mb-6 xl:-mb-7 2xl:-mb-8" style={{ width: '50vh', height: '70vh' }} />
    </div>
  );
}

export default Intro;
