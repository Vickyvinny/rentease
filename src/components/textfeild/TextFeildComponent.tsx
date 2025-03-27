import { Box, Stack, TextField } from "@mui/material"
import { colors } from "../../uitils/colors"
import { ChangeEvent } from "react"
interface Iprops {
    label: string,
    placeHolder: string,
    value: string,
    name: string,
    type: string,
    handleChange :(value:ChangeEvent<HTMLInputElement>) => void
}
const styles = {
    input: {
        width: "100%",
    fontFamily: '"Roboto", sans-serif',
        fontSize:"14px",
        padding: "0px !important",
        "& .MuiOutlinedInput-root": {
            padding: "2px",
            "& fieldset": {
                borderColor: colors.gold,
                borderWidth:"1px"
            },
            "&:hover fieldset": {
                borderColor: colors.gold,
            },
            "& input": {
                padding: "4px 8px",
            },
            "&.Mui-focused fieldset": {
                borderColor: colors.gold, // Gold border on active (focus)
              },
        },


    },

    inputContainer: {
        width: "80%",
        gap: "10px",
        margin: "10px 0px"
    },
    label:{
        fontFamily: '"Roboto", sans-serif',
        fontWeight:"400",
        fontSize:"14px",
    },
}
const TextFeildContainer = (props: Iprops) => {
    const handleText = (e:ChangeEvent<HTMLInputElement>) => {
    props.handleChange(e)
    }
    return (
        <Stack sx={styles.inputContainer}>
            <Box component={'label'} sx={styles.label}>{props.label}</Box>
            <TextField placeholder={props.placeHolder} value={props.value} name={props.name} type={props.type} sx={styles.input} onChange={(e:ChangeEvent<HTMLInputElement>) => handleText(e)}/>
        </Stack>
    )
}
export default TextFeildContainer