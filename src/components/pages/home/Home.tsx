import { Box, Checkbox, Chip, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { colors } from "../../../uitils/colors";
import Card from "../../card/Card";
import flat6 from '../../pages/home/images/1bhk6.avif'
import flat1 from '../../pages/home/images/1bhk2.avif'
import flat2 from '../../pages/home/images/1bhk3.avif'
import flat3 from '../../pages/home/images/1bhk4.avif'
import flat4 from '../../pages/home/images/1bhk5.jpg'
import flat5 from '../../pages/home/images/1bhk6.avif'
import { yellow } from "@mui/material/colors";
import { ChangeEvent, useState } from "react";
const flatImages = [flat1, flat2, flat3, flat4, flat5, flat6];
const filter = ["family", "bacheloar", "2bhk", "1bhk", "singleroom/1rk"];
const flats = [
    {
        name: "sri lakshmi venkateswara appartments",
        landmark: "near Dmart",
        street: "ayyappa society",
        dno: "1-24/30",
        area: "madhapur",
        city: "hyderabad",
        pincode: 500081,
        photos: [],
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
        pets: "allowed"
    },
    {
        name: "mn mazil",
        landmark: "near community hall parvath nagar",
        street: "community hall",
        dno: "1-2/30",
        area: "parvath nagar",
        city: "hyderabad",
        pincode: 500071,
        photos: [],
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
        pets: "not allowed"
    },
    {
        name: "srinu Apparments",
        landmark: "near BRS office",
        street: "thanda",
        dno: "1-254/57",
        area: "madhapur",
        city: "hyderabad",
        pincode: 500083,
        photos: [],
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
        pets: "allowed"
    }
];
const styles = {
    chipContainer: { display: "flex", gap: '10px', flexWrap: "wrap" },
    chip: { minWidth: "100px", borderRadius: "20px", padding: "5px 10px", border: `1px solid ${colors.gold}`, display: 'flex', justifyContent: "space-between", alignItems: "center", background: "#FFF", color: colors.gold },
    close: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "17px",
    },
    cardContainerTitle: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "600",
        fontSize: "20px",
    },
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: '5px'
    },
    filterContainer: {
        width: "30%",
        position: "sticky",
        top: "60px"
    },
    cardsContainer: {
        width: "60%",
        gap: "10px"
    },
    filterName: {
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "400",
        fontSize: "14px",
    }
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Home = () => {
    const [filters, setFilters] = useState({
        family: false,
        bacheloar: false,
        "1bhk": false,
        "2bhk": false,
        singleroom: false

    });
    const handleClose = () => {

    }
    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target
        let result;
        switch (value) {
            case "family": setFilters((prev) => ({ ...prev, family: checked }))
                break;
            case "bacheloar": setFilters((prev) => ({ ...prev, bacheloar: checked }))
                break;
            case "1bhk": setFilters((prev) => ({ ...prev, "1bhk": checked }))
                break;
            case "2bhk": setFilters((prev) => ({ ...prev, "2bhk": checked }))
                break;
            case "singleroom/1rk": setFilters((prev) => ({ ...prev, "singleroom/1rk": checked }))
                break;

        }
    };
    return (
        <Box sx={styles.container}>
            <Stack sx={styles.filterContainer}>
                <Stack >
                    <Typography>popular filters :</Typography>
                    {
                        filter.map((each, index) => <Box>
                            <Checkbox
                                {...label}
                                sx={{
                                    color: yellow[800],
                                    '&.Mui-checked': {
                                        color: yellow[600],
                                    },
                                }}
                                value={each} onChange={handleCheckbox} /> {each}
                        </Box>)
                    }
                </Stack>
            </Stack>
            <Stack sx={styles.cardsContainer}>
                <Typography sx={styles.cardContainerTitle}>Rome : 5,543 properties found</Typography>
                <Box sx={styles.chipContainer}>
                    {
                        Object.entries(filters)
                            .filter(([key, value]) => value === true)
                            .map(([key]) => (
                                <Box sx={styles.chip} key={key}>
                                    <Box sx={styles.filterName}>
                                        {key}
                                    </Box>
                                    <CloseIcon onClick={handleClose} />
                                </Box>
                            ))
                    }
                </Box>
                <Stack sx={{ width: "100%", gap: "10px" }}>
                    {
                        flatImages.map((flatImages, index) => <Card flatImages={flatImages} id={index} key={index} />)
                    }
                </Stack>

            </Stack>
        </Box>
    )
}
export default Home