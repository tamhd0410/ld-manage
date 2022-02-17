import React, { useEffect, useState } from 'react';
import { Spin, Table, Space, Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchListUser, getListUser } from 'redux/user-slice';
import {
  EditOutlined,
} from '@ant-design/icons';
import styles from './index.module.scss';
// import { EditForm } from './edit-form';

interface IProps {
  visibleCreate: boolean;
}

export const TableUser: React.FC<IProps> = ({ visibleCreate }) => {
  const dispatch = useAppDispatch();
  const dataFetch = useAppSelector(getListUser);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleEdit = () => {
    setVisibleEdit(true);
  };

  useEffect(() => {
    dispatch(fetchListUser());
  }, [dispatch]);

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
      render: (text: any, record: any) => (
        <Space size='middle'>
          {/* <Button type='link' onClick={handleMore}>
            More
          </Button> */}
          <Button type='link' onClick={showModal}>
            <EditOutlined />
          </Button>
          {/* <Button type='link' onClick={handleEdit}>
            Edit
          </Button> */}
        </Space>
      ),
    },
  ];

  const data: any[] = [];
  if (dataFetch?.listUser && dataFetch.listUser.length > 0) {
    dataFetch?.listUser.map((item: { id: string, first_name: string, last_name: string }) =>
      data.push({ ...item, full_name: item.first_name + ' ' + item.last_name, key: item.id })
    );
  }

  console.log('list users', data);

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
          dataSource={data}
        />
      }
      {
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      }
    </>
  );
};
