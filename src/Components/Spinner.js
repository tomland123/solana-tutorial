const Spinner = ({ loading }) => {
  return (
    <div className={loading ? "spin" : "none"}>
      <svg
        width="450"
        height="300"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="0%" stop-color="#CB4EE8">
              <animate
                attributeName="stop-color"
                values="#CB4EE8; #10F4B1; #CB4EE8"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>

            <stop offset="100%" stop-color="#10F4B1">
              <animate
                attributeName="stop-color"
                values="#10F4B1; #CB4EE8; #10F4B1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
        <path
          fill="url('#logo-gradient')"
          d="M231.2,452.3h462.7c5.8,0,11.3,2.3,15.3,6.4l73.2,73.7c13.5,13.6,3.9,36.8-15.3,36.8H304.4  c-5.8,0-11.3-2.3-15.3-6.4l-73.2-73.7C202.3,475.5,212,452.3,231.2,452.3z M215.9,354.6l73.2-73.7c4.1-4.1,9.6-6.4,15.3-6.4H767  c19.2,0,28.9,23.2,15.3,36.8L709.2,385c-4.1,4.1-9.6,6.4-15.3,6.4H231.2C212,391.4,202.3,368.2,215.9,354.6z M782.3,666.9  l-73.2,73.7c-4.1,4.1-9.6,6.4-15.3,6.4H231.2c-19.2,0-28.9-23.2-15.3-36.8l73.2-73.7c4.1-4.1,9.6-6.4,15.3-6.4H767  C786.2,630.1,795.9,653.3,782.3,666.9z"
        />
      </svg>
    </div>
  );
};

export default Spinner;
