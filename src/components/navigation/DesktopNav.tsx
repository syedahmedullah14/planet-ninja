
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/lib/constants";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigationLinks.map(({ name, path }) => (
        <Link
          key={path}
          to={path}
          className="text-gray-800 hover:text-ninja-purple font-medium transition-colors duration-200"
        >
          {name}
        </Link>
      ))}
      <Button className="bg-ninja-purple hover:bg-ninja-purple/90 text-white transform hover:scale-105 transition-all duration-200">
        Let's Talk
      </Button>
    </nav>
  );
};

export default DesktopNav;
