import { Spring } from "react-spring/renderprops";

const FadeIn = (WrappedComponent) => ({ ...rest }) => {
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <WrappedComponent {...rest} />
        </div>
      )}
    </Spring>
  );
};

export default FadeIn;
