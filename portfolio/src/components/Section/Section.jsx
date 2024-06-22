import React from "react";
import "./section.scss"; // 导入你的 SCSS 文件

const Section = () => {
  return (
    <div className="section-background">
      <section className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className=" jumbo absolute -inset-[10px] opacity-50"></div>
        </div>
      </section>
    </div>
  );
};

export default Section;
