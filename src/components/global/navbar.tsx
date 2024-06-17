"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import useMobileMenu from './useMobileMenu'
import { ModeToggle } from './mode-toggle';
type User = {
  id: number;
  clerkId: string;
  name: string | null;
  email: string;
  profileImage: string | null;
  tier: string | null;
  credits: string | null;
}

type Props = {
  user: User | null;
}

const Navbar = ({ user }: Props) => {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <header className="fixed right-0 left-0 top-0 p-2 md:p-3 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
        <Link href="/">
        <aside className="flex items-center gap-[1px]">
          <p className="text-3xl font-bold">Zap</p>
          <Image
            src="/fuzzieLogo.png"
            width={15}
            height={15}
            alt="logo"
            className="shadow-sm"
          />
          <p className="text-3xl font-bold">Flow</p>
        </aside>
      </Link>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 list-none">
          <li>
            <Link className="hover:text-purple-300 dark:hover:text-gray-300" href="/products">Products</Link>
          </li>
          <li>
            <Link className="hover:text-purple-300 dark:hover:text-gray-300" href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link className="hover:text-purple-300 dark:hover:text-gray-300" href="/clients">Clients</Link>
          </li>
          <li>
            <Link className="hover:text-purple-300 dark:hover:text-gray-300" href="/resources">Resources</Link>
          </li>
          <li>
            <Link className="hover:text-purple-300 dark:hover:text-gray-300" href="/documentation">Documentation</Link>
          </li>
          <li>
            <Link className="hover:text-purple-300 dark:hover:text-gray-300" href="/enterprise">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-[6px] md:gap-3">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 px-3 py-1 text-sm font-medium bg-[#E6E6FA] backdrop-blur-3xl">
            {user ? 'Dashboard' : 'Get Started'}
          </span>
        </Link>
        {/* <div className='relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 text-sm font-medium bg-white backdrop-blur-3xl"> */}
        {user ? <UserButton afterSignOutUrl="/" /> : null}
        {/* </span>
        </div> */}
        <ModeToggle />
        <button onClick={toggleMobileMenu} className="md:hidden">
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </aside>
      {isMobileMenuOpen && (
        <nav className="absolute top-[57px] right-0 left-0 backdrop-blur-lg bg-black/10 dark:bg-black/80 p-4 md:hidden">
          <ul className="flex flex-col items-center gap-4 list-none">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/clients">Clients</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/documentation">Documentation</Link>
            </li>
            <li>
              <Link href="/enterprise">Enterprise</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
