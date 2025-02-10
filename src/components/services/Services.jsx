import React from 'react';
import './services.css';
import webDevImage from '../../assets/istockphoto5.avif'; 
import appDevImage from '../../assets/istockphoto3.jpg';
import maintenanceImage from '../../assets/istockphoto1.jpg';
import cctvImage from '../../assets/istockphoto6.jpg';
import securityLightImage from '../../assets/istockphoto8.jpeg';
import networkImage from '../../assets/istockphoto7.jpg';

const Services = () => {
  // Array of services
  const services = [
    { title: 'Website Development', description: 'We create modern, responsive websites tailored to your business needs.From e-commerce platforms to informational websites, our solutions are designed to engage visitors and drive conversions, backed by secure, scalable infrastructure.', image: webDevImage },
    { title: 'Mobile App Development', description: 'We develop intuitive and feature-rich mobile apps for both iOS and Android platforms. Whether youre looking for a business app, e-commerce solution, or customer service platform, we bring your vision to life with a seamless user experience.', image: appDevImage },
    { title: 'Software Maintenance', description: 'Our maintenance services ensure that your website and apps are always up-to-date, secure, and running smoothly. We offer ongoing support, updates, and bug fixes to give you peace of mind and keep your business online.', image: maintenanceImage },
    { title: 'CCTV Installation', description: ' Enhance the safety of your home or business with our state-of-the-art CCTV systems. We provide customized solutions for both small and large properties, ensuring reliable, high-quality surveillance with remote monitoring capabilities.', image: cctvImage },
    { title: 'Security Lights Installation', description: 'Improve the security of your premises with strategically placed security lighting. Our solutions include motion-sensor lights and floodlights that deter unwanted activity, keeping your environment safe.', image: securityLightImage },
    { title: 'Network Setup & Optimization', description: 'We design and install robust networking solutions to ensure seamless connectivity across all devices, whether for homes or businesses. Our team provides end-to-end service, including network security, performance tuning, and troubleshooting.', image: networkImage }
  ];

  return (
    <div id="services" className="services-page">
      <h1>Our Services</h1>
      
      {services.map((service, index) => (
        <div className={`service-item ${index % 2 === 1 ? 'reverse' : ''}`} key={index}>
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
