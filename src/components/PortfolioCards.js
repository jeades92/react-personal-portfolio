import { Col } from 'react-bootstrap'


export const ProjectCard = ({ title, description, imgUrl }) => {
    return(
        <Col sm={6} md={4}>
            <div className="port-imgbx">
                <img src={imgUrl} />
                <div className="port-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}