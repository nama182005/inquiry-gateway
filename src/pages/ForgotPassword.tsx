
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowRight, Mail, ArrowLeft, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Simulate sending password reset email
    toast.success("Reset instructions sent to your email");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-aarush-silver/5">
      <Navbar />

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="card-aarush p-8 md:p-10 animate-scale-in shadow-lg bg-white backdrop-blur-sm border border-aarush-silver/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-aarush-primary/10 rounded-full mb-4">
                <ShieldCheck size={32} className="text-aarush-primary" />
              </div>
              <h1 className="text-2xl font-bold text-aarush-charcoal">
                {submitted ? "Check your email" : "Forgot password"}
              </h1>
              <p className="mt-2 text-aarush-gray">
                {submitted 
                  ? "We've sent you instructions to reset your password" 
                  : "Enter your email and we'll send you reset instructions"}
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-aarush-charcoal">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-aarush w-full pl-10"
                      placeholder="you@example.com"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail size={18} className="text-aarush-gray" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-aarush w-full flex items-center justify-center mt-6"
                >
                  <span>Send reset instructions</span>
                  <ArrowRight size={18} className="ml-1.5" />
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <p className="text-aarush-gray">
                  If an account exists with this email, you'll receive instructions to reset your password.
                </p>
                <p className="text-aarush-gray text-sm">
                  Didn't receive an email? Check your spam folder or try again.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary w-full flex items-center justify-center"
                >
                  <span>Try again</span>
                </button>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-aarush-silver/30 text-center">
              <Link 
                to="/login"
                className="inline-flex items-center text-sm text-aarush-primary hover:text-aarush-primary/80 font-medium"
              >
                <ArrowLeft size={16} className="mr-1.5" />
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
