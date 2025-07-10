import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      <div>
        <Image src="logo.svg" alt="" height={50} width={50} />
      </div>

      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
