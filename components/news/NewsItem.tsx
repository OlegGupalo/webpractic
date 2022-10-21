import React from "react";

interface NewsProps {
    title: string,
    body: string,
    category: string,
    createdAt: string,
}


export const NewsItem: React.FC<NewsProps> = ({
    title,
    body,
    category,
    createdAt
}) => {
    return (
        <>
           {title}
           {body}
           {category}
           {createdAt} 
        </>
    )
}