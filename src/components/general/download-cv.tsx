'use client';

import Button from '@/components/general/button';
import { track } from '@/lib/ga-tags';

const DownloadCV = () => {

  const onDownloadCV = () => {
    window?.open('files/ashish_mishra_cv.pdf', '_blank');
    track('Downloaded_CV')
  }

  return (
    <Button onClick={onDownloadCV}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
