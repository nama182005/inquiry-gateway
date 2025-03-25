
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowLeft, Calendar, Award, ExternalLink, Download, Share2 } from "lucide-react";
import { toast } from "sonner";

// Mock certificate data - in a real app, this would come from an API
const certificateData = {
  id: "cert-1",
  title: "Full Stack Web Development",
  issuer: "Udemy",
  date: "2023-06-15",
  description: "Comprehensive course covering front-end and back-end development technologies including HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  imageUrl: "https://placehold.co/600x400/png",
  credentialUrl: "https://udemy.com/certificate/123456",
  expiration: "Never",
  credentialId: "UC-12345678"
};

const Certification = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleShare = () => {
    // In a real app, this would generate a shareable link
    navigator.clipboard.writeText(`https://preskilet.com/cert/${id}`);
    toast.success("Link copied to clipboard");
  };
  
  const handleDownload = () => {
    // In a real app, this would download the certificate
    toast.success("Certificate downloaded");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link 
            to="/dashboard" 
            className="inline-flex items-center text-preskilet-gray hover:text-preskilet-charcoal mb-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Dashboard
          </Link>
          
          {isLoading ? (
            <div className="card-preskilet animate-pulse p-8">
              <div className="h-8 bg-preskilet-silver/30 rounded-lg w-3/4 mb-4"></div>
              <div className="h-4 bg-preskilet-silver/30 rounded-lg w-1/2 mb-8"></div>
              <div className="aspect-video bg-preskilet-silver/30 rounded-lg mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-preskilet-silver/30 rounded-lg"></div>
                <div className="h-4 bg-preskilet-silver/30 rounded-lg"></div>
                <div className="h-4 bg-preskilet-silver/30 rounded-lg w-3/4"></div>
              </div>
            </div>
          ) : (
            <div className="card-preskilet p-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h1 className="text-2xl font-bold text-preskilet-charcoal">{certificateData.title}</h1>
                      <p className="text-preskilet-gray">Issued by {certificateData.issuer}</p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleShare} className="btn-secondary flex items-center">
                        <Share2 size={16} />
                        <span className="ml-2">Share</span>
                      </button>
                      <button onClick={handleDownload} className="btn-preskilet flex items-center">
                        <Download size={16} />
                        <span className="ml-2">Download</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <img 
                      src={certificateData.imageUrl} 
                      alt={certificateData.title} 
                      className="w-full rounded-lg shadow-sm"
                    />
                  </div>
                  
                  <div className="mt-8 space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold text-preskilet-charcoal mb-2">Description</h2>
                      <p className="text-preskilet-gray">{certificateData.description}</p>
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-semibold text-preskilet-charcoal mb-2">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {certificateData.skills.map(skill => (
                          <span key={skill} className="badge-preskilet">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-64 space-y-6">
                  <div className="card-preskilet p-4 bg-preskilet-silver/5">
                    <h3 className="text-sm font-medium text-preskilet-charcoal mb-4">Certificate Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-preskilet-gray mb-1">Issue Date</p>
                        <div className="flex items-center">
                          <Calendar size={14} className="text-preskilet-turquoise mr-2" />
                          <span className="text-sm">{new Date(certificateData.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs text-preskilet-gray mb-1">Credential ID</p>
                        <div className="flex items-center">
                          <Award size={14} className="text-preskilet-turquoise mr-2" />
                          <span className="text-sm">{certificateData.credentialId}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xs text-preskilet-gray mb-1">Expiration</p>
                        <div className="flex items-center">
                          <Calendar size={14} className="text-preskilet-turquoise mr-2" />
                          <span className="text-sm">{certificateData.expiration}</span>
                        </div>
                      </div>
                      
                      {certificateData.credentialUrl && (
                        <div>
                          <p className="text-xs text-preskilet-gray mb-1">Verify Credential</p>
                          <a 
                            href={certificateData.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-preskilet-turquoise hover:text-preskilet-turquoise/80"
                          >
                            <ExternalLink size={14} className="mr-2" />
                            <span className="text-sm">View credential</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certification;
