
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SkillProgressChart from "../components/SkillProgressChart";
import { toast } from "sonner";
import { 
  ArrowUpRight, 
  Award, 
  BookOpen, 
  BriefcaseIcon, 
  GraduationCap, 
  LayoutDashboard, 
  Plus, 
  User
} from "lucide-react";

// Mock data for skills
const skillsData = [
  {
    id: "1",
    name: "Web Development",
    level: 85,
    description: "Frontend and backend development with modern frameworks",
    courses: [
      { 
        name: "Full Stack Web Development", 
        provider: "Coursera", 
        date: "Jan 2023",
        url: "#" 
      },
      { 
        name: "React for Beginners", 
        provider: "Udemy", 
        date: "Mar 2023",
        url: "#" 
      },
    ],
  },
  {
    id: "2",
    name: "Data Analysis",
    level: 70,
    description: "Statistical analysis and data visualization",
    courses: [
      { 
        name: "Data Science Specialization", 
        provider: "edX", 
        date: "Nov 2022",
        url: "#" 
      },
      { 
        name: "SQL for Data Analysis", 
        provider: "DataCamp", 
        date: "Feb 2023",
        url: "#" 
      },
    ],
  },
  {
    id: "3",
    name: "UI/UX Design",
    level: 65,
    description: "User experience design and interface prototyping",
    courses: [
      { 
        name: "UI/UX Design Fundamentals", 
        provider: "Coursera", 
        date: "Apr 2023",
        url: "#" 
      },
    ],
  },
];

// Mock data for activity
const activityData = [
  { id: 1, title: "Completed AWS Developer Certification", type: "certification", date: "June 15, 2023" },
  { id: 2, title: "Added skill: Web Development", type: "skill", date: "May 20, 2023" },
  { id: 3, title: "Finished course: Full Stack Web Development", type: "course", date: "January 10, 2023" },
  { id: 4, title: "Updated profile information", type: "profile", date: "December 5, 2022" },
];

// Mock data for recommended courses
const recommendedCourses = [
  { id: 1, title: "Machine Learning Fundamentals", provider: "Stanford Online", duration: "8 weeks", level: "Intermediate" },
  { id: 2, title: "Advanced React Patterns", provider: "Frontend Masters", duration: "6 weeks", level: "Advanced" },
  { id: 3, title: "Cloud Architecture with AWS", provider: "A Cloud Guru", duration: "10 weeks", level: "Intermediate" },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleAddSkill = () => {
    toast.success("Skill form would open here. This is just a UI demo.");
  };

  const handleAddCertification = () => {
    toast.success("Certification form would open here. This is just a UI demo.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-5 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-preskilet-turquoise/10 rounded-full flex items-center justify-center">
                      <User className="text-preskilet-turquoise" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-preskilet-charcoal">Alex Johnson</h3>
                      <p className="text-xs text-preskilet-gray">Computer Science Student</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3">
                  <nav className="space-y-1">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center text-sm font-medium ${
                        activeTab === "overview" 
                          ? "bg-preskilet-turquoise/10 text-preskilet-turquoise" 
                          : "text-preskilet-charcoal hover:bg-gray-50"
                      }`}
                    >
                      <LayoutDashboard size={18} className="mr-2" />
                      Overview
                    </button>
                    
                    <button
                      onClick={() => setActiveTab("profile")}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center text-sm font-medium ${
                        activeTab === "profile" 
                          ? "bg-preskilet-turquoise/10 text-preskilet-turquoise" 
                          : "text-preskilet-charcoal hover:bg-gray-50"
                      }`}
                    >
                      <User size={18} className="mr-2" />
                      Profile
                    </button>
                    
                    <button
                      onClick={() => setActiveTab("skills")}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center text-sm font-medium ${
                        activeTab === "skills" 
                          ? "bg-preskilet-turquoise/10 text-preskilet-turquoise" 
                          : "text-preskilet-charcoal hover:bg-gray-50"
                      }`}
                    >
                      <GraduationCap size={18} className="mr-2" />
                      Skills
                    </button>
                    
                    <button
                      onClick={() => setActiveTab("certifications")}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center text-sm font-medium ${
                        activeTab === "certifications" 
                          ? "bg-preskilet-turquoise/10 text-preskilet-turquoise" 
                          : "text-preskilet-charcoal hover:bg-gray-50"
                      }`}
                    >
                      <Award size={18} className="mr-2" />
                      Certifications
                    </button>
                    
                    <button
                      onClick={() => setActiveTab("courses")}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center text-sm font-medium ${
                        activeTab === "courses" 
                          ? "bg-preskilet-turquoise/10 text-preskilet-turquoise" 
                          : "text-preskilet-charcoal hover:bg-gray-50"
                      }`}
                    >
                      <BookOpen size={18} className="mr-2" />
                      Courses
                    </button>
                    
                    <button
                      onClick={() => setActiveTab("jobs")}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center text-sm font-medium ${
                        activeTab === "jobs" 
                          ? "bg-preskilet-turquoise/10 text-preskilet-turquoise" 
                          : "text-preskilet-charcoal hover:bg-gray-50"
                      }`}
                    >
                      <BriefcaseIcon size={18} className="mr-2" />
                      Job Matches
                    </button>
                  </nav>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-br from-preskilet-turquoise to-preskilet-navy text-white rounded-xl p-5">
                <h3 className="font-medium mb-2">Complete Your Profile</h3>
                <p className="text-white/80 text-sm mb-4">Add skills and certifications to increase your profile strength.</p>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <p className="text-xs mt-2 text-white/80">65% Complete</p>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Top Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-preskilet-gray text-sm">Skills</p>
                          <h3 className="text-2xl font-bold text-preskilet-charcoal">{skillsData.length}</h3>
                        </div>
                        <div className="w-10 h-10 bg-preskilet-turquoise/10 rounded-full flex items-center justify-center">
                          <GraduationCap className="text-preskilet-turquoise" />
                        </div>
                      </div>
                      <button 
                        onClick={handleAddSkill}
                        className="mt-4 text-preskilet-turquoise text-sm flex items-center"
                      >
                        <Plus size={16} className="mr-1" />
                        Add Skill
                      </button>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-preskilet-gray text-sm">Certifications</p>
                          <h3 className="text-2xl font-bold text-preskilet-charcoal">3</h3>
                        </div>
                        <div className="w-10 h-10 bg-preskilet-turquoise/10 rounded-full flex items-center justify-center">
                          <Award className="text-preskilet-turquoise" />
                        </div>
                      </div>
                      <button 
                        onClick={handleAddCertification}
                        className="mt-4 text-preskilet-turquoise text-sm flex items-center"
                      >
                        <Plus size={16} className="mr-1" />
                        Add Certification
                      </button>
                    </div>
                    
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-preskilet-gray text-sm">Courses</p>
                          <h3 className="text-2xl font-bold text-preskilet-charcoal">5</h3>
                        </div>
                        <div className="w-10 h-10 bg-preskilet-turquoise/10 rounded-full flex items-center justify-center">
                          <BookOpen className="text-preskilet-turquoise" />
                        </div>
                      </div>
                      <Link 
                        to="#"
                        className="mt-4 text-preskilet-turquoise text-sm flex items-center"
                      >
                        Find Courses
                        <ArrowUpRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Skill Progress Chart */}
                  <SkillProgressChart skills={skillsData} />
                  
                  {/* Recent Activity */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-medium text-preskilet-charcoal mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {activityData.map(activity => (
                        <div key={activity.id} className="flex items-start">
                          <div className="w-8 h-8 rounded-full flex-shrink-0 bg-preskilet-turquoise/10 flex items-center justify-center">
                            {activity.type === "certification" && <Award size={16} className="text-preskilet-turquoise" />}
                            {activity.type === "skill" && <GraduationCap size={16} className="text-preskilet-turquoise" />}
                            {activity.type === "course" && <BookOpen size={16} className="text-preskilet-turquoise" />}
                            {activity.type === "profile" && <User size={16} className="text-preskilet-turquoise" />}
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-preskilet-charcoal">{activity.title}</p>
                            <p className="text-xs text-preskilet-gray">{activity.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Recommended Courses */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium text-preskilet-charcoal">Recommended Courses</h3>
                      <Link to="#" className="text-sm text-preskilet-turquoise">View All</Link>
                    </div>
                    <div className="space-y-4">
                      {recommendedCourses.map(course => (
                        <div key={course.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition">
                          <h4 className="font-medium text-preskilet-charcoal">{course.title}</h4>
                          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-preskilet-gray">
                            <p>Provider: {course.provider}</p>
                            <p>Duration: {course.duration}</p>
                            <p>Level: {course.level}</p>
                          </div>
                          <div className="mt-3">
                            <Link 
                              to="#"
                              className="text-preskilet-turquoise text-sm hover:underline"
                            >
                              View Course
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab !== "overview" && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h2 className="text-xl font-medium text-preskilet-charcoal mb-4">
                    {activeTab === "profile" && "Edit Profile"}
                    {activeTab === "skills" && "Manage Skills"}
                    {activeTab === "certifications" && "Manage Certifications"}
                    {activeTab === "courses" && "My Courses"}
                    {activeTab === "jobs" && "Job Matches"}
                  </h2>
                  <p className="text-preskilet-gray">
                    This is a placeholder for the {activeTab} section. In a full implementation, 
                    this would contain the appropriate forms and content.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
