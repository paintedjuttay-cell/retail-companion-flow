import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Palette } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-paint-orange/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-paint-blue/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-paint-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-paint-purple/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Paint Splash Accent */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-accent/10 to-paint-blue/10 rounded-full px-6 py-3 backdrop-blur-sm border border-accent/20">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Limited Drops • Exclusive Art</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="block text-foreground">Where</span>
            <span className="block bg-gradient-to-r from-accent via-paint-blue to-paint-red bg-clip-text text-transparent animate-pulse-glow">
              Art Meets
            </span>
            <span className="block text-foreground">Street</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hand-painted custom sneakers by talented Pakistani artists. 
            Every pair is a <span className="text-accent font-semibold">wearable masterpiece</span> that tells your story.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-accent to-paint-blue hover:shadow-xl hover:shadow-accent/30 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            >
              <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              View Gallery
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
            >
              Commission Custom Art
            </Button>
          </div>

          {/* Featured Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Unique Pieces Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Talented Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Countries Shipped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Paint Drips */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-2 h-20 bg-gradient-to-b from-paint-orange to-transparent animate-paint-drip" />
        <div className="absolute bottom-0 left-1/2 w-3 h-24 bg-gradient-to-b from-paint-blue to-transparent animate-paint-drip" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 right-1/3 w-2 h-16 bg-gradient-to-b from-paint-red to-transparent animate-paint-drip" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default HeroSection;