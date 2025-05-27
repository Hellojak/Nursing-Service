import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookNow = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    duration: '',
    patientName: '',
    patientAge: '',
    patientGender: '',
    condition: '',
    address: '',
    city: '',
    pincode: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    preferredDate: '',
    preferredTime: '',
    specialInstructions: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { id: 'elderly-care', name: 'Elderly Care', icon: '👵' },
    { id: 'post-surgical', name: 'Post-Surgical Care', icon: '🏥' },
    { id: 'chronic-care', name: 'Chronic Disease Management', icon: '💊' },
    { id: 'maternal-care', name: 'Maternal & Newborn Care', icon: '👶' },
    { id: 'palliative-care', name: 'Palliative Care', icon: '🕊️' },
    { id: 'physiotherapy', name: 'Physiotherapy', icon: '💪' }
  ];

  const durations = [
    '4 hours/day',
    '8 hours/day',
    '12 hours/day',
    '24/7 Live-in Care',
    'Single Visit'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.duration) newErrors.duration = 'Please select duration';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.patientName.trim()) newErrors.patientName = 'Patient name is required';
    if (!formData.patientAge) newErrors.patientAge = 'Patient age is required';
    if (!formData.patientGender) newErrors.patientGender = 'Please select gender';
    if (!formData.condition.trim()) newErrors.condition = 'Please describe the condition';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.contactPhone.trim()) newErrors.contactPhone = 'Phone number is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep3()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/booking-confirmation', { state: { bookingData: formData } });
      }, 1500);
    }
  };

  return (
    <div className="book-now-page " style={{
      backgroundColor: '#f9f2f5',
      color:'black',
      minHeight: '100vh',
      padding: '2rem 0'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem'
      }}>
        {/* Progress Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '0',
            right: '0',
            height: '4px',
            backgroundColor: '#e0e0e0',
            zIndex: '1'
          }}></div>
          {[1, 2, 3].map((stepNumber) => (
            <div 
              key={stepNumber} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: '2'
              }}
            >
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: step >= stepNumber ? '#78204f' : '#e0e0e0',
                color: step >= stepNumber ? 'white' : '#666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                marginBottom: '0.5rem',
                transition: 'all 0.3s ease'
              }}>
                {stepNumber}
              </div>
              <span style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: step >= stepNumber ? '#78204f' : '#666',
                textAlign: 'center'
              }}>
                {stepNumber === 1 && 'Service'}
                {stepNumber === 2 && 'Patient Info'}
                {stepNumber === 3 && 'Details'}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#78204f',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Book Nursing Services
          </h1>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div className="step-1">
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
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
                </svg>
                Select Service
              </h2>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#555'
                }}>
                  Service Needed *
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {services.map(service => (
                    <div 
                      key={service.id}
                      onClick={() => handleChange({ target: { name: 'service', value: service.id } })}
                      style={{
                        border: `2px solid ${formData.service === service.id ? '#78204f' : '#ddd'}`,
                        borderRadius: '8px',
                        padding: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: formData.service === service.id ? '#f9f2f5' : 'white'
                      }}
                    >
                      <div style={{
                        fontSize: '2rem',
                        marginBottom: '0.5rem'
                      }}>
                        {service.icon}
                      </div>
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#78204f'
                      }}>
                        {service.name}
                      </h3>
                    </div>
                  ))}
                </div>
                {errors.service && (
                  <p style={{
                    color: '#e74c3c',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem'
                  }}>
                    {errors.service}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#555'
                }}>
                  Duration Required *
                </label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '1rem'
                }}>
                  {durations.map(duration => (
                    <div 
                      key={duration}
                      onClick={() => handleChange({ target: { name: 'duration', value: duration } })}
                      style={{
                        border: `2px solid ${formData.duration === duration ? '#78204f' : '#ddd'}`,
                        borderRadius: '8px',
                        padding: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backgroundColor: formData.duration === duration ? '#f9f2f5' : 'white',
                        textAlign: 'center'
                      }}
                    >
                      {duration}
                    </div>
                  ))}
                </div>
                {errors.duration && (
                  <p style={{
                    color: '#e74c3c',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem'
                  }}>
                    {errors.duration}
                  </p>
                )}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '2rem'
              }}>
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    padding: '0.8rem 2rem',
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
                  Next: Patient Information
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Patient Information */}
          {step === 2 && (
            <div className="step-2">
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
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Patient Information
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.patientName ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.patientName && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.patientName}
                    </p>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Patient Age *
                  </label>
                  <input
                    type="number"
                    name="patientAge"
                    value={formData.patientAge}
                    onChange={handleChange}
                    min="0"
                    max="120"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.patientAge ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.patientAge && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.patientAge}
                    </p>
                  )}
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Patient Gender *
                  </label>
                  <div style={{
                    display: 'flex',
                    gap: '1rem'
                  }}>
                    {['Male', 'Female', 'Other'].map(gender => (
                      <label 
                        key={gender}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          cursor: 'pointer'
                        }}
                      >
                        <input
                          type="radio"
                          name="patientGender"
                          value={gender}
                          checked={formData.patientGender === gender}
                          onChange={handleChange}
                          style={{
                            accentColor: '#78204f',
                            width: '1rem',
                            height: '1rem',
                            cursor: 'pointer'
                          }}
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                  {errors.patientGender && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.patientGender}
                    </p>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Medical Condition *
                  </label>
                  <input
                    type="text"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    placeholder="Briefly describe the condition"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.condition ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.condition && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.condition}
                    </p>
                  )}
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '2rem'
              }}>
                <button
                  type="button"
                  onClick={handleBack}
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
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  style={{
                    padding: '0.8rem 2rem',
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
                  Next: Contact & Scheduling
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Contact & Scheduling */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="step-3">
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
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact & Scheduling
              </h2>

              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#78204f',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid #eee'
              }}>
                Service Address
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Full Address *
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.address ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  ></textarea>
                  {errors.address && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.city ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.city && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Pincode *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.pincode ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.pincode && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.pincode}
                    </p>
                  )}
                </div>
              </div>

              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#78204f',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid #eee'
              }}>
                Contact Person Details
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.contactName ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.contactName && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.contactName}
                    </p>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.contactPhone ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.contactPhone && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.contactPhone}
                    </p>
                  )}
                </div>
              </div>

              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#78204f',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid #eee'
              }}>
                Scheduling
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Preferred Start Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.preferredDate ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.preferredDate && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: '#555'
                  }}>
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${errors.preferredTime ? '#e74c3c' : '#ddd'}`,
                      fontSize: '1rem'
                    }}
                  />
                  {errors.preferredTime && (
                    <p style={{
                      color: '#e74c3c',
                      fontSize: '0.9rem',
                      marginTop: '0.3rem'
                    }}>
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: '#555'
                }}>
                  Special Instructions
                </label>
                <textarea
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any specific requirements or instructions for our nurses"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '2rem'
              }}>
                <button
                  type="button"
                  onClick={handleBack}
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
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '0.8rem 2rem',
                    backgroundColor: '#78204f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#9e0b6d';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#78204f';
                    }
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
                      Processing...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* CSS for spinner animation */}
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default BookNow;