import { useState, useEffect } from 'react';
import { Button } from '../../home/Hero/index';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { navItems } from '../../home/Hero/data.js';

const Header = ({ colorDeep }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(navItems[0].id); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = document.querySelector('header').offsetHeight;

      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop - headerHeight;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveItem(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='flex lg:items-center lg:justify-between lg:flex-row lg:gap-0 w-full md:px-16 flex-col gap-4 px-4'>
      <div className='flex flex-row items-center justify-between lg:w-auto'>
        <div className='flex justify-center items-center h-24 p-1'>
          <img src="/img/aahafeltLogo.png" alt="logo" className="h-full" style={{ width: '150px' }} />
        </div>
        <button className="lg:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpenMenu(prev => !prev)}>
          {openMenu ? <IoCloseOutline className='w-7 h-7' /> : <IoMenuOutline className='w-7 h-7' />}
        </button>
      </div>
      <nav className={`flex lg:items-center lg:justify-end lg:flex-row pb-4 flex-col lg:pb-0 gap-4 origin-top duration-300 ${openMenu ? 'h-full scale-y-1' : 'h-0 transform lg:transform-none scale-y-0'}`} >
        <ul className='flex lg:flex-row lg:items-center lg:gap-0 flex-col justify-center gap-4 list-none'>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => {
                  setOpenMenu(false);
                  setActiveItem(item.id);
                }}
                className={`lg:px-4 py-2 lg:mt-8 md:text-base bg-transparent lg:ml-4 mt-2 text-sm focus:outline-none focus:shadow-outline ${
                  activeItem === item.id ? 'text-white border-b-2' : 'hover:text-gray-900'
                }`}
                style={activeItem === item.id ? { borderColor: colorDeep, color: colorDeep } : {}}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          className={`px-10 py-3 md:text-base text-center text-sm`}
          type='button'
          text='Get Started'
          style={{ backgroundColor: `${colorDeep}` }}
        />
      </nav>
    </header>
  );
};

export default Header;
