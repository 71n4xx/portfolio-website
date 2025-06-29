import React, { useState, useEffect, useRef } from "react";
import TabContent from "./TabContent";
import { education, experience } from "../../data/data";
import ExpModal from "../modals/ExpModal";
import { motion } from "framer-motion";
import { fadeIn, zoom } from "../../framerMotion/variants";


const TabSectionWithAnimation = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showModal, setShowModal] = useState(false);
   const [selectedList, setSelectedList] = useState(null);
  const tabBackgroundRef = useRef(null);
  const tabRefs = useRef([]);

  const openModal = (list) => {
    setShowModal(!showModal);
    setSelectedList(list);
    console.log(selectedList)
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };
 

  const updateTabBackgroundPosition = () => {
    const activeTabElement = tabRefs.current[activeTab - 1];
    if (activeTabElement && tabBackgroundRef.current) {
      const { offsetWidth, offsetLeft } = activeTabElement;
      tabBackgroundRef.current.style.width = `${offsetWidth}px`;
      tabBackgroundRef.current.style.left = `${offsetLeft}px`;
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    updateTabBackgroundPosition();

    const handleResize = () => {
      updateTabBackgroundPosition();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab]);

  const tabs = [
  {
    id: 1,
    title: "Education",
    content: (
      <TabContent
        list={education}
        clickFunc={() => {openModal(education)}}
        param1={"year"}
        param2={"school"}
        param3={"program"}
        param4={"sub2"}
        param5={"award"}
        param6={"logo"}
      />
    ),
  },
  { id: 2, title: "Experience", content: <TabContent list={experience}
        clickFunc={() => {openModal(experience)}}
        param1={"year"}
        param2={"company"}
        param3={"address"}
        param5={"position"}
        param6={"logo"} /> },
];


  return (
    <motion.div 
    variants={zoom("in", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
    className="mx-auto text-white p-4 sm:pt-4 md:pt-6 lg:pt-8">
      {showModal && <ExpModal isOpen={showModal} list={selectedList} closeFunc={closeModal}/>}
      <div className="relative py-2 px-2 rounded-full inline-flex items-center justify-center gap-6 mb-4 bg-darkViolet">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`py-2 px-5 xl:px-10 font-special font-semibold relative z-10 transition-colors duration-300 text-xl text-center ${
              activeTab === tab.id ? "text-darkViolet" : "text-yellow"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
        <div
          ref={tabBackgroundRef}
          className="absolute  h-[70%] bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: "33.33%", left: "0px" }}
        ></div>
      </div>
      <div className="w-full md:px-16 sm:px-6  flex items-center justify-center">
        <div className="max-w-[1000px] w-full ">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-opacity duration-300 ${
                activeTab === tab.id ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TabSectionWithAnimation;
