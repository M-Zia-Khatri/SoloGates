import { AppNavigation } from "@/constants/navigationConstants";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [activePage, setActivePage] = useState<string>(AppNavigation.home);

  return (
    <header className="sec-container">
      <div className="border-Highlight flex h-[10vh] items-center justify-between border-b-2 p-1">
        <nav className="bg-Navy w-full rounded-full px-4 py-1">
          <ul className="flex items-center space-x-4 text-sm xl:text-base">
            <Link
              to={AppNavigation.home}
              onClick={() => setActivePage(AppNavigation.home)}
            >
              <li
                className={
                  activePage === AppNavigation.home
                    ? "activePage"
                    : "underline-effect"
                }
              >
                Home
              </li>
            </Link>
            <Link
              to={AppNavigation.about}
              onClick={() => setActivePage(AppNavigation.about)}
            >
              <li
                className={
                  activePage === AppNavigation.about
                    ? "text-Secondary"
                    : "underline-effect"
                }
              >
                About Us
              </li>
            </Link>
            <Link
              to={AppNavigation.blogs}
              onClick={() => setActivePage(AppNavigation.blogs)}
            >
              <li
                className={
                  activePage === AppNavigation.blogs
                    ? "text-Secondary"
                    : "underline-effect"
                }
              >
                Blogs
              </li>
            </Link>
            <Link
              to={AppNavigation.service}
              onClick={() => setActivePage(AppNavigation.service)}
            >
              <li
                className={
                  activePage === AppNavigation.service
                    ? "text-Secondary"
                    : "underline-effect"
                }
              >
                Service
              </li>
            </Link>
            <Link
              to={AppNavigation.portfolio}
              onClick={() => setActivePage(AppNavigation.portfolio)}
            >
              <li
                className={
                  activePage === AppNavigation.portfolio
                    ? "text-Secondary"
                    : "underline-effect"
                }
              >
                Portfolio
              </li>
            </Link>
            <Link
              to={AppNavigation.contact}
              onClick={() => setActivePage(AppNavigation.contact)}
            >
              <li
                className={
                  activePage === AppNavigation.contact
                    ? "text-Secondary"
                    : "underline-effect"
                }
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </nav>
        <div className="relative h-full xl:w-[33vh]">
          <div className="from-Highlight via-secondary to-Main absolute top-1/2 right-4 -translate-x-[16vh] -translate-y-1/2 rounded-full bg-gradient-to-r p-1.5 px-4">
            <Link
              to={AppNavigation.contact}
              className="h-full w-full text-lg xl:text-2xl"
            >
              Let's Talk
            </Link>
          </div>
        </div>
        <div className="w-[28vw] xl:w-[30vw]">
          <img
            src="/public/images/logos/logoForWebsite.png"
            className="h-full w-full overflow-hidden object-cover object-center"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
