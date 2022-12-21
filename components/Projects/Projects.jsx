
import css from "./Projects.module.css";
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

  const cgsImages = [
    { src: "/CGS/CGS_1.png", },
    { src: "/CGS/CGS_2.png", },
    { src: "/CGS/CGS_3.png", },
    { src: "/CGS/CGS_4.png", },
    { src: "/CGS/CGS_5.png", },
    { src: "/CGS/CGS_6.png", },
  ]
  const blerryImages = [
    { src: "/Blerry/Blerry_1.png", },
    { src: "/Blerry/Blerry_2.png", },
    { src: "/Blerry/Blerry_3.png" },
  ]

  // _______ add the right web links !!!!_______________

  return (
    <section className={css.projectsSection} id="projects">
      <h2>Projects</h2>
      <div className={css.slideShow} >
        <h3>CarGoSpace</h3>

        <SlideshowLightbox lightboxIdentifier="lightbox1" framework="next" showThumbnails images={cgsImages} slideshowInterval={1600} >
          {cgsImages.map((image, i) => (
            i === 0 ?
              <div style={{ height: "40vw", width: "80vw", position: "relative", marginBottom: "5px" }} key={i}>
                <Image
                  src={image.src}
                  alt="CarGoSpace Screenshot"
                  layout="fill"
                  data-lightboxjs="lightbox1"
                  quality={80}
                />
              </div>
              :
              <Image
                src={image.src}
                alt="CarGoSpace Screenshot"
                // layout="fill"
                height={0}
                width={0}
                data-lightboxjs="lightbox1"
                quality={80}
                key={i}
              />
          ))}
        </SlideshowLightbox>
        <div className={css.links} >
          <Link href={"https://github.com/Sharry0/CarGoSpace"} >
            <a target="_blank" rel="noreferrer">
              <Image src="/githubLogo.png" width="35px" height="35px" alt="github link" />
            </a>
          </Link>
          <Link href={"https://cargospace.netlify.app"} >
            <a target="_blank" rel="noreferrer">
              <Image src="/website_icon.png" width="35px" height="35px" alt="github link" />
            </a>
          </Link>
        </div>
      </div>
      <div className={css.slideShow} >
        <h3>Blerry</h3>
        <SlideshowLightbox lightboxIdentifier="lightbox2" framework="next" showThumbnails images={blerryImages} slideshowInterval={1600} >
          {blerryImages.map((img, i) => (
            i === 0 ?
              <div style={{ height: "40vw", width: "80vw", position: "relative", marginBottom: "5px" }} key={i + 20}>
                <Image
                  src={img.src}
                  alt="CarGoSpace Screenshot"
                  layout="fill"
                  data-lightboxjs="lightbox2"
                  quality={80}
                />
              </div>
              :
              <Image
                src={img.src}
                alt="CarGoSpace Screenshot"
                // layout="fill"
                height={0}
                width={0}
                data-lightboxjs="lightbox2"
                quality={80}
                key={i + 20}
              />
          ))}
        </SlideshowLightbox>
        <div className={css.links} >
          <Link href={"https://github.com/Sharry0/Blerry"} >
            <a target="_blank" rel="noreferrer">
              <Image src="/githubLogo.png" width="35px" height="35px" alt="github link" />
            </a>
          </Link>
          <Link href={"https://blerry.netlify.app"} >
            <a target="_blank" rel="noreferrer">
              <Image src="/website_icon.png" width="35px" height="35px" alt="github link" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
