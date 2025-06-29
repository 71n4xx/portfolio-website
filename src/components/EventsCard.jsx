import React from "react";

 const colorScheme = {
    "HEAD ORGANIZER": "#FE5860",
    "EVENT HEAD": "#FE5860",
    "MENTOR": "#FC745A",
    "SPEAKER": "#FB8B54",
    "VOLUNTEER" : "#F9A54F",
    "PARTICIPANT": "#F7CE46"
};

const EventsCard = ({ event, clickFunc }) => {
  return (
    <div className="w-full max-w-[1200px]">
      <div onClick={clickFunc} className="w-full max-w-[1200px] flex xl:flex-row 2xl:flex-row md:flex-col sm:flex-col gap-2 lg:flex-row justify-between items-center p-8 transition-colors duration-300 cursor-pointer hover:bg-mediumViolet bg-darkViolet rounded-2xl">
        <div className="flex flex-col xl:items-start 2xl:items-start md:items-center sm:items-center lg:items-start justify-center gap-2">
          <div className="text-yellow font-special font-bold text-2xl lg:text-left xl:text-left 2xl:text-left lg:pr-12 xl:pr-12 2xl:pr-12">
            {event.eventName}
          </div>
          <div className="font-special font-bold text-xl text-white">
            {event.date}
          </div>
          <div className="font-body font-normal text-base text-white mt-2">
            {event.where}
          </div>
        </div>
        <div className="flex flex-col justify-evenly items-center gap-1">
          {event.role.map((role, i) => (
            <div
              key={i}
              style={{background: colorScheme[role]}}
              className="px-8 py-1 min-w-[201px] rounded-full bg-gradient6 font-body font-semibold text-base text-white"
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
