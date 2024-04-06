import React, { useEffect ,useState } from "react";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [carData, setCarData] = useState([]);

    useEffect(() => {
        getCar();
    }, []);

    const getCar = async () => {
        try {
            const response = await axios.get("http://localhost:5000/" + id);
            console.log(response.data);
            setCarData(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleInputChanges = (event) => {
        const { name, value } = event.target;

        setCarData({ ...carData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            const response = await axios.put("http://localhost:5000/update/" + id, {
                data: carData,
            });
            if (response.data === "Car updated successfully") {
                navigate("/");
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <React.Fragment>
            <Grid container alignContent="center" justifyContent="center" style={{ paddingTop: "50px" }}>
                <Paper elevation={3} style={{ width: 550 }}>
                    <Grid container direction="column" alignItems="center" gap={3}>
                        <br />
                        <Grid item>
                            <Typography variant="h5">Update Car</Typography>
                        </Grid>

                        <Grid item>
                            <Grid container direction="row" gap={3}>
                                <Grid item>
                                    <Grid container direction="column" gap={2}>
                                        <Grid item>
                                            <TextField label="Year" variant="outlined" InputLabelProps={{ shrink: true }} value={carData.year || ""} name="year" onChange={handleInputChanges}/>
                                        </Grid>

                                        <Grid item>
                                            <TextField label="Brand" variant="outlined" InputLabelProps={{ shrink: true }} value={carData.brand || ""} name="brand" onChange={handleInputChanges}/>
                                        </Grid>

                                        <Grid item>
                                            <TextField label="Model" variant="outlined" InputLabelProps={{ shrink: true }} value={carData.model || ""} name="model" onChange={handleInputChanges}/>
                                        </Grid>

                                        <Grid item>
                                            <TextField label="Description" variant="outlined" InputLabelProps={{ shrink: true }} value={carData.description || ""} name="description" onChange={handleInputChanges}/>
                                        </Grid>

                                        <Grid item>
                                            <TextField label="Price" variant="outlined" InputLabelProps={{ shrink: true }} value={carData.price || ""} name="price" onChange={handleInputChanges}/>
                                        </Grid>

                                        <Grid item>
                                            <TextField label="Mileage" variant="outlined" InputLabelProps={{ shrink: true }} value={carData.mileage || ""} name="mileage" onChange={handleInputChanges}/>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Grid container direction="column" gap={2}>
                                        <Grid item>
                                            <TextField label="Image link" variant="outlined" InputLabelProps={{ shrink: true }} value={carData.images || ""} name="images" onChange={handleInputChanges}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleUpdate}>
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment>
    )
};

export default UpdateCar;