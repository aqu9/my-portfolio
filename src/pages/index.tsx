import About from "@app/component/About/About";
import PersonalInfo from "@app/component/PersonalInfo";
import Header from "@app/component/header";
import { Box } from "@mui/material";
export default function Home() {
    return (
        <>
            <Header />
            <Box sx={{height:"100vh",py:"70px"}} id="HOME">
                <PersonalInfo/>
            </Box>
            <Box sx={{height:{xs:"auto", sm:"100vh"},py:"70px", background:"#3C4043"}} id="ABOUT">
                <About />
            </Box>
            <Box sx={{height:"100vh",py:"70px"}} id="PROJECTS">
                <PersonalInfo/>
            </Box>
        </>
    );
}
