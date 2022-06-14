import React, { useState } from "react";
import { motion } from "framer-motion";
import { aboutAnim, iconsAnim, skillAnim, nameAnim } from "./Animations/aboutAnimations";

export default function About() {

    const [skillHover, setSkillHover] = useState([
        {
            text: "Web Dev",
            visible: false
        },
        {
            text: "Game Dev",
            visible: false
        },
        {
            text: "UI Design",
            visible: false
        }
    ])

    const skillMouseEnter = (index) => {
        const skillHoverNew = [...skillHover];
        skillHoverNew[index].visible = true;
        setSkillHover(skillHoverNew);
    }

    const skillMouseLeave = (index) => {
        const skillHoverNew = [...skillHover];
        skillHoverNew[index].visible = false;
        setSkillHover(skillHoverNew);
    }
    return (
        <motion.section className='about' variants={aboutAnim} initial='init' animate='anim'>
            <motion.h3 variants={iconsAnim}>Hello there, my name is</motion.h3>
            <motion.h2 variants={nameAnim}>Eduard Ibinceanu</motion.h2>
            <motion.h5 variants={iconsAnim}>- Application Developer @ IBM Romania -</motion.h5>

            <motion.div className='skillsContainer' variants={iconsAnim}>
                {skillHover.map((item, i) => (
                    <div key={item.text} 
                        className='skill'
                        onMouseEnter={() => skillMouseEnter(i)}
                        onMouseLeave={() => skillMouseLeave(i)}>
                        <motion.div className='icon' variants={skillAnim} initial="leave" animate={item.visible ? "hover" : "leave"}></motion.div>
                        <motion.p className='skillName' variants={skillAnim} initial="hover" animate={item.visible ? "leave" : "hover"}>{item.text}</motion.p>
                    </div>
                ))}
            </motion.div>
        </motion.section>
    )
}
