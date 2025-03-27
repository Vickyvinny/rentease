import { Box, Typography } from "@mui/material"
import logo from '../nav/images/homelogo.avif'
import { colors } from "../../uitils/colors"
import { NavLink, useNavigate } from "react-router-dom"
const styles = {
    icon: {
        color: colors.gold,
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "19px",
    },
    btn: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "13px",
        padding: "0px 10px",
        borderRight: "1px solid silver",
        color: colors.grey,
        cursor: "pointer"
    },
    container: {
        width: "100%",
        boxSizing: "border-box",
        padding: "10px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "2px 2px 10px silver",
        background: "white",
        marginBottom:"10px"
    },
    imageContainer: {
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        objectFit: "cover"
    },
    title: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "19px",
        cursor: "pointer"
    },
    iconContainer: { display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" },
    btnContainer: { display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }
}
const Navbar = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate("/")
    }
    const handleRegister = () => {
        navigate("/auth/register")
    }
    const handleLogin = () => {
        navigate("/auth/login")
    }
    return (
        <Box sx={styles.container}>
            <Box sx={styles.iconContainer}>
                <Box component={'img'} src={logo} alt="no images found..." sx={styles.imageContainer} onClick={handleHome} />
                <Typography sx={styles.title} onClick={handleHome}> <Box component={'span'} sx={styles.icon}>RENT</Box>eASy</Typography>
            </Box>
            <Box sx={styles.btnContainer}>
                <NavLink to={"/auth/register"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Sign Up
                </NavLink>
                <NavLink to={"/auth/login"}className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLogin}>Log In</NavLink>
            </Box>
        </Box>
    )
}
export default Navbar