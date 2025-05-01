'use client';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';
import { TechDetailsTypes } from '@/lib/types';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsTypes) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <div style={{ width: 60, height: 60 }}>
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            className="transition-transform duration-300 md:hover:scale-110"
          />
        </div>
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
