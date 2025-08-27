import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin, Brush, ArrowRight } from 'lucide-react';

const ArtistSpotlight = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Brush className="w-6 h-6 text-accent mr-2" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Featured Artist</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Meet the Visionary
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the talented Pakistani artists bringing street culture to life, one sneaker at a time.
          </p>
        </div>

        {/* Artist Spotlight Card */}
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-accent/20 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Artist Image */}
              <div className="lg:col-span-2 relative">
                <div className="aspect-[4/5] lg:aspect-auto lg:h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                  <div className="text-8xl text-muted-foreground/30">👨‍🎨</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-paint-orange/10 via-transparent to-paint-blue/10" />
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 left-4 flex items-center bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </div>
              </div>

              {/* Artist Details */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Artist Info */}
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2">Zara Rahman</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Lahore, Pakistan</span>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A street art pioneer who transformed Lahore's walls into canvases of cultural expression. 
                      Zara brings 8 years of graffiti mastery to every sneaker, blending traditional Pakistani 
                      motifs with contemporary urban aesthetics.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">127</div>
                      <div className="text-sm text-muted-foreground">Sneakers Painted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">8</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">4.9</div>
                      <div className="text-sm text-muted-foreground">Artist Rating</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-accent pl-6 italic text-lg text-muted-foreground">
                    "Every sneaker tells a story. I paint not just designs, but dreams, 
                    culture, and the soul of the streets onto each pair."
                  </blockquote>

                  {/* Specialties */}
                  <div>
                    <h4 className="font-semibold mb-3">Signature Styles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Graffiti Art', 'Cultural Motifs', 'Abstract Expressionism', 'Street Portraiture'].map((style) => (
                        <span 
                          key={style}
                          className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm border border-accent/20"
                        >
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-gradient-to-r from-accent to-paint-blue hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
                    >
                      Commission from Zara
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* More Artists CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Discover our entire community of talented Pakistani artists
          </p>
          <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 group">
            Meet All Artists
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;