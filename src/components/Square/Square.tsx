import React from 'react';
import styles from './Square.module.scss';

interface SquareProps {
    color: string;
    link: string;
}

const Square: React.FC<SquareProps> = ({ color, link }) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
            <div className={`${styles.square} ${styles[color]}`}></div>
        </a>
    );
};

export default Square;
