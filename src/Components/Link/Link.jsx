import React from 'react';

const Link = ({ user }) => {
  const { id, name, path } = user;
  return (
    <li className='mr-10 hover:bg-yellow-600 px-6'>
      <a href={path}>{name}</a>
    </li>
  );
};

export default Link;
