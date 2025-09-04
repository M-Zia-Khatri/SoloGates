import { AppNavigation } from "@/constants/navigationConstants";
import { assetsUrl } from "@/constants/urlConstants";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [activePage, setActivePage] = useState<string>(AppNavigation.home);

  const navLink = useMemo(
    () => [
      { lable: "home", herf: AppNavigation.home },
      { lable: "about", herf: AppNavigation.about },
      { lable: "services", herf: AppNavigation.services },
    ],
    [],
  );

  return (
    <header className="sec-container">
      <div className="flex h-[10vh] items-center justify-between">
        <nav>
          <ul className="flex w-full items-center space-x-1.5 capitalize">
            {navLink.map((it, idx) => (
              <Link to={it.herf} key={idx}>
                <li>{it.lable}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <div>
          <Link className="capitalize" to={AppNavigation.contact}>
            Contact us
          </Link>
        </div>
        <div className="h-full">
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
