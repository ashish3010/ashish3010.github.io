'use client';

import { SOCIAL_LINKS } from '@/lib/data';
import ImageWrapper from './image-wrapper';
import { track } from '@/lib/ga-tags';

const SocialIcons = () => {

  const onSocialClick = (url: string) => {
    track('Socials_Clicked', {
      action: url
    })
    window.open(url);
  }

  return (
    <div className="flex gap-1">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <div style={{ width: 60, height: 60 }} key={`${index + 1}`} onClick={() => onSocialClick(socialLink?.url)}>
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
