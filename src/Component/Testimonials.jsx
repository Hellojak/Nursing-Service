import { useState } from 'react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [videoPlaying, setVideoPlaying] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      relation: 'Son of Patient',
      rating: 5,
      content: 'The care my mother received from Neelam Nursing was exceptional. The nurse was not only professional but also treated her with genuine kindness and respect. Her mobility improved significantly within weeks.',
      category: 'elderly',
      video: 'https://www.youtube.com/embed/example1',
      image: '../../src/assets/rajiv.jpg',
      date: '15 March 2023'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      relation: 'Post-Surgical Patient',
      rating: 5,
      content: 'After my knee replacement surgery, the nursing care helped me recover faster than expected. The wound care was meticulous, and they taught me exercises that made a huge difference. Highly recommend their services!',
      category: 'post-surgical',
      video: 'https://www.youtube.com/embed/example2',
      image: '../../src/assets/priya.jpg',
      date: '2 February 2023'
    },
    {
      id: 3,
      name: 'Anjali Mehta',
      relation: 'Daughter of Patient',
      rating: 4,
      content: 'Regular visits from Neelam Nursing have dramatically improved my father\'s quality of life. The dementia care specialist they provided was patient and knowledgeable. We finally have peace of mind.',
      category: 'elderly',
      video: null,
      image: '../../src/assets/anjali.jpg',
      date: '10 January 2023'
    },
    {
      id: 4,
      name: 'Vikram Patel',
      relation: 'Husband of Patient',
      rating: 5,
      content: 'The maternity nurse assigned to us after our baby\'s birth was a godsend. She helped my wife with breastfeeding and taught us newborn care techniques we still use today. Worth every rupee!',
      category: 'maternal',
      video: '../../src/assets/rajesh.jpg',
      image: '../../src/assets/lachho.jpg',
      date: '5 December 2022'
    },
    {
      id: 5,
      name: 'Sunita Reddy',
      relation: 'Diabetes Patient',
      rating: 5,
      content: 'As a diabetic patient, the regular monitoring and dietary guidance provided by Neelam Nursing has helped me manage my condition better than ever before. My HbA1c levels are now in the normal range.',
      category: 'chronic',
      video: null,
      image: '../../src/assets/lachho.jpg',
      date: '20 November 2022'
    },
    {
      id: 6,
      name: 'Amit Joshi',
      relation: 'Son of Palliative Patient',
      rating: 5,
      content: 'During my father\'s final days, the palliative care team provided not just medical support but emotional comfort to our entire family. Their compassion made an unbearable situation slightly easier.',
      category: 'chronic',
      video: 'https://www.youtube.com/embed/example6',
      image: '../../src/assets/rajiv.jpg',
      date: '8 October 2022'
    }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Testimonials', color: '#78204f' },
    { id: 'elderly', name: 'Elderly Care', color: '#d8448e' },
    { id: 'post-surgical', name: 'Post-Surgical', color: '#9e0b6d' },
    { id: 'chronic', name: 'Chronic Care', color: '#c82e6e' },
    { id: 'maternal', name: 'Maternal/Newborn', color: '#78204f' }
  ];

  const handleVideoPlay = (id) => {
    setVideoPlaying(videoPlaying === id ? null : id);
  };

  return (
    <div className="testimonials-page" style={{ backgroundColor: '#f9f2f5' }}>
      {/* Hero Section */}
      <section className="testimonials-hero" style={{
        background: 'linear-gradient(135deg, #78204f 0%, #d8448e 100%)',
        color: 'white',
        padding: '6rem 0 4rem',
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
            marginBottom: '1rem'
          }}>
            Patient Testimonials
          </h1>
          <p style={{
            fontSize: '1.5rem',
            maxWidth: '800px',
            margin: '1rem auto',
            opacity: 0.9
          }}>
            Hear from families who've experienced the Neelam Nursing difference
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

      {/* Testimonials Filter */}
      <section className="testimonials-filter" style={{
        padding: '2rem 0',
        backgroundColor: 'white'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                style={{
                  padding: '0.6rem 1.5rem',
                  fontSize:'1.3rem',
                  borderRadius: '50px',
                  border: '1px solid red',
                  backgroundColor: activeFilter === category.id ? category.color : 'white',
                  color: activeFilter === category.id ? 'white' : category.color,
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {activeFilter === category.id && (
                  <span style={{ fontSize: '1.2rem', }}>•</span>
                )}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid" style={{
        padding: '4rem 0',
        backgroundColor: '#f9f2f5',
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
        //   border:'1px solid red',
          fontSize:'1.3rem'
        }}>
          {filteredTestimonials.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                color: '#78204f',
                marginBottom: '1rem'
              }}>
                No testimonials found in this category
              </h3>
              <p style={{ color: '#666' }}>
                We have testimonials available in other categories. Please try a different filter.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {filteredTestimonials.map(testimonial => (
                <div 
                  key={testimonial.id}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Video or Image */}
                  {testimonial.video ? (
                    <div style={{
                      height: '200px',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer'
                    }} onClick={() => handleVideoPlay(testimonial.id)}>
                      {videoPlaying === testimonial.id ? (
                        <iframe
                          src={`${testimonial.video}?autoplay=1`}
                          style={{
                            width: '100%',
                            height: '100%',
                            border: 'none'
                          }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              filter: 'brightness(0.7)'
                            }}
                          />
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '60px',
                            height: '60px',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backdropFilter: 'blur(2px)',
                            border: '2px solid white'
                          }}>
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 24 24" 
                              fill="white" 
                              style={{
                                width: '30px',
                                height: '30px',
                                marginLeft: '3px'
                              }}
                            >
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{
                      height: '200px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  )}

                  {/* Testimonial Content */}
                  <div style={{
                    padding: '1.5rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <h3 style={{
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        color: '#78204f'
                      }}>
                        {testimonial.name}
                      </h3>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#ffc107'
                      }}>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                            stroke="currentColor"
                            style={{
                              width: '1rem',
                              height: '1rem'
                            }}
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>
                    </div>

                    <p style={{
                      color: '#555',
                      fontStyle: 'italic',
                      marginBottom: '1rem',
                      lineHeight: '1.6'
                    }}>
                      "{testimonial.content}"
                    </p>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '1.5rem',
                      color: '#666',
                      fontSize: '0.9rem'
                    }}>
                      <span>{testimonial.relation}</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials CTA */}
      <section className="video-cta" style={{
        padding: '4rem 0',
        backgroundColor: 'white',
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
            Share Your Experience
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.7'
          }}>
            Have a Neelam Nursing story to tell? We'd love to hear about your experience!
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <Link 
              to="/share-testimonial" 
              style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
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
              Share Your Story
            </Link>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
                backgroundColor: 'transparent',
                color: '#78204f',
                borderRadius: '50px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid #78204f'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9f2f5';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;