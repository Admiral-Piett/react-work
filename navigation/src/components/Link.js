import classnames from "classnames";
import useNavigation from "../hooks/navigation";

const Link = ({ path, children, className, activeClassName }) => {
  const { currentPath, navigate } = useNavigation();

  const classname = classnames(
    "text-blue-500",
    className,
    currentPath === path && activeClassName
  );

  const handleClick = (event) => {
    // If a user is holding command or control, this will let them use the browser behavior and open the window
    // in a new tab.
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    // Do NOT do default browser navigation which reloads from server.
    event.preventDefault();
    navigate(path);
  };
  return (
    <a className={classname} href={path} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
