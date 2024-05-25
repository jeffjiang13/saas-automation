import React from 'react'
import { fetchUser } from './fetchUser'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./navbar'), { ssr: false });

const NavbarWrapper = async () => {
  const user = await fetchUser();
  return <Navbar user={user} />;
}

export default NavbarWrapper;
