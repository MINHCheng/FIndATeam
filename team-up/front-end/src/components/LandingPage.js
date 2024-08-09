import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@fortawesome/fontawesome-free/css/all.min.css';

const LandingPage = () => {

    useEffect(() => {
        const container = document.querySelector('.landing-page');
        const circles = document.querySelectorAll('.circle');
        const arrow = document.querySelector('.fa-angle-down')

        const getCircleSize = () => {
            return 0.2 * window.innerWidth; // Size of the circle
        };

        const positionCircles = () => {
            const containerRect = container.getBoundingClientRect();
            const circleSize = getCircleSize();
            const positions = [];

            const isOverlapping = (x1, y1, x2, y2, size) => {
                const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                return distance < size;
            };

            circles.forEach(circle => {
                let xPosition, yPosition, overlapping;

                do {
                    xPosition = Math.random() * (containerRect.width - circleSize);
                    yPosition = Math.random() * (containerRect.height - circleSize);
                    overlapping = positions.some(pos => isOverlapping(xPosition, yPosition, pos.x, pos.y, circleSize));
                } while (overlapping);

                positions.push({ x: xPosition, y: yPosition });

                gsap.set(circle, {
                    left: xPosition,
                    top: yPosition,
                    opacity: 0 // Start with 0 opacity
                });
            });

            return positions;
        };

        const handleResize = () => {
            const newPositions = positionCircles();
            circles.forEach((circle, index) => {
                gsap.set(circle, {
                    left: newPositions[index].x,
                    top: newPositions[index].y
                });
            });
        };

        // Initial positioning
        positionCircles();

        // Timeline for flicker and reposition animation
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(circles, {
            duration: 5,
            ease: "power1.in",
            opacity: 0.5
        })
            .to(circles, {
                duration: 5,
                ease: "power1.out",
                opacity: 0,
                onComplete: () => {
                    // Reposition circles after 2 flickers without animation
                    handleResize();
                }
            });

        gsap.to(arrow, {
            y: 8,
            duration: .4,
            ease: "power.out",
            repeat: -1,
            yoyo: true
        });


        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".landing-page").forEach((section, index) => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%", // Start snapping when the top of the section hits 80% of the viewport
                    end: "bottom top", // End snapping when the bottom of the section hits the top of the viewport
                    snap: {
                        snapTo: 1, // Snap to the next section
                        duration: { min: 0.2, max: 0.8 }, // Snap duration
                        ease: "power1.inOut" // Smooth easing
                    },
                    scrub: true,
                    markers: true, // Remove or comment this line when you don't need debugging
                }
            });
        });
        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <>
            <Container fluid className='landing-page background'>
                <h1 className='Title'>Find <span style={{ color: "#963D5A" }}>Your</span> Team,</h1>
                <h1 className='Title'>Join the <span style={{ color: '#963D5A' }}>Community.</span></h1>
                {/* Add circles to the page */}
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className='scroll'>
                    <div>Scroll down</div>
                    <i class="fa-solid fa-angle-down fa-sm" style={{ color: "#ffffff" }}></i>
                </div>
            </Container>
            <Container fluid className='landing-page background'>
                <span className='text-animation'>FIND GROUP ACTIIVITES IN YOUR COMMUNITY</span>
            </Container>
        </>
    );
};

export default LandingPage;
