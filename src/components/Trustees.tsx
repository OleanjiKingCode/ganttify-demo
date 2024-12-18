import React from "react";

export const Trustees = () => {
  return (
    <div className="flex flex-col bg-white rounded-3xl p-6 justify-center items-center gap-5 w-full h-[250px]">
      <span className="text-lg font-semibold ">
        Trusted by 2 million+ teams
      </span>
      <div className="flex gap-10 justify-between items-center w-full  px-24 pt-2">
        <img src="/Medium.png" alt="medium" className="w-40 h-6 grayscale" />
        <img
          src="/mailchimp.png"
          alt="mailchimp"
          className="w-40 h-30 grayscale"
        />
        <img
          src="/evernote.png"
          alt="evernote"
          className="w-40 h-12 grayscale"
        />
        <img src="/dropbox.png" alt="dropbox" className="w-36 h-8  grayscale" />
        <img
          src="/microsoft.png"
          alt="microsoft"
          className="w-36 h-7 grayscale"
        />
      </div>
    </div>
  );
};
