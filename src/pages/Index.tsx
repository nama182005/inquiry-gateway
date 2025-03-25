
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Award, BarChart2, Share2, Upload, User, CheckSquare, ChevronRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <div className="space-y-6 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-skilltrack-blue/10 text-skilltrack-blue text-sm font-medium rounded-full">
                  <Sparkles size={16} />
                  <span>Student Skill & Certification Tracker</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-skilltrack-charcoal tracking-tight animate-fade-in">
                  Showcase your skills. <span className="text-skilltrack-blue">Stand out.</span>
                </h1>
                
                <p className="text-lg text-skilltrack-gray animate-fade-in delay-1">
                  SkillTrack helps students track, visualize, and share their skills and certifications in one centralized platform, making it easier to stand out to recruiters and faculty.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-2">
                  <Link to="/login" className="btn-skilltrack flex items-center justify-center">
                    <span>Get Started</span>
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                  <Link to="/#how-it-works" className="btn-secondary flex items-center justify-center">
                    How It Works
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-lg p-4 md:p-6 animate-scale-in">
                <img 
                  src="/lovable-uploads/c6aca5eb-a99b-4e5f-bf67-4e3c8bd1de07.png"
                  alt="SkillTrack Dashboard" 
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-skilltrack-blue/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-56 h-56 bg-skilltrack-navy/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-skilltrack-silver/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-skilltrack-charcoal">
              Everything You Need to Showcase Your Achievements
            </h2>
            <p className="mt-4 text-lg text-skilltrack-gray max-w-3xl mx-auto">
              A comprehensive platform designed to help students organize, visualize, and share their educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-skilltrack animate-slide-up delay-1">
              <div className="h-12 w-12 bg-skilltrack-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Upload size={24} className="text-skilltrack-blue" />
              </div>
              <h3 className="text-xl font-semibold text-skilltrack-charcoal mb-3">Upload Certifications</h3>
              <p className="text-skilltrack-gray">
                Easily upload and manage your certifications from various providers in one centralized location.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-skilltrack animate-slide-up delay-2">
              <div className="h-12 w-12 bg-skilltrack-blue/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 size={24} className="text-skilltrack-blue" />
              </div>
              <h3 className="text-xl font-semibold text-skilltrack-charcoal mb-3">Visualize Progress</h3>
              <p className="text-skilltrack-gray">
                Track your skill development over time with intuitive charts and visual representation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-skilltrack animate-slide-up delay-3">
              <div className="h-12 w-12 bg-skilltrack-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Award size={24} className="text-skilltrack-blue" />
              </div>
              <h3 className="text-xl font-semibold text-skilltrack-charcoal mb-3">Earn Badges</h3>
              <p className="text-skilltrack-gray">
                Showcase your achievements with digital badges that highlight your expertise and accomplishments.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card-skilltrack animate-slide-up delay-1">
              <div className="h-12 w-12 bg-skilltrack-blue/10 rounded-lg flex items-center justify-center mb-6">
                <Share2 size={24} className="text-skilltrack-blue" />
              </div>
              <h3 className="text-xl font-semibold text-skilltrack-charcoal mb-3">Share Profile</h3>
              <p className="text-skilltrack-gray">
                Generate a public profile link to share with recruiters, faculty, or add to your resume.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card-skilltrack animate-slide-up delay-2">
              <div className="h-12 w-12 bg-skilltrack-blue/10 rounded-lg flex items-center justify-center mb-6">
                <CheckSquare size={24} className="text-skilltrack-blue" />
              </div>
              <h3 className="text-xl font-semibold text-skilltrack-charcoal mb-3">Track Completions</h3>
              <p className="text-skilltrack-gray">
                Keep a record of all your completed courses, workshops, and educational activities.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card-skilltrack animate-slide-up delay-3">
              <div className="h-12 w-12 bg-skilltrack-blue/10 rounded-lg flex items-center justify-center mb-6">
                <User size={24} className="text-skilltrack-blue" />
              </div>
              <h3 className="text-xl font-semibold text-skilltrack-charcoal mb-3">Personal Portfolio</h3>
              <p className="text-skilltrack-gray">
                Create a personalized portfolio that showcases your unique set of skills and qualifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-skilltrack-charcoal">How It Works</h2>
            <p className="mt-4 text-lg text-skilltrack-gray max-w-3xl mx-auto">
              Three simple steps to build your professional profile and showcase your skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="card-skilltrack relative z-10 h-full animate-slide-up">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-skilltrack-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold text-skilltrack-charcoal mt-2 mb-4">Create an Account</h3>
                <p className="text-skilltrack-gray">
                  Sign up for SkillTrack using your email or student credentials to get started with your personalized dashboard.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-16 h-1 bg-skilltrack-blue/30 -translate-y-1/2 z-0"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="card-skilltrack relative z-10 h-full animate-slide-up delay-2">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-skilltrack-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold text-skilltrack-charcoal mt-2 mb-4">Upload Your Achievements</h3>
                <p className="text-skilltrack-gray">
                  Add your certifications, courses, and skills. Rate your proficiency and attach relevant credentials.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-16 h-1 bg-skilltrack-blue/30 -translate-y-1/2 z-0"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="card-skilltrack relative z-10 h-full animate-slide-up delay-3">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-skilltrack-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold text-skilltrack-charcoal mt-2 mb-4">Share Your Profile</h3>
                <p className="text-skilltrack-gray">
                  Generate a public link to share with recruiters, faculty, or add to your resume to showcase your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-skilltrack-blue/5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-card p-10 rounded-2xl animate-scale-in">
            <h2 className="text-3xl font-bold text-skilltrack-charcoal mb-6">
              Ready to Showcase Your Skills?
            </h2>
            <p className="text-lg text-skilltrack-gray mb-8 max-w-3xl mx-auto">
              Join thousands of students who are using SkillTrack to stand out in their educational and professional journey.
            </p>
            <Link
              to="/login"
              className="btn-skilltrack inline-flex items-center px-6 py-3 text-base"
            >
              Get Started Now
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-skilltrack-silver/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-semibold text-skilltrack-charcoal">
                  <span className="text-skilltrack-blue">Skill</span>Track
                </span>
              </Link>
              <p className="mt-2 text-sm text-skilltrack-gray">
                Student Skill & Certification Tracker
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
              <div>
                <h4 className="text-sm font-semibold text-skilltrack-charcoal mb-3">Platform</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/#features" className="text-sm text-skilltrack-gray hover:text-skilltrack-blue transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/#how-it-works" className="text-sm text-skilltrack-gray hover:text-skilltrack-blue transition-colors">
                      How It Works
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-skilltrack-charcoal mb-3">Account</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/login" className="text-sm text-skilltrack-gray hover:text-skilltrack-blue transition-colors">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-sm text-skilltrack-gray hover:text-skilltrack-blue transition-colors">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-skilltrack-silver/20 text-center">
            <p className="text-sm text-skilltrack-gray">
              &copy; {new Date().getFullYear()} SkillTrack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
