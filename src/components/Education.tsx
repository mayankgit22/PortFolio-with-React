const educationData = [
  {
    title: "B.Tech in Electrical Engineering",
    institute: "MNIT Jaipur",
    location: "Jaipur, Rajasthan",
    duration: "2023 – 2027",
    cgpa: "7.9",
    logo: "https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/07/mnit-logo.png",
  },
  {
    title: "Class 12th (Intermediate)",
    institute: "UP Board",
    location: "Uttar Pradesh",
    duration: "2022",
    cgpa:'8.3',
    logo: "https://imgs.search.brave.com/cObGqqczQnmPfUiz0knLXfetfkdSHzd1CtrIRIHTgHY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uZWFy/Ynlsb2NhdGlvbi5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wNS9uZWFyYnku/cG5n",
  },
  {
    title: "Class 10th (High School)",
    institute: "UP Board",
    location: "Uttar Pradesh",
    duration: "2020",
    cgpa:'8.5',
    logo: "https://imgs.search.brave.com/cObGqqczQnmPfUiz0knLXfetfkdSHzd1CtrIRIHTgHY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uZWFy/Ynlsb2NhdGlvbi5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wNS9uZWFyYnku/cG5n",
  },
];

const EducationSection = () => {
  return (
    <section className="p-6 text-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="flex gap-4 items-start border-l-2 border-blue-500 pl-4">
            <img src={edu.logo} alt={edu.institute} className="w-14 h-14 rounded-full object-contain mt-1 " />
            <div className="items-center">
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-gray-300">{edu.institute}, {edu.location}</p>
              <span> CGPA- {edu.cgpa}</span>
              <p className="text-sm text-gray-400">{edu.duration}</p>
              {/* Optional view more */}
              {/* <p className="text-blue-400 text-sm mt-1 hover:underline cursor-pointer">▼ View Units</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
