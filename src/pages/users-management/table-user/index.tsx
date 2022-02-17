import React, { useEffect, useState } from 'react';
import { Spin, Table, Space, Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchEditUser, fetchListUser, getUser } from 'redux/user-slice';
import {
  EditOutlined,
} from '@ant-design/icons';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { FormItem } from 'components/form-item';
import { unwrapResult } from '@reduxjs/toolkit';

interface IProps {
  visibleCreate: boolean;
}

interface User {
  key?: string,
  uid?: string,
  name?: string,
  full_name?: string,
  first_name?: string,
  last_name?: string,
  phone?: string
}

export const TableUser: React.FC<IProps> = ({ visibleCreate }) => {
  const dispatch = useAppDispatch();
  const dataFetch = useAppSelector(getUser);
  const [isLoadingEdit, setIsLoadingEdit] = useState<boolean>(false)
  const [user, setUser] = useState<User>({});
  const [users, setUsers] = useState<User[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEditUser = (data: User) => {
    setUser(data);
    setValue('editForm', data);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSaveUser = async (data: any) => {
    console.log('Edit User', data.editForm);
    const user = data.editForm;
    try {
      const actionResult = await dispatch(fetchEditUser(user));
      const response = unwrapResult(actionResult);
      if (response.uid) {
        setIsModalVisible(false);
      }
    } catch (error) {
      setIsModalVisible(false);
    }
  };

  useEffect(() => {
    dispatch(fetchListUser());
  }, [dispatch]);

  useEffect(() => {
    const data: User[] = [];
    if (dataFetch?.listUser && dataFetch.listUser.length > 0) {
      dataFetch?.listUser.map((item: { uid: string, first_name: string, last_name: string }) =>
        data.push({ ...item, full_name: item.first_name + ' ' + item.last_name, key: item.uid })
      );
    }
    setUsers(data);
  }, [dataFetch]);

  const columns = [
    {
      title: 'Full name',
      dataIndex: 'full_name',
      key: 'full_name'
    },
    {
      title: 'Username',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'mail',
      key: 'mail'
    },
    {
      title: 'Action',
      key: 'action',
      width: '80px',
      align: 'center' as 'center',
      render: (text: any, record: any) => {
        return (
          <Space size='middle'>
            <Button type='link' onClick={() => handleEditUser(record)}>
              <EditOutlined />
            </Button>
          </Space>
        )
      },
    },
  ];

  return (
    <>
      {
        dataFetch.loading &&
        <div className={styles.loading__container}>
          <Spin size="large" tip="Loading...">
          </Spin>
        </div>
      }
      {
        !dataFetch?.loading &&
        <Table
          onChange={(e) => {
            console.log(e);
          }}
          columns={columns}
          dataSource={users}
        />
      }
      {
        <Modal okText='Save' confirmLoading={dataFetch.loadingEdit} title="Edit User" visible={isModalVisible} onOk={handleSubmit(handleSaveUser)} onCancel={handleCancel}>
          {
            <form onSubmit={handleSubmit(handleSaveUser)}>
              <FormItem label='First name :' className={styles.form__item}>
                <div>
                  <input
                    type='text'
                    {...register('editForm.first_name', {
                      validate: {
                        positive: (v) => v.trim().length > 0,
                      },
                    })}
                  />
                  {errors?.editForm?.last_name?.type === 'positive' && (
                    <span>First name is required.</span>
                  )}
                </div>
              </FormItem>
              <FormItem label='Last name :' className={styles.form__item}>
                <div>
                  <input
                    type='text'
                    {...register('editForm.last_name', {
                      validate: {
                        positive: (v) => v.trim().length > 0,
                      },
                    })}
                  />
                  {errors?.editForm?.last_name?.type === 'positive' && (
                    <span>Last name is required</span>
                  )}
                </div>
              </FormItem>
              <FormItem label='Phone :' className={styles.form__item}>
                <div>
                  <input
                    type='text'
                    {...register('editForm.phone', {
                      validate: {
                        positive: (v) => v.trim().length > 0,
                      },
                    })}
                  />
                  {errors?.editForm?.phone?.type === 'positive' && (
                    <span>must be input!</span>
                  )}
                </div>
              </FormItem>
            </form>
          }
        </Modal>
      }
    </>
  );
};
