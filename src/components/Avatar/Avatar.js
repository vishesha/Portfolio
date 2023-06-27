import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.jpg";

const Avatar = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={AvatarImg} alt="Vishesha Sadu" className={classes.avatarImg} />
      <img
        style={{
          backgroundColor: "transparent",
          align: "bottom",
          marginTop: "20px",
          marginLeft: "50px",
        }}
        width="75%"
        //src="https://img.freepik.com/premium-vector/woman-programming-home_118813-2619.jpg?w=826"
        //src="https://media.tenor.com/S59bPkT0pqcAAAAC/programming.gif"
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW16bDhzazJzOHdsNTZjNDZranV5OGYyNTc3Nzh6aWp3dzcwdG13YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rsUGLKwgSvSxmq1VrZ/giphy.gif"
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    marginLeft: "120px",
    marginBottom: "200px",
    borderRadius: "50%",
    width: "270px",
    height: "270px",
    objectFit: "cover",
    objectPosition: "0 -20px",
    boxShadow: theme.shadows[10],
  },
}));

export default Avatar;
