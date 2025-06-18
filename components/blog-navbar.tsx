"use client";

import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogNavbar = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex space-x-8">
      <Button
        size={"icon"}
        variant={"ghost"}
        className="rounded-full"
        onClick={() => router.push("/blog/create")}
      >
        <SquarePen className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    </div>
  );
};

export default BlogNavbar;
