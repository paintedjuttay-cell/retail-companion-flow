import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Flame, Eye } from 'lucide-react';
import CountdownTimer from '@/components/ui/countdown-timer';

const FeaturedDrop = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Flame className="w-6 h-6 text-accent mr-2 animate-pulse" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Current Drop</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Urban Legends Collection
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Limited edition hand-painted sneakers inspired by street art legends. Only 25 pairs available.
          </p>
        </div>

        {/* Featured Product */}
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Product Image */}
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-muted/50 to-muted rounded-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-6xl text-muted-foreground/30">👟</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-paint-orange/10 via-paint-blue/10 to-paint-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-accent to-paint-blue text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Limited Drop
                </div>
                {/* View Gallery Button */}
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Gallery
                </Button>
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Graffiti Legends #001</h3>
                  <p className="text-muted-foreground mb-4">
                    Hand-painted tribute to the pioneers of street art. Features intricate graffiti-style lettering and urban cityscape elements painted with premium acrylics.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Artist: <span className="text-accent">Zara Rahman</span></span>
                    <span>•</span>
                    <span>Base: Jordan 1 High</span>
                  </div>
                </div>

                {/* Countdown */}
                <div className="bg-secondary/50 rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-accent mr-2" />
                      <span className="text-sm font-medium text-accent">Drop Ends In</span>
                    </div>
                    <span className="text-sm text-muted-foreground">23 of 25 available</span>
                  </div>
                  <CountdownTimer targetDate={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)} />
                </div>

                {/* Price and Actions */}
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-accent">$299</span>
                    <span className="text-lg text-muted-foreground line-through">$399</span>
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
                      Limited Price
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      size="lg"
                      className="flex-1 bg-gradient-to-r from-accent to-paint-blue hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                    >
                      Shop Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Notify When Available
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Next Drop Teaser */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Next drop: <span className="text-accent font-semibold">Neon Dreams Collection</span> - Coming February 15th
          </p>
          <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10">
            Get Early Access →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrop;