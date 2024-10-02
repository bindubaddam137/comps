import PropTypes from "prop-types";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  return <button>{children}</button>;
}

Button.propTypesropTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(
      !!primary + Number(!!undefined) + Number(!!success) + Number(!!danger)
    );
    if (count > 1) {
      return new Error(
        "only one of primary,secondary,success,danger can be true"
      );
    }
  },
};
export default Button;
