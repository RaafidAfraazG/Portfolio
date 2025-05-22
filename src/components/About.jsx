import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";

const About = () => {
  const profileImageSrc = "/Profile2.jpg";
  const resumeLink = "/resume.pdf";

  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.8 } 
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const aboutContent = [
    "I'm Raafid Afraaz, a software engineer passionate about creating efficient and user-friendly applications. I specialize in Web Development with a strong foundation in app development.",
    "Currently pursuing my M.Tech in Software Engineering at Vellore Institute of Technology, I continuously enhance my skills and knowledge in the field.",
    "Throughout my academic and professional journey, I've contributed to various projects and organizations, gaining valuable experience both independently and in teams. I'm committed to delivering high-quality, maintainable solutions that meet client needs."
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800 to-gray-700 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-white">
          <span className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:-bottom-2 after:h-1 after:w-[3ch] after:bg-blue-500">
            Abo
          </span>
          ut Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                <img
                  src={profileImageSrc}
                  alt="Raafid Afraaz"
                  className={`object-cover w-full h-full transform transition-transform duration-500 ${
                    isInView ? "scale-125" : "scale-110"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            {aboutContent.map((paragraph, index) => (
              <p 
                key={index}
                className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 max-w-none md:max-w-2xl mx-auto md:mx-0"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex justify-center md:justify-start mt-6 sm:mt-8">
              <a
                href={resumeLink}
                download
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-xl"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
