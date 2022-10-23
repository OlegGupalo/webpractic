import styles from './news.module.scss'

export const FullPost = ({post} : any) => {
    const sliceImage = (oldPath: string, newPath: string) => {
        const array = oldPath.split('/')
        array[2] = newPath
        let newImage = array.join('/')
        return newImage
    }

    console.log("post full pist", post)
    return (
        <>
        <div className="beforeImage">
                <img src={sliceImage(post.data.image, 'cb37-83-234-174-21.eu.ngrok.io')} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} />
                <div className={styles.fullRelativeElem}>
                    <span className={styles.newsTitle}>{post.data.title}</span>
                    <p className={styles.contentPreview}>{post.data.content}</p>
                </div>
            </div>
        </>
    )
}