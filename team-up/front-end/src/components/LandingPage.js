import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import gsap from 'gsap';

const LandingPage = () => {

    useEffect(() => {
        const container = document.querySelector('.landing-page');
        const circles = document.querySelectorAll('.circle');

        // Get the container's dimensions and position
        const containerRect = container.getBoundingClientRect();
        const circleSize = 400; // Size of the circle

        // Function to check if two circles overlap
        const isOverlapping = (x1, y1, x2, y2, size) => {
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            return distance < size;
        };

        // Function to position circles without overlapping
        const positionCircles = () => {
            const positions = [];

            circles.forEach(circle => {
                let xPosition, yPosition, overlapping;

                do {
                    xPosition = Math.random() * (containerRect.width - circleSize);
                    yPosition = Math.random() * (containerRect.height - circleSize);
                    overlapping = positions.some(pos => isOverlapping(xPosition, yPosition, pos.x, pos.y, circleSize));
                } while (overlapping);

                positions.push({ x: xPosition, y: yPosition });

                // Set the position using CSS left and top properties instead of transform properties
                gsap.set(circle, {
                    left: xPosition,
                    top: yPosition,
                    opacity: 0 // Start with 0 opacity
                });

                // Log the circle's position relative to the container
                console.log('Circle position:', { left: xPosition, top: yPosition });
            });

            return positions;
        };

        positionCircles();

        // Timeline for flicker and reposition animation
        const tl = gsap.timeline({ repeat: -1 });

        // Opacity flicker animation
        tl.to(circles, {
            duration: 10,
            ease: "power1.in",
            opacity: 1
        })
        .to(circles, {
            duration: 10,
            ease: "power1.out",
            opacity: 0,
            onComplete: () => {
                // Reposition circles after 2 flickers without animation
                const newPositions = positionCircles();
                circles.forEach((circle, index) => {
                    gsap.set(circle, {
                        left: newPositions[index].x,
                        top: newPositions[index].y
                    });
                });
            }
        });

    }, []);

    return (
        <>
            <Container fluid className='landing-page background'>
                <h1 className='Title'>Find <span style={{color:"#963D5A"}}>Your</span> Team,</h1>
                <h1 className='Title'>Join the <span style={{color:'#963D5A'}}>Community.</span></h1>
                {/* Add circles to the page */}
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </Container>
        </>
    );
};

export default LandingPage;
