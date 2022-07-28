
import css from "./LandingSvg.module.css"
import { gsap, CSSPlugin } from "gsap"
import { useEffect, useRef } from "react"

export default function LandingSvg() {

    const tl = useRef();


    useEffect(() => {
        const h = window.innerHeight
        tl.current = gsap.timeline()
            // .set(monoRef.current, { scale: 2 })
            .set(".s", { xPercent: -500, stroke: "#000", strokeWidth: 2 })
            .set(".h", { xPercent: -150, stroke: "#000", strokeWidth: 3, scaleY: 1, transformOrigin: "center center" })
            .set(".a", { xPercent: -3, stroke: "#000", strokeWidth: 3})
            .set(".r", { scale: 1, stroke: "#000", strokeWidth: 1, transformOrigin: "center center" })
            .set(".o", { xPercent: 100, scaleX: 0.5, stroke:"#000", strokeWidth:2  })
            .set(".n", { xPercent: 170, scaleX: 0.5, stroke: "#000", strokeWidth: 2, strokeLinejoin: "round", drawSVG: "20% 60%" })
            .set(".e", { xPercent: 240, scaleX: 0.5, stroke: "#000", })

        // .from(q(".S"), { transformOrigin: "center center",  scale: 0.5, delay: 2 })
        console.log(h)

    }, [])

    return (
        <>


            <div className={css.svgContainer} >
                <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ fillRule: "evenodd", clipRule: "evenodd", }}>
                    <g id="sharone" transform="matrix(17.5,0,0,17.4978,-1793.88,-19549.4)">
                        <g className="s" id="S" transform="matrix(0.999844,0,0,0.999844,24.9619,86.0181)">
                            <path d="M127.423,1072.39L132.42,1072.39C133.101,1072.39 133.768,1072.26 134.386,1072C135.003,1071.74 135.571,1071.37 136.053,1070.89C136.534,1070.4 136.911,1069.84 137.166,1069.22C137.422,1068.6 137.557,1067.93 137.557,1067.25C137.557,1067.25 137.557,1067.25 137.557,1067.25C137.557,1065.83 136.983,1064.55 136.054,1063.62C135.126,1062.69 133.843,1062.12 132.427,1062.12C132.427,1062.12 132.422,1062.12 132.422,1062.12C131.777,1062.12 131.145,1061.99 130.56,1061.75C129.976,1061.51 129.438,1061.15 128.982,1060.69C128.525,1060.24 128.169,1059.7 127.927,1059.12C127.685,1058.53 127.557,1057.9 127.557,1057.25L127.557,1057.25C127.557,1055.91 128.101,1054.69 128.982,1053.81C129.862,1052.93 131.079,1052.39 132.422,1052.39C132.422,1052.39 137.423,1052.39 137.423,1052.39L137.423,1052.12L132.422,1052.12C131.005,1052.12 129.722,1052.69 128.793,1053.62C127.864,1054.55 127.29,1055.84 127.29,1057.25C127.29,1057.25 127.29,1057.25 127.29,1057.25C127.29,1057.93 127.425,1058.6 127.681,1059.22C127.936,1059.84 128.312,1060.4 128.793,1060.88C129.274,1061.37 129.841,1061.74 130.458,1062C131.075,1062.25 131.742,1062.39 132.422,1062.39L132.427,1062.39C133.77,1062.39 134.986,1062.93 135.866,1063.81C136.746,1064.69 137.29,1065.91 137.291,1067.25C137.291,1067.25 137.291,1067.25 137.291,1067.25C137.291,1067.9 137.162,1068.53 136.92,1069.12C136.678,1069.7 136.321,1070.24 135.864,1070.7C135.407,1071.15 134.869,1071.51 134.284,1071.75C133.698,1072 133.066,1072.12 132.42,1072.12C132.42,1072.12 127.423,1072.12 127.423,1072.12L127.423,1072.39Z" />
                        </g>
                        <g className="h" id="H" transform="matrix(0.5,0,0,0.5,71.5648,600.066)">
                            <path d="M151.866,1106.08L151.866,1086.08L151.333,1086.08L151.333,1106.08L151.866,1106.08Z" />
                            <path d="M171.866,1106.08L171.866,1086.08L171.333,1086.08L171.333,1106.08L171.866,1106.08Z" />
                            <path d="M151.6,1096.35L171.6,1096.35L171.6,1095.82L151.6,1095.82L151.6,1096.35Z" />
                        </g>
                        <g className="a" id="A" transform="matrix(0.04,0,0,0.0400049,47.3647,1135.01)">
                            <g transform="matrix(12.5,0,0,24.9961,605.002,-27070.4)">
                                <path d="M151.866,1106.08L151.866,1086.08L151.333,1086.08L151.333,1106.08L151.866,1106.08Z" />
                            </g>
                            <g transform="matrix(7.65404e-16,12.5,-12.4985,7.6531e-16,16324.3,-1567.6)">
                                <path d="M151.866,1106.08L151.866,1086.08L151.333,1086.08L151.333,1106.08L151.866,1106.08Z" />
                            </g>
                            <g transform="matrix(-8.83883,8.83883,-24.9969,-24.9969,31488.6,26386.1)">
                                <path d="M151.866,1106.08L151.866,1086.08L151.333,1086.08L151.333,1106.08L151.866,1106.08Z" />
                            </g>
                        </g>
                        <g className="r" id="R" transform="matrix(0.499922,0,0,0.499922,93.6631,617.064)">
                            <path d="M127.69,1062.9L137.236,1072.44L137.613,1072.07L128.067,1062.52C128.067,1062.52 132.426,1062.52 132.426,1062.52C133.88,1062.52 135.196,1061.93 136.149,1060.98C137.102,1060.03 137.691,1058.71 137.691,1057.25L137.691,1057.25C137.691,1055.8 137.102,1054.48 136.149,1053.53C135.196,1052.58 133.88,1051.99 132.426,1051.99L127.423,1051.99C127.276,1051.99 127.156,1052.11 127.156,1052.25L127.156,1072.25L127.69,1072.25L127.69,1062.9ZM127.69,1061.99L132.426,1061.99C133.732,1061.99 134.916,1061.46 135.772,1060.6C136.628,1059.74 137.158,1058.56 137.158,1057.25C137.158,1057.25 137.158,1057.25 137.158,1057.25C137.158,1055.95 136.628,1054.76 135.772,1053.91C134.916,1053.05 133.732,1052.52 132.426,1052.52C132.426,1052.52 127.69,1052.52 127.69,1052.52L127.69,1061.99Z" />
                        </g>
                        <g className="o" id="O" transform="matrix(1,0,0,1,19.9416,85.8528)">
                            <path d="M147.557,1062.25C147.557,1059.46 146.422,1056.92 144.589,1055.09C142.755,1053.26 140.222,1052.12 137.424,1052.12L137.422,1052.12C134.624,1052.12 132.091,1053.26 130.257,1055.09C128.424,1056.92 127.29,1059.46 127.29,1062.25C127.29,1062.25 127.29,1062.25 127.29,1062.25C127.29,1065.05 128.424,1067.59 130.257,1069.42C132.091,1071.25 134.624,1072.39 137.422,1072.39L137.424,1072.39C140.222,1072.39 142.755,1071.25 144.589,1069.42C146.422,1067.59 147.557,1065.05 147.557,1062.25C147.557,1062.25 147.557,1062.25 147.557,1062.25ZM147.29,1062.25L147.29,1062.25C147.29,1064.98 146.186,1067.44 144.4,1069.23C142.615,1071.02 140.149,1072.12 137.424,1072.12C137.424,1072.12 137.422,1072.12 137.422,1072.12C134.698,1072.12 132.231,1071.02 130.446,1069.23C128.661,1067.44 127.557,1064.98 127.557,1062.25L127.557,1062.25C127.557,1059.53 128.661,1057.06 130.446,1055.28C132.231,1053.49 134.698,1052.39 137.422,1052.39C137.422,1052.39 137.424,1052.39 137.424,1052.39C140.149,1052.39 142.615,1053.49 144.4,1055.28C146.186,1057.06 147.29,1059.53 147.29,1062.25Z" />
                        </g>
                        <g className="n" id="N" transform="matrix(1,0,0,1,-4.23507,52.0258)">
                            <path d="M151.733,1106.08L151.733,1086.4C153.943,1088.61 171.506,1106.18 171.506,1106.18C171.544,1106.21 171.601,1106.23 171.651,1106.2C171.701,1106.18 171.733,1106.14 171.733,1106.08L171.733,1086.08L171.466,1086.08L171.466,1105.76C171.466,1105.76 151.694,1085.99 151.694,1085.99C151.656,1085.95 151.599,1085.94 151.549,1085.96C151.499,1085.98 151.466,1086.03 151.466,1086.08L151.466,1106.08L151.733,1106.08Z" />
                        </g>
                        <g className="e" id="E" transform="matrix(1,0,0,1,-4.23507,52.0258)">
                            <path d="M171.6,1105.95L151.733,1105.95C151.733,1104.3 151.733,1087.87 151.733,1086.21C153.47,1086.21 171.6,1086.21 171.6,1086.21L171.6,1085.95L151.6,1085.95C151.526,1085.95 151.466,1086.01 151.466,1086.08L151.466,1106.08C151.466,1106.15 151.526,1106.21 151.6,1106.21L171.6,1106.21L171.6,1105.95Z" />
                            <path d="M151.6,1096.21L161.6,1096.21L161.6,1095.95L151.6,1095.95L151.6,1096.21Z" />
                        </g>
                    </g>
                </svg>



            </div>


        </>
    )
}

// <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
//     <g transform="matrix(1,0,0,1,-2496.67,-74.076)">
//         <g className="sharone" id="sharone" transform="matrix(25,0,0,24.9969,-1184.12,-28371.8)">
//             <g id="S" transform="matrix(0.999844,0,0,0.999844,24.9619,86.0181)">
//                 <path className="S" d="M127.423,1072.39L132.425,1072.39C133.105,1072.39 133.772,1072.26 134.389,1072C135.006,1071.75 135.573,1071.37 136.054,1070.89C136.535,1070.41 136.911,1069.84 137.167,1069.22C137.422,1068.61 137.557,1067.94 137.557,1067.26C137.557,1067.26 137.557,1067.25 137.557,1067.25C137.557,1065.83 136.983,1064.55 136.054,1063.62C135.126,1062.69 133.844,1062.12 132.427,1062.12L132.423,1062.12C131.079,1062.12 129.862,1061.58 128.982,1060.69C128.101,1059.82 127.557,1058.6 127.557,1057.25C127.557,1057.25 127.557,1057.25 127.557,1057.25C127.557,1055.91 128.101,1054.69 128.982,1053.81C129.862,1052.93 131.079,1052.39 132.423,1052.39C132.423,1052.39 137.423,1052.39 137.423,1052.39L137.423,1052.12L132.423,1052.12C131.005,1052.12 129.722,1052.69 128.793,1053.62C127.864,1054.55 127.29,1055.84 127.29,1057.25L127.29,1057.25C127.29,1058.67 127.864,1059.95 128.793,1060.88C129.722,1061.81 131.005,1062.39 132.423,1062.39L132.427,1062.39C133.77,1062.39 134.986,1062.93 135.866,1063.81C136.746,1064.69 137.29,1065.91 137.291,1067.25C137.291,1067.25 137.291,1067.26 137.291,1067.26C137.291,1067.9 137.163,1068.54 136.92,1069.12C136.678,1069.7 136.322,1070.24 135.866,1070.7C135.409,1071.15 134.872,1071.51 134.287,1071.75C133.702,1072 133.07,1072.12 132.425,1072.12C132.425,1072.12 127.423,1072.12 127.423,1072.12L127.423,1072.39Z" />
//             </g>
//             <g className="H" id="H" transform="matrix(0.5,0,0,0.5,71.5648,600.066)">
//                 <path d="M151.866,1106.08L151.866,1086.08L151.333,1086.08L151.333,1106.08L151.866,1106.08Z" />
//                 <path d="M171.866,1106.08L171.866,1086.08L171.333,1086.08L171.333,1106.08L171.866,1106.08Z" />
//                 <path d="M151.6,1096.35L171.6,1096.35L171.6,1095.82L151.6,1095.82L151.6,1096.35Z" />
//             </g>
//             <g className="A" id="A" transform="matrix(0.04,0,0,0.0400049,47.3647,1135.01)">
//                 <g transform="matrix(12.5,0,0,24.9961,605.002,-27070.4)">
//                     <path d="M151.866,1106.08L151.866,1086.08L151.333,1086.08L151.333,1106.08L151.866,1106.08Z" />
//                 </g>
//                 <g transform="matrix(7.65404e-16,12.5,-12.4985,7.6531e-16,16324.3,-1567.6)">
//                     <path d="M151.866,1106.08L151.866,1086.08L151.333,1086.08L151.333,1106.08L151.866,1106.08Z" />
//                 </g>
//                 <g transform="matrix(-8.83883,8.83883,-24.9969,-24.9969,31488.6,26386.1)">
//                     <path d="M151.866,1106.08L151.866,1086.08L151.333,1086.08L151.333,1106.08L151.866,1106.08Z" />
//                 </g>
//             </g>
//             <g className="R" id="R" transform="matrix(0.499922,0,0,0.499922,93.6631,617.064)">
//                 <path d="M127.69,1062.9L137.236,1072.44L137.613,1072.07L128.067,1062.52C128.067,1062.52 132.427,1062.52 132.427,1062.52C133.125,1062.52 133.809,1062.38 134.441,1062.12C135.074,1061.86 135.656,1061.47 136.149,1060.98C136.643,1060.49 137.029,1059.9 137.291,1059.27C137.553,1058.64 137.691,1057.95 137.691,1057.26C137.691,1057.26 137.691,1057.25 137.691,1057.25C137.691,1056.55 137.553,1055.87 137.291,1055.24C137.029,1054.61 136.643,1054.02 136.149,1053.53C135.656,1053.04 135.074,1052.65 134.441,1052.39C133.809,1052.13 133.125,1051.99 132.427,1051.99L127.423,1051.99C127.276,1051.99 127.156,1052.11 127.156,1052.25L127.156,1072.25L127.69,1072.25L127.69,1062.9ZM127.69,1061.99L132.427,1061.99C133.054,1061.99 133.669,1061.86 134.237,1061.63C134.806,1061.39 135.329,1061.05 135.772,1060.6C136.216,1060.16 136.562,1059.63 136.798,1059.07C137.033,1058.5 137.158,1057.88 137.158,1057.26L137.158,1057.25C137.158,1056.62 137.033,1056.01 136.798,1055.44C136.562,1054.87 136.216,1054.35 135.772,1053.91C135.329,1053.46 134.806,1053.12 134.237,1052.88C133.669,1052.64 133.054,1052.52 132.427,1052.52C132.427,1052.52 127.69,1052.52 127.69,1052.52L127.69,1061.99Z" />
//             </g>
//             <g className="O" id="O" transform="matrix(1,0,0,1,19.9416,85.8528)">
//                 <path d="M147.557,1062.25C147.557,1060.91 147.29,1059.59 146.785,1058.38C146.281,1057.16 145.539,1056.04 144.589,1055.09C143.639,1054.14 142.52,1053.4 141.302,1052.89C140.085,1052.39 138.769,1052.12 137.425,1052.12C137.425,1052.12 137.421,1052.12 137.421,1052.12C136.078,1052.12 134.762,1052.39 133.544,1052.89C132.327,1053.4 131.207,1054.14 130.257,1055.09C129.307,1056.04 128.565,1057.16 128.061,1058.38C127.557,1059.59 127.29,1060.91 127.29,1062.25C127.29,1062.25 127.29,1062.26 127.29,1062.26C127.29,1063.6 127.557,1064.91 128.061,1066.13C128.565,1067.35 129.307,1068.47 130.257,1069.42C131.207,1070.37 132.327,1071.11 133.544,1071.62C134.762,1072.12 136.078,1072.39 137.421,1072.39C137.421,1072.39 137.425,1072.39 137.425,1072.39C138.769,1072.39 140.085,1072.12 141.302,1071.62C142.52,1071.11 143.639,1070.37 144.589,1069.42C145.539,1068.47 146.281,1067.35 146.785,1066.13C147.29,1064.91 147.557,1063.6 147.557,1062.26L147.557,1062.25ZM147.29,1062.25L147.29,1062.26C147.29,1063.56 147.03,1064.84 146.539,1066.03C146.048,1067.22 145.326,1068.31 144.401,1069.23C143.475,1070.16 142.386,1070.88 141.2,1071.37C140.015,1071.86 138.733,1072.12 137.425,1072.12L137.421,1072.12C136.113,1072.12 134.832,1071.86 133.646,1071.37C132.461,1070.88 131.371,1070.16 130.446,1069.23C129.521,1068.31 128.799,1067.22 128.307,1066.03C127.816,1064.84 127.557,1063.56 127.557,1062.26L127.557,1062.25C127.557,1060.94 127.816,1059.66 128.307,1058.48C128.799,1057.29 129.521,1056.2 130.446,1055.28C131.371,1054.35 132.461,1053.63 133.646,1053.14C134.832,1052.65 136.113,1052.39 137.421,1052.39L137.425,1052.39C138.733,1052.39 140.015,1052.65 141.2,1053.14C142.386,1053.63 143.475,1054.35 144.401,1055.28C145.326,1056.2 146.048,1057.29 146.539,1058.48C147.03,1059.66 147.29,1060.94 147.29,1062.25Z" />
//             </g>
//             <g className="N" id="N" transform="matrix(1,0,0,1,-4.23507,52.0258)">
//                 <path d="M151.733,1106.08L151.733,1086.4C153.943,1088.61 171.506,1106.18 171.506,1106.18C171.544,1106.21 171.601,1106.23 171.651,1106.2C171.701,1106.18 171.733,1106.14 171.733,1106.08L171.733,1086.08L171.466,1086.08L171.466,1105.76C169.256,1103.55 151.694,1085.99 151.694,1085.99C151.656,1085.95 151.599,1085.94 151.549,1085.96C151.499,1085.98 151.466,1086.03 151.466,1086.08L151.466,1106.08L151.733,1106.08Z" />
//             </g>
//             <g className="E" id="E" transform="matrix(1,0,0,1,-4.23507,52.0258)">
//                 <path d="M171.6,1105.95L151.733,1105.95C151.733,1105.95 151.733,1086.21 151.733,1086.21C151.733,1086.21 171.6,1086.21 171.6,1086.21L171.6,1085.95L151.6,1085.95C151.526,1085.95 151.466,1086.01 151.466,1086.08L151.466,1106.08C151.466,1106.15 151.526,1106.21 151.6,1106.21L171.6,1106.21L171.6,1105.95Z" />
//                 <path d="M151.6,1096.21L161.6,1096.21L161.6,1095.95L151.6,1095.95L151.6,1096.21Z" />
//             </g>
//         </g>
//     </g>
// </svg>

{/* <svg viewBox="0 0 1275 257" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2" }}>
                    <g transform="matrix(1,0,0,1,-2421.68,-969.212)">
                        <g id="sharone" transform="matrix(25,0,0,24.9969,-1124.12,-27609.2)">
                            <g className="S" ref={letterS} id="S" transform="matrix(0.499922,0,0,0.499922,78.2635,617.365)">
                                <path d="M127.423,1072.52L132.358,1072.52C133.065,1072.52 133.758,1072.38 134.399,1072.12C135.04,1071.85 135.629,1071.46 136.129,1070.96C136.629,1070.46 137.019,1069.87 137.285,1069.23C137.55,1068.59 137.691,1067.9 137.691,1067.19C137.691,1067.19 137.691,1067.18 137.691,1067.18C137.69,1065.74 137.109,1064.45 136.17,1063.51C135.231,1062.57 133.933,1061.99 132.5,1061.99C132.5,1061.99 132.423,1061.99 132.423,1061.99C131.116,1061.99 129.932,1061.46 129.076,1060.6C128.22,1059.74 127.69,1058.56 127.69,1057.25C127.69,1057.25 127.69,1057.25 127.69,1057.25C127.69,1055.95 128.22,1054.76 129.076,1053.91C129.932,1053.05 131.116,1052.52 132.423,1052.52L137.423,1052.52L137.423,1051.99L132.423,1051.99C130.968,1051.99 129.652,1052.58 128.699,1053.53C127.746,1054.48 127.156,1055.8 127.156,1057.25L127.156,1057.25C127.156,1058.71 127.746,1060.03 128.699,1060.98C129.652,1061.93 130.968,1062.52 132.423,1062.52C132.423,1062.52 132.5,1062.52 132.5,1062.52C133.786,1062.52 134.95,1063.04 135.793,1063.88C136.636,1064.73 137.157,1065.89 137.157,1067.18C137.157,1067.18 137.157,1067.19 137.157,1067.19C137.157,1067.83 137.031,1068.45 136.792,1069.03C136.553,1069.61 136.202,1070.13 135.752,1070.59C135.302,1071.04 134.772,1071.39 134.195,1071.62C133.618,1071.86 132.995,1071.99 132.358,1071.99C132.358,1071.99 127.423,1071.99 127.423,1071.99L127.423,1072.52Z" />
                            </g>
                            <g className="H" ref={letterH} id="H" transform="matrix(0.25,0,0,0.5,110.015,600.369)">
                                <path d="M152.133,1106.08L152.133,1086.08L151.067,1086.08L151.067,1106.08L152.133,1106.08Z" />
                                <path d="M172.133,1106.08L172.133,1086.08L171.067,1086.08L171.067,1106.08L172.133,1106.08Z" />
                                <path d="M151.6,1096.35L171.6,1096.35L171.6,1095.82L151.6,1095.82L151.6,1096.35Z" />
                            </g>
                            <g className="A" ref={letterA} id="A" transform="matrix(0.0200025,0,0,0.0200025,103.859,1141.86)">
                                <g transform="matrix(12.5,0,0,24.9961,605.002,-27070.4)">
                                    <path d="M152.133,1106.08L152.133,1086.08L151.067,1086.08L151.067,1106.08L152.133,1106.08Z" />
                                </g>
                                <g transform="matrix(7.65404e-16,12.5,-12.4985,7.6531e-16,16324.3,-1567.6)">
                                    <path d="M152.133,1106.08L152.133,1086.08L151.067,1086.08L151.067,1106.08L152.133,1106.08Z" />
                                </g>
                                <g transform="matrix(-8.83883,8.83883,-24.9969,-24.9969,31488.6,26386.1)">
                                    <path d="M152.133,1106.08L152.133,1086.08L151.067,1086.08L151.067,1106.08L152.133,1106.08Z" />
                                </g>
                            </g>
                            <g className="R" ref={letterR} id="R" transform="matrix(0.499922,0,0,0.499922,101.113,617.367)">
                                <path d="M127.69,1062.9L137.236,1072.44L137.613,1072.07L128.067,1062.52C128.067,1062.52 132.427,1062.52 132.427,1062.52C133.125,1062.52 133.809,1062.38 134.441,1062.12C135.074,1061.86 135.656,1061.47 136.149,1060.98C136.643,1060.49 137.029,1059.9 137.291,1059.27C137.553,1058.64 137.691,1057.95 137.691,1057.26C137.691,1057.26 137.691,1057.25 137.691,1057.25C137.691,1056.55 137.553,1055.87 137.291,1055.24C137.029,1054.61 136.643,1054.02 136.149,1053.53C135.656,1053.04 135.074,1052.65 134.441,1052.39C133.809,1052.13 133.125,1051.99 132.427,1051.99L127.423,1051.99C127.276,1051.99 127.156,1052.11 127.156,1052.25L127.156,1072.25L127.69,1072.25L127.69,1062.9ZM127.69,1061.99L132.427,1061.99C133.054,1061.99 133.669,1061.86 134.237,1061.63C134.806,1061.39 135.329,1061.05 135.772,1060.6C136.216,1060.16 136.562,1059.63 136.798,1059.07C137.033,1058.5 137.158,1057.88 137.158,1057.26L137.158,1057.25C137.158,1056.62 137.033,1056.01 136.798,1055.44C136.562,1054.87 136.216,1054.35 135.772,1053.91C135.329,1053.46 134.806,1053.12 134.237,1052.88C133.669,1052.64 133.054,1052.52 132.427,1052.52C132.427,1052.52 127.69,1052.52 127.69,1052.52L127.69,1061.99Z" />
                            </g>
                            <g className="O" ref={letterO} id="O" transform="matrix(0.5,0,0,0.5,107.053,617.283)">
                                <path d="M147.69,1062.25C147.69,1059.42 146.541,1056.85 144.683,1054.99C142.826,1053.14 140.259,1051.99 137.424,1051.99L137.422,1051.99C134.587,1051.99 132.021,1053.14 130.163,1054.99C128.306,1056.85 127.157,1059.42 127.157,1062.25C127.157,1062.25 127.157,1062.25 127.157,1062.25C127.157,1065.09 128.306,1067.66 130.163,1069.51C132.021,1071.37 134.587,1072.52 137.422,1072.52L137.424,1072.52C140.259,1072.52 142.826,1071.37 144.683,1069.51C146.541,1067.66 147.69,1065.09 147.69,1062.25L147.69,1062.25ZM147.157,1062.25L147.157,1062.25C147.157,1064.94 146.067,1067.38 144.306,1069.14C142.545,1070.9 140.112,1071.99 137.424,1071.99C137.424,1071.99 137.422,1071.99 137.422,1071.99C134.734,1071.99 132.301,1070.9 130.54,1069.14C128.779,1067.38 127.69,1064.94 127.69,1062.25L127.69,1062.25C127.69,1059.57 128.779,1057.13 130.54,1055.37C132.301,1053.61 134.734,1052.52 137.422,1052.52C137.422,1052.52 137.424,1052.52 137.424,1052.52C140.112,1052.52 142.545,1053.61 144.306,1055.37C146.067,1057.13 147.157,1059.57 147.157,1062.25Z" />
                            </g>
                            <g className="N" ref={letterN} id="N" transform="matrix(0.25,0,0,0.5,143.815,600.369)">
                                <path d="M152.133,1106.08L152.133,1087.21C156.196,1091.27 171.123,1106.2 171.123,1106.2C171.233,1106.31 171.482,1106.37 171.722,1106.34C171.963,1106.31 172.133,1106.2 172.133,1106.08L172.133,1086.08L171.067,1086.08L171.067,1104.95C171.067,1104.95 152.077,1085.96 152.077,1085.96C151.966,1085.85 151.718,1085.79 151.477,1085.82C151.237,1085.85 151.067,1085.96 151.067,1086.08L151.067,1106.08L152.133,1106.08Z" />
                            </g>
                            <g className="E" ref={letterE} id="E" transform="matrix(0.25,0,0,0.5,149.765,600.369)">
                                <path d="M171.6,1105.82L152.133,1105.82C152.133,1105.82 152.133,1086.35 152.133,1086.35C152.133,1086.35 171.6,1086.35 171.6,1086.35L171.6,1085.82L151.6,1085.82C151.305,1085.82 151.067,1085.93 151.067,1086.08L151.067,1106.08C151.067,1106.23 151.305,1106.35 151.6,1106.35L171.6,1106.35L171.6,1105.82Z" />
                                <path d="M151.6,1096.35L161.6,1096.35L161.6,1095.82L151.6,1095.82L151.6,1096.35Z" />
                            </g>
                        </g>
                    </g>
                </svg> */}