import classnames from "classnames";

// This is SUUUPER granular.  Really just to avoid re-writing class names (for tailwind of course).
const Panel = ({ children, classNames, ...rest }) => {
  const className = classnames(
    "border rounded p-3 shadow bg-white w-full",
    classNames
  );
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
