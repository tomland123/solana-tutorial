const Button = ({ ...rest }) => {
  return (
    <div>
      <button {...rest} />
      <span className="ripple" />
    </div>
  );
};

export default Button;
