import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <div className="contact-page" style={{ backgroundColor: '#f9f2f5' }}>
      {/* Hero Section */}
      <section className="contact-hero" style={{
        background: 'linear-gradient(135deg, #9e0b6d 0%, #c82e6e 100%)',
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
            Contact Neelam Nursing
          </h1>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '1rem auto',
            opacity: 0.9
          }}>
            Reach out to us for inquiries, appointments, or any questions about our services
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

      {/* Contact Content */}
      <section className="contact-content" style={{
        padding: '5rem 0',
        // border:'1px solid red',
        fontSize:'1.5rem'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem'
        }}>
          {/* Contact Form */}
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#78204f',
                marginBottom: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                Send Us a Message
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#c82e6e'
                }}></span>
              </h2>

              {submitSuccess ? (
                <div style={{
                  padding: '2rem',
                  backgroundColor: '#f0fff0',
                  borderRadius: '8px',
                  border: '1px solid #2ecc71',
                  textAlign: 'center',
                  marginBottom: '2rem'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="#2ecc71" 
                    style={{
                      width: '3rem',
                      height: '3rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <h3 style={{
                    fontSize: '1.5rem',
                    color: '#2ecc71',
                    marginBottom: '0.5rem'
                  }}>
                    Thank You!
                  </h3>
                  <p style={{ color: '#555' }}>
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    style={{
                      marginTop: '1rem',
                      padding: '0.5rem 1.5rem',
                      backgroundColor: '#2ecc71',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#27ae60';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#2ecc71';
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: '500',
                      color: '#555'
                    }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: `1px solid ${errors.name ? '#e74c3c' : '#ddd'}`,
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                    />
                    {errors.name && (
                      <p style={{
                        color: '#e74c3c',
                        fontSize: '0.9rem',
                        marginTop: '0.3rem'
                      }}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: '500',
                      color: '#555'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: `1px solid ${errors.email ? '#e74c3c' : '#ddd'}`,
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                    />
                    {errors.email && (
                      <p style={{
                        color: '#e74c3c',
                        fontSize: '0.9rem',
                        marginTop: '0.3rem'
                      }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: '500',
                      color: '#555'
                    }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: `1px solid ${errors.phone ? '#e74c3c' : '#ddd'}`,
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease'
                      }}
                    />
                    {errors.phone && (
                      <p style={{
                        color: '#e74c3c',
                        fontSize: '0.9rem',
                        marginTop: '0.3rem'
                      }}>
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: '500',
                      color: '#555'
                    }}>
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        appearance: 'none',
                        backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2378204f%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.7rem top 50%',
                        backgroundSize: '0.65rem auto'
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="elderly-care">Elderly Care</option>
                      <option value="post-surgical">Post-Surgical Care</option>
                      <option value="chronic-care">Chronic Disease Management</option>
                      <option value="maternal-care">Maternal & Newborn Care</option>
                      <option value="palliative-care">Palliative Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: '500',
                      color: '#555'
                    }}>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: `1px solid ${errors.message ? '#e74c3c' : '#ddd'}`,
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        resize: 'vertical'
                      }}
                    ></textarea>
                    {errors.message && (
                      <p style={{
                        color: '#e74c3c',
                        fontSize: '0.9rem',
                        marginTop: '0.3rem'
                      }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: '#78204f',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#9e0b6d';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#78204f';
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          style={{
                            width: '1.2rem',
                            height: '1.2rem',
                            animation: 'spin 1s linear infinite'
                          }}
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{
            flex: '1',
            minWidth: '300px'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              height: '100%'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#78204f',
                marginBottom: '1.5rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                Contact Information
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#c82e6e'
                }}></span>
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#555',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="#78204f" 
                    style={{
                      width: '1.5rem',
                      height: '1.5rem'
                    }}
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Our Location
                </h3>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  paddingLeft: '2rem'
                }}>
                  123 Care Avenue<br />
                  Health City, HC 12345<br />
                  India
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#555',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="#78204f" 
                    style={{
                      width: '1.5rem',
                      height: '1.5rem'
                    }}
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Email Us
                </h3>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  paddingLeft: '2rem'
                }}>
                  <a 
                    href="mailto:info@neelamnursing.com" 
                    style={{
                      color: '#78204f',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d8448e';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#78204f';
                    }}
                  >
                    info@neelamnursing.com
                  </a><br />
                  <a 
                    href="mailto:support@neelamnursing.com" 
                    style={{
                      color: '#78204f',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d8448e';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#78204f';
                    }}
                  >
                    support@neelamnursing.com
                  </a>
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#555',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="#78204f" 
                    style={{
                      width: '1.5rem',
                      height: '1.5rem'
                    }}
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  Call Us
                </h3>
                <p style={{
                  color: '#555',
                  lineHeight: '1.6',
                  paddingLeft: '2rem'
                }}>
                  <a 
                    href="tel:+919876543210" 
                    style={{
                      color: '#78204f',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d8448e';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#78204f';
                    }}
                  >
                    +91 98765 43210
                  </a><br />
                  <a 
                    href="tel:+911234567890" 
                    style={{
                      color: '#78204f',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d8448e';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#78204f';
                    }}
                  >
                    +91 12345 67890 (24/7 Emergency)
                  </a>
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#555',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="#78204f" 
                    style={{
                      width: '1.5rem',
                      height: '1.5rem'
                    }}
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                  </svg>
                  Working Hours
                </h3>
                <div style={{
                  color: '#555',
                  lineHeight: '1.8',
                  paddingLeft: '2rem'
                }}>
                  <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Sunday:</strong> Emergency services only</p>
                  <p><strong>24/7:</strong> Emergency care available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" style={{
        padding: '0 0 5rem'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#78204f',
              marginBottom: '1.5rem',
              position: 'relative',
              paddingBottom: '0.5rem',
              textAlign: 'center'
            }}>
              Find Us on Map
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '3px',
                backgroundColor: '#c82e6e'
              }}></span>
            </h2>
            <div style={{
              height: '400px',
              borderRadius: '8px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Replace with your actual map embed code */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566085314493!2d77.2069153150822!3d28.6139009824278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;