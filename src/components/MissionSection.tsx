const MissionSection = () => {
  return (
    <section id="mission" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-nature mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Transforming Education Through Nature</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted Together is an educational initiative designed to transform how schools approach learning by placing nature at the center of the classroom experience. We extend learning into thriving gardens where students become active participants in growth and care.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Beyond Resources to Stewardship</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our program emphasizes that understanding nature should not stop at using resources for human needs but should encompass the responsibility of stewardship. We help students understand the interconnectedness of local actions and worldwide ecological challenges.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Preparing Future Guardians</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rooted Together fosters global awareness alongside practical skills, preparing students to care for their immediate environments while contributing to solutions that protect the planet as a whole. We ensure education builds both personal responsibility and a collective vision for a sustainable future.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-earth p-8 rounded-lg shadow-soft">
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                A generation that does not simply know about sustainability but actively lives it, creating meaningful impact for both communities and the planet as a whole.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-soft border">
              <h4 className="text-xl font-semibold text-foreground mb-4">Why Now?</h4>
              <p className="text-muted-foreground leading-relaxed">
                We recognize the urgency of global environmental change and this generation's responsibility to address it. Climate change, deforestation, and biodiversity loss are no longer distant concerns but realities that impact daily life across the globe.
              </p>
            </div>

            <div className="bg-accent/20 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Approach</h4>
              <p className="text-muted-foreground leading-relaxed">
                Learning about nature cannot remain theoretical. It must involve hands-on engagement where students actively practice sustainability and care for living systems, creating positive experiences that influence lifelong habits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;