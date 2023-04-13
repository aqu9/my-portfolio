import Header from "@app/component/header"
import PersonalInfo from "@app/component/PersonalInfo"
import { Box } from "@mui/material";
export default function Home() {
    return (
        <>
            <Box sx={{height:"100vh"}}>
                <Header />
                <PersonalInfo/>
            </Box>
            <Box sx={{height:"100vh", background:"red"}} id="ABOUT"></Box>
        </>
    );
}
