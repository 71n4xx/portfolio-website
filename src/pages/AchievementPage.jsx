import React, { useState } from "react";
import PageTitle from "../components/project/PageTitle";
import AwardsCard from "../components/AwardsCard";
import { awards, events, seminars } from "../data/data";
import EventsCard from "../components/EventsCard";
import Footer from "../components/Footer";
import AwardModal from "../components/modals/AwardModal";
import EventModal from "../components/modals/EventModal";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../framerMotion/variants";

const AchievementPage = () => {
  const [showAward, setShowAward] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openAward = (award) => {
    setShowAward(true);
    setSelectedAward(award);
    console.log(award);
  };
  const openEvent = (event) => {
    setShowEvent(true);
    setSelectedEvent(event);
  };
  const closeAward = () => {
    setShowAward(false);
    setSelectedAward(null);
  };
  const closeEvent = () => {
    setShowEvent(false);
    setSelectedEvent(null);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-4">
      <motion.div
        variants={zoom("in", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="mt-44 w-full max-w-[1400px]  "
      >
        <PageTitle
          title="Achievements"
          subtitle="As an achiever, these are the real testament of my hardwork and resilience."
        />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="lg:flex-row xl:flex-row 2xl:flex-row gap-8 md:flex-row sm:flex-col flex justify-between items-center w-full max-w-[1300px] mt-10 mb-2"
      >
        <div className="font-special font-black text-white text-[2rem]">
          Awards
        </div>
        <div className="font-body font-normal lg:text-right xl:text-right 2xl:text-right md:text-right sm:text-center text-base text-white">
          This is me, being very competitive!🏆🏆
        </div>
      </motion.div>
      <div className="w-full max-w-[1200px] flex flex-col justify-center gap-2 items-center">
        {awards.map((award, index) => (
          <motion.div
            variants={fadeIn("right", 0.6 + index * 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            className="w-full max-w-[1200px]"
            key={index}
          >
            <AwardsCard
              
              award={award}
              clickFunc={() => {
                openAward(award);
              }}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:flex-col sm:gap-4 gap-8 flex justify-between items-center w-full max-w-[1300px] mt-10 mb-2"
      >
        <div className="font-special font-black text-white text-[2rem]">
          Events
        </div>
        <div className="font-body font-normal text-base lg:text-right xl:text-right 2xl:text-right md:text-right sm:text-center text-white">
          As a student leader and a collaborative player🤝, here are some of the events I spearheaded or helped organized!
        </div>
      </motion.div>
      <div className="w-full max-w-[1200px] flex flex-col justify-center gap-2 items-center">
        {events.map((event, i) => (
          <motion.div
            variants={fadeIn("right", i * 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            className="w-full max-w-[1200px]"
            key={i}
          >
            <EventsCard
              event={event}
              
              clickFunc={() => {
                openEvent(event);
              }}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="lg:flex-row gap-8 sm:gap-4 xl:flex-row 2xl:flex-row md:flex-row sm:flex-col flex justify-between items-center w-full max-w-[1300px] mt-10 mb-2"
      >
        <div className="font-special font-black text-white text-[2rem]">
          Seminars
        </div>
        <div className="font-body font-normal lg:text-right xl:text-right 2xl:text-right md:text-right sm:text-center text-base text-white">
          As someone who is always eager to learn📚📝, here are some insightful seminars I attended.
        </div>
      </motion.div>
      <div className="w-full max-w-[1200px] flex flex-col justify-center gap-2 items-center">
        {seminars.map((seminar, i) => (
          <motion.div
            variants={fadeIn("right", i * 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            className="w-full max-w-[1200px]"
            key={i}
          >
            <EventsCard
              event={seminar}
              
              clickFunc={() => {
                openEvent(seminar);
              }}
            />
          </motion.div>
        ))}
      </div>
      <div className="w-full mt-14">
        <Footer />
      </div>
      {showAward && selectedAward && (
        <AwardModal
          isOpen={showAward}
          closeFunc={closeAward}
          award={selectedAward}
        />
      )}
      {showEvent && selectedEvent && (
        <EventModal
          isOpen={showEvent}
          closeFunc={closeEvent}
          event={selectedEvent}
        />
      )}
    </div>
  );
};

export default AchievementPage;
