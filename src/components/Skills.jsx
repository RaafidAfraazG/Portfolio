import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiFigma,
  SiSupabase,
} from 'react-icons/si';

import { MdDevices } from 'react-icons/md';

const Skills = () => {
  const skillsData = [
    // Frontend Technologies
    { name: 'HTML5', icon: <SiHtml5 size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'CSS3', icon: <SiCss3 size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'JavaScript', icon: <SiJavascript size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'TypeScript', icon: <SiTypescript size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'React.js', icon: <SiReact size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'Responsive Design', icon: <MdDevices size={20} className="sm:w-6 sm:h-6" /> },

    // Backend Technologies
    { name: 'Node.js', icon: <SiNodedotjs size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'Express.js', icon: <SiExpress size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'Supabase', icon: <SiSupabase size={20} className="sm:w-6 sm:h-6" /> },

    // Databases
    { name: 'MongoDB', icon: <SiMongodb size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'MySQL', icon: <SiMysql size={22} className="sm:w-7 sm:h-7" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={20} className="sm:w-6 sm:h-6" /> },

    // Development Tools
    { name: 'Git', icon: <SiGit size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'GitHub', icon: <SiGithub size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'Postman', icon: <SiPostman size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'Docker', icon: <SiDocker size={20} className="sm:w-6 sm:h-6" /> },
    { name: 'Figma', icon: <SiFigma size={20} className="sm:w-6 sm:h-6" /> },
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 tracking-wide text-white">
          <span className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:translate-x-[-50%] after:-bottom-2 after:h-1 after:w-[3ch] after:bg-blue-500">
            Ski
          </span>lls
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-2 text-blue-400">{skill.icon}</div>
              <span className="text-xs sm:text-sm text-center leading-tight">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
