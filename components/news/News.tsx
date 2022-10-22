import { Paper } from "@mui/material"
import { NewsItem } from "./NewsItem"
import styles from './news.module.scss'
import { Box } from "@mui/system"
import Carousel from "react-material-ui-carousel"
import { ImportContacts } from "@mui/icons-material"

interface NewsItemProps {
    title: string,
    body: string,
    category: string,
    createdAt: string,
}

interface NewsProps {
    items: NewsItemProps[]
}

export const News: React.FC<NewsProps> = ({items}) => {
    return (
        <>
        <Carousel
            animation="slide"
            NextIcon={<ImportContacts />}
            PrevIcon={<ImportContacts />}
        >
            {items.map((item,key) => 
                    <Paper elevation={6} classes={{root: styles.paper}}>
                        <NewsItem key={key} {...item}  />
                    </Paper>
            
            )}
        </Carousel>
        </>
    )
}