import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectType = "all" | "backend" | "fullstack";

interface Project {
  title: string;
  description: string;
  type: "backend" | "fullstack" | "frontend";
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState<ProjectType>("all");

  const projects: Project[] = [
    {
      title: "E-Commerce API",
      description: "RESTful API for e-commerce platform with authentication, payment processing, and inventory management.",
      type: "backend",
      technologies: ["Django REST Framework", "Python", "HTML", "Postman"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      github: "https://github.com/1Jayakrishnan/E-commerce-assessment",
      // demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Full-stack productivity application with real-time collaboration, drag-and-drop interface, and team features.",
      type: "frontend",
      technologies: ["React", "HTML", "CSS", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      github: "https://github.com/1Jayakrishnan/todo",
      // demo: "https://example.com",
    },
    {
      title: "Job Portal Backend",
      description: "This project includes a complete Job Portal workflow with authentication, job management, and user account handling.",
      type: "backend",
      technologies: ["Python", "Django", "PostgreSQL", "Postman"],
      image: "https://media.istockphoto.com/id/1349094945/photo/human-using-a-computer-laptop-for-searching-for-job-and-fill-out-personal-data-on-job-website.jpg?s=612x612&w=0&k=20&c=nVCY302pin29eP1rN0eBGstQN3WF4YQTWvZ4TvAs21g=",
      github: "https://github.com/1Jayakrishnan/FindJobs",
    },
    {
      title: "Student Management System",
      description: "This is a full-stack application built with Django (for backend API) and React.js (for frontend). It allows users (admins or teachers) to view, edit, update, and delete student records.",
      type: "fullstack",
      technologies: ["Python", "Django", "ReactJS", "HTML"],
      image: "https://beams360.com/wp-content/uploads/2024/08/SMS-Main-banner-1024x508.webp",
      github: "https://github.com/1Jayakrishnan/student_management",
      // demo: "https://example.com",
    },
    {
      title: "Bigmart",
      description: "BigMart is a full-stack e-commerce web application built using Django. It provides a complete online shopping experience for users and a simple admin panel for store management.",
      type: "fullstack",
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript"],
      image: "https://t3.ftcdn.net/jpg/05/32/38/82/360_F_532388287_lEM2pgAFstzdukcxrk09YlEzTKB5iZaR.jpg",
      github: "https://github.com/1Jayakrishnan/bigmart",
    },
    {
      title: "Automated Review Rating System",
      description: "A Django-based web application that allows users to submit, view, and analyze reviews.It integrates deep learning models to provide insights such as aggregated ratings and predictions.",
      type: "fullstack",
      technologies: ["AI", "Python", "Django REST Framework", "Typescript"],
      image: "https://www.shutterstock.com/image-photo/ai-enhances-customer-review-rating-600nw-2653889215.jpg",
      github: "https://github.com/1Jayakrishnan/automated-review-system",
    },
    {
      title: "Weather App",
      description: "A simple Django-based web application that allows users to search for a city and view its current weather conditions, including temperature, pressure, humidity, and a brief description.",
      type: "fullstack",
      technologies: ["Python", "Django REST Framework", "HTML", "CSS"],
      image: "https://i.pinimg.com/736x/b5/2b/a0/b52ba05bc9eb02045450675acc9cae63.jpg",
      github: "https://github.com/1Jayakrishnan/weather-project",
    },
    // {
    //   title: "Microservices Architecture",
    //   description: "Distributed system with multiple microservices, API gateway, and service discovery.",
    //   type: "backend",
    //   technologies: ["Go", "Docker", "Kubernetes", "gRPC"],
    //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    //   github: "https://github.com",
    // },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.type === filter
  );

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              A collection of my recent work in backend and full-stack development
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button
              variant={filter === "all" ? "default" : "secondary"}
              onClick={() => setFilter("all")}
              size="sm"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "backend" ? "default" : "secondary"}
              onClick={() => setFilter("backend")}
              size="sm"
            >
              Backend
            </Button>
            <Button
              variant={filter === "fullstack" ? "default" : "secondary"}
              onClick={() => setFilter("fullstack")}
              size="sm"
            >
              Full Stack
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="glass overflow-hidden group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
