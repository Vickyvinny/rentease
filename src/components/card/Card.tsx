import { Box, Button, Stack, Typography } from "@mui/material"


import { colors } from "../../uitils/colors"
import { useNavigate } from "react-router-dom"
const styles = {
    reviews: {  
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "11px",
        color: "grey"
    },
    rating: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "15px"
    },
    card: {
        width: "100%",
        padding: "10px",
        border: "1px solid silver",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        gap: "10px",
        height: "38vh",
        borderRadius: "10px"
    },
    descriptionConatiner: {
        width: "55%",
        display: "flex",
        justifyContent: "space-between",
        aliginItems: "start"
    },
    imgage: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    imageConatiner:
    {
        width: "40%",
        borderRadius: "10px",
        height: "100%",
        overflow: "hidden"
    },
    title: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "600",
        fontSize: "16px",
    },
    subTitle: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "13px",
        color: colors.grey
    }
}
interface Iprops {
    flatImages: string,
    id:number
}
const Card = (props: Iprops) => {
    const navigate = useNavigate();
    const handleSpecificPage = () => {
     navigate(`/specificpage/${props.id}`)
    }
    return (
        <Box sx={styles.card} onClick={handleSpecificPage}>
            <Box sx={styles.imageConatiner}>
                <Box component={'img'} src={props.flatImages} alt="invalid images..." sx={styles.imgage} />
            </Box>
            <Box sx={styles.descriptionConatiner}>
                <Stack sx={{ width: "65%", boxSizing: "border-box" }}>
                    <Typography sx={styles.title}>
                        kaveri appartments , madhapur
                    </Typography>
                    <Typography sx={styles.subTitle}>
                        near BR-Hitech theater ,ayyapaa society
                    </Typography>
                </Stack>
                <Stack sx={{ width: "35%" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: "10px", width: "100%" }}>
                        <Box sx={{ display: "flex", gap: "10px", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%" }}>
                                <Typography sx={styles.rating}>super</Typography>
                                <Typography sx={styles.reviews}>983 reviews</Typography>
                            </Box>
                            <Box sx={{
                                display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 10px", borderRadius: "5px 5px 5px 0px", color: "#FFF", background: "gold", height: "30px", fontFamily: '"Roboto", sans-serif',
                                fontWeight: "600",
                                fontSize: "16px",
                            }}>
                                9.0
                            </Box>
                        </Box>
                        <Button variant="contained" size="small" sx={{
                            textTransform: "none",
                            background: colors.gold,
                            color: "#FFF"
                            , width: "100%"
                        }}>show prices</Button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
export default Card