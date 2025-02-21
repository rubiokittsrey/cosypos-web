import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row justify-start">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              activeTab={activeTab}
              onClick={() => setActiveTab(tab.id)}/>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <div className="">
          {tabs.map((tab) => (
            activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// tab-button component for the scheduler
interface FloorButtonProps {
  label: string;
  id: string;
  onClick: () => void;
  activeTab: string;
}

const TabButton: React.FC<FloorButtonProps> = ({label, id, onClick, activeTab}) => {
  const style = `
    ${activeTab === id ? "bg-[#F5B6D9] hover:bg-[#F5B6D9]" : "bg-transparent hover:bg-[#F5B6D9]/25"}
    rounded-lg
    py-7 px-6
    text-lg
    ${activeTab === id ? "text-black" : "text-white hover:text-white"}`;

  return (
    <Button className={style} name={label} id={label} onClick={onClick}>
      {label}
    </Button>
  );
}

export default Tabs;
