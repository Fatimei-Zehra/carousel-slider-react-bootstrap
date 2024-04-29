import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import image1 from "../Img/1.jpg"
import image2 from "../Img/2.jpg"
import image3 from "../Img/3.jpg"
import styles from"../Components/Slider.module.css"



function UncontrolledExample() {
    return (
        <>
        <div className={styles.box} >
        <Carousel>
            <Carousel.Item>
                <Image src={image1} text="First slide"  className={styles.images}/>
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <Image src={image2} className={styles.images} />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <Image src={image3} className={styles.images} />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
        </div>
        </>
    );
}

export default UncontrolledExample;
