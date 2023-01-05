import profileImg from "../../public/profile.jpg";
import promiselandImg from "../../public/promiseland.jpg";
import cybergrapghImg from "../../public/cybergraph.jpg";

export const portfolio = {
  about: {
    firstName: "Bruce",
    lastName: "Wang",
    img: profileImg,
    bio: `Hi, I'm Bruce! 

I began my web development journey 2 years ago and have committed myself to learning front end and web3 technologies.

I have considerable experience with nextjs, typescript, and postgres, which has become my stack of choice for most web apps.

I also have considerable experience with solidity and rust and have developed dozens of smart contracts for ethereum/solana.

I was born in China and moved to the Canada when I was pursuing my master degree of mechanical engineering. Because of this I am fluent in both Mandarin and English.

`,
    skills: [
      "TypeScript",
      "NextJS",
      "TailwindCss",
      "Solidity",
      "NodeJS",
      "Polygon",
    ],
  },
  projects: [
    {
      name: "PromiseLand - Decentralized Instagram",
      img: promiselandImg,
      tools: ["NextJS", "TypeScript", "Solidity", "Polygon"],
      url: "https://promiseland.app",
      repoUrl: "https://github.com/PromiseLand-App/promiseland-frontend",
      description: `Led and built a full-stacked decentralized Instagram-liked social NFT marketplace application in which users can create and post their post as NFT and trade it for EthToronto hackathon. All the posts are decentralized and stored permanently on IPFS. 
      `,
    },
    {
      name: "CyberGraph - 3D Graph Explorer",
      img: cybergrapghImg,
      tools: ["NextJS", "TypeScript", "GraphQL"],
      url: "https://graph.cyberconnect.me",
      repoUrl: "https://github.com/cyberconnecthq/CyberGraph",
      description: `Co-designed and led the development of “CyberGraph” ( Live | Github, 14 Stars), an open-source 3D-graph social connection explorer built with Next.js, Typescript, and Three.js.
      `,
    },
  ],
};
