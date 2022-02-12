import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { DrawMapComponent } from "../components/draw-map-component"
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const AddAreaPage = () => {
    const [bbox, setbbox] = useState();
    const handleBbox = (event) => {
        console.log("handlebbox", event)
        setbbox(event);
        localStorage.setItem("Bbox", JSON.stringify(event));
    };
    return (
        <Container>
            <Link to='/' state={{ Bbbox: bbox }}>
                <Button variant="outlined">
                    Save
                </Button>
            </Link>
            <DrawMapComponent
                handleBbox={handleBbox}
            />

        </Container>
    )
} 
