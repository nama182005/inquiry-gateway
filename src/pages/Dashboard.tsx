
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SkillCard from "../components/SkillCard";
import CertificationCard from "../components/CertificationCard";
import { Plus, Certificate, Briefcase, BarChart2, ChevronRight, Award, Share2, User } from "lucide-react";
import { toast } from "sonner";

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

// Mock data for certifications
const certificationsData = [
  {
    id: "1",
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    issueDate: "June 2023",
    expiryDate: "June 2026",
    credentialId: "AWS-DEV-12345",
    credentialUrl: "#",
    imageUrl: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png",
  },
  {
    id: "2",
    name: "Google Data Analytics",
    issuer: "Google",
    issueDate: "March 2023",
    credentialId: "GDA-98765",
    credentialUrl: "#",
  },
  {
    id: "3",
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    issueDate: "January 2023",
    expiryDate: "January 2025",
    credentialId: "AZ-900-54321",
    credentialUrl: "#",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("skills");
  
  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    university: "State University",
    major: "Computer Science",
    graduationYear: "2024",
    profileComplete: 80,
  };

  const handleShareProfile = () => {
    // In a real app, this would generate or copy a shareable link
    toast.success("Profile link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-preskilet-charcoal">Dashboard</h1>
                <p className="mt-1 text-preskilet-gray">
                  Manage your skills and certifications
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button 
                  onClick={handleShareProfile}
                  className="btn-secondary flex items-center"
                >
                  <Share2 size={18} className="mr-1.5" />
                  Share Profile
                </button>
                <Link to="/profile" className="btn-preskilet flex items-center">
                  <User size={18} className="mr-1.5" />
                  View Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Profile Completion */}
            <div className="card-preskilet">
              <h3 className="text-lg font-medium text-preskilet-charcoal mb-3">Profile Completion</h3>
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-preskilet-gray">Completion</span>
                  <span className="text-sm font-medium text-preskilet-charcoal">{user.profileComplete}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-value transition-all duration-1000 ease-out"
                    style={{ width: `${user.profileComplete}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-4 text-sm text-preskilet-gray">
                Complete your profile to increase visibility to recruiters.
              </div>
            </div>

            {/* Skills Overview */}
            <div className="card-preskilet">
              <h3 className="text-lg font-medium text-preskilet-charcoal mb-3">Skills</h3>
              <div className="flex items-center text-3xl font-bold text-preskilet-charcoal">
                <BarChart2 size={24} className="mr-2 text-preskilet-turquoise" />
                {skillsData.length}
              </div>
              <div className="mt-2 text-sm text-preskilet-gray">
                Track your skill proficiency and improvement over time.
              </div>
              <Link
                to="#skills"
                onClick={() => setActiveTab("skills")}
                className="mt-4 flex items-center text-sm font-medium text-preskilet-turquoise hover:text-preskilet-turquoise/80"
              >
                <span>Manage Skills</span>
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>

            {/* Certifications Overview */}
            <div className="card-preskilet">
              <h3 className="text-lg font-medium text-preskilet-charcoal mb-3">Certifications</h3>
              <div className="flex items-center text-3xl font-bold text-preskilet-charcoal">
                <Award size={24} className="mr-2 text-preskilet-turquoise" />
                {certificationsData.length}
              </div>
              <div className="mt-2 text-sm text-preskilet-gray">
                Showcase your completed courses and achievements.
              </div>
              <Link
                to="#certifications"
                onClick={() => setActiveTab("certifications")}
                className="mt-4 flex items-center text-sm font-medium text-preskilet-turquoise hover:text-preskilet-turquoise/80"
              >
                <span>Manage Certifications</span>
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <div className="border-b border-preskilet-silver/30">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === "skills"
                      ? "border-preskilet-turquoise text-preskilet-turquoise"
                      : "border-transparent text-preskilet-gray hover:text-preskilet-charcoal hover:border-preskilet-silver"
                  }`}
                >
                  <Briefcase size={18} />
                  <span>Skills</span>
                </button>
                <button
                  onClick={() => setActiveTab("certifications")}
                  className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === "certifications"
                      ? "border-preskilet-turquoise text-preskilet-turquoise"
                      : "border-transparent text-preskilet-gray hover:text-preskilet-charcoal hover:border-preskilet-silver"
                  }`}
                >
                  <Certificate size={18} />
                  <span>Certifications</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "skills" ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-preskilet-charcoal">Your Skills</h2>
                  <button className="btn-preskilet flex items-center">
                    <Plus size={18} className="mr-1.5" />
                    Add Skill
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skillsData.map((skill) => (
                    <SkillCard key={skill.id} skill={skill} />
                  ))}
                </div>
                {skillsData.length === 0 && (
                  <div className="text-center py-16">
                    <Briefcase size={48} className="mx-auto text-preskilet-silver mb-4" />
                    <h3 className="text-xl font-medium text-preskilet-charcoal mb-2">No skills added yet</h3>
                    <p className="text-preskilet-gray mb-6">
                      Start tracking your skills by adding your first skill
                    </p>
                    <button className="btn-preskilet flex items-center mx-auto">
                      <Plus size={18} className="mr-1.5" />
                      Add Your First Skill
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-preskilet-charcoal">Your Certifications</h2>
                  <button className="btn-preskilet flex items-center">
                    <Plus size={18} className="mr-1.5" />
                    Add Certification
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {certificationsData.map((certification) => (
                    <CertificationCard key={certification.id} certification={certification} />
                  ))}
                </div>
                {certificationsData.length === 0 && (
                  <div className="text-center py-16">
                    <Certificate size={48} className="mx-auto text-preskilet-silver mb-4" />
                    <h3 className="text-xl font-medium text-preskilet-charcoal mb-2">No certifications added yet</h3>
                    <p className="text-preskilet-gray mb-6">
                      Showcase your achievements by adding your certifications
                    </p>
                    <button className="btn-preskilet flex items-center mx-auto">
                      <Plus size={18} className="mr-1.5" />
                      Add Your First Certification
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
