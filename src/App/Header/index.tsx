/**
 * App Header Component
 * 
 */

import React from "react";
import { Link } from "react-router-dom";

import { links } from "../../routes/links";
import { LinkType } from "../../routes/type";
 
const Header = () => (
  <header>
    {links.map((link: LinkType) => <Link key={link.id} to={link.path}>{link.name}</Link>)}
  </header>
);
 
export default Header;
 