import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

const NameLogo = () => {
  const classes = useStyles();
  const nameRef = useRef(null);

  useEffect(() => {
    const nameElement = nameRef.current;
    const colors = [
      //   "#3498DB",
      //   "#F39C12",
      //   "#0000FF",
      //   "Purple",
      //   "White",
      //   "Violet",
      //   "Skyblue",
      //   "#EC7063",
      "#FF5252", // Red
      "#FF4081", // Pink
      "#E040FB", // Purple
      "#7C4DFF", // Indigo
      "#448AFF", // Blue
      "#00BCD4", // Cyan
      "#18FFFF", // Teal
      "#64FFDA", // Aqua
      "#69F0AE", // Green
      "#EEFF41", // Lime
      "#FFD740", // Amber
      "#FFAB40", // Orange
    ]; // Array of colors to animate

    let currentColorIndex = 0;

    const changeColor = () => {
      nameElement.style.color = colors[currentColorIndex];
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    };

    const animationInterval = setInterval(changeColor, 1000); // Change color every 1 second

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className={classes.logo}>
      <h1 styleref={nameRef}>Vishesha Sadu</h1>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default NameLogo;
