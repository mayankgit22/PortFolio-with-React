type ProjectExperienceCardProps = {
  title: string;
  description: string;
  duration: string;
  logo?: string; // optional project logo
  responsibilities: string[];
  techStack: string[];
};

const ProjectExperienceCard: React.FC<ProjectExperienceCardProps> = ({
  title,
  description,
  duration,
  logo,
  responsibilities,
  techStack,
}) => {
  return (
    <div className="flex gap-4 items-start border-l-2 border-yellow-500 pl-4 py-5">
      {logo && (
        <img src={logo} alt={title} className="w-14 h-14 object-contain rounded-full" />
      )}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <p className="text-sm text-gray-400 mb-2">{duration}</p>

        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-3">
          {techStack.map((tech, idx) => (
            <span key={idx} className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectExperienceCard;
