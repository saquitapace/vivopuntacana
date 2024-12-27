import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CreateEventModal from '../Modal/CreateEventModal';
import { HeaderBar } from './HeaderBar';
import PanelLeft from './Panel/PanelLeft';
import PanelRight from './Panel/PanelRight';

const CalendarLayout = ({ children }) => {
  const router = useRouter();
  const { query } = router;
  const { isCreateEventModalOpen } = useSelector(
    (state) => state.calendarSetting
  );
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const viewType = query.viewType || [];
    if (viewType.length > 1 && viewType[1] === 'edit') {
      setIsEditModalOpen(true);
    } else {
      setIsEditModalOpen(false);
    }
  }, [query]);

  return (
    <div className='relative flex flex-col w-screen max-h-screen min-h-screen'>
      <HeaderBar />
      <div className='flex flex-1'>
        <PanelLeft />
        <div className='relative flex-auto'>{children}</div>
      </div>
      {isCreateEventModalOpen && <CreateEventModal />}
      {isEditModalOpen && <CreateEventModal isEdit />}
    </div>
  );
};

export default CalendarLayout;
