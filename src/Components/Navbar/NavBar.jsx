import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const users = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/service", name: "Service" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/notfound", name: "NotFound" }
  ];

  return (
    <nav className='text-black bg-yellow-300 p-6'>
      {/* Mobile Menu Button */}
      <div className='md:hidden' onClick={() => setOpen(!open)}>
        {open ? <IoIosClose className='text-4xl' /> : <RiMenu2Line className='text-2xl' />}
      </div>

      {/* Menu Items */}
      <ul
        className={`md:flex md:static absolute duration-500
        ${open ? 'top-16' : '-top-60'} bg-yellow-200 md:bg-yellow-300 px-6`}
      >
        {users.map(user => (
          <Link key={user.id} user={user} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
