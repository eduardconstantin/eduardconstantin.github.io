const aboutAnim = {
    init:{
        transition: {
            staggerChildren: 0.3
        }
    },
    anim:{
        transition: {
            delay: 0.2,
            staggerChildren: 0.3
        }
    }
};

const nameAnim = {
    init:{
        opacity: 0,
        y: 10,
    },
    anim:{
        opacity: 1,
        y: 0,
        backgroundPosition: ["0% 100%", "100% 0%", "0% 100%", "100% 0%", "0% 100%"],
        transition:{
            backgroundPosition:{duration: 40, repeat: Infinity},
        }
    }
}

const iconsAnim = {
    init:{
        opacity: 0,
        y: 10
    },
    anim:{
        opacity: 1,
        y:0
    }
};

const skillAnim = {
    leave:{
        rotateX: 0,
        rotateY: 0,
        translateX: [0, 0, 0, 0],
        opacity: [0, 0, 1, 1],
        transition: {
            rotateX:{delay: 0.15},
            translateX: {duration: 0.1},
            duration: 0.3
        }
    },
    hover:{
        rotateX: 90,
        rotateY: [0, Math.random()*10, Math.random()*-10, 0],
        translateX: [0,Math.random()*10,Math.random()*-10,0],
        opacity: [1, Math.random(), 0, 0],
        transition: {
            translateX: {duration: 0.1},
            duration: 0.3
        }
    }
};

export { aboutAnim, iconsAnim, skillAnim, nameAnim }