import React from 'react';
import {Chip} from '@mui/material';
import {getRandomColor} from '../../../utils/common';

interface TagsProps {
    tags: string[];
}

const Tags: React.FC<TagsProps> = ({tags}) => {
    return (
        <div>
            {tags.map((tag, index) => (
                <Chip
                    key={index}
                    label={tag}
                    style={{backgroundColor: getRandomColor(), color: 'white', margin: '2px'}}
                />
            ))}
        </div>
    );
};

export default Tags;