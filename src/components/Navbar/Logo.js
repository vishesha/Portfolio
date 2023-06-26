import * as React from "react";
import { useTheme } from "@material-ui/styles";

const Logo = (props) => {
  const theme = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 378.9 110.9"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="48"
        fontWeight="bold"
        fill={theme.logoColor}
        fontFamily="Garamond" //{theme.typography.fontFamily}
      >
        Vishesha Sadu
      </text>
    </svg>
  );
};

export default Logo;
