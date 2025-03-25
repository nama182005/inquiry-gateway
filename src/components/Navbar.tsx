
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, User, BarChart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock authentication state (in a real app, you'd use a proper auth system)
  const isAuthenticated = false;

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/#features" },
    { name: "How It Works", path: "/#how-it-works" },
  ];

  // Auth links
  const authLinks = isAuthenticated
    ? [
        { name: "Dashboard", path: "/dashboard", icon: BarChart },
        { name: "Profile", path: "/profile", icon: User },
      ]
    : [{ name: "Login", path: "/login", icon: LogIn }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-semibold text-aarush-charcoal">
              <span className="text-aarush-primary">Aa</span>rush
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Primary Navigation */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-aarush-primary ${
                    location.pathname === link.path
                      ? "text-aarush-primary"
                      : "text-aarush-charcoal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Auth Links */}
            <div className="flex items-center space-x-4">
              {authLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    link.name === "Login"
                      ? "bg-aarush-primary text-white hover:bg-aarush-primary/90"
                      : "text-aarush-charcoal hover:bg-aarush-silver/30"
                  }`}
                >
                  <link.icon size={16} />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-aarush-charcoal hover:text-aarush-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-xl animate-fade-in">
          <div className="px-4 py-5 space-y-5">
            {/* Primary Navigation */}
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-aarush-primary ${
                    location.pathname === link.path
                      ? "text-aarush-primary"
                      : "text-aarush-charcoal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Separator */}
            <div className="border-t border-aarush-silver/30"></div>

            {/* Auth Links */}
            <div className="flex flex-col space-y-3">
              {authLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-base font-medium text-aarush-charcoal hover:text-aarush-primary transition-colors"
                >
                  <link.icon size={18} />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
