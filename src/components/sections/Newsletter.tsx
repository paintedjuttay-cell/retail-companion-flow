import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Mail, Gift, Bell, Sparkles, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll be the first to know about new drops and exclusive offers.",
      });
      setEmail('');
    }
  };

  const benefits = [
    {
      icon: Bell,
      title: "Drop Alerts",
      description: "First access to limited edition releases"
    },
    {
      icon: Gift,
      title: "Exclusive Offers", 
      description: "Special discounts and early bird pricing"
    },
    {
      icon: Sparkles,
      title: "Behind the Scenes",
      description: "Artist stories and creation process insights"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-accent/20 shadow-2xl">
            <div className="relative p-12">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-paint-orange/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-paint-blue/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-paint-blue/20 rounded-2xl flex items-center justify-center">
                      <Mail className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                      Join the Art Movement
                    </span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Be the first to discover new drops, get exclusive access to limited editions, 
                    and join a community of art enthusiasts who appreciate authentic craftsmanship.
                  </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-paint-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 border-accent/20 focus:border-accent bg-background/50 backdrop-blur-sm"
                      required
                    />
                    <Button 
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-accent to-paint-blue hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group h-12 px-8"
                    >
                      Subscribe
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </form>

                {/* Disclaimer */}
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground">
                    Join 15,000+ subscribers. Unsubscribe anytime. 
                    <br className="hidden sm:block" />
                    We respect your privacy and never share your information.
                  </p>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2" />
                    <span>15k+ subscribers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-paint-blue rounded-full mr-2" />
                    <span>Weekly updates</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-paint-red rounded-full mr-2" />
                    <span>No spam, ever</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;