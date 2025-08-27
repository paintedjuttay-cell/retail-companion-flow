import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Layers, CheckCircle, ArrowRight, Play } from 'lucide-react';

const ProcessTeaser = () => {
  const steps = [
    {
      icon: Palette,
      title: "Design & Concept",
      description: "Collaborate with artists to create your unique vision and select base sneaker model.",
      duration: "1-2 days"
    },
    {
      icon: Layers,
      title: "Hand-Painting Process", 
      description: "Skilled artists carefully hand-paint your design using premium acrylic paints.",
      duration: "5-7 days"
    },
    {
      icon: CheckCircle,
      title: "Quality & Finishing",
      description: "Multiple quality checks and protective coating application for durability.",
      duration: "1-2 days"
    }
  ];

  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-6 h-6 text-accent mr-2" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Behind The Art</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              From Vision to Reality
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the meticulous process behind every hand-painted masterpiece. Each pair is crafted with precision and passion.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-accent to-paint-blue rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-paint-blue/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  
                  {/* Duration */}
                  <div className="flex items-center">
                    <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </div>
                  </div>
                </Card>

                {/* Connector Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-accent/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-r from-card to-card/50 backdrop-blur-sm border-accent/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Video/Image Preview */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group cursor-pointer">
                <div className="relative">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-accent ml-1" />
                  </div>
                  <div className="absolute inset-0 bg-accent/10 rounded-full animate-ping" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-paint-orange/5 via-transparent to-paint-blue/5" />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-sm font-medium text-accent bg-accent/10 px-4 py-2 rounded-full backdrop-blur-sm border border-accent/20 mt-16">
                    Watch Process Video
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                      Artistry in Every Brushstroke
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Watch our master artists transform blank sneakers into personalized works of art. 
                      Every detail is carefully planned and executed with precision that only comes from years of experience.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">15+</div>
                      <div className="text-sm text-muted-foreground">Layers of Paint</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">48hrs</div>
                      <div className="text-sm text-muted-foreground">Curing Time</div>
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full lg:w-auto bg-gradient-to-r from-accent to-paint-blue hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                  >
                    View Full Process
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessTeaser;