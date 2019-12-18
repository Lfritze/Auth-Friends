import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const NavBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavBar = () => setCollapsed(!collapsed);

  const logout = () => {
    localStorage.clear("token");
    props.history.push("/");
  };

  return (
    <Navbar className="nav-bar" color="dark" dark>
      <NavbarBrand
        className="logo mr-auto"
        onClick={() => props.history.push("/friends")}
      >
        <span className="red">Baseball Legends</span>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavBar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => {
                props.history.push("/friends");
                toggleNavBar();
              }}
            >
              Friends List
            </NavLink>
          </NavItem>
          <NavItem>
            {localStorage.getItem("token") ? (
              <NavLink
                href="#"
                onClick={() => {
                  logout();
                  toggleNavBar();
                }}
              >
                Log Out
              </NavLink>
            ) : (
              <NavLink
                href="#"
                onClick={() => {
                  props.history.push("/");
                  toggleNavBar();
                }}
              >
                Log In
              </NavLink>
            )}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default NavBar;
