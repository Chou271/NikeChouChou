import React from 'react'
import { useDispatch } from 'react-redux';
import MainContainer from '../../components/mainContainer';
import * as action from "../../components/ListProduct/module/Actions/actions"

const HomePage = () => {
    const titleTrending = "Trending";
    const titleMoreNike = "MoreNike";
    const carouselImg = [
        "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1632,c_limit/9064fe24-7ac5-4baa-a7ee-8d15bb3a11ba/men-s-shoes-clothing-accessories.png",
        "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1632,c_limit/9064fe24-7ac5-4baa-a7ee-8d15bb3a11ba/men-s-shoes-clothing-accessories.png",
    ];
    const dataTrending = [
        {
            img:
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/145ace69-14e0-48c2-98ec-e06c70b0c47c/nike-just-do-it.png",
            title: "LeBron 18 'Equation'",
            button: "Shop",
        },
        {
            img:
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_706,c_limit/74a1b695-68db-41c5-9a16-02df015827fd/nike-just-do-it.jpg",
            title: "Sisterhood of Sport Collection",
            button: "Shop",
        },
    ];
    const dataMoreNike = [
        {
            img:
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/54238927-c5aa-46a3-abff-25162b3b1fd7/nike-just-do-it.png",
            titleButton: "Men's",
        },
        {
            img:
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/e64cc521-c652-49bd-bf62-f04cf9cb6b60/nike-just-do-it.png",
            titleButton: "Women's",
        },
        {
            img:
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/aa8d60e4-d556-4022-9f83-9058601c20a4/nike-just-do-it.png",
            titleButton: "Kid's",
        },
    ];
    const merchMenu = [
        {
            id: 1,
            heading: "Icons",
            title1: "Air Force 1",
            title2: "Huarache",
            title3: "Air Max 90",
            title4: "Air Max 95",
            title5: "Air Max 97",
            title6: "Air Max 270",
            title7: "Air Max 720",
            title8: "All Air Max",
            title9: "Vapormax",
        },
        {
            id: 2,
            heading: "Shoes",
            title1: "All Shoes",
            title2: "Custom Shoes",
            title3: "Jordan Shoes",
            title4: "Running Shoes",
            title5: "Basketball Shoes",
            title6: "Football Shoes",
            title7: "Gym & Training Shoes",
            title8: "Lifestyle Shoes",
        },
        {
            id: 3,
            heading: "Clothing",
            title1: "All Clothing",
            title2: "Modest Wear",
            title3: "Hoodies & Pullovers",
            title4: "Shirts & Tops",
            title5: "Jackets",
            title6: "Compression & Nike Pro",
            title7: "Trousers & Leggings",
            title8: "Shorts",
        },
        {
            id: 4,
            heading: "Kid's",
            title1: "Infant & Toddler Shoes",
            title2: "Kids' Shoes",
            title3: "Kids' Jordan Shoes",
            title4: "Kids' Basketball Shoes",
            title5: "Kids' Running Shoes",
            title6: "Kids' Clothing",
            title7: "Kids' Backpacks",
            title8: "Kids' Socks",
        },
    ];
    const summerShop = [
        {
            img:
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_700,c_limit/69cf0914-6d35-4d33-98e0-b292b9c567b3/image.png",
            title: "Shop Tees",
            button: "Tees",
        },
        {
            img:
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_700,c_limit/56807f5e-62ca-4344-9846-ff375ee4c062/nike-just-do-it.png",
            title: "Shop Shorts",
            button: "Shorts",
        },
        {
            img:
                "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_700,c_limit/f1de9697-1ac9-42ec-a856-ff8d8063cd44/nike-just-do-it.png",
            title: "Shop Sandals",
            button: "Sandals",
        }
    ]
    const dataAllday = [
        {
            title1: "ALL DAY, ALL NEW, ALL YOU"
        },
        {
            title2: "Nike Alate Sports Bras"
        },
        {
            title3: "The new Nike Alate was made to move with you. All. Day. Long."
        },
        "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/21556047-c937-44b5-b92b-d3029c4ff7a1/nike-just-do-it.png",
        { button: "Shop" }
    ]
    const dispatch = useDispatch();
    // search gg tim hiểu useEffect
    React.useEffect(() => {
        dispatch(action.actionGetProductAPI("male", "clothing"))
    }, [])
    return (

        <React.Fragment>
            {/*  */}


            <MainContainer
                carouselImg={carouselImg}
                titleTrending={titleTrending}
                dataTrending={dataTrending}
                titleMoreNike={titleMoreNike}
                dataMoreNike={dataMoreNike}
                merchMenu={merchMenu}
                summerShop={summerShop}
                dataAllday={dataAllday}
            />


        </React.Fragment>
    )
}

export default HomePage