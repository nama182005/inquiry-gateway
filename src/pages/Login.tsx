
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Eye, EyeOff, ArrowRight, Lock, Mail, User, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // Toggle between login and register
  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Reset fields when toggling
    setEmail("");
    setPassword("");
    setName("");
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email || !password || (!isLogin && !name)) {
      toast.error("Please fill in all fields");
      return;
    }
    
    if (isLogin) {
      toast.success("Welcome back!");
      // Redirect to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      toast.success("Account created successfully!");
      // Switch to login
      setTimeout(() => {
        setIsLogin(true);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-preskilet-silver/5">
      <Navbar />

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="card-preskilet p-8 md:p-10 animate-scale-in shadow-lg bg-white backdrop-blur-sm border border-preskilet-silver/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-preskilet-turquoise/10 rounded-full mb-4">
                <ShieldCheck size={32} className="text-preskilet-turquoise" />
              </div>
              <h1 className="text-2xl font-bold text-preskilet-charcoal">
                {isLogin ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-preskilet-gray">
                {isLogin
                  ? "Sign in to your Preskilet account"
                  : "Start showcasing your skills and certifications"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-medium text-preskilet-charcoal">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-preskilet w-full pl-10"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <User size={18} className="text-preskilet-gray" />
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-preskilet-charcoal">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-preskilet w-full pl-10"
                    placeholder="you@example.com"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail size={18} className="text-preskilet-gray" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="password" className="block text-sm font-medium text-preskilet-charcoal">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-preskilet w-full pl-10 pr-10"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Lock size={18} className="text-preskilet-gray" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-preskilet-gray hover:text-preskilet-charcoal"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <Link to="/forgot-password" className="text-sm text-preskilet-turquoise hover:text-preskilet-turquoise/80">
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="btn-preskilet w-full flex items-center justify-center mt-6"
              >
                <span>{isLogin ? "Sign in" : "Create account"}</span>
                <ArrowRight size={18} className="ml-1.5" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-preskilet-silver/30 text-center">
              <p className="text-sm text-preskilet-gray">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="ml-1.5 text-preskilet-turquoise hover:text-preskilet-turquoise/80 font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
