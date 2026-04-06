import { MoveLeft } from 'lucide-react';
import Chat from '../chatComponents/Chat';
import Input from '../chatComponents/Input';

const ChatWithAi = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
      
      
      <div className="w-full max-w-2xl md:h-[90vh] flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl md:rounded-2xl overflow-hidden">
        
    <button 
    onClick={() => window.location.href = '/'}
    className='absolute top-5 right-5 flex justify-center items-center gap-2 text-white'>
      <MoveLeft />
      Home
    </button>

        <div className="p-4 text-white font-semibold text-lg border-b border-white/20">
         AI Assistant
        </div>

        
        <div className="flex-1 overflow-hidden">
          <Chat />
        </div>

        
        <div className="border-t border-white/20 p-2 bg-white/10">
          <Input />
        </div>

      </div>
    </div>
  );
};

export default ChatWithAi;