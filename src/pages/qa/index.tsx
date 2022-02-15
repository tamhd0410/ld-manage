import React, { useEffect, useLayoutEffect, useState } from 'react';
import { LayoutAdmin } from 'layout/admin';
import { GroupColumnChart } from './barchat';
import { StackedBarChart } from './stackedbarchart';
import { ChartPie } from './piechart';
import { Tabs } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import styles from './index.module.scss';

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;

export const QaPage: React.FC = () => {
  function callback(key: any) {
    console.log(key);
  }

  const [number, setNumber] = useState(0);
  const [date, setDate] = useState<string>();

  const disabledDate = (current: any) => {
    return current < moment('2021/07/01') || current > moment().endOf('day');
  };

  useEffect(() => {
    console.log('date change');
    setNumber(number + 1);
  }, [date]);

  let a = 'test git desk';

  const getRangeDate = (value: any) => {
    if (value) {
      const startDate = moment(value[0]).format('YYYY-MM-DD') || 0;
      const endDate = moment(value[1]).format('YYYY-MM-DD') || 0;
      console.log(startDate, endDate);
      setDate(`${startDate} - ${endDate}`);
    }
  };

  return (
    <LayoutAdmin>
      <div className={styles.container__content}>
        <Tabs onChange={callback} type='card'>
          <TabPane tab='Tab 1' key='1'>
            <GroupColumnChart className={styles.fix__barChart} />
          </TabPane>
          <TabPane tab='Tab 2' key='2' className={styles.tab__1}>
            <RangePicker
              onChange={getRangeDate}
              disabledDate={disabledDate}
              picker='month'
            />
            <GroupColumnChart />
            <StackedBarChart />
            <ChartPie />
          </TabPane>
          <TabPane tab='Tab 3' key='3'>
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </LayoutAdmin>
  );
};
