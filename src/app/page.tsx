import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <div className="hero-badge">100% Organic & Natural</div>
            <h1 className="hero-title">
              Cultivating <span>Excellence</span> for Tomorrow
            </h1>
            <p className="hero-subtitle">
              Discover premium agricultural products sourced directly from the finest farms. 
              We bring nature's best right to your doorstep, ensuring quality, freshness, and sustainability.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <Image 
              src="https://images.unsplash.com/photo-1595825833472-8c117ec88219?q=80&w=2070&auto=format&fit=crop" 
              alt="Fresh agricultural products" 
              width={600} 
              height={700} 
              className="hero-image"
              priority
            />
            <div className="floating-card card-1">
              <div style={{ background: 'var(--primary-green)', padding: '0.8rem', borderRadius: '50%', color: 'white' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div>
                <h4 style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>Premium Quality</h4>
                <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>Certified Organic</p>
              </div>
            </div>
            
            <div className="floating-card card-2">
              <div style={{ background: 'var(--accent-yellow)', padding: '0.8rem', borderRadius: '50%', color: 'var(--text-dark)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h4 style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>Fresh Daily</h4>
                <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>Direct from farms</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
