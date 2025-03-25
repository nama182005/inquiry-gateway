
import { useState } from "react";
import { BarChart, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface SkillCardProps {
  skill: {
    id: string;
    name: string;
    level: number;
    description: string;
    courses: { name: string; provider: string; date: string; url?: string }[];
  };
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [expanded, setExpanded] = useState(false);

  // Calculate the visual level (1-5) to display
  const visualLevel = Math.ceil((skill.level / 100) * 5);

  return (
    <div className="card-preskilet overflow-hidden animate-scale-in">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-medium text-preskilet-charcoal">{skill.name}</h3>
            <span className="badge-preskilet">Level {visualLevel}/5</span>
          </div>
          <p className="mt-1 text-sm text-preskilet-gray">{skill.description}</p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-preskilet-gray hover:text-preskilet-turquoise transition-colors"
        >
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center text-sm text-preskilet-gray">
            <BarChart size={15} className="mr-1" />
            <span>Proficiency</span>
          </div>
          <span className="text-sm font-medium text-preskilet-charcoal">{skill.level}%</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-value transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-preskilet-silver/20 animate-fade-in">
          <h4 className="text-sm font-medium text-preskilet-charcoal mb-2">Related Courses & Certifications</h4>
          <div className="space-y-3">
            {skill.courses.map((course, index) => (
              <div key={index} className="flex justify-between items-center bg-preskilet-light rounded-lg p-3">
                <div>
                  <p className="text-sm font-medium text-preskilet-charcoal">{course.name}</p>
                  <p className="text-xs text-preskilet-gray">
                    {course.provider} • Completed {course.date}
                  </p>
                </div>
                {course.url && (
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-preskilet-turquoise hover:text-preskilet-turquoise/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
