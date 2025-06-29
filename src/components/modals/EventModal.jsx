import React from 'react'
import { useEffect } from "react";

const EventModal = ({closeFunc, isOpen, event}) => {
  useEffect(() => {
      if (isOpen) {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      } else {
        // Re-enable scrolling
        document.body.style.overflow = "auto";
      }
  
      // Cleanup when component unmounts
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [isOpen]);
  
    if (!isOpen) return null;
  return (
    <div>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center flex-col items-center z-50 p-4">
          <div className="bg-bgDark max-w-[1300px] w-[90%] rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={closeFunc}
              className="absolute top-4 right-4 text-xl font-bold text-gray-700 hover:text-yellow"
            >
              ✕
            </button>
            <div className="flex flex-col justify-center items-center mt-1 gap-4">
              <div className="text-yellow font-special font-bold text-xl">
                {event.eventName}
              </div>
              <div className="">
                <img
                  className="h-[600px] object-contain"
                  src={event.pic}
                  alt="awardPic"
                />
              </div>
              
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default EventModal