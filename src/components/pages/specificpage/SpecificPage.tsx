import { Box, Paper, Stack, Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import image1 from '../specificpage/images/flat1.jpg';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import image2 from '../specificpage/images/flat12.jpg';

import image3 from '../specificpage/images/flat13.jpg';

import image4 from '../specificpage/images/flat4.jpg';

import image5 from '../specificpage/images/flat5.jpg';

import image6 from '../specificpage/images/flat6.jpg';

import image7 from '../specificpage/images/flat7.jpg';

import image8 from '../specificpage/images/flat8.jpg';

import image9 from '../specificpage/images/flat9.jpg';
import AltitudeTracker from "../../maps/Googlemaps";

const roomIMages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
const flats = [
    {
        name: "sri lakshmi venkateswara appartments",
        landmark: "near Dmart",
        street: "ayyappa society",
        dno: "1-24/30",
        area: "madhapur",
        city: "hyderabad",
        pincode: 500081,
        photos: roomIMages,
        isFav: false,
        roomType: "1bhk",
        max: 4,
        isAvaliable: true,
        bookingDate: new Date().toLocaleDateString(),
        description: "1 bhk Appartment in",
        visitingTime: "",
        rent: 25000,
        nonveg: "allowed",
        veg: "allowed",
        type: "family/bachelor/co-living",
        furnitureType: "semi-furniture",
        deposite: 0,
        bedrooms: 1,
        parking: "bike only",
        pets: "allowed",
        fixedDeposite: 25000,
        maintaince: 500,
    },
    {
        name: "mn mazil",
        landmark: "near community hall parvath nagar",
        street: "community hall",
        dno: "1-2/30",
        area: "parvath nagar",
        city: "hyderabad",
        pincode: 500071,
        photos: roomIMages,
        isFav: false,
        roomType: "1bhk",
        max: 4,
        isAvaliable: true,
        bookingDate: new Date().toLocaleDateString(),
        description: "1 bhk Appartment in",
        visitingTime: "",
        rent: 25000,
        nonveg: "allowed",
        veg: "allowed",
        type: "family/bachelor/co-living",
        furnitureType: "semi-furniture",
        deposite: 0,
        bedrooms: 1,
        parking: "bike only",
        pets: "not allowed",
        fixedDeposite: 25000,
        maintaince: 500,
    },
    {
        name: "srinu Apparments",
        landmark: "near BRS office",
        street: "thanda",
        dno: "1-254/57",
        area: "madhapur",
        city: "hyderabad",
        pincode: 500083,
        photos: roomIMages,
        isFav: false,
        roomType: "1bhk",
        max: 10,
        isAvaliable: true,
        bookingDate: new Date().toLocaleDateString(),
        description: "1 bhk Appartment in",
        visitingTime: "",
        rent: 32000,
        nonveg: "allowed",
        veg: "allowed",
        type: "family/bachelor/co-living",
        furnitureType: "semi-furniture",
        deposite: 0,
        bedrooms: 1,
        parking: "bike only",
        pets: "allowed",
        fixedDeposite: 25000,
        maintaince: 500,
    }
];
const styles = {
    mapConatiner: {
        borderRadius: "10px",
        width: "28%",
        overflow: "hidden"
    },
    imageContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        gap: "10px",
        width: "70%",
        height: "75vh",
        boxSizing: "border-box"
    },
    dynamicBox: {
        background: "#f5f5f5", // Light grey background
        width: "100%", // Full width
        minHeight: "50px", // Minimum height
        padding: "10px",
        borderRadius: "8px",
        flexGrow: 1, // Let it expand dynamically
    },
    showMap: {
        padding: "5px 10px",
        background: "gold",
        color: "white",
        borderRadius: "20px",
        cursor: "pointer"
    },
    conatiner: {
        width: "90%",
        minHeight: "100vh",
        boxSizing: "border-box",
        margin: "10px 0px",
        gap:"10px"
    },
    title: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "500",
        fontSize: "20px",
    },
    subTitle: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "14px",
        color: "grey",
        display: 'flex',
        alignItems: "center",
        gap: "5px"
    },
    details: {
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "10px"
    }
}
const SpecificPage = () => {
    const params = useParams();
    const product = flats.filter((each, index) => index == Number(params.id))
    return (
        <Stack justifyContent={"center"} alignItems={"center"} width={"100%"} >
            <Stack sx={styles.conatiner}>
                <Typography sx={styles.title}>Arunai Grand - Sollinganallur</Typography>
                <Typography sx={styles.subTitle}>
                    <FmdGoodIcon sx={{ color: "gold" }} />India 3 A, 3 rd Cross Street, Parameswaran Nagar, Sollinganallur, Chennai 600 009, 600119 Chennai, India–<Box sx={styles.showMap}>Show map</Box>
                </Typography>
                <Stack direction={'row'} gap={'10px'}>
                    <Box component={'a'} href="#pricedetails">price details</Box>
                    <Box component={'a'} href="#contactdetails">contact details</Box>
                </Stack>
                <Box sx={styles.details}>
                    <Box sx={styles.imageContainer}>
                        <Box sx={{ width: "100%", height: "70%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box component={'img'} src={product[0].photos[0]} sx={{ width: "58%", height: "100%", objectFit: "cover", borderRadius: "5px" }} />
                            <Stack sx={{ width: "40%", height: "100%", gap: "5px" }}>
                                <Box component={'img'} src={product[0].photos[1]} sx={{ width: "100%", height: "49%", objectFit: "cover", borderRadius: "5px" }} />
                                <Box component={'img'} src={product[0].photos[2]} sx={{ width: "100%", height: "49%", objectFit: "cover", borderRadius: "5px" }} />
                            </Stack>
                        </Box>
                        <Box sx={{ width: "100%", height: "30%" }}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "3fr 3fr 3fr 3fr", height: "20%", gap: "10px" }}>
                                <Box component={'img'} src={product[0].photos[3]} sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }} />
                                <Box component={'img'} src={product[0].photos[4]} sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }} />
                                <Box component={'img'} src={product[0].photos[5]} sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }} />
                                <Box component={'img'} src={product[0].photos[6]} sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "5px" }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={styles.mapConatiner}>
                        <AltitudeTracker />
                    </Box>
                </Box>
                <Paper elevation={4} id="pricedetails" sx={{ width: "100%", marginTop: "20px", padding: "10px", display: "grid", gridTemplateColumns: "4fr 4fr 4fr" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", flexDirection: "column" }}>
                        <Typography>{product[0].rent} rs/-</Typography>
                        <Typography>Rent(negosiable)</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", flexDirection: "column" }}>
                        <Typography>{product[0].deposite} rs/-</Typography>
                        <Typography>Deposite</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", flexDirection: "column" }}>
                        <Typography>{product[0].maintaince} rs/-</Typography>
                        <Typography>maintainance</Typography>
                    </Box>
                </Paper>
                <Paper elevation={4} sx={{padding:"10px",width:"20%",gap:"10px",display:"flex",flexDirection:"column"}} id="contactdetails">
                    <Box>owner:Ramireddy</Box>
                    <Box>mobile:6300215266</Box>
                </Paper>
            </Stack>

        </Stack>
    )
}
export default SpecificPage;