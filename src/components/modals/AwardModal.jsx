import React, { useState, useRef, useEffect } from "react";

const AwardModal = ({ closeFunc, award, isOpen }) => {
  const [activeTab, setActiveTab] = useState(1);
  const tabBackgroundRef = useRef(null);
  const tabRefs = useRef([]);

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
      title: "Picture",
      content: (
        <div className="">
          <img
            className="h-[600px] object-contain"
            src={award.pic}
            alt="awardPic"
          />
        </div>
      ),
    },
    {
      id: 2,
      title: "Certificate",
      content: (
        <div className="">
          <img
            className="h-[600px] object-contain"
            src={award.cert}
            alt="awardPic"
          />
        </div>
      ),
    },
  ];
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
                {award.compName}
              </div>

              <div className="mx-auto text-white ">
                <div className="relative py-2 px-2 rounded-full inline-flex items-center justify-center gap-4 mb-4 bg-darkViolet">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      ref={(el) => (tabRefs.current[index] = el)}
                      className={`py-1 px-5 xl:px-10 font-special font-semibold relative z-10 transition-colors duration-300 text-md text-center ${
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
                          activeTab === tab.id
                            ? "block opacity-100"
                            : "hidden opacity-0"
                        }`}
                      >
                        {tab.content}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardModal;
