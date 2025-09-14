import { AppNavigation } from '@/constants/navigationConstants';
import { assetsUrl } from '@/constants/urlConstants';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

export default function Topbar() {
  const [activePage, setActivePage] = useState<string>(AppNavigation.home);

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, [activePage]);

  const navLink = useMemo(
    () => [
      { label: 'home', href: AppNavigation.home },
      { label: 'about', href: AppNavigation.about },
      { label: 'services', href: AppNavigation.services },
    ],
    []
  );

  return (
    <header className="sec-container">
      <div className="border-Secondary text-md flex h-[8vh] items-center justify-between border-b-2 px-1 py-1.5 sm:px-2 md:px-3 lg:h-[12vh] lg:px-4 xl:px-5 2xl:text-lg">
        {/* drawer bar  */}
        <div className="md:hidden">
          <FaBars size="24px" />
        </div>

        {/* Navigation link */}
        <nav className="hidden md:block">
          <ul className="flex w-full items-center space-x-3 capitalize lg:space-x-4 xl:space-x-5 2xl:space-x-6">
            {navLink.map((it, idx) => (
              <Link
                to={it.href}
                key={idx}
                onClick={() => setActivePage(it.href)}
                className={` ${it.href === activePage ? 'activePage text-Secondary' : 'underline-effect'}`}
              >
                <li className="xl:text-lg">{it.label}</li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* contact button */}
        <div className="fixed right-8 bottom-6 z-50">
          <div className="bg-Bg-Primary absolute top-0 left-0 z-40 h-full w-full" />
          <div className="btn-primary relative z-50 px-2 py-1 font-semibold tracking-wide md:px-3 md:py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 2xl:p-3 2xl:px-6">
            <Link className="capitalize xl:text-lg" to={AppNavigation.contact}>
              Contact us
            </Link>
          </div>
        </div>

        {/* logo */}
        <div className="md:h[90%] h-[85%] max-h-[60px] min-h-[35px]">
          <img
            src={`${assetsUrl.logosUrl}LongLogoBlackBG.png`}
            className="h-full overflow-hidden object-cover object-center"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
