import React from 'react'
import Body from './Body/body'

const MainContainer = (props) => {

    return (
        <React.Fragment>
            <Body carouselImg={props.carouselImg}
                titleTrending={props.titleTrending}
                dataTrending={props.dataTrending}
                titleMoreNike={props.titleMoreNike}
                dataMoreNike={props.dataMoreNike}
                merchMenu={props.merchMenu}
                summerShop={props.summerShop} />
        </React.Fragment>
    )
}

export default MainContainer