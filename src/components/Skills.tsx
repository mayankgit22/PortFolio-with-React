const skills = {
  Languages: ["JavaScript", "TypeScript", "C++"],
  Frameworks: [
    "ReactJS",
    "NextJS",
    "React Native",
    "ExpressJS",
    
  ],
  Libararies:["Tailwind CSS","Shadcn UI","PgAdmin","Clerk"],
  Backend: ["Node.js", "REST APIs","firebase"],
  Databases: ["Postgres", "SQL", "MongoDB"]
};

const categoryColors: Record<string, string> = {
  Languages: "bg-blue-700",
  Frameworks: "bg-green-700",
  Backend: "bg-purple-700",
  Databases: "bg-red-700",
  Libararies: "bg-gray-500"
};

const SkillsSection = () => {
  return (
    <section className=" text-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-5">Skills</h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
               <span
  key={item}
  className={`px-4 py-2 text-sm font-medium rounded-full shadow-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-opacity-90 ${categoryColors[category]}`}
>
  {item}
</span>

              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
