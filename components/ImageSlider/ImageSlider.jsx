
import css from "./ImageSlider.module.css";
import { useState} from "react";
import Image from "next/image";
import Link from "next/link";

// export default function ImageSlider({ images, githubRepo, projectName, webLink }) {

//   const [imageIndex, setImageIndex] = useState(0);

//   const nextImageClick = () => {
//     const isLastImage = imageIndex === images.length - 1;
//     const newIndex = isLastImage ? 0 : imageIndex + 1;
//     setImageIndex(newIndex);
//   };

//   const prevImageClick = () => {
//     const isFirstImage = imageIndex === 0;
//     const newIndex = isFirstImage ? images.length - 1 : imageIndex - 1
//     setImageIndex(newIndex);
//   };

//   return (
//     <div className={css.project}>
      
//       <div className={css.screenshots}>
//         <Image
//           placeholder="blur" 
//           blurDataURL={images[0]}
//           layout="fill"
//           objectFit="contain"
//           src={images[imageIndex]}
//           alt={`${projectName} screen shots`}
//         />
//       </div>
//       <h3 className={css.projectName} >{projectName}</h3>
//       <div className={css.imgMenu}>
//         <button className={css.displayButton} onClick={prevImageClick} >
//           <Image height="50px" width="50px" src="/prev_button.svg" alt="previous button" />
//         </button>
//         <div className={css.links} >
//           <Link href={githubRepo} >
//             <a target="_blank" rel="noreferrer">
//               <Image src="/githubLogo.png" width="35px" height="35px" alt="github link" />
//             </a>
//           </Link>
//           <Link href={webLink} >
//             <a target="_blank" rel="noreferrer">
//               <Image src="/website_icon.png" width="35px" height="35px" alt="github link" />
//             </a>
//           </Link>
//         </div>
//         <button className={css.displayButton} onClick={nextImageClick} >
//           <Image height="50px" width="50px" src="/next_button.svg" alt="previous button" />
//         </button>
//       </div>
      
//     </div>
//   )
// };
