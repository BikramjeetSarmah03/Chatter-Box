import { Link, Outlet, useLocation } from "react-router-dom";

// icons
import { BsChatDots, BsTelephone, BsGear } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

export default function Dashboard() {
  const location = useLocation();

  const activeLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <main className="flex bg-gray-50">
      <nav className="flex flex-col items-center w-24 min-h-screen py-6 space-y-6 transition-all duration-300 bg-white lg:w-28">
        <div className="flex flex-col items-center space-y-6 grow">
          <div className="w-16 h-16 overflow-hidden rounded-full bg-gray-50">
            <img
              src="/logo.ico"
              alt="logo"
              className="w-full h-full bg-cover"
            />
          </div>

          <ul className="space-y-8">
            <Link to={"/app"}>
              <li
                className={`p-4 rounded-3xl ${
                  location.pathname === "/app" ? "text-white bg-blue-600" : ""
                }`}>
                <BsChatDots size={20} />
              </li>
            </Link>
            <li
              className={`p-4 rounded-3xl ${
                activeLink("/app/groups") ? "text-white bg-blue-500" : ""
              }`}>
              <Link to={"/app/groups"}>
                <FiUsers size={20} />
              </Link>
            </li>
            <li
              className={`p-4 rounded-3xl ${
                activeLink("/app/calls") ? "text-white bg-blue-500" : ""
              }`}>
              <Link to={"/app/calls"}>
                <BsTelephone size={20} />
              </Link>
            </li>
            <li className="border-t-2">
              <div
                className={`p-4 rounded-3xl ${
                  activeLink("/app/settings") ? "text-white bg-blue-500" : ""
                }`}>
                <Link to={"/app/settings"}>
                  <BsGear size={20} />
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center space-y-6">
          {/* <div>
            <input type="checkbox" className="toggle toggle-primary" />
          </div> */}

          <div className="cursor-pointer dropdown dropdown-top">
            <div
              tabIndex={0}
              className="w-16 h-16 overflow-hidden bg-red-300 rounded-full">
              <img src="/logo.ico" alt="profile" />
            </div>

            <ul
              tabIndex={0}
              className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </main>
  );
}
