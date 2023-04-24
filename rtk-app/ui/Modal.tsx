import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Button, Modal } from 'antd';

interface IAppModal {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
    title: string;
    action?: () => void;
    onCancel?: any;
}

const AppModal = ({ open, setOpen, children, title, action, onCancel }: IAppModal) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (action: any) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      action()
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
    onCancel()
  };

  return (
    <>
      <Modal
        title={title}
        open={open}
        onOk={() => handleOk(action)}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default AppModal;