import React, { useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { THEME_COLOR_SECONDARY } from '../constants';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '锦绣山河', id: 'home' },
    { label: '探索发现', id: 'explore' },
    { label: '行程规划', id: 'plan' },
    { label: '实时动态', id: 'status' },
    { label: '生态守护', id: 'eco' },
    { label: '山水文脉', id: 'culture' },
    { label: '行前准备', id: 'utilities' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#2F3D4C] text-gray-100 fixed w-full z-50 shadow-lg border-b border-[#2A6E3F]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <Mountain className="h-8 w-8 mr-2 text-[#2A6E3F]" />
            <span className="font-serif font-bold text-xl tracking-wider text-[#F8F5F0]">中国山水导航</span>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/10 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/20 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#24303d]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-300 hover:bg-white/10 hover:text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;