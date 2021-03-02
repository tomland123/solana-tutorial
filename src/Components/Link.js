import { Link as LinkBase } from "react-router-dom";
import Ripple from "./Ripple";

const Link = ({ to, children, className }) => {
  return (
    <LinkBase className={className ? className + " link" : "link"} to={to}>
      {children}
      <Ripple />
    </LinkBase>
  );
};

export default Link;
