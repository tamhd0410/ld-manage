import React from 'react';
import { Modal } from 'antd';

interface IProps {
  title: string;
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
}

export const CreateForm: React.FC<IProps> = ({
  title,
  visible,
  onOk,
  onCancel,
}) => {
  return (
    <Modal title={title} visible={visible} onOk={onOk} onCancel={onCancel}>
      <form>
        <div>
          <label>userName</label>
          <div>
            <input type='text' />
          </div>
        </div>

        <div>
          <label>userName</label>
          <div>
            <input type='text' />
          </div>
        </div>
      </form>
    </Modal>
  );
};
