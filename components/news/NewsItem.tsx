import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentPost } from "redux/slices/post";
import styles from './news.module.scss'

interface NewsProps {
    _id: string,
    title: string,
    content: string,
    created_at: string,
    updated_at: string,
    tag: string
    image: string
    newImages: string
}


export const NewsItem: React.FC<NewsProps> = ({
    _id,
    title,
    content,
    created_at,
    tag,
    updated_at,
    image,
    newImages
}) => {
    let array = image.split('/')
    array[2] = '8db7-83-234-174-21.eu.ngrok.io'
    let newImage = array.join('/')
    const subContent = content.substr(0, 100)
    const dispatch = useDispatch()
    const asyncSubm = async(e, index) => {
        dispatch(fetchCurrentPost(index))
    }
    return (
        <>
            <div className="beforeImage">
                <img src={newImages} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} />
                <Link href={`/news/${_id}`}>
                <button>
                <div className={styles.absoluteElem}>
                    <span className={styles.newsTitle}>{title}</span>
                    <p className={styles.contentPreview}>{subContent} ...</p>
                </div>
                </button>
                </Link>
            </div>
        </>
    )
}