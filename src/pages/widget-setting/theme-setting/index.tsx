import React, { useState } from 'react';
import { Input } from 'antd';
import { DemoTheme } from './demo/index';
import styles from './index.module.scss';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  // bubleBackground: string;
  // bubleFonsize: string;
  // bubleText: string;
  // bubleColor: string;

  headerBackground: string;
  headerColor: string;
  headerFonsize: string;
  headerText: string;

  // chatFrameBackground: string;
}

export const ThemeWidget: React.FC = () => {
  const { control, handleSubmit } = useForm<IFormInputs>();
  const [data, setData] = useState<IFormInputs>({
    headerBackground: '#3da5ce',
    headerColor: '#fff',
    headerFonsize: '16px',
    headerText: 'Chat Bot',
  });

  const onBlur = (data: IFormInputs) => {
    console.log(data);
    setData(data);
  };

  return (
    <div className={styles.themeSetting}>
      <form onSubmit={handleSubmit(onBlur)} onBlur={handleSubmit(onBlur)}>
        {/* <div className={styles.container}>
          <label>Buble Label</label>
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='bubleBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='bubleColor'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__fontsize} />
            )}
            name='bubleFonsize'
            control={control}
            defaultValue=''
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__text} />
            )}
            name='bubleText'
            control={control}
            defaultValue=''
          />
        </div> */}
        <div className={styles.container}>
          <label>Header Title</label>
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#3da5ce'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerColor'
            control={control}
            defaultValue='#ffffff'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__fontsize} />
            )}
            name='headerFonsize'
            control={control}
            defaultValue='18px'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__text} />
            )}
            name='headerText'
            control={control}
            defaultValue='Chat Bot'
          />
        </div>
        {/* <div className={styles.container}>
          <label>Chat Frame</label>
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='chatFrameBackground'
            control={control}
            defaultValue='#a35252'
          />
        </div> */}
        <div className={styles.container}>
          <label>Chat Title</label>
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__fontsize} />
            )}
            name='headerFonsize'
            control={control}
            defaultValue=''
          />
        </div>
        <div className={styles.container}>
          <label>Chat Title</label>
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__fontsize} />
            )}
            name='headerFonsize'
            control={control}
            defaultValue=''
          />
        </div>
        <div className={styles.container}>
          <label>Chat Title</label>
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__fontsize} />
            )}
            name='headerFonsize'
            control={control}
            defaultValue=''
          />
        </div>
        <div className={styles.container}>
          <label>Chat Title</label>
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__color} type='color' />
            )}
            name='headerBackground'
            control={control}
            defaultValue='#a35252'
          />
          <Controller
            render={({ field }) => (
              <Input {...field} className={styles.item__text} />
            )}
            name='headerText'
            control={control}
            defaultValue=''
          />
        </div>
        <input type='submit' style={{ display: 'none' }} />
      </form>
      <DemoTheme
        headerBackground={data.headerBackground}
        headerColor={data.headerColor}
        headerFonsize={data.headerFonsize}
        headerText={data.headerText}
      />
    </div>
  );
};
