import React from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDownIcon, LogInIcon } from "./Icons"; // Assuming you have the icons in a separate file

function Navbar() {
  return (
    <header className="bg-[#0032a1] text-primary-foreground py-2 px-6 flex items-center justify-between">
      <Link to="#" className="flex items-center gap-2">
        <span className="text-lg font-semibold">
          <small>Q </small> Simplified
        </span>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar className="h-8 w-8">
              {" "}
              {/* Adjust avatar size here */}
              <AvatarImage
                src="https://res.cloudinary.com/dzuu1kacl/image/upload/v1722798697/user-icon-front-side-white-background_auazud.jpg"
                alt="Avatar"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="font-medium">Jinja Road Branch</span>
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Navbar;
