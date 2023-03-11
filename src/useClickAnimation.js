import { useEffect } from "react";

export const useClickAnimation = (element, config) => {
    
    const {
        size = 100,
        color = "#fff",
        duration = 800,
    } = config;
    
    useEffect(() => {
        const applyContainerProperties = () => {
            element.current.classList.add("effect-container");
        };
    
        const applyStyle = (e) => {
            const{ offsetX, offsetY } = e;
            const { style } = element.current;
            const sizeOffset = 50;
    
            style.setProperty("--effect-duration", `${duration}ms`);
            style.setProperty("--effect-top", `${offsetY - sizeOffset}px`);
            style.setProperty("--effect-left", `${offsetX - sizeOffset}px`);
            style.setProperty("-effect-height", `${size}px`);
            style.setProperty("--effect-width", `${size}px`);
            style.setProperty("--effect-color", color);
        };
    
        const onClick = (e) => {
            element.current.classList.remove("active");
            applyStyle(e);
            setTimeout(() => {
            element.current.classList.add("active");
            }, 50);
        };
    
        applyContainerProperties();
    
        element.current.addEventListener("mouseup", onClick);
    
        const cleanupRef = element.current;
    
        return () => {
            cleanupRef.removeEventListener("mouseup", onClick);
        };
      }, [element, size, color, duration]);
};