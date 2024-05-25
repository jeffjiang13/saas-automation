"use client"
import React, { useState } from 'react'
import Sidebar from '@/components/sidebar'
import InfoBar from '@/components/infobar'
import { MenuIcon, XIcon } from 'lucide-react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex overflow-hidden h-screen">
      {/* Sidebar for larger screens */}
      <div className={`fixed md:static ${isSidebarOpen ? 'block' : 'hidden'} bg-white md:block z-20 h-full`}>
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between py-2 px-4 md:hidden">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6 -mt-10" />}
          </button>
          <InfoBar />
        </div>
        <div className="hidden md:block">
          <InfoBar />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {props.children}
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  )
}

export default Layout
