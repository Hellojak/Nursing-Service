import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData || {};

  // Send data to FormSubmit.co when component mounts
  useEffect(() => {
    if (bookingData && Object.keys(bookingData).length > 0) {
      const formData = new FormData();
      
      // Add all booking data to form
      Object.entries(bookingData).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Add additional metadata
      formData.append('_subject', 'New Booking - Neelam Nursing');
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');
      
      // Submit to FormSubmit.co
      fetch('https://formsubmit.co/ajax/your-email@example.com', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => console.log('Form submitted successfully:', data))
      .catch(error => console.error('Error submitting form:', error));
    }
  }, [bookingData]);

  // Service icons mapping
  const serviceIcons = {
    'elderly-care': '👵',
    'post-surgical': '🏥',
    'chronic-care': '💊',
    'maternal-care': '👶',
    'palliative-care': '🕊️',
    'physiotherapy': '💪'
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  // Format time for display
  const formatTime = (timeString) => {
    if (!timeString) return 'Not specified';
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="confirmation-page" style={{
      backgroundColor: '#f9f2f5',
      minHeight: '100vh',
      padding: '3rem 0'
    }}>
      <div className="container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          padding: '2.5rem',
          textAlign: 'center'
        }}>
          {/* Success Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#2ecc7120',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem'
          }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="#2ecc71" 
              style={{
                width: '3rem',
                height: '3rem'
              }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>

          <h1 style={{
            fontSize: '2.2rem',
            fontWeight: '700',
            color: '#78204f',
            marginBottom: '1rem'
          }}>
            Booking Confirmed!
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Thank you for choosing Neelam Nursing. Your booking details have been sent to your email.
            Our team will contact you shortly to confirm the appointment.
          </p>

          {/* Booking Summary */}
          <div style={{
            backgroundColor: '#f9f2f5',
            borderRadius: '10px',
            padding: '1.5rem',
            marginBottom: '2rem',
            textAlign: 'left'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#78204f',
              marginBottom: '1.5rem',
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
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Booking Summary
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#78204f',
                  marginBottom: '0.5rem'
                }}>
                  Service Booked
                </h3>
                <p style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#555'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>
                    {serviceIcons[bookingData.service] || '📋'}
                  </span>
                  {services.find(s => s.id === bookingData.service)?.name || bookingData.service || 'Not specified'}
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#78204f',
                  marginBottom: '0.5rem'
                }}>
                  Duration
                </h3>
                <p style={{ color: '#555' }}>
                  {bookingData.duration || 'Not specified'}
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#78204f',
                  marginBottom: '0.5rem'
                }}>
                  Patient
                </h3>
                <p style={{ color: '#555' }}>
                  {bookingData.patientName || 'Not specified'} ({bookingData.patientAge || 'NA'})
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#78204f',
                  marginBottom: '0.5rem'
                }}>
                  Scheduled For
                </h3>
                <p style={{ color: '#555' }}>
                  {formatDate(bookingData.preferredDate)} at {formatTime(bookingData.preferredTime)}
                </p>
              </div>
            </div>

            {bookingData.specialInstructions && (
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#78204f',
                  marginBottom: '0.5rem'
                }}>
                  Special Instructions
                </h3>
                <p style={{ 
                  color: '#555',
                  fontStyle: 'italic',
                  padding: '0.8rem',
                  backgroundColor: 'rgba(120, 32, 79, 0.05)',
                  borderRadius: '6px'
                }}>
                  {bookingData.specialInstructions}
                </p>
              </div>
            )}
          </div>

          {/* Next Steps */}
          <div style={{
            backgroundColor: '#f0f7ff',
            borderRadius: '10px',
            padding: '1.5rem',
            marginBottom: '2rem',
            textAlign: 'left',
            borderLeft: '4px solid #78204f'
          }}>
            <h2 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#78204f',
              marginBottom: '1rem'
            }}>
              What Happens Next?
            </h2>
            <ol style={{
              paddingLeft: '1.5rem',
              color: '#555',
              lineHeight: '1.8'
            }}>
              <li>Our team will review your booking within 1 business day</li>
              <li>You'll receive a confirmation call from our care coordinator</li>
              <li>A nurse will be assigned based on your requirements</li>
              <li>Final details will be shared via email/SMS</li>
            </ol>
          </div>

          {/* Contact Info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '1rem',
              border: '1px solid #eee',
              textAlign: 'center'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#78204f20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.8rem',
                fontSize: '1.5rem',
                color: '#78204f'
              }}>
                📞
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#78204f',
                marginBottom: '0.5rem'
              }}>
                Need Immediate Help?
              </h3>
              <a 
                href="tel:+911234567890" 
                style={{
                  color: '#555',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#d8448e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#555';
                }}
              >
                +91 12345 67890
              </a>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '1rem',
              border: '1px solid #eee',
              textAlign: 'center'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#78204f20',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.8rem',
                fontSize: '1.5rem',
                color: '#78204f'
              }}>
                ✉️
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#78204f',
                marginBottom: '0.5rem'
              }}>
                Email Us
              </h3>
              <a 
                href="mailto:bookings@neelamnursing.com" 
                style={{
                  color: '#555',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#d8448e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#555';
                }}
              >
                bookings@neelamnursing.com
              </a>
            </div>
          </div>

          {/* Actions */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '0.8rem 1.5rem',
                backgroundColor: '#78204f',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#9e0b6d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#78204f';
              }}
            >
              Back to Home
            </button>
            <button
              onClick={() => navigate('/services')}
              style={{
                padding: '0.8rem 1.5rem',
                backgroundColor: 'white',
                color: '#78204f',
                border: '2px solid #78204f',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9f2f5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              Explore More Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service data for reference (same as in BookNow component)
const services = [
  { id: 'elderly-care', name: 'Elderly Care', icon: '👵' },
  { id: 'post-surgical', name: 'Post-Surgical Care', icon: '🏥' },
  { id: 'chronic-care', name: 'Chronic Disease Management', icon: '💊' },
  { id: 'maternal-care', name: 'Maternal & Newborn Care', icon: '👶' },
  { id: 'palliative-care', name: 'Palliative Care', icon: '🕊️' },
  { id: 'physiotherapy', name: 'Physiotherapy', icon: '💪' }
];

export default BookingConfirmation;