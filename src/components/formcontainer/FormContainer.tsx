import { Box } from "@mui/material"
interface Iprops{
    title:string,
    subTitle:string,
    
}
const loginDetails = [
    {
        type:"text",
        component:"input",
        name:"userName",
        placeHolder:"example@gmail.com",
        value:"",
        label:"UserName"
    },
    {
        type:"password",
        component:"input",
        name:"password",
        placeHolder:"12345",
        value:"",
        label:"Password"
    },
]
const FormContainer = () => {
    return (
        <Box></Box>
    )
}
export default FormContainer