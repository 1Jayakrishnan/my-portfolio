import { Code2, Database, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Backend Development",
      description: "Building scalable APIs and robust server-side applications",
    },
    {
      icon: Layers,
      title: "Full Stack",
      description: "End-to-end development from database to user interface",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, well-documented, and efficient code",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              A passionate developer dedicated to creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass p-6 sm:p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
              </Card>
            ))}
          </div>

          <Card className="glass p-6 sm:p-10 animate-fade-in">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
              I'm a software developer with a strong focus on backend systems and full-stack development.
              My journey in tech has been driven by curiosity and a desire to solve complex problems with
              elegant solutions.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Whether it's designing RESTful APIs, optimizing database queries, or crafting intuitive user
              interfaces, I approach every project with attention to detail and commitment to quality.
              I'm always eager to learn new technologies and contribute to innovative projects.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
