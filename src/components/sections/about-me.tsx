import Image from 'next/image';
import AshishImg from '../../../public/images/ashish-first.jpg'
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={AshishImg}
              alt="Ashish"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I'm a passionate frontend developer with 4 years of experience building fast, accessible, and visually polished web and mobile applications. I specialize in technologies like JavaScript, TypeScript, React.js, Next.js, React Native, and TailwindCSS, with a strong focus on responsive UI, performance, and scalable architecture. I care deeply about user experience, clean design, and writing clear, maintainable code.
          </Typography>
          <Typography>
            Currently, I work as a Software Development Engineer at Jio, where I actively contribute to key products like the MyJio app and the JioOnePay payment page. I started my professional journey in 2021 at Cognizant Technology Solutions, where I built a strong foundation in frontend development and industry practices.
          </Typography>
          <Typography>
            Though I have foundational knowledge of backend tools like Node.js, Express.js, and MongoDB, my true strength lies in frontend engineering—bringing interfaces to life with precision, performance, and attention to detail.
          </Typography>
          <Typography>
            Outside of work, I enjoy reading tech blogs, exploring new frontend tools, and staying updated with the evolving web ecosystem. I'm also active on platforms like Twitter and Indie Hackers, where I follow early-stage startup journeys and engage with the dev community. While I'm not a freelancer, I'm open to collaborating on interesting projects that align with my skills and interests.
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li"> B.Tech. in Computer Engineering</Typography>
              <Typography component="li">Software Development Engineer at Jio</Typography>
              <Typography component="li">Frontend specialist with React, Next.js, and React Native</Typography>
              <Typography component="li">Tech blog reader & frontend enthusiast</Typography>
              <Typography component="li">Not a freelancer, but open to collaboration</Typography>
              <Typography component="li">Passionate learner & aspiring indie hacker</Typography>
            </ul>
          </div>
          <Typography>
            If you're building something exciting or just want to chat tech, feel free to reach out—I’m always open to great conversations and cool side projects. 😊
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
