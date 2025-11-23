import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: string;
  link?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      title: "Python Full Stack Certified Developer",
      issuer: "Luminar Technolab",
      date: "2025",
      category: "Full Stack Development",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:6ef7854f-56da-4497-b376-2e58156dbdef",
    },
    {
      title: "Python Certified Developer",
      issuer: "Zecser Business",
      date: "2025",
      category: "Backend",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:904b5dac-8ff8-46de-9c8e-16321043be5b",
    },
    // {
    //   title: "Docker Certified Associate",
    //   issuer: "Docker Inc",
    //   date: "2023",
    //   category: "DevOps",
    //   link: "https://docker.com",
    // },
    // {
    //   title: "Google Cloud Professional",
    //   issuer: "Google Cloud",
    //   date: "2024",
    //   category: "Cloud",
    //   link: "https://cloud.google.com",
    // },
    // {
    //   title: "Node.js Application Developer",
    //   issuer: "OpenJS Foundation",
    //   date: "2023",
    //   category: "Backend",
    //   link: "https://openjsf.org",
    // },
    // {
    //   title: "Kubernetes Administrator",
    //   issuer: "Cloud Native Computing Foundation",
    //   date: "2024",
    //   category: "DevOps",
    //   link: "https://cncf.io",
    // },
  ];

  const categories = ["All", "Cloud", "Database", "DevOps", "Backend"];

  return (
    <section id="certifications" className="py-20 sm:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Professional certifications and achievements in various technologies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {cert.category}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
