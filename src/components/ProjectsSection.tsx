import React from "react";

type ProjectExperienceCardProps = {
  title: string;
  description: string;
  duration: string;
  logo?: string;
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
    <div className="flex gap-4 items-start border-l-2 border-yellow-500 pl-4 py-5 mb-2">
      {logo && (
        <img
          src={logo}
          alt={title}
          className="w-14 h-14 object-contain rounded-full"
        />
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
            <span
              key={idx}
              className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectExperienceSection = () => {
  return (
    <section className="p-6 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">Project Experience</h2>

      {/* Multi-Tenant App */}
      <ProjectExperienceCard
        title="Multi-Tenant Blog App"
        description="A full-stack YouTube-style multi-tenant application with organization-based video feeds."
        duration="April 2025 – May 2025"
        logo="https://imgs.search.brave.com/Dcl-VDRpaTKGDsrENn479Q9FEiNaGyw8jKPnZwATkWg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8y/Mi8xNS9sZXR0ZXIt/bS1sb2dvLXZlY3Rv/ci0yODA3MjIxNS5q/cGc"
        responsibilities={[
          "Built tenant-based routing using Next.js middleware.",
          "Implemented user and org auth with Clerk + PostgreSQL.",
          "Created video listing & detail pages with protected routes.",
          "Added Firebase for thumbnail uploads and hosting.",
        ]}
        techStack={[
          "Next.js",
          "React",
          "Clerk",
          "PostgreSQL",
          "Firebase",
          "Tailwind CSS",
        ]}
      />

      {/* Career Sculptor */}
      <ProjectExperienceCard
        title="Career Sculptor (Resume Builder)"
        description="A resume builder platform that collects and stores user data with downloadable PDF upload feature."
        duration="Feb 2025 – Mar 2025"
        logo="https://imgs.search.brave.com/Xij6TdsKoHiLnlLKV4jn0Su-tMmmR0Lu9_9vUzowNyI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI5/NzE1Mjg1NS92ZWN0/b3IvbG9nby13aXRo/LXRoZS1sZXR0ZXIt/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzZuSE9ReTNn/VjE2ZENIeGpUUUhM/b25JZWdWQU9YSm43/a012ZXJHdEZ3OD0"
        responsibilities={[
          "Created multi-section profile form (education, skills, projects).",
          "Stored user data and resumes in PostgreSQL via Node.js API.",
          "Used Express backend with file upload support and validation.",
          "Integrated Clerk authentication and authorization.",
        ]}
        techStack={["React", "Node.js", "PostgreSQL", "Express", "Clerk"]}
      />

      {/* Paytm Clone */}
      <ProjectExperienceCard
        title="Paytm Clone (Payments Only)"
        description="A simplified clone of Paytm focusing only on UPI-style peer-to-peer payments."
        duration="January 2025"
        logo="https://imgs.search.brave.com/7EC-MNK_1vyHlliSxxvHxZJ-YfSOyE7NDIay2cQMN8c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2hk/cG5nd29ybGQvSFBX/L21haW4vdXBsb2Fk/cy82NTBkNDEzODEy/MzJhLWwucG5n"
        responsibilities={[
          "Built secure user login with OTP simulation and session state.",
          "Created send/receive payment flow using dummy UPI logic.",
          "Handled balances and transactions with PostgreSQL.",
          "Built dashboard UI to show history, balances, and QR send.",
        ]}
        techStack={[
          "React",
          "Node.js",
          "PostgreSQL",
          "Tailwind CSS",
          "Express",
        ]}
      />
    </section>
  );
};

export default ProjectExperienceSection;
