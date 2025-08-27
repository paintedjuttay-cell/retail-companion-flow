import { Card } from '@/components/ui/card';
import { Star, Instagram, Twitter } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      username: "@sarahstyle",
      rating: 5,
      text: "Absolutely blown away by the detail and artistry! My custom Jordans are literally wearable art. Everyone asks where I got them.",
      image: "👩‍💼"
    },
    {
      name: "Marcus Thompson",
      username: "@marcusdrips",
      rating: 5,
      text: "The quality is insane. I've worn these for 6 months and the paint still looks fresh. Worth every penny for something this unique.",
      image: "👨‍🎨"
    },
    {
      name: "Aisha Malik",
      username: "@aishakicks",
      rating: 5,
      text: "Supporting Pakistani artists while getting the most fire sneakers ever? Yes please! The cultural elements in my design are perfect.",
      image: "👩‍🎤"
    }
  ];

  const instaPosts = [
    { likes: "2.3k", image: "🎨" },
    { likes: "1.8k", image: "👟" },
    { likes: "3.1k", image: "🖌️" },
    { likes: "2.7k", image: "🔥" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-accent mr-2" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Customer Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              What Our Community Says
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made Painted Juttay part of their style story.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-accent fill-current" />
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15k+</div>
            <div className="text-sm text-muted-foreground">Instagram Followers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Repeat Customers</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-accent/20 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.username}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>

        {/* Instagram Feed Preview */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <Instagram className="w-6 h-6 text-accent mr-2" />
            <span className="text-lg font-semibold">Follow our journey on Instagram</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {instaPosts.map((post, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center text-4xl hover:shadow-lg transition-all duration-300">
                  {post.image}
                  <div className="absolute inset-0 bg-gradient-to-br from-paint-orange/10 via-transparent to-paint-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded backdrop-blur-sm">
                  ❤️ {post.likes}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mb-4">
            <span className="text-accent font-semibold">@paintedjuttay</span> • See customer photos and behind-the-scenes content
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm border border-accent/20">
              <Instagram className="w-4 h-4 mr-2" />
              Follow @paintedjuttay
            </div>
            <div className="flex items-center bg-muted/50 text-muted-foreground px-4 py-2 rounded-full text-sm">
              <Twitter className="w-4 h-4 mr-2" />
              @paintedjuttay
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;