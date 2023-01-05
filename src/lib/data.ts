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

I have considerable experience with nextjs, typescript, and tailwindCSS, which has become my stack of choice for most web apps.

I also have considerable experience with solidity and have developed dozens of smart contracts for ethereum/polygon.

I am learning React Native and backend technologies such as NodeJS and GraphQL.

I was born in China and moved to the Canada when I was pursuing my master degree of mechanical engineering. Because of the TV show "Silicon Valley" and movie "The Social Network", I fell in love with the tech industry and decided to pursue a career in tech after worked as mechanical engineer.

I am currently looking for a full-time position as a front end developer or a web3 developer.
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
      description: `Led and built a full-stacked decentralized Instagram-liked social NFT marketplace application in which users can create and post their post as NFT and trade it for EthToronto hackathon.
      
      Coded Solidity smart contracts for the marketplace and deployed them on Polygon testnet.
      
      All the posts are decentralized and stored permanently on IPFS. 
      `,
    },
    {
      name: "CyberGraph - 3D Graph Explorer",
      img: cybergrapghImg,
      tools: ["NextJS", "TypeScript", "GraphQL"],
      url: "https://graph.cyberconnect.me",
      repoUrl: "https://github.com/cyberconnecthq/CyberGraph",
      description: `
      I co-designed and led the development of “CyberGraph”, an open-source 3D-graph social connection explorer built with Next.js, Typescript, and Three.js when I was working for CyberConnect.Me.
      
      In this application, users can explore the social connections of any account on the CyberConnect network. The data is fetched from the cyber database using GraphQL. 
      
      It can also shown users' NFTs and Poaps with Alchemy and POAP API.
      
      The application is open-sourced and deployed on Vercel.
      `,
    },
  ],
};
