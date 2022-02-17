import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './index.module.scss';
import { FormItem } from 'components/form-item';
import { useForm } from 'react-hook-form';

type IProps = {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  formData: {
    first_name?: string;
    last_name?: string;
    mail?: string;
    phone?: string
  };
};

export const EditForm: React.FC<IProps> = ({
  visible,
  onOk,
  onCancel,
  formData
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const [error, setError] = useState('');
  const handleChangeState = () => {
    setError('error!!!');
  };

  useEffect(() => {
    setValue('form', formData);
  }, [formData]);

  const handleOnOk = () => {
    // onOk();
    handleSubmit(submit);
    clearErrors('form');
    setError('');
  };

  const submit = (data: any) => {
    onOk();
    console.log('aaaa');
    console.log('data: ', data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormItem label='First name :' className={styles.form__item}>
        <div>
          <input
            type='text'
            {...register('form.first_name', {
              validate: {
                positive: (v) => v.trim().length > 0,
              },
            })}
          />
          {errors?.form?.last_name?.type === 'positive' && (
            <span>First name is required.</span>
          )}
        </div>
      </FormItem>
      <FormItem label='Last name :' className={styles.form__item}>
        <div>
          <input
            type='text'
            {...register('form.last_name', {
              validate: {
                positive: (v) => v.trim().length > 0,
              },
            })}
          />
          {errors?.form?.last_name?.type === 'positive' && (
            <span>Last name is required</span>
          )}
        </div>
      </FormItem>
      <FormItem label='Phone :' className={styles.form__item}>
        <div>
          <input
            type='text'
            {...register('form.phone', {
              validate: {
                positive: (v) => v.trim().length > 0,
              },
            })}
          />
          {errors?.form?.phone?.type === 'positive' && (
            <span>must be input!</span>
          )}
        </div>
      </FormItem>
    </form>
  );
};
