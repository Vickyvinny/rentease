import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import wallpaper from '../assets/authwallpaper.avif'
const styles = {
    container: { height:"89vh",width:"100%",margin:"0px",padding:"0px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    wallpaper: {
        width: "100%",
        height: "100%",
        objectFit: "conatin"
    },
    form: {
        width: {xs:"100%",md:"45%"},
        height: "100%",
        boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center"
    },
    wallpaperConatiner: {
        width: "50%",
        height: "100%",
        display: { xs: "none", md: "block" }
    }
}
const Authlayout = () => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.wallpaperConatiner}>
                <Box sx={styles.wallpaper} component={'img'} src={wallpaper} alt="no images found..." />
            </Box>
            <Box sx={styles.form}>
                <Outlet />
            </Box>
        </Box>
    )
}
export default Authlayout