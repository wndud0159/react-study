import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

const TopNavigationBar: FC = () => {
  const routerPath = useLocation().pathname;

  return (
    <div className="flex items-center justify-center fixed w-full top-0 h-20 px-2 text-white bg-green-900">
      <div className="flex-1  font-bold text-2xl">React</div>
      <div className=" w-10/12 flex justify-between items-center">
        <div className="font-semibold space-x-4">
          <Link className={`${routerPath === "/" && "text-black"}`} to="/">
            AllMeetups
          </Link>
          <Link className={`${routerPath === "/new-meetup" && "text-black"}`} to="/new-meetup">
            NewMeetup
          </Link>
          <Link className={`${routerPath === "/favorites" && "text-black"}`} to="/favorites">
            Favorites
          </Link>
        </div>
        <Link className={`${routerPath === "/login" && "text-black"}`} to="/login">
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default TopNavigationBar;
