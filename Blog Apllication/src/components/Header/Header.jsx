import React from "react";
import { Logo, LogoutBtn, Container } from "../index";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "login",
      slug: "/login",
      active: !authStatus,
    },

    {
      name: "Signup",
      slug: "/Signup",
      active: !authStatus,
    },

    {
      name: "all-Posts",
      slug: "/all-posts",
      active: authStatus,
    },

    {
      name: "add-posts",
      slug: "/add-posts",
      active: authStatus,
    },
  ];

  return (
    <header>
      <Container>
        <nav className="flex">
          <div className="m-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
