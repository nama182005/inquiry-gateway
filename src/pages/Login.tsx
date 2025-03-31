
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Eye, EyeOff, ArrowRight, Lock, Mail, User, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// Define validation schemas
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Initialize form for login
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Initialize form for register
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
  });

  // Toggle between login and register
  const toggleMode = () => {
    setIsLogin(!isLogin);
    // Reset forms when toggling
    loginForm.reset();
    registerForm.reset();
  };

  // Handle login submission
  const onLoginSubmit = (data: LoginFormValues) => {
    console.log("Login data:", data);
    
    toast.success("Welcome back!");
    // Redirect to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  // Handle register submission
  const onRegisterSubmit = (data: RegisterFormValues) => {
    console.log("Register data:", data);
    
    toast.success("Account created successfully!");
    // Switch to login
    setTimeout(() => {
      setIsLogin(true);
    }, 1000);
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
                {isLogin ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-aarush-gray">
                {isLogin
                  ? "Sign in to your Aarush account"
                  : "Start showcasing your skills and certifications"}
              </p>
            </div>

            {isLogin ? (
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-5">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-sm font-medium text-aarush-charcoal">
                          Email Address
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="input-aarush w-full pl-10"
                              placeholder="you@example.com"
                            />
                          </FormControl>
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail size={18} className="text-aarush-gray" />
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-sm font-medium text-aarush-charcoal">
                          Password
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type={showPassword ? "text" : "password"}
                              className="input-aarush w-full pl-10 pr-10"
                              placeholder="••••••••"
                            />
                          </FormControl>
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock size={18} className="text-aarush-gray" />
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-aarush-gray hover:text-aarush-charcoal"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-between">
                    <FormField
                      control={loginForm.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-aarush-primary data-[state=checked]:text-white"
                            />
                          </FormControl>
                          <FormLabel className="text-sm text-aarush-gray cursor-pointer">
                            Remember me
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    <Link to="/forgot-password" className="text-sm text-aarush-primary hover:text-aarush-primary/80">
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="btn-aarush w-full flex items-center justify-center mt-6"
                  >
                    <span>Sign in</span>
                    <ArrowRight size={18} className="ml-1.5" />
                  </Button>
                </form>
              </Form>
            ) : (
              <Form {...registerForm}>
                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-5">
                  <FormField
                    control={registerForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-sm font-medium text-aarush-charcoal">
                          Full Name
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              className="input-aarush w-full pl-10"
                              placeholder="John Doe"
                            />
                          </FormControl>
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User size={18} className="text-aarush-gray" />
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-sm font-medium text-aarush-charcoal">
                          Email Address
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="input-aarush w-full pl-10"
                              placeholder="you@example.com"
                            />
                          </FormControl>
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail size={18} className="text-aarush-gray" />
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-sm font-medium text-aarush-charcoal">
                          Password
                        </FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              {...field}
                              type={showPassword ? "text" : "password"}
                              className="input-aarush w-full pl-10 pr-10"
                              placeholder="••••••••"
                            />
                          </FormControl>
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock size={18} className="text-aarush-gray" />
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-aarush-gray hover:text-aarush-charcoal"
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={registerForm.control}
                    name="acceptTerms"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-aarush-primary data-[state=checked]:text-white mt-1"
                          />
                        </FormControl>
                        <FormLabel className="text-sm text-aarush-gray cursor-pointer">
                          I agree to the 
                          <Link to="/terms" className="text-aarush-primary hover:text-aarush-primary/80 mx-1">
                            Terms of Service
                          </Link>
                          and
                          <Link to="/privacy" className="text-aarush-primary hover:text-aarush-primary/80 ml-1">
                            Privacy Policy
                          </Link>
                        </FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="btn-aarush w-full flex items-center justify-center mt-6"
                  >
                    <span>Create account</span>
                    <ArrowRight size={18} className="ml-1.5" />
                  </Button>
                </form>
              </Form>
            )}

            <div className="mt-8 pt-6 border-t border-aarush-silver/30 text-center">
              <p className="text-sm text-aarush-gray">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="ml-1.5 text-aarush-primary hover:text-aarush-primary/80 font-medium"
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
