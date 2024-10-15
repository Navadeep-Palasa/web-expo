import React from 'react';

const Header = () => {
  return (
    <header className='m-3 rounded-md p-4'
    style={{ textAlign: 'center', padding: '20px', backgroundColor: '#323270', color: 'white' }}>
      <h1 className='font-bold text-3xl py-3'>Welcome to WebExpo!</h1>
      <p className='font-semibold text-sm  pb-4'>Sign up now and let your creativity shine!</p>
    </header>
  );
};

export default Header;
