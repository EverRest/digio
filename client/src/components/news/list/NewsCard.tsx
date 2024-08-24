import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

interface NewsCardProps {
    title: string;
    link: string;
    published: string;
    content: string;
}

const getRandomBrightOrDarkColor = (): string => {
    const lightness = '98%';
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, ${lightness})`;
};

const NewsCard: React.FC<NewsCardProps> = ({ title, link, published, content }) => {
    const backgroundColor = getRandomBrightOrDarkColor();
    return (
        <Card sx={{ marginBottom: 2, backgroundColor }}>
            <CardContent>
                <Typography variant="h6" component="div" dangerouslySetInnerHTML={{ __html: title }} />
                <Typography variant="body2" color="text.secondary">
                    {new Date(published).toLocaleString()}
                </Typography>
                <Typography variant="body2" component="div" dangerouslySetInnerHTML={{ __html: content }} />
                <Link href={link} target="_blank" rel="noopener">
                    Read more
                </Link>
            </CardContent>
        </Card>
    );
};

export default NewsCard;