"use client";

import React, { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import "./fading-section.css";

interface FadingSectionProps {
    children: ReactNode;
}

export default function FadingSection({ children }: FadingSectionProps) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null); // Specify the type of domRef

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });

        // If domRef exists, observe it
        if (domRef.current) {
            observer.observe(domRef.current);
        }

        // Clean up the observer when component unmounts
        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <section
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </section>
    );
}