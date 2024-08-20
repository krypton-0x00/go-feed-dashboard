import { Button } from "@/components/ui/button";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn, Github } from "lucide-react";
import { AnimatedGradientTextDemo } from "@/components/AnimatedHeading";
import { WordPullUpDemo } from "@/components/HeroWordPullUp";
import { HyperTextDemo } from "@/components/HyperTextHeroSection";

const Hero = () => {
  return (
    <section className="grow">
      <div className="container mx-auto px-4 mb-24 flex flex-col md:flex-row justify-center">
        <div className="flex flex-col max-w-sm justify-center items-center">
          <AnimatedGradientTextDemo />
          <div className="mb-8">
            <WordPullUpDemo />
            <HyperTextDemo />
          </div>
          <div>
            <SignedOut>
              <SignUpButton>
                <div className="flex gap-3">
                  <Button>
                    <LogIn className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="https://github.com/krypton-0x00">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
