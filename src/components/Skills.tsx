import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Python", "ML", "AI Agents", "Django", "Django REST Framework", "Java", "C", "ReactJS"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "CSS", "TailwindCSS", "Bootstrap"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite", "MySQL"],
    },
    // {
    //   title: "Cloud & DevOps",
    //   skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"],
    // },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "REST APIs", "Postman", "Agile",, "VS Code", "PyCharm"],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Technologies and tools I work with regularly
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="glass p-6 hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
