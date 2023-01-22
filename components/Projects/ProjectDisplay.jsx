
import css from "./Projects.module.css";
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';
import Image from "next/image";
import Link from "next/link";

export default function ProjectDisplay({ imgArr, id, title, description, github, website }) {
  return (
    <div className={css.slideShow} >
        <SlideshowLightbox lightboxIdentifier={id} framework="next" showLoader={true} showThumbnails images={imgArr} slideshowInterval={1600} >
          {imgArr.map((image, i) => (
            i === 0 ?
              <div className={css.imgContainer} key={i}>
                <Image
                  src={image.src}
                  alt="CarGoSpace Screenshot"
                  fill
                  blurDataURL={image.src}
                  data-lightboxjs={id}
                  className={css.image}
                />
              </div>
              :
              <Image
                src={image.src}
                alt="CarGoSpace Screenshot"
                height={0}
                width={0}
                data-lightboxjs={id}
                key={i}
              />
          ))}
        </SlideshowLightbox>
        <div className={css.description} >
          <h3>{title}</h3>
          <span>{description}</span>
          <div className={css.links} >
            {github &&
              <Link legacyBehavior href={github} >
                <a target="_blank" rel="noreferrer">
                  <Image src="/githubLogo.png" width="25" height="25" alt="github link" />
                </a>
              </Link>
            }
            {website &&
              <Link legacyBehavior href={website} >
                <a target="_blank" rel="noreferrer">
                  <Image src="/website_icon.png" width="25" height="25" alt="github link" />
                </a>
              </Link>
            }
          </div>
        </div>
    </div>
  )
}
