
import css from "./Projects.module.css";
import ProjectDisplay from "./ProjectDisplay";

export default function Projects() {

  const cgsImages = [
    { src: "/CGS/CGS_1.png" },
    { src: "/CGS/CGS_2.png" },
    { src: "/CGS/CGS_3.png" },
    { src: "/CGS/CGS_4.png" },
    { src: "/CGS/CGS_5.png" },
    { src: "/CGS/CGS_6.png" }
  ];
  const blerryImages = [
    { src: "/Blerry/Blerry_1.png" },
    { src: "/Blerry/Blerry_2.png" },
    { src: "/Blerry/Blerry_3.png" },
    { src: "/Blerry/Blerry_4.png" }
  ];
  const statsImages = [
    { src: "/blacksquareStats/stats_1.png" },
    { src: "/blacksquareStats/stats_2.png" },
    { src: "/blacksquareStats/stats_3.png" },
    { src: "/blacksquareStats/stats_4.png" },
    { src: "/blacksquareStats/stats_5.png" }
  ];

  return (
    <section className={css.projectsSection} id="projects">
      <h2>Projects</h2>
      <ProjectDisplay
        imgArr={statsImages}
        id={"stats"}
        title={"Statistics"}
        github={""}
        website={"https://blacksquare-stats.netlify.app/"}
        description={<>
          <p>This is a website that provides charts and data on the NFT project Blacksquare, including real-time market data, historical data, various charts and visualizations to give users an overview. </p>
          <p>Technologies: Next.js, TypeScript, chakra-ui, ethers, recharts.</p>
        </>}
      />
      <ProjectDisplay
        imgArr={cgsImages}
        id={"cgs"}
        title={"CarGoSpace"}
        github={"https://github.com/Sharry0/CarGoSpace"}
        website={"https://cargospace.netlify.app"}
        description={<>
          <p>CarGoSpace is a social network app. It is a platform that allows users to connect, interact, and share content with each other online. The base layout was made in the style of Reddit.</p>
          <p>Technologies: React, MongoDB, Express, BootStrap</p>
        </>}
      />
      <ProjectDisplay
        imgArr={blerryImages}
        id={"blerry"}
        title={"Blerry"}
        github={"https://github.com/Sharry0/Blerry"}
        website={"https://blerry.netlify.app"}
        description={<>
          <p>A website that features dashboards about crypto, gives you overview about NFTs on Opensea&apos;s and displays the NFTs you hold in your MetaMask wallet.</p>
          <p>Technologies: React, Web3, ethers, Opensea API, CoinGecko API, MetaMask API</p>
        </>}
      />
      
    </section>
  )
}
