import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

import NavBar from "../components/NavBar";
import CarCard from "../components/CarCard";

const HomePage = () => {
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        getCars();
    }, []);

    const getCars = async () => {
        try {
            const response = await axios.get("http://localhost:5000/cars/read");
            setCarList(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <React.Fragment>
            <NavBar />
            <Grid container spacing={2} sx={{ paddingTop: 2, paddingLeft: 3 }}>
                {carList.length !== 0 &&
                    carList.map((car) => (
                        <Grid item key={car._id}>
                            <CarCard key={car._id} car={car} getCars={() => getCars()} />
                        </Grid>
                    ))}
            </Grid>
        </React.Fragment>
    );
};

export default HomePage;