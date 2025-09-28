import { AppNavigation } from '@/constants/navigationConstants';
import { assetsUrl } from '@/constants/urlConstants';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetFooter,
} from '@/components/ui/sheet';

export default function Topbar() {
  const [activePage, setActivePage] = useState<string>(AppNavigation.home);

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, [activePage]);

  const navLink = useMemo(
    () => [
      { label: 'Home', href: AppNavigation.home },
      { label: 'About Us', href: AppNavigation.about },
      { label: 'Services', href: AppNavigation.services },
      { label: 'Portfolio', href: AppNavigation.portfolio },
      { label: 'Contact Us', href: AppNavigation.contact },
    ],
    []
  );

  return (
    <header className="sec-container">
      <div className="border-Secondary text-md flex h-[6vh] items-center justify-between border-b-2 px-1 py-1.5 sm:px-2 md:px-3 lg:h-[10vh] lg:px-4 xl:px-5 2xl:text-lg">
        {/* drawer bar */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <FaBars size="24px" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="box-shadow-[0_4px_30px_rgba(23,138,139,0.2)] from-Secondary/10 border-Secondary/30 w-full gap-0 border-b bg-gradient-to-t to-black/5 backdrop-blur-[5px]"
            >
              <SheetHeader className="">
                <SheetClose asChild>
                  <Link to="#" className="absolute top-4 left-4 text-white">
                    <FaTimes size="16px" />
                  </Link>
                </SheetClose>
              </SheetHeader>
              <ul className="flex h-full w-screen flex-col items-center justify-center">
                {navLink.map((it, idx) => (
                  <Fragment key={idx}>
                    <SheetClose asChild>
                      <Link
                        to={it.href}
                        onClick={() => setActivePage(it.href)}
                        className={`mt-2 mb-3 ${
                          it.href === activePage
                            ? 'activePage text-Secondary'
                            : 'underline-effect'
                        }`}
                      >
                        <li>{it.label}</li>
                      </Link>
                    </SheetClose>
                    <div className="bg-Secondary w-full pt-0.5" />
                  </Fragment>
                ))}
              </ul>
              <SheetFooter className="flex items-center justify-center">
                <Button>
                  <span>Let's Talk</span>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navigation link */}
        <nav className="hidden md:block">
          <ul className="flex w-full items-center space-x-3 capitalize lg:space-x-4 xl:space-x-5 2xl:space-x-6">
            {navLink.map((it, idx) => (
              <Link
                to={it.href}
                key={idx}
                onClick={() => setActivePage(it.href)}
                className={` ${
                  it.href === activePage
                    ? 'activePage text-Secondary'
                    : 'underline-effect'
                }`}
              >
                <li className="xl:text-lg">{it.label}</li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* contact button */}
        <div className="fixed right-8 bottom-6 z-50 hidden md:block">
          <div />
          <Button>
            <Link
              className="flex h-full w-full items-center capitalize xl:text-lg"
              to={AppNavigation.contact}
            >
              <img
                className="mr-2 h-4 xl:h-5"
                src={`${assetsUrl.gifUrl}phone.gif`}
                alt=""
              />
              Let's Talk
            </Link>
          </Button>
        </div>

        {/* logo */}
        <div className="h-[60%] max-h-[60px] min-h-[20px]">
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
