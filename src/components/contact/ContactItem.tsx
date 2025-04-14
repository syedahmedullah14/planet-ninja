
import React, { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
}

const ContactItem = ({ icon, title, content }: ContactItemProps) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-ninja-purple/10 flex-shrink-0 flex items-center justify-center text-ninja-purple mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default ContactItem;
