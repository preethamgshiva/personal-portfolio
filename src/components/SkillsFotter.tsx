
import React from "react";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          return (

            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-white text-gray-900 hover:bg-blue-100 hover:text-gray-400 transition-colors"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm text-center font-medium">
                {item.name}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;
