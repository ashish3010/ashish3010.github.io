'use client';

import { SOCIAL_LINKS } from '@/lib/data';
import ImageWrapper from './image-wrapper';

const SocialIcons = () => {
  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <div style={{ width: 60, height: 60 }} key={`${index + 1}`} onClick={() => window.open(socialLink?.url)}>
          <ImageWrapper
            src={socialLink?.img}
            alt={`${socialLink?.img}-info`}
            className="transition-transform duration-300 md:hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
