import { Link } from 'react-router-dom';
import anjali from '../assets/anjali.jpg'
import logo from '../assets/logo4.png'

const AboutUs = () => {
  return (
    <div className="about-page" style={{ backgroundColor: '#f9f2f5' }}>
      {/* Hero Section */}
      <section className="about-hero" style={{
        background: 'linear-gradient(rgba(120, 32, 79, 0.9), rgba(120, 32, 79, 0.9)), url("/images/about-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '8rem 0 6rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1rem',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
          }}>
            About Neelam Nursing
          </h1>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto',
            opacity: 0.9
          }}>
            Compassionate care rooted in expertise, serving our community since 2010
          </p>
        </div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0
        }}>
          <svg 
            style={{
              position: 'relative',
              display: 'block',
              width: 'calc(100% + 1.3px)',
              height: '80px'
            }} 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              fill="#f9f2f5"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              fill="#f9f2f5"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,233.88-16.45,97.39,46.57,183.09,81.91,232.8,76.67,84.7-7.01,166.57-50.85,237-89.67,69-37,137.4-80.88,203.6-94.5,78-16.71,155.8-46.29,221.8-88.45C1206.69,20.07,1200,0,1200,0Z" 
              fill="#f9f2f5"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story" style={{
        padding: '5rem 0',
        backgroundColor: '#f9f2f5'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{
            maxWidth: '900px',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#78204f',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Our Humble Beginnings
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: '#c82e6e',
                borderRadius: '2px'
              }}></span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#555',
              lineHeight: '1.8'
            }}>
              Founded in 2010 by Mrs. Neelam Sharma, a registered nurse with over 20 years of experience, 
              Neelam Nursing began as a small home care service with just three nurses. What started as a 
              passion project to provide quality care to elderly patients in our community has now grown 
              into one of the most trusted nursing service providers in the region.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              flex: '1',
              minWidth: '300px',
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#78204f20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: '#78204f'
              }}>
                👩⚕️
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#78204f',
                marginBottom: '1rem'
              }}>
                Our Mission
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.7'
              }}>
                To provide compassionate, professional nursing care that enhances quality of life and promotes independence for our patients in the comfort of their homes.
              </p>
            </div>

            <div style={{
              flex: '1',
              minWidth: '300px',
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#d8448e20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: '#d8448e'
              }}>
                👁️
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#78204f',
                marginBottom: '1rem'
              }}>
                Our Vision
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.7'
              }}>
                To be the most trusted home healthcare provider by setting the standard for excellence in personalized nursing care.
              </p>
            </div>

            <div style={{
              flex: '1',
              minWidth: '300px',
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#9e0b6d20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem',
                color: '#9e0b6d'
              }}>
                🤝
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#78204f',
                marginBottom: '1rem'
              }}>
                Our Values
              </h3>
              <p style={{
                color: '#666',
                lineHeight: '1.7'
              }}>
                Compassion, Integrity, Excellence, Respect, and Personalized Care are the core values that guide every aspect of our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="our-team" style={{
        padding: '5rem 0',
        backgroundColor: 'white'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#78204f',
              marginBottom: '1rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Meet Our Team
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: '#c82e6e',
                borderRadius: '2px'
              }}></span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#555',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Our team of certified professionals brings expertise, compassion, and dedication to every patient.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                name: 'Neelam Sharma',
                role: 'Founder & Head Nurse',
                experience: '25 years',
                image: '../../src/assets/lachho.jpg',
                bio: 'RN with specialization in geriatric care and palliative nursing.'
              },
              {
                name: 'Dr. Rajiv Malhotra',
                role: 'Medical Director',
                experience: '18 years',
                image: '../../src/assets/rajiv.jpg',
                bio: 'MD in General Medicine with focus on home healthcare.'
              },
              {
                name: 'Priya Patel',
                role: 'Senior Nurse',
                experience: '12 years',
                image: '../../src/assets/priya.jpg',
                bio: 'Specializes in post-surgical and wound care management.'
              },
              {
                name: 'Anjali Mehta',
                role: 'Pediatric Nurse',
                experience: '8 years',
                image:'../../src/assets/anjali.jpg',
                bio: 'Certified in newborn care and maternal health support.'
              }
            ].map((member, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  height: '250px',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div style={{
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#78204f',
                    marginBottom: '0.5rem'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    color: '#d8448e',
                    fontWeight: '500',
                    marginBottom: '0.5rem'
                  }}>
                    {member.role}
                  </p>
                  <p style={{
                    color: '#666',
                    fontSize: '0.9rem',
                    marginBottom: '0.5rem'
                  }}>
                    {member.experience} experience
                  </p>
                  <p style={{
                    color: '#555',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones" style={{
        padding: '5rem 0',
        background: 'linear-gradient(to right, #9e0b6d, #c82e6e)',
        color: 'white'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Our Journey
          </h2>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            gap: '2rem'
          }}>
            {[
              {
                number: '5000+',
                title: 'Patients Served'
              },
              {
                number: '50+',
                title: 'Qualified Nurses'
              },
              {
                number: '12',
                title: 'Years of Service'
              },
              {
                number: '98%',
                title: 'Satisfaction Rate'
              }
            ].map((item, index) => (
              <div 
                key={index}
                style={{
                  textAlign: 'center',
                  minWidth: '200px'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: '#ffd700'
                }}>
                  {item.number}
                </div>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: '500'
                }}>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta" style={{
        padding: '5rem 0',
        backgroundColor: '#f9f2f5',
        textAlign: 'center'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#78204f',
            marginBottom: '1.5rem'
          }}>
            Ready to Experience the Neelam Nursing Difference?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.7'
          }}>
            Contact us today to discuss how we can provide personalized care for you or your loved one.
          </p>
          <Link 
            to="/contact" 
            style={{
              display: 'inline-block',
              padding: '0.9rem 2.5rem',
              backgroundColor: '#78204f',
              color: 'white',
              borderRadius: '50px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#9e0b6d';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#78204f';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;