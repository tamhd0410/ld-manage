import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { fetchListUser, getListUser } from 'redux/user-slice';
import { EditForm } from './edit-form';

interface IProps {
  visibleCreate: boolean;
}

export const TableUser: React.FC<IProps> = ({ visibleCreate }) => {
  const dispatch = useAppDispatch();
  const dataFetch = useAppSelector(getListUser);
  const [items, setItems] = useState([
    { id: '1', name: 'nam' },
    { id: '2', name: 'nam2' },
  ]);
  const [detailVisible, setDetailVisible] = useState<boolean>(false);
  const [visibleEdit, setVisibleEdit] = useState<boolean>(false);

  const handleMore = () => {
    setDetailVisible(true);
  };
  const handleEdit = () => {
    setVisibleEdit(true);
    setItems([
      { id: '1', name: 'nam' },
      { id: '2', name: 'nam2' },
    ]);
  };
  const handleOkEdit = () => {
    setVisibleEdit(false);
  };
  const handleOk = () => {
    setDetailVisible(false);
  };

  useEffect(() => {
    dispatch(fetchListUser());
  }, [dispatch]);

  const handleAddField = () => {
    console.log('handleAddField');
    setItems([...items, { id: '', name: '' }]);
  };

  const handleRemoveField = (index: any) => {
    console.log('handleRemoveField: ' + index);
    let cloneItems = [...items];
    cloneItems.splice(parseInt(index), 1);
    setItems(cloneItems);
  };

  const columns = [
    {
      title: 'UserName',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size='middle'>
          <Button type='link' onClick={handleMore}>
            More
          </Button>
          <Button type='link' onClick={handleEdit}>
            Delete
          </Button>
          <Button type='link' onClick={handleEdit}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  const data: any[] = [];
  dataFetch?.pagedResult?.items.map((item: { _id: any }) =>
    data.push({ ...item, key: item._id })
  );

  return (
    <>
      {console.log('render TableUser')}
      <Table
        onChange={(e) => {
          console.log(e);
        }}
        columns={columns}
        dataSource={data}
        scroll={{ y: 240 }}
      />
      <Modal
        title='Detail Infor'
        visible={detailVisible}
        onOk={handleOk}
        onCancel={handleOk}
        maskClosable={false}
      >
        asdasdasd
      </Modal>
      <EditForm
        formData={{
          userName: 'nam',
          password: 'nam123123',
          items: items,
        }}
        visible={visibleEdit}
        onOk={handleOkEdit}
        onCancel={handleOkEdit}
        onAddField={handleAddField}
        onRemoveField={handleRemoveField}
      />
    </>
  );
};
