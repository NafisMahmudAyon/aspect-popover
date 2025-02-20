'use client'
import React, { useState } from 'react';
import { Popover } from './src';
import { Settings, Bell, User, Menu } from 'lucide-react';

export default function Home() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Popover Examples</h1>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Open Settings
          </button>
        </div>

        <div className="flex justify-center gap-8">
          {/* Settings Popover - Externally Controlled with Zoom animation */}
          <Popover
            trigger={
              <button className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            }
            position="bottom"
            isOpen={isSettingsOpen}
            onOpenChange={setIsSettingsOpen}
            animation="zoom"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Account Settings
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Preferences
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  Help & Support
                </button>
              </div>
            </div>
          </Popover>

          {/* Notifications Popover - Slide animation */}
          <Popover
            trigger={
              <button className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
            }
            position="left"
            animation="slide"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors">
                  <p className="text-sm text-gray-600">New message from Sarah</p>
                  <p className="text-xs text-gray-400">2 minutes ago</p>
                </div>
                <div className="p-3 rounded-md hover:bg-gray-50 transition-colors">
                  <p className="text-sm text-gray-600">Project deadline reminder</p>
                  <p className="text-xs text-gray-400">1 hour ago</p>
                </div>
              </div>
            </div>
          </Popover>

          {/* Profile Popover - Fade animation */}
          <Popover
            trigger={
              <button className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors">
                <User className="w-5 h-5 text-gray-600" />
              </button>
            }
            position="right"
            animation="fade"
            duration={0.2}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">John Doe</h3>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  View Profile
                </button>
                <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors text-red-600">
                  Sign Out
                </button>
              </div>
            </div>
          </Popover>

          {/* Menu Popover - Custom animation */}
          <Popover
            trigger={
              <button className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors">
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
            }
            position="top"
            customVariants={{
              initial: { opacity: 0, scale: 0.8, rotateX: -15 },
              animate: { opacity: 1, scale: 1, rotateX: 0 },
              exit: { opacity: 0, scale: 0.8, rotateX: 15 }
            }}
            customTransition={{
              type: "spring",
              damping: 15,
              stiffness: 250
            }}
          >
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Dashboard
              </button>
              <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Projects
              </button>
              <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Calendar
              </button>
              <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Reports
              </button>
            </div>
          </Popover>
        </div>
      </div>
      {/* <Popover>
        <PopoverAction className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors" {...rest}>
          Settings
        </PopoverAction>
        <PopoverContent className="w-72 p-4 rounded-lg shadow-lg bg-white" {...rest}>
          <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Account Settings
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Preferences
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Help & Support
            </button>
          </div>
          <PopoverAction className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors" {...rest}>
            Close
          </PopoverAction>
        </PopoverContent>
      </Popover>
      <Popover closeOnClickOutside={true}>
        <PopoverAction className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors" {...rest}>
          Settings
        </PopoverAction>
        <PopoverContent className="w-72 p-4 rounded-lg shadow-lg bg-white" {...rest}>
          <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Account Settings
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Preferences
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
              Help & Support
            </button>
          </div>
          <PopoverAction className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors" {...rest}>
            Close
          </PopoverAction>
        </PopoverContent>
      </Popover> */}
    </div>
  );
}
