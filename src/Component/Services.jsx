import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');

  const serviceCategories = [
    {
      id: 'elderly',
      name: 'Elderly Care',
      icon: '👵',
      color: '#78204f'
    },
    {
      id: 'post-surgical',
      name: 'Post-Surgical',
      icon: '🏥',
      color: '#d8448e'
    },
    {
      id: 'chronic',
      name: 'Chronic Care',
      icon: '💊',
      color: '#9e0b6d'
    },
    {
      id: 'maternal',
      name: 'Maternal/Newborn',
      icon: '👶',
      color: '#c82e6e'
    }
  ];

  const allServices = [
    {
      id: 1,
      title: 'Elderly Daily Care',
      description: 'Comprehensive daily assistance including medication management, personal hygiene, and mobility support.',
      category: 'elderly',
      duration: '4-12 hours/day',
      price: '₹800/day'
    },
    {
      id: 2,
      title: 'Post-Surgery Recovery',
      description: 'Specialized care after surgical procedures including wound care, medication administration, and rehabilitation support.',
      category: 'post-surgical',
      duration: '2-8 weeks',
      price: '₹1,200/day'
    },
    {
      id: 3,
      title: 'Diabetes Management',
      description: 'Expert care for diabetic patients including glucose monitoring, insulin administration, and dietary guidance.',
      category: 'chronic',
      duration: 'Custom',
      price: '₹1,000/day'
    },
    {
      id: 4,
      title: 'Newborn Care',
      description: '24/7 newborn care including feeding, bathing, and health monitoring by experienced pediatric nurses.',
      category: 'maternal',
      duration: '1-3 months',
      price: '₹1,500/day'
    },
    {
      id: 5,
      title: 'Dementia Care',
      description: 'Specialized care for dementia patients with cognitive stimulation activities and safety supervision.',
      category: 'elderly',
      duration: 'Long-term',
      price: '₹1,000/day'
    },
    {
      id: 6,
      title: 'Palliative Care',
      description: 'Compassionate end-of-life care focusing on pain management and emotional support.',
      category: 'chronic',
      duration: 'Custom',
      price: '₹1,200/day'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeTab);

  return (
    <section id="services" style={{
      padding: '5rem 0',
      backgroundColor: '#f9f2f5'
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
            Our Specialized Services
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
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Professional healthcare services tailored to meet individual needs with compassion and expertise.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem'
        }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.6rem 1.5rem',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeTab === 'all' ? '#78204f' : 'white',
              color: activeTab === 'all' ? 'white' : '#78204f',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>All Services</span>
          </button>
          
          {serviceCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: activeTab === category.id ? category.color : 'white',
                color: activeTab === category.id ? 'white' : category.color,
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredServices.map(service => {
            const category = serviceCategories.find(cat => cat.id === service.category);
            
            return (
              <div 
                key={service.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  borderTop: `4px solid ${category?.color || '#78204f'}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{
                  padding: '1.8rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: `${category?.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                      fontSize: '1.5rem'
                    }}>
                      {category?.icon}
                    </div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {service.title}
                    </h3>
                  </div>
                  
                  <p style={{
                    color: '#666',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    {service.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                    color: '#78204f',
                    fontWeight: '500'
                  }}>
                    <span>Duration: {service.duration}</span>
                    <span>From {service.price}</span>
                  </div>
                  
                  <Link 
                    to={`/book-service/${service.id}`}
                    style={{
                      display: 'inline-block',
                      width: '100%',
                      padding: '0.8rem',
                      backgroundColor: category?.color || '#78204f',
                      color: 'white',
                      textAlign: 'center',
                      borderRadius: '8px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#9e0b6d';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = category?.color || '#78204f';
                    }}
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          textAlign: 'center',
          background: 'linear-gradient(to right, #78204f, #9e0b6d)',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Can't Find What You Need?
          </h3>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: '0.9'
          }}>
            We offer customized care plans tailored to your specific requirements. 
            Our team will work with you to create the perfect solution.
          </p>
          <Link 
            to="/contact" 
            style={{
              display: 'inline-block',
              padding: '0.9rem 2.5rem',
              backgroundColor: 'white',
              color: '#78204f',
              borderRadius: '50px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
            }}
          >
            Request Custom Care Plan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;