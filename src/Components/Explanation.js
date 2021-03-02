export const Explanation = ({ children }) => {
  return (
    <div
      style={{
        padding: "0 0 60px 0",
      }}
    >
      {children}
    </div>
  );
};

export const Title = ({ children }) => {
  return (
    <h1
      style={{
        paddingBottom: "20px",
      }}
    >
      {children}
    </h1>
  );
};

export const ExplanationText = ({ children }) => {
  return <div style={{ marginTop: "20px" }}>{children}</div>;
};

export const Section = ({ children, className }) => (
  <div
    className={className}
    style={{
      marginTop: "40px",
      display: "flex",
    }}
  >
    {children}
  </div>
);

export const Footer = ({ children }) => <footer>{children}</footer>;
