import React from 'react'
import { Container, CssBaseline } from '@mui/material'
import Detailproduct from '../../components/DetailProduct/detailproduct'
import { useParams } from 'react-router-dom'

const Detailpage = () => {
    const { id } = useParams()
    return (
        <React.Fragment>
            <CssBaseline>
                <Container maxWidth="lg">
                    <Detailproduct id={id} />
                </Container>
            </CssBaseline>
        </React.Fragment>
    )
}

export default Detailpage