import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

const CarCard = (props) => {
    const [car, setCar] = useState(props.car);
    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate("/updateCar/" + id);
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete("http://localhost:5000/cars/delete/" + id);
            console.log(response.data);
            if (response.data === "Car deleted") {
                props.getCars();
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <React.Fragment>
            <Card
                variant="outlined"
                sx={{
                width: 400,
                height: 450,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                }}
            >
                <CardHeader title={car.year + " " + car.brand + " " + car.model} />
                <CardMedia
                    component="img"
                    height="194"
                    image={car.images}
                    alt="Image of Car"
                />
                <CardContent>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="body2" color="text.secondary">
                            {car.description}
                        </Typography>
                        <Stack direction="column" spacing={1}>
                            <Typography variant="body1" color="text.primary">
                                Mileage: {car.mileage}km
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                Price: ${car.price}
                            </Typography>
                        </Stack>
                    </Stack>    
                </CardContent>
                <CardActions>
                    <Stack direction="row" gap={2}>
                        <Button color="warning" variant="contained" onClick={() => handleUpdate(car._id)}>
                            Update
                        </Button>
                        <Button color="error" variant="contained" onClick={() => handleDelete(car._id)}>
                            Delete
                        </Button>
                    </Stack>
                </CardActions>    
            </Card>
        </React.Fragment>
    )
};

export default CarCard;