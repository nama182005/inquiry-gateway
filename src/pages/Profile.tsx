import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import SkillCard from "../components/SkillCard";
import CertificationCard from "../components/CertificationCard";
import { Download, Link2, Share2, ChevronDown, ChevronUp, User } from "lucide-react";
import { toast } from "sonner";
import { generateResume } from "../utils/resumeGenerator";

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

const Profile = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  
  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    university: "State University",
    major: "Computer Science",
    graduationYear: "2024",
    profileLink: "preskilet.com/profile/alex-johnson",
    bio: "Computer Science student passionate about web development and data analysis. Looking for internship opportunities in software development."
  };

  const handleShareProfile = () => {
    // In a real app, this would copy the link or open a share dialog
    // Mock implementation
    navigator.clipboard.writeText(user.profileLink).then(() => {
      toast.success("Profile link copied to clipboard!");
    }).catch(() => {
      toast.error("Failed to copy link. Please try again.");
    });
  };

  const handleDownloadResume = () => {
    // Call the resume generator with user data
    try {
      generateResume({
        name: user.name,
        email: user.email,
        university: user.university,
        major: user.major,
        graduationYear: user.graduationYear,
        bio: user.bio,
        skills: skillsData,
        certifications: certificationsData
      });
      toast.success("Generating your resume...");
    } catch (error) {
      toast.error("Failed to generate resume. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Profile Header */}
          <div className="mb-10">
            <div className="relative rounded-xl overflow-hidden mb-8 h-48 sm:h-64 bg-gradient-to-r from-preskilet-turquoise/90 to-preskilet-navy">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white">
                      <User size={40} className="text-preskilet-turquoise" />
                    </div>
                    <div className="ml-4">
                      <h1 className="text-xl sm:text-3xl font-bold text-white">{user.name}</h1>
                      <p className="text-white/80 text-sm sm:text-base">{user.university} • {user.major}</p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 flex space-x-3">
                    <button 
                      onClick={handleShareProfile}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center text-sm font-medium transition-colors"
                    >
                      <Share2 size={16} className="mr-1.5" />
                      Share
                    </button>
                    <Link
                      to="/dashboard"
                      className="bg-white text-preskilet-charcoal px-4 py-2 rounded-lg flex items-center text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="card-preskilet h-full">
                  <h2 className="text-lg font-medium text-preskilet-charcoal mb-4">About</h2>
                  
                  <div className="space-y-5">
                    <p className="text-preskilet-gray">{user.bio}</p>
                    
                    <div>
                      <h3 className="text-sm font-medium text-preskilet-charcoal mb-2">Contact Information</h3>
                      <div className="space-y-2">
                        <div className="text-sm text-preskilet-gray">
                          <span className="font-medium text-preskilet-charcoal">Email:</span> {user.email}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-preskilet-charcoal mb-2">Education</h3>
                      <div className="text-sm text-preskilet-gray">
                        <p className="font-medium text-preskilet-charcoal">{user.university}</p>
                        <p>{user.major} • Class of {user.graduationYear}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-preskilet-charcoal mb-2">Profile Link</h3>
                      <div className="flex items-center space-x-2">
                        <div className="bg-preskilet-silver/20 text-preskilet-gray text-sm rounded-md px-3 py-1.5 flex-1 truncate">
                          {user.profileLink}
                        </div>
                        <button 
                          onClick={handleShareProfile}
                          className="text-preskilet-turquoise hover:text-preskilet-turquoise/80"
                        >
                          <Link2 size={18} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        onClick={handleDownloadResume}
                        className="btn-secondary w-full flex items-center justify-center"
                      >
                        <Download size={18} className="mr-1.5" />
                        Download Resume
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                {/* Skills Section */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-preskilet-charcoal">Skills</h2>
                    <button 
                      onClick={() => setShowAllSkills(!showAllSkills)}
                      className="text-sm text-preskilet-turquoise flex items-center"
                    >
                      {showAllSkills ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp size={16} className="ml-1" />
                        </>
                      ) : (
                        <>
                          <span>Show All</span>
                          <ChevronDown size={16} className="ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                  <div className="space-y-5">
                    {(showAllSkills ? skillsData : skillsData.slice(0, 2)).map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                </div>

                {/* Certifications Section */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-preskilet-charcoal">Certifications</h2>
                    <button 
                      onClick={() => setShowAllCertifications(!showAllCertifications)}
                      className="text-sm text-preskilet-turquoise flex items-center"
                    >
                      {showAllCertifications ? (
                        <>
                          <span>Show Less</span>
                          <ChevronUp size={16} className="ml-1" />
                        </>
                      ) : (
                        <>
                          <span>Show All</span>
                          <ChevronDown size={16} className="ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {(showAllCertifications ? certificationsData : certificationsData.slice(0, 2)).map((certification) => (
                      <CertificationCard key={certification.id} certification={certification} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
