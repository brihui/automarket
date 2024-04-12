import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState();
    // const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        // setIsAdmin(localStorage.getItem("isAdmin"));
    }, [token]);

    const goToHome = () => {
        navigate("/");
    };

    const goToSellCar = () => {
        navigate("/sellCar");
    };

    const goToLogin = () => {
        navigate("/login");
    };

    const logout = () => {
        localStorage.clear()
        setToken(null);
        navigate("/");
    };

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            AutoMarket
                        </Typography>
                        <Button color="inherit" onClick={goToHome}>
                            Home
                        </Button>
                        <Button color="inherit" onClick={goToSellCar}>
                            Sell Car
                        </Button>
                        {!token ? (
                            <Button color="inherit" onClick={goToLogin}>
                                Login
                            </Button>
                        ) : (
                            <Button color="inherit" onClick={logout}>
                                Logout
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </React.Fragment>
    )
};

export default NavBar;