
import React from 'react';

const OfficeHours = () => {
  return (
    <div>
      <h3 className="text-2xl font-display font-bold mb-4">Office Hours</h3>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="py-2 text-gray-700 font-medium">Monday - Friday:</td>
            <td className="py-2 text-gray-600">9:00 AM - 6:00 PM</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-700 font-medium">Saturday:</td>
            <td className="py-2 text-gray-600">10:00 AM - 4:00 PM</td>
          </tr>
          <tr>
            <td className="py-2 text-gray-700 font-medium">Sunday:</td>
            <td className="py-2 text-gray-600">Closed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OfficeHours;
