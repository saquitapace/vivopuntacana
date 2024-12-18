import { useDispatch, useSelector } from 'react-redux';
import { setTargetDate } from '@/src/reducers/calendar/calendarSettingSlice';
import Calendar from '@/src/components/Common/Calendar/Calendar';

const PanelLeftCalendar = () => {
  const dispatch = useDispatch();
  const { targetDate } = useSelector((state) => state.calendarSetting);

  const onClickDate = (date) => {
    dispatch(setTargetDate(date.toString()));
  };

  return <Calendar targetDate={targetDate} onClickDate={onClickDate} />;
};

export default PanelLeftCalendar;
