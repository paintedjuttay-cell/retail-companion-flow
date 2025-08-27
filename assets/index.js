// Painted Juttay React App Bundle
(function() {
  'use strict';

  // Check if React is available globally (loaded from CDN)
  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    console.log('Loading React from CDN...');
    loadReactFromCDN();
    return;
  }

  // Main App Component
  function App() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return React.createElement('div', { 
        className: 'min-h-screen bg-background flex items-center justify-center' 
      }, React.createElement('div', { className: 'animate-spin rounded-full h-8 w-8 border-b-2 border-primary' }));
    }

    return React.createElement('div', { className: 'min-h-screen bg-background' }, [
      React.createElement(Navigation, { key: 'nav' }),
      React.createElement('main', { key: 'main' }, [
        React.createElement(HeroSection, { key: 'hero' }),
        React.createElement(FeaturedDrop, { key: 'featured' }),
        React.createElement(ArtistSpotlight, { key: 'artist' }),
        React.createElement(BrandStory, { key: 'brand' }),
        React.createElement(ProcessTeaser, { key: 'process' }),
        React.createElement(SocialProof, { key: 'social' }),
        React.createElement(Newsletter, { key: 'newsletter' })
      ])
    ]);
  }

  // Navigation Component
  function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);

    return React.createElement('nav', { className: 'fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border' },
      React.createElement('div', { className: 'container-custom flex items-center justify-between h-16' }, [
        React.createElement('div', { key: 'logo', className: 'text-2xl font-bold heading-gradient' }, 'Painted Juttay'),
        React.createElement('div', { key: 'desktop-nav', className: 'hidden md:flex items-center space-x-8' }, [
          React.createElement('a', { key: 'gallery', href: '/pages/gallery', className: 'text-foreground hover:text-primary transition-colors' }, 'Gallery'),
          React.createElement('a', { key: 'commissions', href: '/pages/commissions', className: 'text-foreground hover:text-primary transition-colors' }, 'Commissions'),
          React.createElement('a', { key: 'artists', href: '/pages/artists', className: 'text-foreground hover:text-primary transition-colors' }, 'Artists'),
          React.createElement('a', { key: 'about', href: '/pages/about', className: 'text-foreground hover:text-primary transition-colors' }, 'About')
        ]),
        React.createElement('button', {
          key: 'mobile-toggle',
          className: 'md:hidden p-2',
          onClick: () => setIsOpen(!isOpen)
        }, '☰')
      ])
    );
  }

  // Hero Section Component
  function HeroSection() {
    return React.createElement('section', { className: 'relative min-h-screen flex items-center justify-center bg-animated overflow-hidden' }, [
      React.createElement('div', { key: 'bg-circles', className: 'absolute inset-0 pointer-events-none' }, [
        React.createElement('div', { key: 'circle1', className: 'absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse' }),
        React.createElement('div', { key: 'circle2', className: 'absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000' }),
        React.createElement('div', { key: 'circle3', className: 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500' })
      ]),
      React.createElement('div', { key: 'content', className: 'container-custom text-center z-10' }, [
        React.createElement('h1', { key: 'title', className: 'text-5xl md:text-7xl font-bold mb-6 heading-gradient text-glow' }, 
          'Where Art Meets Street'
        ),
        React.createElement('p', { key: 'subtitle', className: 'text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto' }, 
          'Custom painted leather jackets, denim, and streetwear that tell your story through bold, artistic expression.'
        ),
        React.createElement('div', { key: 'buttons', className: 'flex flex-col sm:flex-row gap-4 justify-center mb-16' }, [
          React.createElement('a', { 
            key: 'gallery-btn',
            href: '/pages/gallery',
            className: 'btn-gradient px-8 py-4 rounded-lg text-lg font-semibold hover-lift inline-flex items-center gap-2'
          }, ['View Gallery', React.createElement('span', { key: 'arrow' }, '→')]),
          React.createElement('a', { 
            key: 'commission-btn',
            href: '/pages/commissions',
            className: 'border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-background transition-all duration-300 inline-flex items-center gap-2'
          }, ['Commission Custom Art', React.createElement('span', { key: 'sparkle' }, '✨')])
        ]),
        React.createElement('div', { key: 'stats', className: 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto' }, [
          React.createElement('div', { key: 'stat1', className: 'text-center' }, [
            React.createElement('div', { key: 'number', className: 'text-3xl font-bold text-primary mb-2' }, '500+'),
            React.createElement('div', { key: 'label', className: 'text-muted' }, 'Pieces Created')
          ]),
          React.createElement('div', { key: 'stat2', className: 'text-center' }, [
            React.createElement('div', { key: 'number', className: 'text-3xl font-bold text-primary mb-2' }, '50+'),
            React.createElement('div', { key: 'label', className: 'text-muted' }, 'Featured Artists')
          ]),
          React.createElement('div', { key: 'stat3', className: 'text-center' }, [
            React.createElement('div', { key: 'number', className: 'text-3xl font-bold text-primary mb-2' }, '25+'),
            React.createElement('div', { key: 'label', className: 'text-muted' }, 'Countries Shipped')
          ])
        ])
      ])
    ]);
  }

  // Featured Drop Component
  function FeaturedDrop() {
    return React.createElement('section', { className: 'section-padding bg-surface' },
      React.createElement('div', { className: 'container-custom' }, [
        React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
          React.createElement('h2', { key: 'title', className: 'text-4xl md:text-5xl font-bold mb-4 heading-gradient' }, 'Featured Drop'),
          React.createElement('p', { key: 'subtitle', className: 'text-xl text-muted max-w-2xl mx-auto' }, 
            'Limited edition piece available now. Each jacket is hand-painted and completely unique.'
          )
        ]),
        React.createElement('div', { key: 'content', className: 'grid lg:grid-cols-2 gap-12 items-center' }, [
          React.createElement('div', { key: 'image', className: 'relative' },
            React.createElement('div', { className: 'aspect-square bg-gradient-primary rounded-2xl p-8 glow-primary' },
              React.createElement('div', { className: 'w-full h-full bg-card rounded-xl flex items-center justify-center text-6xl' }, '🎨')
            )
          ),
          React.createElement('div', { key: 'details', className: 'space-y-6' }, [
            React.createElement('h3', { key: 'name', className: 'text-3xl font-bold' }, 'Urban Phoenix Leather Jacket'),
            React.createElement('p', { key: 'desc', className: 'text-lg text-muted' }, 
              'A stunning phoenix rises from urban ashes in this hand-painted masterpiece. Features premium leather construction with custom artwork that tells a story of rebirth and transformation.'
            ),
            React.createElement('div', { key: 'price', className: 'text-2xl font-bold text-primary' }, '$599'),
            React.createElement('div', { key: 'timer-section' }, [
              React.createElement('p', { key: 'timer-label', className: 'text-sm text-muted mb-2' }, 'Limited time offer ends in:'),
              React.createElement(CountdownTimer, { key: 'timer', targetDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) })
            ]),
            React.createElement('button', { 
              key: 'buy-btn',
              className: 'btn-gradient px-8 py-4 rounded-lg text-lg font-semibold hover-lift w-full sm:w-auto'
            }, 'Reserve Your Piece')
          ])
        ])
      ])
    );
  }

  // Countdown Timer Component
  function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = React.useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    React.useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance > 0) {
          setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
          });
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [targetDate]);

    return React.createElement('div', { className: 'flex space-x-4 text-center' }, [
      ['days', 'hours', 'minutes', 'seconds'].map(unit => 
        React.createElement('div', { key: unit, className: 'bg-card p-3 rounded-lg' }, [
          React.createElement('div', { key: 'number', className: 'text-2xl font-bold text-primary' }, timeLeft[unit]),
          React.createElement('div', { key: 'label', className: 'text-xs text-muted uppercase' }, unit)
        ])
      )
    ]);
  }

  // Artist Spotlight Component
  function ArtistSpotlight() {
    return React.createElement('section', { className: 'section-padding' },
      React.createElement('div', { className: 'container-custom' }, [
        React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
          React.createElement('h2', { key: 'title', className: 'text-4xl md:text-5xl font-bold mb-4 heading-gradient' }, 'Artist Spotlight'),
          React.createElement('p', { key: 'subtitle', className: 'text-xl text-muted max-w-2xl mx-auto' }, 
            'Meet the talented artists behind our unique designs'
          )
        ]),
        React.createElement('div', { key: 'artist', className: 'grid lg:grid-cols-2 gap-12 items-center' }, [
          React.createElement('div', { key: 'image', className: 'relative' },
            React.createElement('div', { className: 'aspect-square bg-gradient-accent rounded-2xl p-8' },
              React.createElement('div', { className: 'w-full h-full bg-card rounded-xl flex items-center justify-center text-6xl' }, '👨‍🎨')
            )
          ),
          React.createElement('div', { key: 'details', className: 'space-y-6' }, [
            React.createElement('h3', { key: 'name', className: 'text-3xl font-bold' }, 'Alex Rodriguez'),
            React.createElement('p', { key: 'bio', className: 'text-lg text-muted' }, 
              'Street artist turned fashion designer, Alex brings 15 years of mural and graffiti experience to wearable art. Known for bold colors and urban themes that capture the pulse of city life.'
            ),
            React.createElement('div', { key: 'stats', className: 'grid grid-cols-2 gap-4' }, [
              React.createElement('div', { key: 'pieces' }, [
                React.createElement('div', { key: 'number', className: 'text-2xl font-bold text-primary' }, '200+'),
                React.createElement('div', { key: 'label', className: 'text-muted' }, 'Pieces Created')
              ]),
              React.createElement('div', { key: 'experience' }, [
                React.createElement('div', { key: 'number', className: 'text-2xl font-bold text-primary' }, '15+'),
                React.createElement('div', { key: 'label', className: 'text-muted' }, 'Years Experience')
              ])
            ]),
            React.createElement('a', { 
              key: 'view-work',
              href: '/pages/artists',
              className: 'inline-flex items-center gap-2 text-primary hover:text-accent transition-colors'
            }, ['View Alex\'s Work', React.createElement('span', { key: 'arrow' }, '→')])
          ])
        ])
      ])
    );
  }

  // Brand Story Component
  function BrandStory() {
    return React.createElement('section', { className: 'section-padding bg-surface' },
      React.createElement('div', { className: 'container-custom' }, [
        React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
          React.createElement('h2', { key: 'title', className: 'text-4xl md:text-5xl font-bold mb-4 heading-gradient' }, 'Our Story'),
          React.createElement('p', { key: 'subtitle', className: 'text-xl text-muted max-w-2xl mx-auto' }, 
            'From street corners to fashion runways, discover how we\'re revolutionizing wearable art'
          )
        ]),
        React.createElement('div', { key: 'story', className: 'prose prose-lg max-w-4xl mx-auto text-center' }, [
          React.createElement('p', { key: 'p1', className: 'text-lg text-muted mb-6' }, 
            'Founded in 2018 by street artists who believed fashion should be as bold and expressive as the art on city walls. We started with a simple mission: transform everyday clothing into canvases for artistic expression.'
          ),
          React.createElement('p', { key: 'p2', className: 'text-lg text-muted mb-8' }, 
            'Today, we work with over 50 artists worldwide, creating unique pieces that blur the line between street art and high fashion. Each piece tells a story, carries an attitude, and makes a statement.'
          ),
          React.createElement('a', { 
            key: 'learn-more',
            href: '/pages/about',
            className: 'btn-gradient px-8 py-4 rounded-lg text-lg font-semibold hover-lift inline-flex items-center gap-2'
          }, ['Learn More About Us', React.createElement('span', { key: 'arrow' }, '→')])
        ])
      ])
    );
  }

  // Process Teaser Component
  function ProcessTeaser() {
    return React.createElement('section', { className: 'section-padding' },
      React.createElement('div', { className: 'container-custom' }, [
        React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
          React.createElement('h2', { key: 'title', className: 'text-4xl md:text-5xl font-bold mb-4 heading-gradient' }, 'How It Works'),
          React.createElement('p', { key: 'subtitle', className: 'text-xl text-muted max-w-2xl mx-auto' }, 
            'From concept to creation, see how your vision becomes wearable art'
          )
        ]),
        React.createElement('div', { key: 'steps', className: 'grid md:grid-cols-3 gap-8' }, [
          [
            { step: '01', title: 'Share Your Vision', desc: 'Tell us your story, style preferences, and inspiration. We\'ll match you with the perfect artist.' },
            { step: '02', title: 'Design Collaboration', desc: 'Work directly with your artist to refine the design. See sketches and mockups before painting begins.' },
            { step: '03', title: 'Hand-Painted Creation', desc: 'Watch your piece come to life through progress photos. Each stroke is documented and shared with you.' }
          ].map((item, index) => 
            React.createElement('div', { 
              key: index,
              className: 'text-center p-6 bg-card rounded-2xl hover-lift'
            }, [
              React.createElement('div', { key: 'step', className: 'text-4xl font-bold text-primary mb-4' }, item.step),
              React.createElement('h3', { key: 'title', className: 'text-xl font-bold mb-3' }, item.title),
              React.createElement('p', { key: 'desc', className: 'text-muted' }, item.desc)
            ])
          )
        ]),
        React.createElement('div', { key: 'cta', className: 'text-center mt-12' },
          React.createElement('a', { 
            href: '/pages/process',
            className: 'inline-flex items-center gap-2 text-primary hover:text-accent transition-colors text-lg'
          }, ['See Full Process', React.createElement('span', { key: 'arrow' }, '→')])
        )
      ])
    );
  }

  // Social Proof Component
  function SocialProof() {
    return React.createElement('section', { className: 'section-padding bg-surface' },
      React.createElement('div', { className: 'container-custom' }, [
        React.createElement('div', { key: 'header', className: 'text-center mb-16' }, [
          React.createElement('h2', { key: 'title', className: 'text-4xl md:text-5xl font-bold mb-4 heading-gradient' }, 'What Clients Say'),
          React.createElement('p', { key: 'subtitle', className: 'text-xl text-muted max-w-2xl mx-auto' }, 
            'Real stories from people who wear their art with pride'
          )
        ]),
        React.createElement('div', { key: 'testimonials', className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' },
          [
            { name: 'Sarah Chen', role: 'Fashion Designer', quote: 'My Painted Juttay jacket is my signature piece. I get compliments everywhere I go!' },
            { name: 'Marcus Johnson', role: 'Musician', quote: 'The attention to detail is incredible. It\'s not just clothing, it\'s wearable art that tells my story.' },
            { name: 'Elena Rodriguez', role: 'Art Collector', quote: 'I own several pieces and each one is unique. The quality and artistry are unmatched.' }
          ].map((testimonial, index) => 
            React.createElement('div', { 
              key: index,
              className: 'bg-card p-6 rounded-2xl hover-lift'
            }, [
              React.createElement('p', { key: 'quote', className: 'text-muted mb-4 italic' }, `"${testimonial.quote}"`),
              React.createElement('div', { key: 'author' }, [
                React.createElement('div', { key: 'name', className: 'font-bold' }, testimonial.name),
                React.createElement('div', { key: 'role', className: 'text-sm text-muted' }, testimonial.role)
              ])
            ])
          )
        )
      ])
    );
  }

  // Newsletter Component
  function Newsletter() {
    return React.createElement('section', { className: 'section-padding' },
      React.createElement('div', { className: 'container-custom' }, 
        React.createElement('div', { className: 'bg-gradient-primary rounded-3xl p-12 text-center text-white' }, [
          React.createElement('h2', { key: 'title', className: 'text-4xl md:text-5xl font-bold mb-4' }, 'Stay in the Loop'),
          React.createElement('p', { key: 'subtitle', className: 'text-xl mb-8 opacity-90 max-w-2xl mx-auto' }, 
            'Get first access to new drops, artist spotlights, and exclusive behind-the-scenes content.'
          ),
          React.createElement('div', { key: 'form', className: 'flex flex-col sm:flex-row gap-4 max-w-md mx-auto' }, [
            React.createElement('input', { 
              key: 'email',
              type: 'email',
              placeholder: 'Your email address',
              className: 'flex-1 px-4 py-3 rounded-lg text-background bg-white/90 placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-white'
            }),
            React.createElement('button', { 
              key: 'submit',
              className: 'px-6 py-3 bg-background text-primary rounded-lg font-semibold hover:bg-background/90 transition-all duration-300'
            }, 'Subscribe')
          ])
        ])
      )
    );
  }

  function loadReactFromCDN() {
    const reactScript = document.createElement('script');
    reactScript.src = 'https://unpkg.com/react@18/umd/react.production.min.js';
    reactScript.onload = function() {
      const reactDOMScript = document.createElement('script');
      reactDOMScript.src = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
      reactDOMScript.onload = function() {
        console.log('React loaded, initializing app...');
        initializeApp();
      };
      document.head.appendChild(reactDOMScript);
    };
    document.head.appendChild(reactScript);
  }

  function initializeApp() {
    const root = document.getElementById('root');
    if (root && ReactDOM && ReactDOM.createRoot) {
      const reactRoot = ReactDOM.createRoot(root);
      reactRoot.render(React.createElement(App));
      console.log('Painted Juttay app initialized successfully!');
    } else if (root && ReactDOM && ReactDOM.render) {
      ReactDOM.render(React.createElement(App), root);
      console.log('Painted Juttay app initialized successfully (legacy)!');
    } else {
      console.error('Could not find root element or ReactDOM');
    }
  }

  // Initialize app if React is already available
  if (typeof React !== 'undefined' && typeof ReactDOM !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  }

  console.log('Painted Juttay theme loaded successfully');
})();