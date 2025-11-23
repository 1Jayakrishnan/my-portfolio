import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-sm sm:text-base font-medium tracking-wider uppercase">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Jayakrishnan A S</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              Python Full Stack Developer 
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting robust backend systems and seamless full-stack applications.
            Passionate about clean code, scalable architecture, and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="w-full sm:w-auto shadow-glow" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-6">
            <a
              href="https://github.com/1Jayakrishnan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://linkedin.com/in/jayakrishnan-a-s5202"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:jayakrishnan.as2001@gmail.com"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
