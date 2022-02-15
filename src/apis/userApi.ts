import axiosClient from './axiosClient';

export const userApi = {
  signIn: async (payload: any) => {
    const url = `/auth/login`;
    return await axiosClient.post(url, payload);
  },
  getListUser: async () => {
    const url = `/users`;
    return await axiosClient.get(url);
  },
  addNewUser: async (payload: any) => {
    const url = `/admin/create-user`;
    return await axiosClient.post(url, payload);
  },
  deleteUser: async (payload: any) => {
    const url = `/admin/delete-user/${payload}`;
    return await axiosClient.delete(url, payload);
  },
  editUser: async (payload: any) => {
    const url = `/admin/updte-user`;
    return await axiosClient.put(url, payload);
  },
};
