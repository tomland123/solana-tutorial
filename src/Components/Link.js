import { Link as LinkBase } from "react-router-dom";
import Ripple from "./Ripple";

const Link = ({ to, children, className, style }) => {
  return (
    <LinkBase
      style={style}
      className={className ? className + " link" : "link"}
      to={to}
    >
      {children}
      <Ripple />
    </LinkBase>
  );
};

export default Link;
