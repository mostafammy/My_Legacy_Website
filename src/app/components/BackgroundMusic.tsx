"use client";
import React from 'react';

const BackgroundMusic: React.FC = () => {

  return (
      <iframe
              className={"rounded-[12px]"}
              src="https://open.spotify.com/embed/track/1mwPnNxwCC7Tc9FBqFslun?utm_source=generator&theme=0"
              width="100%" height="152" allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"></iframe>
  );
};

export default BackgroundMusic;