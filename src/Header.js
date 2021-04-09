import React from 'react';

export default function Header(props) {
  const { toggleTheme } = props;
  return (
    <div className='headerDiv'>
      <h1 className='headerText'>devjobs</h1>
      <label className='switch'>
        <input type='checkbox' onChange={() => toggleTheme()} />
        <span className='slider round'></span>
      </label>
    </div>
  );
}
