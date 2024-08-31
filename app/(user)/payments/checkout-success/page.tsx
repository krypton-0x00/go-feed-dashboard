import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="text-3xl flex justify-center flex-col items-center">
      <h1>Payment Sucessfull</h1>
      <Button>
        <Link href="/dashboard">Back to Dashboard</Link>
      </Button>
    </div>
  );
};

export default page;
