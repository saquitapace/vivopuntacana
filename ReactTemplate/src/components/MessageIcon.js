import { MessageCircle } from 'lucide-react';
const MessageIcon = ({ messages = 4 }) => {
  return (
    <div className='relative'>
      <MessageCircle className='w-6 h-6 text-gray-700 fill-gray-700' />

      {messages > 0 && (
        <span className='absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full'>
          {messages}
        </span>
      )}
    </div>
  );
};

export default MessageIcon;
