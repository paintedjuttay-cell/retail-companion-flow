import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        {/* Main Story Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Story Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-accent mr-2" />
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                    More Than Just Sneakers
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Painted Juttay isn't just a shoe brand. We're an art movement that transforms everyday footwear 
                  into wearable masterpieces, bridging the gap between street culture and fine artistry.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Every sneaker we create tells a story. From the bustling streets of Karachi to the artistic 
                  alleys of Lahore, our talented Pakistani artists pour their cultural heritage and creative 
                  vision into each hand-painted design.
                </p>
                
                <p className="text-lg text-muted-foreground">
                  We believe in exclusivity, individuality, and supporting local craftsmanship. When you wear 
                  Painted Juttay, you're not just making a fashion statement—you're carrying a piece of art 
                  that represents originality, confidence, and creativity.
                </p>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-paint-blue hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-muted/50 to-muted rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-9xl text-muted-foreground/20">🎨</div>
                <div className="absolute inset-0 bg-gradient-to-br from-paint-orange/5 via-paint-blue/5 to-paint-red/5" />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-paint-orange/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-paint-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-paint-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusivity</h3>
              <p className="text-muted-foreground">
                Limited drops and one-of-one commissions ensure your sneakers are as unique as you are. 
                No mass production, just pure artistry.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-paint-red/20 to-paint-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-paint-red" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-muted-foreground">
                Supporting local Pakistani artists and building a global community of art enthusiasts 
                who appreciate authentic craftsmanship.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-paint-blue/20 to-paint-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-paint-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4">Passion</h3>
              <p className="text-muted-foreground">
                Every brushstroke is driven by passion for art, culture, and self-expression. 
                We don't just make shoes—we create wearable dreams.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;