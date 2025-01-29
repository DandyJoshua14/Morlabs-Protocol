import React, { useState, useLayoutEffect } from "react"
import { createPortal } from "react-dom"

const createWrapperAndAppendToBody = (wrapperId: string) => {
    if (!document) return null;
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    return wrapperElement;
}

export function ReactPortal({ children, wrapperId }: { children: React.ReactNode; wrapperId: string }) {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement>();
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated: boolean = false;

        if (element) {
            systemCreated = true;
            element = createWrapperAndAppendToBody(wrapperId)
        }
        setWrapperElement(element!);

        return () => {
            if (systemCreated && element?.parentNode) {
                element.parentNode.removeChild(element);
            }
        }
    }, [wrapperId])

    if (!wrapperElement) return null;

    return createPortal(children, wrapperElement)
}