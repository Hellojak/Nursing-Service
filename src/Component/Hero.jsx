import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero" style={{
            background: 'linear-gradient(135deg, #78204f 0%, #d8448e 100%)',
            color: 'white',
            padding: '6rem 0 8rem',
            // border: '1px solid green',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            alignContent: 'center',
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)'
            }}></div>

            <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-150px',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)'
            }}></div>

            <div className="container lg:text-3xl" style={{
                maxWidth: '1200px',
        
                height: "auto",
                margin: '0 auto',
                padding: '0 1rem',
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: '700',
                    lineHeight: '1.2',
                    marginBottom: '1.5rem',
                    // maxWidth: '800px'
                }}>
                    Compassionate <span style={{ color: '#ffd700' }}>Nursing Care</span> at Your Doorstep
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    marginBottom: '2.5rem',
                    maxWidth: '700px',
                    opacity: 0.9,
                    lineHeight: '1.6'
                }}>
                    Professional healthcare services delivered with warmth and expertise.
                    Our certified nurses provide personalized care in the comfort of your home.
                </p>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginBottom: '2rem'
                }}>
                    <Link
                        to="/services"
                        style={{
                            backgroundColor: '#c82e6e',
                            color: 'white',
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            border: '2px solid #c82e6e',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#9e0b6d';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#c82e6e';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Our Services
                    </Link>

                    <Link
                        to="/contact"
                        style={{
                            backgroundColor: 'transparent',
                            color: 'white',
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            border: '2px solid white',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Book a Consultation
                    </Link>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'rgba(255,255,255,0.9)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                style={{
                                    width: '1.25rem',
                                    height: '1.25rem',
                                    color: '#ffd700'
                                }}
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                    <span>Rated 4.9/5 by 200+ families</span>
                </div>
            </div>

            {/* Hero image (absolute positioned) */}
            <div style={{
                position: 'absolute',
                right: '5%',
                bottom: '0',
                width: '40%',
                maxWidth: '500px',
                zIndex: 1,
                display: 'none' // Hidden on mobile
            }}>
                <img
                    src="/images/nurse-hero.png"
                    alt="Caring nurse"
                    style={{
                        width: '100%',
                        height: 'auto',
                        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))'
                    }}
                />
            </div>

            {/* Wave divider at bottom */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                overflow: 'hidden',
                lineHeight: '0',
                transform: 'rotate(180deg)',
                transition: 'all 2s ease'
            }}>
                <svg
                    style={{
                        position: 'relative',
                        display: 'block',
                        width: 'calc(100% + 1.3px)',
                        height: '100px'
                    }}
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25"
                        fill="#ffffff"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5"
                        fill="#ffffff"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,233.88-16.45,97.39,46.57,183.09,81.91,232.8,76.67,84.7-7.01,166.57-50.85,237-89.67,69-37,137.4-80.88,203.6-94.5,78-16.71,155.8-46.29,221.8-88.45C1206.69,20.07,1200,0,1200,0Z"
                        fill="#ffffff"
                    ></path>
                </svg>
                
            </div>
        </section>
    );
};

export default Hero;