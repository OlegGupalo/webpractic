import React, { ReactNode } from "react"
import styles from './Layouts.module.scss'
import Background from '../images/cambridge.jpeg'

interface MainLayoutProps {
    children?: ReactNode,
    contentFullWith?: boolean,
    className?: string
}

export const MainLayout: React.FC<MainLayoutProps> = ({children, contentFullWith, className}) => {
    
    return (
    <div className={styles.backgroundImage}>

    
        <div className={styles.container}>
            {children}
        </div>
    </div>
    )
}