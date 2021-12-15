import React from "react";

export const MOBILE_VIEW_WIDTH_INDICATOR = 900;

export const isMobileView = (): boolean => window.innerWidth < MOBILE_VIEW_WIDTH_INDICATOR;

export const addScrolledIntoViewEventListener = (
    view: React.MutableRefObject<HTMLElement | undefined>,
    callback: () => void
) => {
    const listener = () => {
        const htmlElement = view.current;
        if (!htmlElement) {
            return;
        }
        const {top, bottom} = htmlElement.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
            callback();
        }
    };
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
};
