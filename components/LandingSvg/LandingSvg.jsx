
import css from "./LandingSvg.module.css"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"


export default function LandingSvg() {

    const tl = useRef();

    useEffect(() => {
        const h = window.innerHeight

        tl.current = gsap.timeline({ delay: 2 }) 
            .from("#S", { x: -20, strokeWidth: "0.1rem", stroke: "black", duration: 2 }, 0)
            .from("#H", { x: -32, strokeWidth: "0.15rem", scaleY: 1, transformOrigin: "center center", duration: 2 }, 0)
            .from("#A", { xPercent: -3, strokeWidth: "0.15rem", duration: 2 }, 0)
            .from("#R", { scale: 1, strokeWidth: "0.08rem", transformOrigin: "center center", duration: 2 }, 0)
            .from("#O", { x: 40, strokeWidth: "0.1rem", duration: 2 }, 0)
            .from("#N", { x: 40, strokeWidth: "0.15rem", scaleX: 0.5, duration: 2 }, 0)
            .from("#E", { x: 55, strokeWidth: "0.1rem", scaleX: 0.5, duration: 2 }, 0)
            .to(["#S", "#H", "#A", "#R", "#O", "#N", "#E"], {opacity: 0, duration:2}, 0)

        console.log(h)

    }, [])

    return (
        <>

            <div className={css.svgContainer}  >
                <svg width="75%" height="75%" viewBox="300 250 700 700" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "miter", strokeMiterlimit: 2 }}>

                    <g id="monogram" transform="matrix(12.5,0,0,12.4985,-1362.06,-13744.6)" stroke="Black" strokeWidth="0.25px" >
                        <g id="S" transform="matrix(0.999844,0,0,0.999844,24.9619,86.0181)">
                            <path d="M127.423,1072.25C127.423,1072.25 129.88,1072.26 132.358,1072.26C133.702,1072.26 134.99,1071.72 135.94,1070.77C136.89,1069.82 137.424,1068.54 137.424,1067.19C137.424,1067.19 137.424,1067.18 137.424,1067.18C137.424,1064.46 135.219,1062.25 132.5,1062.25L132.423,1062.25C129.661,1062.25 127.423,1060.02 127.423,1057.25L127.423,1057.25C127.423,1054.49 129.661,1052.25 132.423,1052.25L137.423,1052.25" fill="none" />
                        </g>
                        <g id="H" transform="matrix(0.5,0,0,0.5,71.5648,600.066)">
                            <path d="M151.6,1106.08L151.6,1086.08" fill="none" />
                            <path d="M171.6,1106.08L171.6,1086.08" fill="none" />
                            <path d="M151.6,1096.08L171.6,1096.08" fill="none" />
                        </g>
                        <g id="A" transform="matrix(0.04,0,0,0.0400049,47.3647,1135.01)"  >
                            <g transform="matrix(12.5,0,0,24.9961,605.002,-27070.4)">
                                <path  id="ALeft" d="M151.6,1106.08L151.6,1086.08" fill="none" />
                            </g>
                            <g transform="matrix(7.65404e-16,12.5,-12.4985,7.6531e-16,16324.3,-1567.6)">
                                <path id="AMid" d="M151.6,1106.08L151.6,1086.08" fill="none" />
                            </g>
                            <g transform="matrix(-8.83883,8.83883,-24.9969,-24.9969,31488.6,26386.1)">
                                <path id="ARight" d="M151.6,1106.08L151.6,1086.08" fill="none" />
                            </g>
                        </g>
                        <g id="R" stroke="black" strokeWidth="0.5px" transform="matrix(0.499922,0,0,0.499922,93.6631,617.064)"  >
                            <path d="M127.423,1072.25L127.423,1052.25L132.426,1052.25C135.187,1052.25 137.425,1054.49 137.425,1057.25L137.425,1057.25C137.425,1060.02 135.187,1062.25 132.426,1062.25L127.423,1062.25L137.425,1072.25" fill="none" />
                        </g>
                        <g id="O" transform="matrix(1,0,0,1,19.9416,85.8528)">
                            <path d="M147.423,1062.25C147.423,1056.73 142.947,1052.25 137.424,1052.25L137.422,1052.25C131.9,1052.25 127.423,1056.73 127.423,1062.25L127.423,1062.25C127.423,1067.78 131.9,1072.25 137.422,1072.25L137.424,1072.25C142.947,1072.25 147.423,1067.78 147.423,1062.25L147.423,1062.25Z" fill="none" />
                        </g>
                        <g id="N" transform="matrix(1,0,0,1,-4.23507,52.0258)" >
                            <path d="M151.6,1106.08L151.6,1086.08L171.6,1106.08L171.6,1086.08" fill="none" />
                        </g>
                        <g id="E" transform="matrix(1,0,0,1,-4.23507,52.0258)" >
                            <path d="M171.6,1106.08L151.6,1106.08L151.6,1086.08L171.6,1086.08" fill="none" />
                            <path d="M151.6,1096.08L161.6,1096.08" fill="none" />
                        </g>
                    </g>

                   
                </svg>
            </div>
        </>
    )
}

