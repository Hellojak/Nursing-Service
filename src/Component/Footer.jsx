// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer style={{
//       backgroundColor: '#78204f',
//       color: 'white',
//       padding: '3rem 0 0',
//       position: 'relative'
//     }}>
//       {/* Footer Wave Top */}
//       <div style={{
//         position: 'absolute',
//         top: '-1px',
//         left: '0',
//         width: '100%',
//         overflow: 'hidden',
//         lineHeight: '0'
//       }}>
//         <svg 
//           style={{
//             position: 'relative',
//             display: 'block',
//             width: 'calc(100% + 1.3px)',
//             height: '50px'
//           }} 
//           viewBox="0 0 1200 120" 
//           preserveAspectRatio="none"
//         >
//           <path 
//             d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
//             opacity=".25" 
//             fill="#78204f"
//           ></path>
//           <path 
//             d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
//             opacity=".5" 
//             fill="#78204f"
//           ></path>
//           <path 
//             d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,233.88-16.45,97.39,46.57,183.09,81.91,232.8,76.67,84.7-7.01,166.57-50.85,237-89.67,69-37,137.4-80.88,203.6-94.5,78-16.71,155.8-46.29,221.8-88.45C1206.69,20.07,1200,0,1200,0Z" 
//             fill="#78204f"
//           ></path>
//         </svg>
//       </div>

//       {/* Footer Content */}
//       <div className="container" style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 1rem'
//       }}>
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//           gap: '2rem',
//           marginBottom: '2rem'
//         }}>
//           {/* About Column */}
//           <div>
//             <h3 style={{
//               fontSize: '1.3rem',
//               fontWeight: '600',
//               marginBottom: '1.5rem',
//               position: 'relative',
//               display: 'inline-block'
//             }}>
//               About Neelam Nursing
//               <span style={{
//                 position: 'absolute',
//                 bottom: '-8px',
//                 left: '0',
//                 width: '50px',
//                 height: '3px',
//                 backgroundColor: '#d8448e'
//               }}></span>
//             </h3>
//             <p style={{
//               color: 'rgba(255,255,255,0.8)',
//               lineHeight: '1.6',
//               marginBottom: '1.5rem'
//             }}>
//               Providing compassionate and professional nursing care in the comfort of your home since 2010.
//             </p>
//             <div style={{
//               display: 'flex',
//               gap: '1rem'
//             }}>
//               {[
//                 { icon: '📱', label: 'Mobile' },
//                 { icon: '🏥', label: '24/7 Care' },
//                 { icon: '👩⚕️', label: 'Certified' }
//               ].map((item, index) => (
//                 <div 
//                   key={index}
//                   style={{
//                     backgroundColor: 'rgba(255,255,255,0.1)',
//                     borderRadius: '8px',
//                     padding: '0.5rem 0.8rem',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '0.5rem'
//                   }}
//                 >
//                   <span>{item.icon}</span>
//                   <span style={{ fontSize: '0.9rem' }}>{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links Column */}
//           <div>
//             <h3 style={{
//               fontSize: '1.3rem',
//               fontWeight: '600',
//               marginBottom: '1.5rem',
//               position: 'relative',
//               display: 'inline-block'
//             }}>
//               Quick Links
//               <span style={{
//                 position: 'absolute',
//                 bottom: '-8px',
//                 left: '0',
//                 width: '50px',
//                 height: '3px',
//                 backgroundColor: '#d8448e'
//               }}></span>
//             </h3>
//             <ul style={{
//               listStyle: 'none',
//               padding: '0',
//               display: 'grid',
//               gap: '0.8rem'
//             }}>
//               {[
//                 { path: '/', label: 'Home' },
//                 { path: '/services', label: 'Services' },
//                 { path: '/about', label: 'About Us' },
//                 { path: '/testimonials', label: 'Testimonials' },
//                 { path: '/contact', label: 'Contact' },
//                 { path: '/book-now', label: 'Book Now' }
//               ].map((link, index) => (
//                 <li key={index}>
//                   <Link 
//                     to={link.path}
//                     style={{
//                       color: 'rgba(255,255,255,0.8)',
//                       textDecoration: 'none',
//                       transition: 'all 0.3s ease',
//                       display: 'inline-block',
//                       position: 'relative'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.color = 'white';
//                       e.currentTarget.style.transform = 'translateX(5px)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
//                       e.currentTarget.style.transform = 'translateX(0)';
//                     }}
//                   >
//                     <span style={{
//                       position: 'absolute',
//                       left: '-15px',
//                       top: '50%',
//                       transform: 'translateY(-50%)',
//                       opacity: '0',
//                       transition: 'all 0.3s ease'
//                     }}>→</span>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services Column */}
//           <div>
//             <h3 style={{
//               fontSize: '1.3rem',
//               fontWeight: '600',
//               marginBottom: '1.5rem',
//               position: 'relative',
//               display: 'inline-block'
//             }}>
//               Our Services
//               <span style={{
//                 position: 'absolute',
//                 bottom: '-8px',
//                 left: '0',
//                 width: '50px',
//                 height: '3px',
//                 backgroundColor: '#d8448e'
//               }}></span>
//             </h3>
//             <ul style={{
//               listStyle: 'none',
//               padding: '0',
//               display: 'grid',
//               gap: '0.8rem'
//             }}>
//               {[
//                 { icon: '👵', label: 'Elderly Care' },
//                 { icon: '🏥', label: 'Post-Surgical Care' },
//                 { icon: '💊', label: 'Chronic Disease' },
//                 { icon: '👶', label: 'Maternal/Newborn' },
//                 { icon: '🕊️', label: 'Palliative Care' },
//                 { icon: '💪', label: 'Physiotherapy' }
//               ].map((service, index) => (
//                 <li 
//                   key={index}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '0.5rem'
//                   }}
//                 >
//                   <span>{service.icon}</span>
//                   <Link 
//                     to={`/services#${service.label.toLowerCase().replace(' ', '-')}`}
//                     style={{
//                       color: 'rgba(255,255,255,0.8)',
//                       textDecoration: 'none',
//                       transition: 'all 0.3s ease'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.color = 'white';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
//                     }}
//                   >
//                     {service.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Column */}
//           <div>
//             <h3 style={{
//               fontSize: '1.3rem',
//               fontWeight: '600',
//               marginBottom: '1.5rem',
//               position: 'relative',
//               display: 'inline-block'
//             }}>
//               Contact Us
//               <span style={{
//                 position: 'absolute',
//                 bottom: '-8px',
//                 left: '0',
//                 width: '50px',
//                 height: '3px',
//                 backgroundColor: '#d8448e'
//               }}></span>
//             </h3>
//             <address style={{
//               fontStyle: 'normal',
//               color: 'rgba(255,255,255,0.8)',
//               lineHeight: '1.8'
//             }}>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'flex-start',
//                 gap: '0.8rem',
//                 marginBottom: '1rem'
//               }}>
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   viewBox="0 0 24 24" 
//                   fill="currentColor" 
//                   style={{
//                     width: '1.2rem',
//                     height: '1.2rem',
//                     color: '#d8448e',
//                     flexShrink: '0',
//                     marginTop: '0.2rem'
//                   }}
//                 >
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//                 </svg>
//                 <span>123 Care Avenue, Health City, HC 12345, India</span>
//               </div>

//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.8rem',
//                 marginBottom: '1rem'
//               }}>
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   viewBox="0 0 24 24" 
//                   fill="currentColor" 
//                   style={{
//                     width: '1.2rem',
//                     height: '1.2rem',
//                     color: '#d8448e'
//                   }}
//                 >
//                   <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
//                 </svg>
//                 <a 
//                   href="tel:+919876543210" 
//                   style={{
//                     color: 'rgba(255,255,255,0.8)',
//                     textDecoration: 'none',
//                     transition: 'all 0.3s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = 'white';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
//                   }}
//                 >
//                   +91 98765 43210
//                 </a>
//               </div>

//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.8rem',
//                 marginBottom: '1rem'
//               }}>
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   viewBox="0 0 24 24" 
//                   fill="currentColor" 
//                   style={{
//                     width: '1.2rem',
//                     height: '1.2rem',
//                     color: '#d8448e'
//                   }}
//                 >
//                   <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
//                 </svg>
//                 <a 
//                   href="mailto:info@neelamnursing.com" 
//                   style={{
//                     color: 'rgba(255,255,255,0.8)',
//                     textDecoration: 'none',
//                     transition: 'all 0.3s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = 'white';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
//                   }}
//                 >
//                   info@neelamnursing.com
//                 </a>
//               </div>

//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.8rem',
//                 marginBottom: '1rem'
//               }}>
//                 <svg 
//                   xmlns="http://www.w3.org/2000/svg" 
//                   viewBox="0 0 24 24" 
//                   fill="currentColor" 
//                   style={{
//                     width: '1.2rem',
//                     height: '1.2rem',
//                     color: '#d8448e'
//                   }}
//                 >
//                   <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
//                 </svg>
//                 <span>Mon-Fri: 8AM-8PM | Sat: 9AM-6PM | Sun: Emergency Only</span>
//               </div>
//             </address>

//             <div style={{
//               display: 'flex',
//               gap: '1rem',
//               marginTop: '1.5rem'
//             }}>
//               {[
//                 { icon: 'facebook', color: '#4267B2', label: 'Facebook' },
//                 { icon: 'instagram', color: '#E1306C', label: 'Instagram' },
//                 { icon: 'twitter', color: '#1DA1F2', label: 'Twitter' },
//                 { icon: 'linkedin', color: '#0077B5', label: 'LinkedIn' }
//               ].map((social, index) => (
//                 <a 
//                   key={index}
//                   href={`https://www.${social.icon}.com/neelamnursing`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     width: '36px',
//                     height: '36px',
//                     backgroundColor: social.color,
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: 'white',
//                     textDecoration: 'none',
//                     transition: 'all 0.3s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-3px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                   aria-label={social.label}
//                 >
//                   <span style={{ fontSize: '1rem' }}>
//                     {social.icon === 'facebook' && 'f'}
//                     {social.icon === 'instagram' && '📷'}
//                     {social.icon === 'twitter' && '𝕏'}
//                     {social.icon === 'linkedin' && 'in'}
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div style={{
//           borderTop: '1px solid rgba(255,255,255,0.1)',
//           padding: '1.5rem 0 0',
//           marginTop: '1rem',
//           textAlign: 'center',
//           color: 'rgba(255,255,255,0.6)',
//           fontSize: '0.9rem'
//         }}>
//           <div style={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             gap: '1rem',
//             marginBottom: '1rem'
//           }}>
//             <Link 
//               to="/privacy-policy" 
//               style={{
//                 color: 'rgba(255,255,255,0.6)',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = 'white';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
//               }}
//             >
//               Privacy Policy
//             </Link>
//             <span>•</span>
//             <Link 
//               to="/terms" 
//               style={{
//                 color: 'rgba(255,255,255,0.6)',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = 'white';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
//               }}
//             >
//               Terms of Service
//             </Link>
//             <span>•</span>
//             <Link 
//               to="/sitemap" 
//               style={{
//                 color: 'rgba(255,255,255,0.6)',
//                 textDecoration: 'none',
//                 transition: 'all 0.3s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.color = 'white';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
//               }}
//             >
//               Sitemap
//             </Link>
//           </div>
//           <p>
//             &copy; {new Date().getFullYear()} Neelam Nursing. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from 'react-router-dom';
// import { CiFacebook } from "react-icons/ci";
// import { FaInstagram } from "react-icons/fa";
// import { CiTwitter } from "react-icons/ci";
// import { CiLinkedin } from "react-icons/ci";
import { CiLinkedin, CiTwitter, CiFacebook } from "react-icons/ci";
const icons = {
    linkedin: <CiLinkedin />,
    twitter: <CiTwitter />,
    facebook: <CiFacebook />,
  };

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#78204f',
      color: 'white',
      padding: '3rem 0 0',
      position: 'relative'
    }}>
      {/* Wave Decoration */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '0',
        width: '100%',
        overflow: 'hidden',
        lineHeight: '0'
      }}>
        <svg 
          style={{
            position: 'relative',
            display: 'block',
            width: 'calc(100% + 1.3px)',
            height: '50px'
          }} 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#78204f"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#78204f"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,233.88-16.45,97.39,46.57,183.09,81.91,232.8,76.67,84.7-7.01,166.57-50.85,237-89.67,69-37,137.4-80.88,203.6-94.5,78-16.71,155.8-46.29,221.8-88.45C1206.69,20.07,1200,0,1200,0Z" 
            fill="#78204f"
          ></path>
        </svg>
      </div>

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* About Column */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              About Neelam Nursing
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '50px',
                height: '3px',
                backgroundColor: '#d8448e'
              }}></span>
            </h3>
            <p style={{
              color: 'rgba(255,255,255,0.8)',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Providing compassionate and professional nursing care in the comfort of your home since 2010.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>

              
              {["facebook", "twitter", "instagram", "linkedin"].map(social => (
                <a 
                  key={social}
                  href={`https://${social}.com `}
                  
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d8448e';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  
                  <img 
                  
                    src={`/icons/${social}.svg
                     `} 
                    
                    alt={social}
                    style={{
                      width: '18px',
                      height: '18px',
                      filter: 'brightness(0) invert(1)'

                     

                    }}
                  />
            
            
                </a>
              ))}


            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Quick Links
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '50px',
                height: '3px',
                backgroundColor: '#d8448e'
              }}></span>
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: '0.5rem'
            }}>
              {[
                { path: '/', name: 'Home' },
                { path: '/services', name: 'Services' },
                { path: '/aboutus', name: 'About Us' },
                { path: '/testimonials', name: 'Testimonials' },
                { path: '/', name: 'Blog' },
                { path: '/contact', name: 'Contact' },
                { path: '/faq', name: 'FAQ' },
                { path: '/', name: 'Privacy Policy' }
              ].map(link => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                      padding: '0.3rem 0',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '0',
                      height: '1px',
                      backgroundColor: '#d8448e',
                      transition: 'width 0.3s ease'
                    }}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Our Services
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '50px',
                height: '3px',
                backgroundColor: '#d8448e'
              }}></span>
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: '0.5rem'
            }}>
              {[
                { name: 'Elderly Care', icon: '👵' },
                { name: 'Post-Surgical Care', icon: '🏥' },
                { name: 'Chronic Disease', icon: '💊' },
                { name: 'Maternal Care', icon: '👶' },
                // { name: 'Palliative Care', icon: '🕊️' },
                // { name: 'Physiotherapy', icon: '💪' },
                // { name: 'Diabetes Care', icon: '🩸' },
                // { name: 'Dementia Care', icon: '🧠' }
              ].map(service => (
                <li key={service.name}>
                  <Link 
                    to={`/services#${service.name.toLowerCase().replace(' ', '-')}`}
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.3rem 0'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                    }}
                  >
                    {/* <span>{service.icon}</span> */}
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Contact Us
              <span style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '50px',
                height: '3px',
                backgroundColor: '#d8448e'
              }}></span>
            </h3>
            <address style={{
              fontStyle: 'normal',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: '1.8'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.8rem',
                marginBottom: '1rem'
              }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  style={{
                    width: '1.2rem',
                    height: '1.2rem',
                    color: '#d8448e',
                    flexShrink: '0',
                    marginTop: '0.2rem'
                  }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>123 Care Avenue, Health City, HC 12345, India</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1rem'
              }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  style={{
                    width: '1.2rem',
                    height: '1.2rem',
                    color: '#d8448e',
                    flexShrink: '0'
                  }}
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a 
                  href="tel:+919876543210" 
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  }}
                >
                  +91 98765 43210
                </a>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '1rem'
              }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  style={{
                    width: '1.2rem',
                    height: '1.2rem',
                    color: '#d8448e',
                    flexShrink: '0'
                  }}
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a 
                  href="mailto:info@neelamnursing.com" 
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  }}
                >
                  info@neelamnursing.com
                </a>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem'
              }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  style={{
                    width: '1.2rem',
                    height: '1.2rem',
                    color: '#d8448e',
                    flexShrink: '0'
                  }}
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                </svg>
                <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </address>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '8px',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'white',
            textAlign: 'center'
          }}>
            Subscribe to Our Newsletter
          </h3>
          <form 
            action="https://formsubmit.co/your-email@example.com" 
            method="POST"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center'
            }}
          >
            <input 
              type="hidden" 
              name="_subject" 
              value="New Newsletter Subscriber - Neelam Nursing" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your email address" 
              required
              style={{
                flex: '1',
                minWidth: '200px',
                padding: '0.8rem 1rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1rem'
              }}
            />
            <button 
              type="submit"
              style={{
                padding: '0.8rem 2rem',
                backgroundColor: '#d8448e',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#9e0b6d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d8448e';
              }}
            >
              Subscribe
            </button>
          </form>
        </div> */}

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.9rem'
        }}>
          <p>
            &copy; {new Date().getFullYear()} Neelam Nursing. All Rights Reserved.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Designed with ❤️ for compassionate care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;