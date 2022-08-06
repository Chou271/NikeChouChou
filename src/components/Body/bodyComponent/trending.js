import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { textAlign } from '@mui/system';
const Item = styled(Paper)(() => ({
    fontSize: 24,
    marginBottom: 32,
    textAlign: "left"
}));
const TrendingContainer = styled(Paper)(() => ({
    height: 700,
    display: "flex",
    backgroundPosition: "center center",
    alignItems: "flex-end"
}));
const TrendingNames = styled(Paper)(() => ({
    color: 'white',
    fontSize: 25,
    fontWeight: 400,
    marginBottom: 30,
    backgroundColor: "transparent",

}));
const ContentLink = styled(Paper)(() => ({
    color: "black",
    textDecoration: "none"
}));
const ShopLink = styled(Paper)(() => ({
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

}));
const Trending = (props) => {
    return (
        <div>
            <Item >{props.titleTrending}</Item>
            <div>
                <Grid container spacing={3}>
                    {props.dataTrending.map((item, key) => {
                        return (
                            <Grid item xs={12} sm={6} key={key}>
                                <ContentLink href="#a">
                                    <TrendingContainer style={{ backgroundImage: `url(${item.img})` }}>
                                        <div>
                                            <TrendingNames>{item.title}</TrendingNames>
                                            <ShopLink>{item.button}</ShopLink>
                                        </div>
                                    </TrendingContainer>
                                </ContentLink>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </div>
    )
}
export default Trending