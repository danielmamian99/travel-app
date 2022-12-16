import React from "react";

export const CrossingTitle = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div>
        <p className="font-bold text-xl">La travesía:</p>
      </div>
      <div className="flex flex-row gap-x-1">
        <div className="flex items-center min-w-max">
          <p className="text-sm">Wonder Travel</p>
        </div>
        <img className="w-1/6" src="/images/generals/wonderLogo.svg"></img>
      </div>
    </div>
  );
};
