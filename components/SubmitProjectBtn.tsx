"use client";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
const SubmitProject = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Creating...
        </>
      ) : (
        "Create Project"
      )}
    </Button>
  );
};

export default SubmitProject;
