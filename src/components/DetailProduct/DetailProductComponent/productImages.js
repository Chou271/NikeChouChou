import React from 'react'
import { Card, CardActionArea, CardMedia, Skeleton } from '@mui/material';
import { Container } from '@mui/system';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    ProductContainer: {
        padding: "0 44px",
        fontSize: 16,
        lineHeight: 1.7
    },
    ProductImage: {
        width: "100%"
    },
    image: {
        maxHeight: "100%",
        maxWidth: "100%"

    },
}))

const ProductImages = ({ detailProduct, index }) => {
    const classes = useStyles()
    return (
        <div>
            <Container maxWidth='xl'>
                {detailProduct.imgDetails[index].imgs.map((item, index) => {
                    return (
                        <Card className={classes.image} key={index}>
                            {

                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        className={item.img}
                                        image={item.img}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                            }
                        </Card>
                    )
                })}
            </Container></div>
    )
}

export default ProductImages