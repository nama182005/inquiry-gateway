
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Award, BarChart2, Share2, Upload, User, CheckSquare, ChevronRight, Sparkles, Code, Briefcase, Lightbulb } from "lucide-react";

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
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-aarush-primary/10 text-aarush-primary text-sm font-medium rounded-full">
                  <Sparkles size={16} />
                  <span>Student Skill & Certification Tracker</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-bold text-aarush-charcoal tracking-tight animate-fade-in">
                  Elevate your career. <span className="text-aarush-primary">Showcase excellence.</span>
                </h1>
                
                <p className="text-lg text-aarush-gray animate-fade-in delay-1">
                  Aarush helps students track, visualize, and share their skills and certifications on a professional platform, making it easier to impress recruiters and stand out in today's competitive market.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-2">
                  <Link to="/login" className="btn-aarush flex items-center justify-center">
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
              <div className="glass-card rounded-2xl overflow-hidden shadow-lg p-8 md:p-10 animate-scale-in bg-gradient-to-br from-aarush-primary/5 to-aarush-secondary/10">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-aarush-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-aarush-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-aarush-charcoal">Verifiable Credentials</h3>
                      <p className="text-sm text-aarush-gray">Securely store and showcase your achievements</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-aarush-secondary/10 rounded-full flex items-center justify-center">
                      <BarChart2 className="h-6 w-6 text-aarush-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-aarush-charcoal">Skill Analytics</h3>
                      <p className="text-sm text-aarush-gray">Track your progress with detailed analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-aarush-accent/10 rounded-full flex items-center justify-center">
                      <Share2 className="h-6 w-6 text-aarush-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-aarush-charcoal">Professional Sharing</h3>
                      <p className="text-sm text-aarush-gray">Share your portfolio with employers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-aarush-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-56 h-56 bg-aarush-secondary/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-aarush-silver/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-aarush-charcoal">
              Professional Tools for Academic Excellence
            </h2>
            <p className="mt-4 text-lg text-aarush-gray max-w-3xl mx-auto">
              A comprehensive platform designed specifically for students to document their journey and showcase their professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-aarush animate-slide-up delay-1">
              <div className="h-12 w-12 bg-aarush-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Upload size={24} className="text-aarush-primary" />
              </div>
              <h3 className="text-xl font-semibold text-aarush-charcoal mb-3">Intelligent Certification Management</h3>
              <p className="text-aarush-gray">
                Upload and organize your certifications with smart categorization and skill mapping technologies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card-aarush animate-slide-up delay-2">
              <div className="h-12 w-12 bg-aarush-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart2 size={24} className="text-aarush-primary" />
              </div>
              <h3 className="text-xl font-semibold text-aarush-charcoal mb-3">Advanced Skill Analytics</h3>
              <p className="text-aarush-gray">
                Track your professional growth with comprehensive analytics and industry benchmark comparisons.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card-aarush animate-slide-up delay-3">
              <div className="h-12 w-12 bg-aarush-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Award size={24} className="text-aarush-primary" />
              </div>
              <h3 className="text-xl font-semibold text-aarush-charcoal mb-3">Achievement Recognition</h3>
              <p className="text-aarush-gray">
                Earn verified digital badges that highlight your expertise and demonstrate your commitment to learning.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card-aarush animate-slide-up delay-1">
              <div className="h-12 w-12 bg-aarush-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Briefcase size={24} className="text-aarush-primary" />
              </div>
              <h3 className="text-xl font-semibold text-aarush-charcoal mb-3">Industry-Ready Portfolio</h3>
              <p className="text-aarush-gray">
                Generate professional portfolios tailored for specific industries and job applications.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card-aarush animate-slide-up delay-2">
              <div className="h-12 w-12 bg-aarush-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Code size={24} className="text-aarush-primary" />
              </div>
              <h3 className="text-xl font-semibold text-aarush-charcoal mb-3">Project Showcase</h3>
              <p className="text-aarush-gray">
                Highlight your practical experience with detailed project presentations linked to relevant skills.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card-aarush animate-slide-up delay-3">
              <div className="h-12 w-12 bg-aarush-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb size={24} className="text-aarush-primary" />
              </div>
              <h3 className="text-xl font-semibold text-aarush-charcoal mb-3">Career Path Insights</h3>
              <p className="text-aarush-gray">
                Get AI-powered recommendations for courses and skills based on your career goals and current progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-aarush-charcoal">The Aarush Advantage</h2>
            <p className="mt-4 text-lg text-aarush-gray max-w-3xl mx-auto">
              Our streamlined approach helps you build a professional digital presence in three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="card-aarush relative z-10 h-full animate-slide-up">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-aarush-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-semibold text-aarush-charcoal mt-2 mb-4">Create Your Digital Identity</h3>
                <p className="text-aarush-gray">
                  Sign up for Aarush and create your personalized dashboard with a professional profile that represents your academic journey.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-16 h-1 bg-aarush-primary/30 -translate-y-1/2 z-0"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="card-aarush relative z-10 h-full animate-slide-up delay-2">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-aarush-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-semibold text-aarush-charcoal mt-2 mb-4">Document Your Excellence</h3>
                <p className="text-aarush-gray">
                  Upload certificates, add projects, and track skills with detailed proficiency levels and verification options.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-16 h-1 bg-aarush-primary/30 -translate-y-1/2 z-0"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="card-aarush relative z-10 h-full animate-slide-up delay-3">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-aarush-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-semibold text-aarush-charcoal mt-2 mb-4">Showcase To The World</h3>
                <p className="text-aarush-gray">
                  Generate industry-specific portfolios to share with recruiters or embed in your resume with custom privacy controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-aarush-primary/5 to-aarush-secondary/5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-card p-10 rounded-2xl animate-scale-in">
            <h2 className="text-3xl font-bold text-aarush-charcoal mb-6">
              Ready to Transform Your Professional Presence?
            </h2>
            <p className="text-lg text-aarush-gray mb-8 max-w-3xl mx-auto">
              Join thousands of forward-thinking students using Aarush to bridge the gap between academic achievements and professional opportunities.
            </p>
            <Link
              to="/login"
              className="btn-aarush inline-flex items-center px-6 py-3 text-base"
            >
              Start Your Professional Journey
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-aarush-silver/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-semibold text-aarush-charcoal">
                  <span className="text-aarush-primary">Aa</span>rush
                </span>
              </Link>
              <p className="mt-2 text-sm text-aarush-gray">
                Professional Student Skill & Certification Tracker
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
              <div>
                <h4 className="text-sm font-semibold text-aarush-charcoal mb-3">Platform</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/#features" className="text-sm text-aarush-gray hover:text-aarush-primary transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/#how-it-works" className="text-sm text-aarush-gray hover:text-aarush-primary transition-colors">
                      How It Works
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-aarush-charcoal mb-3">Account</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/login" className="text-sm text-aarush-gray hover:text-aarush-primary transition-colors">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-sm text-aarush-gray hover:text-aarush-primary transition-colors">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-aarush-silver/20 text-center">
            <p className="text-sm text-aarush-gray">
              &copy; {new Date().getFullYear()} Aarush. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
