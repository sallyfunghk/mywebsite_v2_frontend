import { useRef, React } from 'react';
import SkillBar from 'react-skillbars';
import PersonalityBox from '../components/PersonalityBox'
import Footer from '../components/Footer'

import ProblemSolvingIcon from './../images/personality_icons/problem_solving_icon.svg'
import CreativeThinkingIcon from './../images/personality_icons/creative_thinking_icon.svg'
import PassionateIcon from './../images/personality_icons/passionate_icon.svg'
import OthersIcon from './../images/personality_icons/others_icon.svg'

import "../styles/global.css"
import "../styles/home.css"

export default function Home(){

    const startToBrowse = useRef(null)
    const executeScroll = () => startToBrowse.current.scrollIntoView()

    const skills = [
        { type: 'PHP', level: 60 },
        { type: 'GoLang', level: 60 },
        { type: 'MySQL', level: 60 },
        { type: 'Flutter', level: 50 },
        { type: 'ReactJS', level: 50 }
    ];

    const skillColors = {
        bar: "linear-gradient(to right,  #739DD2, #002F6B)",
        title: {
          text: "#fff",
          background: "#2980b900"
        }
    };

    const personalities = [
        {
            key: "ProblemSolving",
            icon: ProblemSolvingIcon,
            title: <>Problem Solving</>,
            content: <>I like solving problems, the process is interesting. After I soloved a problem step by step, I feel successful and this is the best thing in the world.</>
        },
        {
            key: "CreativeThinking",
            icon: CreativeThinkingIcon,
            title: <>Creative Thinking</>,
            content: <>Always have different ideas in my mind. Hate doing immutable things. Love learning and exploring new and great things.</>
        },
        {
            key: "Passionate",
            icon: PassionateIcon,
            title: <>Passionate</>,
            content: <>I am passionately love my work and what I am doing. Feel excited when I faced challenges in my programming works. Hope to have challenges more and more.</>
        },
        {
            key: "Icon",
            icon: OthersIcon,
            title: <>Others</>,
            content: <>Would you mind to transfer to the “<a href='/about_me'>About Me</a>” page for knowing more personalities? </>
        }
    ]

    return (
        <div>
            <section id="banner">
                <div className="heading">
                    <h1>Sally Fung</h1>
                    <h2>Web Programmer</h2>
                    <button onClick={executeScroll} className='btn-normal'>START TO BROWSE</button>
                </div>
            </section>
            <section ref={startToBrowse} id="skills">
                <div className='skills-container'>
                    <h1>SKILLS</h1>
                    <div className="bar" >
                        <SkillBar skills={skills} height={25} colors={skillColors}/>
                    </div>
                </div>
            </section>
            <section id="personality">
                <h1>PERSONALITIES</h1>
                <div className='content'>
                    {
                        personalities.map(personality => 
                        <PersonalityBox key={personality.key} 
                                        icon={personality.icon} 
                                        title={personality.title} 
                                        content={personality.content}
                                        />)
                    }
                </div>
            </section>
        </div>
    );
}