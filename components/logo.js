const Logo = ({ width = 48, height = 48, hover }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 229 229"
    width={width}
    height={height}
  >
    <g>
      <polygon
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        points="147,75.8 187,144.4 161.9,187.9 122.1,119.7 67.8,119.7 93.2,75.8 	"
      />
      <polyline
        stroke="#fff"
        strokeWidth="10"
        strokeMiterlimit="3"
        strokeLinecap="square"
        fill="none"
        fillRule="evenodd"
        clipRule="evenodd"
        points="155.6,181.7 74.4,181.7 33.8,111.4 74.4,41.1 155.6,41.1 195.2,109.7 	"
      />
    </g>
  </svg>
);

export default Logo;
