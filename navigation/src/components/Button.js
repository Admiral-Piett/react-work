import classnames from "classnames";
import PropTypes from "prop-types";

const Button = ({
  children,
  hollow,
  rounded,
  primary,
  secondary,
  success,
  warning,
  danger,
  ...rest // All other props not already explicitly called out.  Can be deconstructed and passed through as below.
}) => {
  const tailwindClassNames = () => {
    // Later rules can overlap earlier rules, even partially.  So a bg-white at the end would overwrite any of the
    // above background rules that came before it.
    return classnames(rest.className, "flex item-center px-3 py-1.5 border", {
      "broder-blue-600 bg-blue-500 text-white": primary && !hollow,
      "broder-gray-600 bg-gray-500 text-white": secondary && !hollow,
      "broder-green-600 bg-green-500 text-white": success && !hollow,
      "broder-yellow-600 bg-yellow-500 text-white": warning && !hollow,
      "broder-red-600 bg-red-500 text-white": danger && !hollow,
      "broder-blue-600 bg-blue-100 text-blue": primary && hollow,
      "broder-gray-600 bg-gray-100 text-orange": secondary && hollow,
      "broder-green-600 bg-green-100 text-green": success && hollow,
      "broder-yellow-600 bg-yellow-100 text-yellow": warning && hollow,
      "broder-red-600 bg-red-100 text-red": danger && hollow,
      "rounded-full": rounded,
    });
  };

  return (
    <button {...rest} className={tailwindClassNames()}>
      {children}
    </button>
  );
};

// Validation for prop inputs - now Typescript does this on its own, so this library has fallen out of fashion
Button.propTypes = {
  rounded: PropTypes.bool,
  outlined: PropTypes.bool,
  validateStatus: ({ primary, secondary, success, warning, danger }) => {
    const statusCount =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (statusCount > 1) {
      return new Error("Multiple status values supplied.");
    }
  },
};

export default Button;
