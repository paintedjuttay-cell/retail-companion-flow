import Navigation from '@/components/Navigation';

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Artists</h1>
            <p className="text-xl text-muted-foreground">Content coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Artists;