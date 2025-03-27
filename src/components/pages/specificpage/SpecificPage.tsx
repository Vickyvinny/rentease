import { Box, Stack, Typography } from "@mui/material";
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

// Type definition for Flat
interface Flat {
    name: string;
    landmark: string;
    street: string;
    dno: string;
    area: string;
    city: string;
    pincode: number;
    photos: string[];
    isFav: boolean;
    roomType: string;
    max: number;
    isAvaliable: boolean;
    bookingDate: string;
    description: string;
    visitingTime: string;
    rent: number;
    nonveg: string;
    veg: string;
    type: string;
    furnitureType: string;
    deposite: number;
    bedrooms: number;
    parking: string;
    pets: string;
    fixedDeposite: number;
    maintaince: number;
}

// Room images for flats
const roomIMages = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

// Flats data
const flats: Flat[] = [
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

// Styling for the component
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

// The SpecificPage component
const SpecificPage = () => {
    const params = useParams();
    
    // Filter the flats by the pincode (id parameter)
    const product: Flat[] = flats.filter((flat) => flat.pincode === Number(params.id));

    // Handle case where no matching product is found
    if (product.length === 0) {
        return <Typography>No matching product found.</Typography>;
    }

    return (
        <Stack justifyContent={"center"} alignItems={"center"} width={"100%"}>
            <Stack sx={styles.conatiner}>
                <Typography sx={styles.title}>{product[0].name}</Typography>
                <Typography sx={styles.subTitle}>
                    <FmdGoodIcon sx={{ color: "gold" }} />{product[0].landmark} - {product[0].city} - {product[0].pincode}
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
                    <Box sx={{ width: "30%", height: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <Box sx={styles.dynamicBox}>bedrooms: {product[0].bedrooms}</Box>
                        <Box sx={styles.dynamicBox}>rent: {product[0].rent}</Box>
                        <Box sx={styles.dynamicBox}>furniture type: {product[0].furnitureType}</Box>
                        <Box sx={styles.dynamicBox}>deposit: {product[0].deposite}</Box>
                        <Box sx={styles.dynamicBox}>pets: {product[0].pets}</Box>
                        <Box sx={styles.dynamicBox}>parking: {product[0].parking}</Box>
                        <Box sx={styles.dynamicBox}>max occupants: {product[0].max}</Box>
                        <Box sx={styles.dynamicBox}>
                            <button style={styles.showMap} onClick={() => { window.scrollTo(0, 0); }}>Show on map</button>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
};

export default SpecificPage;
