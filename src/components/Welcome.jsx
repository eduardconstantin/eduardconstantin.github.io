import React from 'react'
import { motion } from "framer-motion";

import { welcomeAnim } from './Animations/welcomeAnimations';

export default function Welcome({ setLoading }) {
    return (
        <motion.div variants={welcomeAnim}
                    initial="init"
                    animate="anim"
                    exit="end"
                    onAnimationComplete={() => setLoading(true)}>
            <span>WELCOME</span>
        </motion.div>
    )
}
