    import React, { useState, useEffect } from 'react';
    import { Modal, Box, Typography, Button, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
    import { getTags } from '../../../api/tags';

    interface Tag {
        _id: string;
        name: string;
    }

    interface TagModalProps {
        open: boolean;
        onClose: () => void;
        onTag: (tagId: string, action: 'add' | 'remove') => Promise<void>;
        resourceId: string;
    }

    const TagModal: React.FC<TagModalProps> = ({ open, onClose, onTag }) => {
        const [tags, setTags] = useState<Tag[]>([]);
        const [selectedTag, setSelectedTag] = useState<string>('');

        useEffect(() => {
            const fetchTags = async (): Promise<void> => {
                const response = await getTags();
                const tags = await response.json();
                setTags(tags);
            };

            fetchTags();
        }, []);

        const handleAddTag = async (): Promise<void> => {
            await onTag(selectedTag, 'add');
            setSelectedTag('');
            onClose();
        };

        const handleRemoveTag = async (): Promise<void> => {
            await onTag(selectedTag, 'remove');
            setSelectedTag('');
            onClose();
        };

        const handleChange = (event: SelectChangeEvent<string>): void => {
            setSelectedTag(event.target.value);
        };

        return (
            <Modal open={open} onClose={onClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Manage Tags</Typography>
                    <FormControl fullWidth>
                        <InputLabel id="tag-select-label">Tag</InputLabel>
                        <Select
                            labelId="tag-select-label"
                            value={selectedTag}
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        >
                            {tags.map((tag) => (
                                <MenuItem key={tag._id} value={tag._id}>
                                    {tag.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={handleAddTag} variant="contained" color="primary" sx={{ flexGrow: 1, mr: 1 }}>
                            Add Tag
                        </Button>
                        <Button onClick={handleRemoveTag} variant="contained" color="secondary" sx={{ flexGrow: 1, ml: 1 }}>
                            Remove Tag
                        </Button>
                    </Box>
                </Box>
            </Modal>
        );
    };

    export default TagModal;