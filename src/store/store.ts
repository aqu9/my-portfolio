import { create } from 'zustand';

const profileStore = create((set) => ({
  profileInfo: {},
}));

export const setProfileStore = (info: any) => {
  profileStore.setState({
    profileInfo: info,
  });
};

export const getProfile = () => profileStore((state: any) => state.profileInfo);

export default profileStore;
