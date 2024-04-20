import React from "react";
import Module from "./Module";
import modulesData from "./../modules.json";
const Modules = () => {
  console.log(modulesData);
  return (
    <>
      <div className="modules-section py-10 px-4">
        <div className="container-xl lg:container m-auto">
          <h1 className="text-center text-4xl font-bold my-4">Modules</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {modulesData.map((mod) => (
              <Module key={mod.id} data={mod} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modules;
