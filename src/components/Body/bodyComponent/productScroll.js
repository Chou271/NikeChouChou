import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

const Titile = styled(Paper)(() => ({
  fontSize: 24,
  marginBottom: 32,
  textAlign: "left"
}));
const Container = styled(Paper)(() => ({
  padding: 0,
  whiteSpace: "nowrap",
  overflowX: "hidden",
  cursor: "pointer",
  "&:hover": {
    overflowX: "scroll",
  },
  "&::-webkit-scrollbar": {
    backgroundColor: "#f5f5f5",
    height: 8,
  },
  "&::-webkit-scrollbar-track": {
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: 10,
    webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
    backgroundColor: "#757575",
  },
}));
const Product = styled(Paper)(() => ({
  width: 390,
  listStyle: "none",
  display: "inline-block",
  marginRight: 20,
  marginBottom: 40,
}));
const ProductImage = styled(Paper)(() => ({
  "&:hover": {
    opacity: 0.7,
  },
  width: "100%",
  transition: "opacity 1s",

}));
const ProductDetailContainer = styled(Paper)(() => ({
  fontSize: 16,
  display: "flex",
  marginTop: 12,
  lineHeight: 1.5,
  whiteSpace: "normal",

}));
const ProductDetail = styled(Paper)(() => ({
  flex: "0 0 300px",

}));
const Price = styled(Paper)(() => ({
  flex: "1 1 auto",

}));
const ProductType = styled(Paper)(() => ({
  color: "#757575",

}));
const ProductScroll = () => {
  // state full trong reducer have useSelector is maptatetoprops
  const data = useSelector((state) => state.reducerURL?.data)
  const isLoading = useSelector((state) => state.reducerURL?.isLoading)
  const listProduct = data.slice(0, 5).map((item, key) => {

    return (
      <Product key={key}>
        <Link to={{ pathname: `/detailProduct/${item._id}` }}>
          <ProductImage>
            <img src={item.img} width={390} />
          </ProductImage>
        </Link>

        <ProductDetailContainer>
          <ProductDetail>
            <ProductType>
              {item.name}
            </ProductType>
            <ProductType>
              {item.message}
            </ProductType>
          </ProductDetail>

          <Price>{item.price.toLocaleString()} d</Price>
        </ProductDetailContainer>
      </Product>
    )
  })
  var listProductScrollLazyLoad = [];
  for (let i = 0; i < 9; i++) {
    listProductScrollLazyLoad.push(
      <Product key={i}>
        <Skeleton>
          <ProductImage>
            <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_537,c_limit/41b07108-98be-443c-9533-11d732c411a4/air-max-97-shoes-Tmhzv0.png" />
          </ProductImage>
        </Skeleton>
        <ProductDetailContainer>
          <ProductDetail>
            <Skeleton width="70%">
              <ProductType>product type</ProductType>
              <ProductType>product name</ProductType>
            </Skeleton>
          </ProductDetail>
          <Price>2.000.000đ</Price>
        </ProductDetailContainer>
      </Product>
    )
  }

  return (
    <div>
      <Titile>
        Clean Looks, Sustainable Materials

      </Titile>
      {isLoading ?
        <Container>{listProductScrollLazyLoad}</Container>
        :
        <Container>{listProduct}</Container>

      }


    </div>
  )
}

export default ProductScroll