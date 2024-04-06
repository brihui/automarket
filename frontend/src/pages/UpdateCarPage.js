import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UpdateCar from "../components/UpdateCar";

const UpdateCarPage = () => {
    return (
        <React.Fragment>
            <NavBar />
            <UpdateCar />
        </React.Fragment>
    );
};

export default UpdateCarPage;