// app/animations/motionPresets.ts

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } 
  }
};

export const navbarDrop = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const heroEntrance = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, delay: 0.1 } 
  }
};

export const bannerReveal = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8 } 
  }
};

// Tabs toggling slide-and-fade logic
export const tabSwitchPreset = (activeTab: string) => ({
  initial: { opacity: 0, x: activeTab === "insights" ? -15 : 15 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: activeTab === "insights" ? 15 : -15 },
  transition: { duration: 0.25, ease: "easeInOut" }
});