import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ARCHITECTURAL HOOK: useScrollToTop
 * Manages viewport positioning across the single-page application.
 * Ensures the 'blueprint' always starts at the top-left origin (0,0).
 */
const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // We use 'instant' behavior to maintain the brutalist, 
        // snappy feel of the site's architecture.
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);
};

export default useScrollToTop;