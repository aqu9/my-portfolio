import About from "@app/component/About/About";
import PersonalInfo from "@app/component/PersonalInfo";
import Header from "@app/component/header";
import { Box } from "@mui/material";
export default function Home() {
    return (
        <>
            <Box sx={{height:"100vh"}}>
                <Header />
                <PersonalInfo/>
            </Box>
            <Box sx={{height:"100vh", background:"#3C4043"}} id="ABOUT"><About /></Box>
        </>
    );
}
