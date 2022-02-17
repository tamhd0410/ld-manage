import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../redux/store';
import { userApi } from 'apis/userApi';

export interface UserSlice {
  listUser: any;
  loading: boolean;
  loadingEdit: boolean;
}

const initialState: UserSlice = {
  listUser: {},
  loading: true,
  loadingEdit: false
};

export const signIn = createAsyncThunk('user/signIn', async () => {
  const response = await userApi.signIn({
    email: 'system@free-agent-east.com',
    password: 'admin1234567',
  });
  const { accessToken } = response.data;
  localStorage.setItem('token', accessToken);
  return response.data;
});

export const fetchListUser = createAsyncThunk(
  'user/fetchListUser',
  async () => {
    const response = await userApi.getListUser();
    return response.data;
  }
);

export const fetchEditUser = createAsyncThunk(
  'user/fetchEditUser',
  async (user: any) => {
    const response = await userApi.editUser(user);
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchListUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchListUser.fulfilled, (state, { payload }) => {
        state.listUser = payload;
        state.loading = false;
      })
      .addCase(fetchEditUser.pending, (state, { payload }) => {
        state.loadingEdit = true;
      })
      .addCase(fetchEditUser.rejected, (state) => {
        state.loadingEdit = false;
      })
      .addCase(fetchEditUser.fulfilled, (state, { payload }) => {
        state.loadingEdit = false;
      });
  },
});

export const getListUser = (state: RootState) => state.user;
export const getIsLoadingEdit = (state: RootState) => state.user.loadingEdit;


// export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export default usersSlice.reducer;
