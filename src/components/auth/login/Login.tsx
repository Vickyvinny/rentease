import { Box, Button, Stack, Typography } from "@mui/material";
import TextFeildContainer from "../../textfeild/TextFeildComponent";
import { colors } from "../../../uitils/colors";
import googleIcon from "../assets/google2.jpg";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const styles = {
  account: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: "400",
    fontSize: "14px",
    cursor: "pointer",
    span: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: "400",
      color: colors.gold,
      marginLeft: "5px",
      fontSize: "14px",
      cursor: "pointer",
    },
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    width: { sm: "100%", md: "70%" },
  },
  outlinedBtn: {
    width: "80%",
    margin: "20px 0px",
    color: colors.gold,
    borderColor: colors.gold,
    textTransform: "none",
    "&:hover": {
      borderColor: colors.gold,
      background: "#FFF",
    },
    display: "flex",
    gap: "10px",
  },
  contained: {
    width: "80%",
    margin: "20px 0px",
    color: "#FFF",
    background: colors.gold,
    textTransform: "none",
    "&:hover": {
      color: "#FFF",
      background: colors.gold,
    },
    display: "flex",
    gap: "10px",
  },
  googleIcon: {
    width: "25px",
    height: "25px",
    objectFit: "cover",
    borderRadius: "100%",
    background: "#FFFFFF",
  },
  welcome: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: "24px",
    fontWeight: "500",
  },
  subTitle: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: "14px",
    fontWeight: "400",
    color: colors.grey,
  },

  textField: {
    "& .MuiOutlinedInput-root": {
      padding: "2px",
      "& fieldset": {
        borderColor: colors.grey, // Default border
      },
      "&:hover fieldset": {
        borderColor: "gold", // Gold on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "gold", // Gold on focus
      },
      "& input": {
        padding: "10px",
      },
    },
  },
};

const initialLoginDetails = [
  {
    type: "text",
    component: "input",
    name: "userName",
    placeHolder: "example@gmail.com",
    value: "",
    label: "Username",
  },
  {
    type: "password",
    component: "input",
    name: "password",
    placeHolder: "*******",
    value: "",
    label: "Password",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialLoginDetails);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) =>
      prev.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    );
  };

  const handleRegister = () => {
    navigate("/auth/register");
  };
console.log(user)
  return (
    <Stack sx={styles.container}>
      <Typography sx={styles.welcome}>Welcome Back!</Typography>
      <Typography sx={styles.subTitle}>
        Continue with Google or enter your details
      </Typography>
      <Button variant="outlined" sx={styles.outlinedBtn}>
        <Box component={"img"} src={googleIcon} sx={styles.googleIcon} />
        Login with Google
      </Button>
      {user.map((each, index) => (
        <TextFeildContainer
          label={each.label}
          name={each.name}
          placeHolder={each.placeHolder}
          type={each.type}
          value={each.value}
          key={index}
          handleChange={handleChange}
          
        />
      ))}
      <Button variant="contained" sx={styles.contained}>
        Login
      </Button>
      <Typography sx={styles.account}>
        Doesn't have an account?
        <Box component={"span"} onClick={handleRegister}>
          Sign Up for free
        </Box>{" "}
      </Typography>
    </Stack>
  );
};

export default Login;
