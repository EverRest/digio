import { RootState } from '../../store';
export const selectUserId = (state: RootState): string | null => state.user._user?._id || null;