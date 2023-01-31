import Link from "./Link";

const Navbar = () => {
  const links = [
    { label: "Accordian", path: "/accordian" },
    { label: "Button", path: "/button" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Sortable Table", path: "/sortable-table" },
  ];
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            className="mb-3"
            path={link.path}
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
