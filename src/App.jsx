import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, CircleHelp } from 'lucide-react'
import { BiGridVertical } from "react-icons/bi";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('About Me')


  const scrollContainerRef = useRef(null);
  const imageWidth = 190;
  const scrollAmount = imageWidth * 3;

  const scrollToLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollToRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
  };


  const [images, setImages] = useState([
    './image.png',
    './image.png',
    './image.png',
  ])

  const addImage = () => {
    setImages([...images, './image.png?height=200&width=200'])
  }


  const tabContent = {
    "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum officiis ex perferendis quos cum praesentium fugit magnam, commodi reiciendis soluta temporibus nihil facere eveniet impedit porro, alias, doloremque amet?`,
    "Experiences": `Experiences content here, Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum officiis ex perferendis quos cum praesentium fugit magnam, commodi reiciendis soluta temporibus nihil facere eveniet impedit porro, alias, doloremque amet?`,
    "Recommended": `Recommended content here, Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

    I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a... Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum officiis ex perferendis quos cum praesentium fugit magnam, commodi reiciendis soluta temporibus nihil facere eveniet impedit porro, alias, doloremque amet?`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#282d31] to-[#191B1F] text-white p-8 flex justify-between">
      <div className="w-1/2 pr-8">
        <div className="bg-[#616161D1] rounded-lg p-6 shadow-lg h-full border border-[1px] border-[#96BEE7]"></div>
      </div>

      <div className="w-1/2 space-y-[1.45rem] h-full">
        <div className="bg-[#363C43] h-[312px] rounded-lg p-6 flex justify-center items-center shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
          <div className="flex justify-between items-start">
            <div>
              <CircleHelp />
            </div>
            <div className="flex flex-1 justify-center items-center flex-col">
              <div className="flex space-x-10 mb-6 w-fit flex justify-between items-center bg-[#171717] rounded-[23px] p-1">
                {["About Me", "Experiences", "Recommended"].map((tab) => (
                  <button
                    key={tab}
                    className={`px-8 py-2 rounded-full ${
                      activeTab === tab
                        ? "bg-[#28292F] shadow-[-8.43px_-16.17px_50.6px_-16.17px_#485B71,13.49px_14.87px_67.4px_8.43px_#0A0A0A]"
                        : ""
                    }`}
                    onClick={() => setActiveTab(tab)}>
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex justify-center items-start">
                <div className="flex justify-center items-start mt-8 gap-4 ml-[-25px]">
                  <BiGridVertical className="text-[#4A4E54]" size={40} />
                </div>
                <div>
                  <div className="h-[200px] flex justify-between flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-lg text-[#969696] px-10 whitespace-pre-line">
                      {tabContent[activeTab]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-0 h-1 bg-gradient-to-t from-[#2828281A] to-[#F8F8F81A] shadow-[0_4px_10px_rgba(0,0,0,0.9)] rounded-full mx-4" />
        <div className="bg-[#363C43] rounded-lg p-6 shadow-[5.67px_5.67px_3.78px_0px_#00000066]">
          <div className="flex justify-between items-start space-x-10">
            <div>
              <CircleHelp />
            </div>
            <div className="flex flex-1 justify-between items-center mb-6">
              <h2 className="text-xl font-bold bg-[#171717] text-white font-medium py-3 px-8 rounded-[20px] shadow-[6px_6px_10px_rgba(0,0,0,0.5),-6px_-6px_10px_rgba(255,255,255,0.05)]">
                Gallery
              </h2>

              <div className="flex justify-end space-x-2 mt-4 flex justify-center items-center gap-3">
                <button
                  className=" bg-gradient-to-br from-[#5a5f65] to-[#242526] text-[15px] text-white px-4 py-2 rounded-full flex justify-center items-center space-x-2 shadow-[6px_6px_10px_#0e0f10,-6px_-6px_10px_#505358]"
                  onClick={addImage}>
                  <Plus size={15} className="font-extrabold" />
                  <span className="font-bold">ADD IMAGE</span>
                </button>
                <button
                  onClick={scrollToLeft}
                  className="p-2 bg-gray-700 rounded-full bg-gradient-to-b from-[#303439] to-[#161718] shadow-[-6px_-3px_30px_-6px_#96BEE7,4px_5px_30px_5px_#101213]">
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={scrollToRight}
                  className="p-2 bg-gray-700 bg-gradient-to-b from-[#303439] to-[#161718] rounded-full shadow-[-6px_-3px_30px_-6px_#96BEE7,4px_5px_30px_5px_#101213]">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-7">
            <div className="flex justify-center items-start mt-8 gap-4 ">
              <BiGridVertical className="text-[#4A4E54]" size={40} />
            </div>
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-y-hidden overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-[190px] h-[180px] rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="border-0 h-1 bg-gradient-to-t from-[#2828281A] to-[#F8F8F81A] shadow-[0_4px_10px_rgba(0,0,0,0.9)] rounded-full mx-4" />
      </div>
    </div>
  );
}