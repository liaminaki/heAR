import React, { ReactNode } from 'react';
import '../glass.css';
import '../index.css';

type GlassProps = {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    contentClassName?: string;
};

const GlassButton: React.FC<GlassProps> = ({ onClick, children, className, contentClassName }) => {
    return (
        <button className={`glass-card ${className ?? ''}`} onClick={onClick}>
            <div className="glass-stroke"></div>
            <div className={`glass-content ${contentClassName ?? ''}`}>{children}</div>
        </button>
    );
};

export default GlassButton;