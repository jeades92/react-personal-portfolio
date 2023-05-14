import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
// import astro from "../assets/images/astromon.svg"

export const AboutMe = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Desingner" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 180);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            // setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{` Hi I'm James `}<span className="wrap">{text}</span></h1>
                        <p>I'm a passionate junior developer on the lookout for exciting projects in the realm of entrepreneurship. I thrive on collaboration and possess an insatiable thirst for learning, always seeking opportunities to expand my skill set. With an eagerness to take on new challenges, I'm ready to contribute my expertise and grow alongside innovative teams.</p>
                    </Col>
                    {/* <Col xs={12} md={6} xl={5}>
                        <img src={astro} alt ="Astronaut" className="astro-image"/>
                    </Col> */}

                </Row>
            </Container>
        </section>
    )
}