import { useEffect, useState } from 'react';
import NotificationsSystem, { atalhoTheme, useNotifications } from 'reapop';
import { setUpNotifications } from 'reapop';

const Notification = () => {
  const { notifications, dismissNotification, notify } = useNotifications();
  useEffect(() => {
    setUpNotifications({
      defaultProps: {
        position: 'top-center',
        dismissible: true,
      },
      generateId: () => new Date().getTime().toString(),
    });
  }, []);
  return (
    <NotificationsSystem
      // 2. Pass the notifications you want Reapop to display.
      notifications={notifications}
      dismissNotification={(id) => dismissNotification(id)}
      // 4. Pass a builtIn theme or a custom theme.
      theme={atalhoTheme}
    />
  );
};
export default Notification;
