'use client';

import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import ProjectRow from '../components/ProjectRow';
import Footer from '../components/Footer';

const projectsData = [
  {
    id: 1,
    title: "Bubble Observers: Co-created Sci-fi",
    categories: ["Arts", "Experimentals"],
    slides: [
      {
        id: 1,
        title: "On-chain Sci-fi Co-creation",
        subtitle: "The crypto version of Love, Death & Robots",
        descriptions: [
          "AI-powered sci-fi co-creation project led by Race",
          "140,000 words and illustrations in just 1 month",
          "100+ participants, including renowned sci-fi writer Stanley Qiufan Chen",
          "Published as a physical book with 8.0+ Douban rating"
        ],
        imageUrl: "/images/bubble-observers-cover.jpg",
        links: [
          { url: "https://bubble.observer", label: "Official Website" },
          { url: "https://twitter.com/bubbleobservers", label: "X (Twitter)" },
          { url: "https://book.douban.com/subject/36157270/", label: "Douban Book Review" }
        ],
      },
      {
        id: 2,
        title: "Community Impact",
        subtitle: "Diverse Creators & Wide Reach",
        descriptions: [
          "200+ Creators: Hollywood directors to AI influencers",
          "200K+ Impressions in first co-create event",
          "Diverse talents: Professionals and emerging creators"
        ],
        imageUrl: "/images/bubble-observers-book-and-brief.jpg",
      },
      {
        "id": 3,
        "title": "Online Reader",
        "subtitle": "Immersive Sci-Fi Co-Creation Platform",
        "descriptions": [
          "Experience interactive chapters blending music, visuals, and storytelling",
          "Discover a dynamic online reader that showcases multi-format content",
          "Each chapter highlights the contributions of all co-creators involved"
        ],
        "imageUrl": "/images/bubble-observers-website-1.png"
      },
      {
        "id": 4,
        "title": "20 Parrelle Storys in First Season",
        "subtitle": "Season 2 Co-creating Now",
        "descriptions": [
          "Each chapter is a parallel story, co-created by different writers, illustrators, and musicians.",
        ],
        "imageUrl": "/images/bubble-observers-website-2.png"
      },

      // 添加更多 slides 如果需要
    ]
  },
  {
    id: 2,
    title: "MAZE? MAZE!",
    categories: ["Arts"],
    slides: [
      {
        id: 1,
        title: "What other forms can a maze take?",
        subtitle: "Maze Tigers: New Year Celebration Art Series",
        descriptions: [
          "I've been fascinated by mazes since childhood, creating innovative ones for my siblings. In college, I explored using mazes as textures for everyday items and animals, seeing them as a symbol of mythology and human complexity.",
          "The Maze Tiger series was launched for Chinese New Year on Taobao and Alibaba, and featured at Shanghai Design Week. My Cat Maze NFT also saw success on Polygon.",
        ],
        imageUrl: "/images/maze-tiger-1.jpg",
      },
      {
        id: 2,
        title: "Maze Tigers",
        descriptions: [
          "An interactive display with an entrance and exit, featured in multiple exhibitions, where it became the most engaging piece and a favorite among young audiences.",
        ],
        imageUrl: "/images/maze-tiger-2.jpg",
      },
      {
        "id": 3,
        "title": "Klein the Maze Cat",
        "subtitle": "Floor printing",
        "descriptions": [
          "In collaboration with Yuewen Group, the 'Klein the Maze Cat' project plans to be exhibited in cities worldwide through wall art and floor printing installations.",
        ],
        "imageUrl": "/images/maze-floor-printing.png"
      },
      {
        "id": 4,
        "title": "Maze Kitties",
        "subtitle": "Maze NFT series on Polygon",
        "imageUrl": "/images/maze-kitties.jpg"
      },
      {
        "id": 5,
        "title": "Maze Tigers",
        "subtitle": "Chinese Year of the Tiger celebration artwork on Alibaba Auctions",
        "imageUrl": "/images/maze-tiger-3.png"
      },
      {
        "id": 6,
        "title": "Maze Tigers",
        "subtitle": "Chinese Year of the Tiger celebration artwork on Alibaba Auctions",
        "imageUrl": "/images/maze-tiger-4.png"
      },
      // 添加更多 slides 如果需要
    ]
  },
  {
    id: 3,
    title: "The Whispering Light Cube",
    categories: ["Commercials", "Arts"],
    slides: [
      {
        id: 1,
        title: "Interactive Light Cube: Outdoor Public Installation",
        subtitle: "In collaboration with Lord of the Mysteries (an IP under Yuewen Group)",
        descriptions: [
          "A 2x2x2 meter interactive art installation, acting as a portal to the world of Lord of the Mysteries. Inside, a 3D light matrix brings iconic scenes to life. With gestures or voice commands like 'Praise the Fool,' audiences trigger immersive light displays, including glowing lamps, angelic radiance, and the appearance of the iconic top hat 🎩.",
        ],
        imageUrl: "/images/whispering-light-cube-3.gif",
        brandLogo: {
          light: "/images/yuewen-black.png",
          dark: "/images/yuewen-white.png",
          alt: "Yuewen Group Logo"
        }
      },
      {
        "id": 2,
        "title": "The Light Cube with Whispered Interactions",
        "subtitle": "Whisper: 'We gaze into the future'",
        "descriptions": [
          "0-17 The Hidden Angel",
        ],
        "imageUrl": "/images/whispering-light-cube-1.png"
      },
      {
        id: 3,
        title: "Awaiting activation and interaction",
        descriptions: [
          "Users can control the deity within the circular cube through commands.",
        ],
        imageUrl: "/images/whispering-light-cube-2.png",
      },
      // 添加更多 slides 如果需要
    ]
  },
  {
    id: 4,
    title: "Blow Up Your Head",
    categories: ["Arts"],
    slides: [
      {
        id: 1,
        title: "Installation Artwork featured at the Guyu Art Festival",
        subtitle: "Exhibited at Shenzhen Innovation Tower from Aug 16 to Sep 30, 2024",
        descriptions: [
          "Made of mirrored materials, the piece features a small hole in the center of a mirror on an easel, housing a powerful electric jet fan. As viewers approach and gaze into it, a strong blast of air is released, creating the sensation of nearly blowing their head off.",
        ],
        imageUrl: "/images/blow-up-your-head-1.png",
      },
      {
        "id": 2,
        "title": "Blowing Up Your Head: It's All About the Feeling",
        "subtitle": "This is my good friend, Techno producer Ma Haiping, blowing his head up :/)",
        "descriptions": [
          "I feel that many current interpretations of artworks are overly obscure and far-fetched, so I decided to go in the opposite direction. I wanted to create something that's purely enjoyable, fun, or even shocking—a *have fun and be chill* piece that simply needs to be experienced, without the need for explanation.",
        ],
        "imageUrl": "/images/blow-up-your-head-2.jpg"
      },
      {
        id: 3,
        title: "The Hole of Curiosity",
        descriptions: [
          "The artwork consists of a mirror with a super-powerful electric jet in the center. When you approach and stare at it, it suddenly blasts you with a strong gust of wind, taking you by surprise.",
        ],
        imageUrl: "/images/blow-up-your-head-3.png",
      },
      {
        id: 4,
        title: "Panel Talk at Guyu Art Festival",
        descriptions: [
          "At the Panel Talk of the Guyu Art Festival, engaging in discussions with entrepreneurs from YPO.",
        ],
        imageUrl: "/images/guyu-panel-talk.jpeg",
      },
      // 添加更多 slides 如需要
    ]
  },
  {
    id: 5,
    title: "Phone on Face NFT Collection",
    categories: ["Arts", "Experimentals"],
    slides: [
      {
        id: 1,
        title: "Phone on Face (PoF)",
        subtitle: "In the first half of 2022, it was free-minted. The series topped the OpenSea charts on the same day, attracting a large amount of traffic.",
        descriptions: [
          "Life's a grind—work's tough, and even doom-scrolling at night can leave you with a phone-to-the-face situation. Most of our grand visions? Still in the works. But hey, thanks for sticking with us! And most importantly, don't forget to stay happy and chill—because really, what else can we do? 😎",
        ],
        imageUrl: "/images/phone-on-face-1.png",
      },
      {
        id: 2,
        title: "Phone on Face (PoF)",
        subtitle: "The Night of the Cactus",
        imageUrl: "/images/phone-on-face-2.png",
      },
      {
        id: 3,
        title: "1 of PoF Collection",
        subtitle: "Lonely Moonlight Glow",
        imageUrl: "/images/phone-on-face-3.png"
      },
      {
        id: 4,
        title: "1 of PoF Collection",
        subtitle: "Cowboy Night Watcher",
        imageUrl: "/images/phone-on-face-4.png",
      },
      {
        id: 5,
        title: "1 of PoF Collection",
        subtitle: "Zombie Apocalypse",
        imageUrl: "/images/phone-on-face-5.png",
      },
      {
        id: 6,
        title: "1 of PoF Collection",
        subtitle: "I am Rich 😎",
        imageUrl: "/images/phone-on-face-6.png",
      },
      // 添加更多 slides 如果需要
    ]
  },
  {
    id: 6,
    title: "A Vine's Tale",
    categories: ["Commercials", "Arts"],
    slides: [
      {
        id: 1,
        title: "A Narrative Poem of Life from a Plant's Perspective",
        subtitle: "Apple Vision Pro Immersive Journey: A Plant's Perspective",
        imageUrl: "/images/a-vines-tale-1.png",
        brandLogo: {
          light: "/images/lingang-black.png",
          dark: "/images/lingang-white.png",
          alt: "Lingang Group Logo"
        }
      },
      {
        id: 2,
        title: "Shared Immersive Experience",
        descriptions: [
          "Experience a unique interactive exhibition powered by Apple Vision Pro and large-scale displays. See the world from a plant's perspective, from germination to maturity, and explore the vast history of plant life and its role in our world.",
        ],
        imageUrl: "/images/a-vines-tale-2.png",
      },
      {
        id: 3,
        title: "As the land and water differ, so do the flowers they bear.",
        subtitle: "Across wondrous planets, wondrous flowers unfurl.",
        imageUrl: "/images/a-vines-tale-3.png"
      },
      {
        id: 4,
        title: "Diverse Range of Planets",
        subtitle: "Each characterized by unique hydrological features, climates, and terrains.",
        imageUrl: "/images/a-vines-tale-4.png",
      },
      {
        id: 5,
        title: "Through an Insect's Eyes",
        subtitle: "Don the headset, become the bee, And know the labors of the flowery lea.",
        imageUrl: "/images/a-vines-tale-5.png",
      },
      // 添加更多 slides 如果需要
    ]
  },
  {
    id: 7,
    title: "CUI",
    categories: ["Arts"],
    slides: [
      {
        id: 1,
        title: "Interactive Peking Opera Art in Shanghai",
        subtitle: "Interactive art installation with Gianluigi Misurelli, exploring Peking Opera music",
        imageUrl: "/images/cui-1.png",
      },
      {
        id: 2,
        title: "Peking Opera Mixer",
        subtitle: "3-month exhibition in Shanghai Xinzhuang features online and on-site interactives.",
        imageUrl: "/images/cui-2.png",
      },
    ]
  },
  {
    id: 8,
    title: "TEDx Air: Dialogue in space",
    categories: ["Experimentals"],
    slides: [
      {
        id: 1,
        title: "Sending Humanity's Voice to the Stars",
        descriptions: [
          "Partnering with TEDx Hangzhou and digital artist Lin Wanshan, the Cosmic Shout Project sent a collective human message into space in June 2021.",
        ],
        imageUrl: "/images/tedx-air-1.png",
        brandLogo: {
          light: "/images/tedx-hangzhou-black.png",
          dark: "/images/tedx-hangzhou-white.png",
          alt: "TEDx Hangzhou Logo"
        }
      },
      {
        id: 2,
        title: "Sound Fragments from Individuals",
        descriptions: [
          "For a month prior, an online interactive platform gathered sound fragments from individuals, which were then woven into a single musical composition.",
        ],
        imageUrl: "/images/tedx-air-2.png",
      },
      {
        id: 3,
        title: "Dialogue in space",
        descriptions: [
          "This 'shout' was transmitted to a passing civilian satellite from a building in Hangzhou during a live event.",
        ],
        imageUrl: "/images/tedx-air-3.png",
      },
    ]
  },
  {
    id: 9,
    title: "Nature Radio",
    categories: ["Commercials"],
    slides: [
      {
        id: 1,
        title: "Music Tailored to Your Scent",
        subtitle: "AI-Powered Skincare Soundscapes",
        descriptions: [
          "Partnering with JUNPING, explore unique musical spaces inspired by their skincare fragrances. AI-generated music creates a bespoke auditory experience tailored to your scent selections."
        ],
        imageUrl: "/images/nature-radio-1.png",
        links: [
          { url: "https://junping.net/nature-radio", label: "Nature Radio Online Experience" },
        ],
        brandLogo: {
          light: "/images/junping-black.png",
          dark: "/images/junping-white.png",
          alt: "JUNPING Logo"
        }
      },
      {
        id: 2,
        title: "Sonic Perfumery",
        imageUrl: "/images/nature-radio-2.png",
      },
      {
        id: 2,
        title: "Scan Face Mask Code to Music Ambience.",
        imageUrl: "/images/nature-radio-3.png",
      },
    ]
  },
  {
    id: 10,
    title: "Muspace",
    categories: ["Experimentals"],
    slides: [
      {
        id: 1,
        title: "Next-Generation Immersive Interactive Music Space",
        imageUrl: "/images/muspace-1.png",
      },
      {
        id: 2,
        title: "Collaborative Online Music Kit",
        imageUrl: "/images/muspace-2.png",
      },
      {
        id: 3,
        title: "Immersive Native Musical Interfaces",
        imageUrl: "/images/muspace-3.png",
      },
    ]
  },
  {
    id: 11,
    title: "Gen-light",
    categories: ["Commercials", "Experimentals"],
    slides: [
      {
        id: 1,
        title: "Revolutionizing nightclub experiences with AI",
        subtitle: "Real-time music-reactive lighting algorithm automates VJ and LJ performances",
        descriptions: [
          "Creating dynamic and immersive environments. Implemented in venues across China, Thailand, and Vietnam.",
        ],
        imageUrl: "/images/gen-light-1.png",
      },
      {
        id: 2,
        title: "Collaborative with JBL",
        descriptions: [
          "AI-Driven Research on Real-World Music Visualization Dynamics.",
        ],
        imageUrl: "/images/gen-light-2.png",
        brandLogo: {
          light: "/images/jbl-black.png",
          dark: "/images/jbl-white.png",
          alt: "JBL Logo"
        }
      },
    ]
  },
  {
    id: 12,
    title: "Trantor: Web3 Music Label by MHP",
    categories: ["Experimentals"],
    slides: [
      {
        id: 1,
        title: "MHP Techno Creathon",
        subtitle: "An open call for a techno co-creation movement.",
        imageUrl: "/images/trantor-1.jpg",
        links: [
          { url: "https://magipop.xyz", label: "MHP Techno Creathon" },
        ]
      },
      {
        id: 2,
        title: "Contribution On-chain",
        descriptions: [
          "Revenue share, live performances, and album feature.",
        ],
        imageUrl: "/images/trantor-2.png",
      },
    ]
  },
  // 添加更多 projects 如果需要
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('All Projects');
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects = activeTab === 'All Projects'
    ? projectsData
    : projectsData.filter(project => project.categories.includes(activeTab));

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className={`${isWideScreen ? 'pt-40' : 'pt-80'} pb-16 flex-grow`}>
        {filteredProjects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </main>
      <Footer />
    </div>
  );
}