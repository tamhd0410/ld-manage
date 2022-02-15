import React, { useState } from 'react';
import { TableUser } from 'pages/users-management/table-user';
import { LayoutAdmin } from 'layout/admin';
import clsx from 'clsx';
import { Button } from 'antd';
import { useAppDispatch } from 'redux/hooks';
import { signIn } from 'redux/user-slice';

export const UserPage: React.FC = () => {
  const [visibleCreate, setVisibleCreate] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const getToken = async () => {
    await dispatch(signIn());
  };
  const addUser = () => {
    setVisibleCreate((prev) => !prev);
  };
  return (
    <LayoutAdmin title='User Management'>
      <div className={clsx('div__content')}>
        {console.log('UserPage')}
        <div>
          <Button onClick={addUser}>add</Button>
          <Button onClick={getToken}>Get Token</Button>
        </div>
        <TableUser visibleCreate={visibleCreate} />
      </div>
    </LayoutAdmin>
  );
};
