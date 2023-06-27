import React, { useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import loaderContext from "../../contexts/loaderContext";
import Img from "../../assets/images/img.gif";

const Background3d = () => {
  const classes = useStyles();
  const { isLoading } = useContext(loaderContext);
  const controls = useAnimation();

  useEffect(() => {
    if (!isLoading) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  }, [isLoading, controls]);

  return (
    <motion.div animate={controls} className={classes.wrapper}>
      <div className={classes.container}>
        <img
          align="right"
          src="https://media0.giphy.com/media/paTz7UZbPfTZFRYnnB/giphy.gif?cid=ecf05e471chxft4q6nazo0riwefjg0x05iven8ziann1zs75&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          //src="https://media.tenor.com/PP9v7VIs6R4AAAAd/scaler-create-impact.gif"
          //src="https://media.tenor.com/kzIfl_NxVywAAAAC/remote-learning.gif"
          style={{ width: "36%", marginTop: "78px", marginRight: "60px" }}
        />
        {/* <iframe
          align="center"
          title="background-3d"

          //src="https://my.spline.design/awesomefolio-0c39efc3de701ba97be395cc128e4e2f/"
          //src="https://media.tenor.com/PP9v7VIs6R4AAAAd/scaler-create-impact.gif"
          //src={Img}
          frameBorder="5"
          height="100%"
          className={classes.iframe}
        ></iframe> */}
        <div className={classes.hideLogo} />
      </div>
    </motion.div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
  },
  iframe: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    maxWidth: "600px",
  },
  wrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    zIndex: -1,
  },
  hideLogo: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: "100px",
    height: "100px",
    backgroundColor: theme.palette.background.default,
  },
}));

export default Background3d;

//responsive

// import React, { useEffect, useContext } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { makeStyles } from "@material-ui/core/styles";
// import loaderContext from "../../contexts/loaderContext";
// import Img from "../../assets/images/img.gif";

// const Background3d = () => {
//   const classes = useStyles();
//   const { isLoading } = useContext(loaderContext);
//   const controls = useAnimation();

//   useEffect(() => {
//     if (!isLoading) {
//       controls.start({
//         y: 0,
//         opacity: 1,
//         transition: {
//           delay: 3,
//           type: "spring",
//           stiffness: 260,
//           damping: 20,
//         },
//       });
//     } else {
//       controls.start({ opacity: 0, y: -50 });
//     }
//   }, [isLoading, controls]);

//   return (
//     <motion.div animate={controls} className={classes.wrapper}>
//       <div className={classes.container}>
//         <img
//           align="right"
//           src="https://media0.giphy.com/media/paTz7UZbPfTZFRYnnB/giphy.gif?cid=ecf05e471chxft4q6nazo0riwefjg0x05iven8ziann1zs75&ep=v1_stickers_search&rid=giphy.gif&ct=s"
//           style={{ width: "80%", marginTop: "78px", marginRight: "10%" }}
//         />
//         <div className={classes.hideLogo} />
//       </div>
//     </motion.div>
//   );
// };

// const useStyles = makeStyles((theme) => ({
//   container: {
//     position: "relative",
//     height: "100vh",
//     width: "100%",
//     overflow: "hidden",
//   },
//   wrapper: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     width: "100%",
//     zIndex: -1,
//   },
//   hideLogo: {
//     position: "absolute",
//     right: 0,
//     bottom: 0,
//     width: "100px",
//     height: "100px",
//     backgroundColor: theme.palette.background.default,
//   },
// }));

// export default Background3d;
