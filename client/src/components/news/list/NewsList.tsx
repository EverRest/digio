import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import NewsCard from './NewsCard';
import { getNews } from '../../../api/news';

interface NewsItem {
    id: string;
    title: string;
    link: string;
    published: string;
    content: string;
}

const NewsList: React.FC = () => {
    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        const fetchNews = async (): Promise<void> => {
            const response = await getNews();
            const newsData = await response.json();
            const today = new Date().toISOString().split('T')[0];
            const filteredNews = newsData.filter((item: NewsItem) => item.published.split('T')[0] === today);
            setNews(filteredNews);
        };
        fetchNews();
    }, []);

    return (
        <Grid container spacing={2}>
            {news.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <NewsCard
                        title={item.title}
                        link={item.link}
                        published={item.published}
                        content={item.content}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default NewsList;