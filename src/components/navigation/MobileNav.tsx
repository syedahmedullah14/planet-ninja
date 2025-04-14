
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileNav = ({ isOpen, onToggle }: MobileNavProps) => {
  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="md:hidden"
        onClick={onToggle}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg rounded-b-lg py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navigationLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className="text-gray-800 hover:text-ninja-purple font-medium py-2 transition-colors duration-200"
                onClick={onToggle}
              >
                {name}
              </Link>
            ))}
            <Button className="w-full bg-ninja-purple hover:bg-ninja-purple/90">
              Let's Talk
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
