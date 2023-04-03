import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const CardProduct = ({data}) => {
    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={data.img} style={{height: "22rem", width:"22rem"}}
                    alt="Product"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {data.name}
                    </Typography>
                    <Typography variant="body2" color="Black">
                        $ {data.price}
                    </Typography>
                    <Typography variant="body2" color="Black">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default CardProduct