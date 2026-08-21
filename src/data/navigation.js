// NOTE: Navbar.jsx currently defines its own NAV_LINKS array inline rather than
// importing this file. Kept here (and kept in sync) as the canonical source of
// truth in case Navbar/MobileMenu are refactored to consume shared data.
const navigation = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Products", path: "/products" },
  { id: 4, name: "Manufacturing", path: "/manufacturing" },
  { id: 5, name: "OEM / ODM", path: "/oem-odm" },
  { id: 6, name: "Gallery", path: "/gallery" },
  { id: 7, name: "Resources", path: "/resources" },
  { id: 8, name: "Contact", path: "/contact" },
];

export default navigation;
