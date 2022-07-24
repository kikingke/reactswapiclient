import React from 'react'
import huge from '../../assets/huge.png'
import {
    Container,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../Info/Info.css'

export default function Info() {
    return (
        <div className="blur">
            <Container className="infocontainer d-flex justify-content-center align-items-center">
                <Card
                    className="d-flex justify-content-center align-items-center"
                    color="dark"
                    inverse
                    style={{
                        width: '50rem',
                    }}
                >
                    <CardHeader className="d-flex justify-content-between">
                        <CardTitle tag="h5">React Assesment</CardTitle>
                        <img src={huge} alt="" width={80} />
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            This was an assesment in order to test some tech
                            skills as me as candidate for a FrontEnd React Dev
                            position in the awesome company Nica Source.
                        </CardText>
                    </CardBody>
                    <CardFooter className="d-flex justify-content-between">
                        <Link to="/" className="backtn">
                            <i className="far fa-arrow-alt-circle-left"></i>
                            Regresar
                        </Link>
                        <Link to="/credits" className="backtn">
                            Ver Creditos Start Wars
                        </Link>
                        <a
                            href="https://aburtocampos.blogspot.com/"
                            className="backtn"
                        >
                            Visita mi Sitio{' '}
                            <i className="far fa-arrow-alt-circle-right"></i>
                        </a>
                    </CardFooter>
                </Card>
            </Container>
        </div>
    )
}
