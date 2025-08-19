import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Calendar, Lightbulb } from "lucide-react";

const ImplementationSection = () => {
  return (
    <section id="implementation" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple, Affordable Implementation
          </h2>
          <div className="w-24 h-1 bg-gradient-nature mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The goal of Rooted Together is not to create large, resource-intensive projects but to show 
            that small and affordable gardens can have a powerful impact on education and wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded-full">
                  <Lightbulb className="w-5 h-5 text-accent-foreground" />
                </div>
                Accessible & Sustainable Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                By focusing on accessibility and sustainability, the initiative ensures that schools of all sizes 
                and budgets can adopt the program. Gardens can begin with simple raised beds, planter boxes, or 
                even container gardens, making it possible for urban schools with limited outdoor space to participate. 
                These gardens can be gradually expanded over time, depending on the resources and interest of the 
                school community.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-leaf-fresh rounded-full">
                  <DollarSign className="w-5 h-5 text-primary-foreground" />
                </div>
                Cost-Effective Budgeting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Initial costs cover materials such as soil, seeds, basic gardening tools, and wood or recycled 
                materials for planter beds. Partnerships with local garden centers, farms, or environmental 
                organizations can help offset costs through donations or discounts. Schools can integrate 
                garden-building into classroom projects, further reducing expenses by involving students and families.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-earth-warm rounded-full">
                  <Users className="w-5 h-5 text-primary-foreground" />
                </div>
                Community Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Rooted Together is designed to be integrated directly into the school day. Teachers can use gardens 
                as outdoor classrooms for science, math, health, or art lessons, while incorporating them into 
                extracurricular programs. A clear plan for responsibility-sharing ensures students, teachers, and 
                volunteers all contribute to garden care, building community ownership and pride.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-sky-soft rounded-full">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
                Year-Round Sustainability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                During summer months, community members, parents, or school staff can be invited to continue upkeep, 
                ensuring continuity across the year. Ongoing costs remain relatively low, with seasonal replenishing 
                of soil and seeds forming the bulk of recurring expenses. Harvested produce can be used in classroom 
                cooking activities, school cafeterias, or donated to community organizations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-earth p-8 rounded-lg shadow-natural text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Transformative Change Through Thoughtful Planning
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            By focusing on small, affordable, and well-structured gardens, Rooted Together demonstrates that 
            transformative educational change does not require large financial investments but rather thoughtful 
            planning, creativity, and collaboration. This model makes it realistic for schools to implement and 
            sustainable for long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;