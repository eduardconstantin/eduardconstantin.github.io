const menuAnim = {
    init:{
        opacity: 0,
        y: 50
    },
    anim:{
        opacity: 1,
        y: 0,
        transition: {
            delay: 1
        }
    }
};

const menuContentAnim = {
    open: { 
        scale: 1,
        rotateY: 0,
        translateZ: 0,
        transition: { 
            type: "spring", 
            mass: 0.5, 
            stiffness: 120
        }
    },
    closed: { 
        scale: 0,
        rotateY: -80,
        translateZ: -350,
        transition: { 
            rotateY: { delay: 0.25, type: "spring", mass: 0.5 },
            duration: 0.3,
            delay: 0.1
        }
    }
}

const menuIconElemAnim = {
    open: i => ({ 
        scale: 1,
        rotate: 45,
    } ),
    closed: { 
        scale: 1,
        rotate: 45
    }
}

const menuIcon = {
    open: { 
        scale: 0.85,
        transition: { 
            type: "spring", 
            stiffness: 350
        }
    },
    closed: { 
        scale: 1,
        transition: { 
            type: "spring", 
            stiffness: 350
        }
    }
}

const socialAnim = {
    hover: { 
        scale: 0.9,
        backgroundColor: 'rgba(111, 201, 38, 1)',
        transition: { 
            backgroundColor: {duration: 0.15},
            type: "spring", 
            stiffness: 350,
        }
    },
    leave: { 
        scale: 1,
        backgroundColor: 'rgba(111, 201, 38, 0)'
    }
}

export { menuAnim, menuContentAnim, menuIconElemAnim, menuIcon, socialAnim }