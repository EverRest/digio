import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button, MenuItem, Select, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { getUsers } from '../../../api/users';
import { shareAccountWithUser } from '../../../api/accounts';

interface User {
    _id: string;
    name: string;
}

interface ShareModalProps {
    open: boolean;
    onClose: () => void;
    onShare: (userId: string) => void;
    authorizedUserId: string;
}

const ShareModal = ({ open, onClose, onShare, authorizedUserId }: ShareModalProps): React.ReactElement => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<string>('');

    useEffect((): void => {
        const fetchUsers = async (): Promise<void> => {
            const response = await getUsers();
            const usersList: User[] = await response.json();
            const filteredUsers = usersList.filter(user => user._id !== authorizedUserId);
            setUsers(filteredUsers);
        };
        fetchUsers();
    }, [authorizedUserId]);

    const handleUserChange = (event: SelectChangeEvent<string>): void => {
        setSelectedUser(event.target.value);
    };

    const handleShare = async (): Promise<void> => {
        await shareAccountWithUser(selectedUser, authorizedUserId); // Use the function here
        onShare(selectedUser);
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(5px)',
            }}
        >
            <Box
                sx={{
                    width: 400,
                    p: 4,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    borderRadius: 1,
                }}
            >
                <Typography variant="h6" component="h2">
                    Share Account
                </Typography>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id="user-select-label">Select User</InputLabel>
                    <Select
                        labelId="user-select-label"
                        value={selectedUser}
                        onChange={handleUserChange}
                    >
                        {users.map((user) => (
                            <MenuItem key={user._id} value={user._id}>
                                {user.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button onClick={handleShare} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Share
                </Button>
            </Box>
        </Modal>
    );
};

export default ShareModal;