import React, { useEffect } from 'react';
import { Header } from 'components/header/index';
import { LayoutAdmin } from 'layout/admin';
import styles from './index.module.scss';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

interface IFormInput {
  formData: {
    oldPass: string;
    newPass: string;
    confirmNewPass: string;
  };
}

export const InforPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onBlur' });

  let formData = {
    oldPass: '',
    newPass: 'bbb',
    confirmNewPass: 'bbb',
  };

  useEffect(() => {
    setValue('formData', formData);
  }, []);

  const onChange = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <LayoutAdmin>
      <Header title='Changge Password' />
      <div className={clsx(styles.form__container, 'div__content')}>
        <form
          className={clsx(styles.form__container)}
          onChange={handleSubmit(onChange)}
        >
          <div className={styles.form__item}>
            <label>現在のパスワード</label>
            <div>
              <input
                type='text'
                {...register('formData.oldPass', {
                  validate: {
                    positive: (v) => v.trim().length > 0,
                  },
                  onBlur: (e) => console.log(e),
                })}
              />
              {errors?.formData?.oldPass?.type === 'positive' && (
                <p>not contains space</p>
              )}
            </div>
          </div>
          <div className={styles.form__item}>
            <label>新しいパスワード</label>
            <div>
              <input type='text' {...register('formData.newPass')} />
            </div>
          </div>
          <div className={styles.form__item}>
            <label>新しいパスワード（確認）</label>
            <div>
              <input type='text' {...register('formData.confirmNewPass')} />
            </div>
          </div>
        </form>
      </div>
    </LayoutAdmin>
  );
};
