import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Item: {
        fontSize: 24,
        marginBottom: 32,
        textAlign: "left"
    },
    summerContainer: {
        height: "700px",
        display: "flex",
        backgroundPosition: "center center",
        alignItems: "flex-end"
    },
    summerNames: {
        color: 'white',
        fontSize: 25,
        fontWeight: 400,
        marginBottom: 30,
        backgroundColor: "transparent",
    },
    ShopLink: {
        color: "black",
        textDecoration: "none",
        margin: "0 8px 8px 0",
        padding: "8px 28px",
        backgroundColor: "white",
        borderRadius: 20,
        fontSize: 16,
        textAlign: "center",

        "&:hover": {
            opacity: 0.8,
            transition: 0.75
        }
    }
})
const SummerShop = (props) => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.Item} >Summer Shop
            </div >
            <div>
                <Grid container spacing={3}>
                    {props.summerShop.map((item, key) => {
                        return (
                            <Grid item xs={12} sm={4} key={key}>
                                <div href="#a">
                                    <div className={classes.summerContainer} style={{ backgroundImage: `url(${item.img})` }}>
                                        <div>
                                            <div className={classes.summerNames}>{item.title}</div>
                                            <div className={classes.ShopLink}>{item.button}</div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default SummerShop