import React, { useEffect } from "react";
import { useSelector } from "../hooks/useSelector";
import { useActions } from "../hooks/useActions";
import PageHeader from "../pageHeader/PageHeader";
import HeroCard from "../heroesPage/heroCard/HeroCard";


import '../../App.scss';
import useTranslate from "../hooks/useTranslate";
// import { Box, Tab, Tabs, TabPanel } from "@mui/material";

type PropsType = {};

const Favourites: React.FC<PropsType> = () => {

    const { fetchAllHeroes } = useActions();
    const { t } = useTranslate();

    const data = useSelector(state => state.heroes.data);
    const favoHero = useSelector(state => state.heroes.favoHero);
    const loading = useSelector(state => state.heroes.loading);
    const error = useSelector(state => state.heroes.error);

    const filteredData = data.filter(hero => favoHero.includes(hero.id));

    // const handleChange = () => {

    // }

    useEffect(() => {
        fetchAllHeroes();
    }, []);


    return (
        <div className="results-page-wrap">
            <PageHeader />
            <div className="results-wrap container">
                {/* {
                    filteredData
                ?
                    <> */}
                        <div className="cards">
                            {filteredData.map( item => (<HeroCard key={item.id} data={item} />))}
                        </div>
                        {loading && "loading..."}
                        {error}
                    {/* </>
                :
                    <p>
                        {t("emptyFavoHeroes")}
                    </p>
                } */}
            </div>
        </div>
    )
}

export default Favourites;

// import * as React from 'react';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// interface TabPanelProps {
//     children?: React.ReactNode;
//     dir?: string;
//     index: number;
//     value: number;
// }

// function TabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`full-width-tabpanel-${index}`}
//         aria-labelledby={`full-width-tab-${index}`}
//         {...other}
//         >
//         {value === index && (
//             <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//             </Box>
//         )}
//         </div>
//     );
//     }

//     function a11yProps(index: number) {
//         return {
//             id: `full-width-tab-${index}`,
//             'aria-controls': `full-width-tabpanel-${index}`,
//         };
//     }

// export default function FullWidthTabs() {
//     const theme = useTheme();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//     };

//     const handleChangeIndex = (index: number) => {
//         setValue(index);
//     };

//     return (
//         <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
//         <AppBar position="static">
//             <Tabs
//             value={value}
//             onChange={handleChange}
//             indicatorColor="secondary"
//             textColor="inherit"
//             variant="fullWidth"
//             aria-label="full width tabs example"
//             >
//             <Tab label="Item One" {...a11yProps(0)} />
//             <Tab label="Item Two" {...a11yProps(1)} />
//             <Tab label="Item Three" {...a11yProps(2)} />
//             </Tabs>
//         </AppBar>
//         <SwipeableViews
//             axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//             index={value}
//             onChangeIndex={handleChangeIndex}
//         >
//             <TabPanel value={value} index={0} dir={theme.direction}>
//             Item One
//             </TabPanel>
//             <TabPanel value={value} index={1} dir={theme.direction}>
//             Item Two
//             </TabPanel>
//             <TabPanel value={value} index={2} dir={theme.direction}>
//             Item Three
//             </TabPanel>
//         </SwipeableViews>
//         </Box>
//     );
// }
