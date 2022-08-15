const iconContainerAnim = {
    init:{
        opacity: 1
    },
    anim:{
        opacity: 1,
        filter: "blur(0px)",
    },
    end:{
        filter: "blur(5px)",
        transition: {
            delay: 1.5,
            type: 'spring',
            damping: 15
        }
    }
};

const iconsAnim = {
    init:{
        opacity: 0,
        scale: 0
    },
    anim: i => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i*1.2,
            type: 'spring',
            damping: 11
        }
    })
};

const pageTransitionAnim = {
    init:{
        opacity: 0
    },
    anim:{
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    end:{
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
};

export {iconContainerAnim, iconsAnim, pageTransitionAnim}
