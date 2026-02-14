import React from 'react';
import SectionTitle from '../components/SectionTitle';
import CertificationCard from '../components/CertificationCard';

const Certifications = () => {
  const certifications = [
    {
      id: 'CERT-101',
      name: 'Google Data Analytics Professional',
      issuer: 'Coursera (Google)',
      date: 'Dec 2024',
      link: 'https://coursera.org',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=Data+Analytics'
    },
    {
      id: 'CERT-102',
      name: 'Embedded Systems & IoT Specialization',
      issuer: 'University of California, Irvine',
      date: 'Oct 2024',
      link: 'https://coursera.org',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=Embedded+Systems'
    },
    {
      id: 'CERT-103',
      name: 'Python for AI & Data Science',
      issuer: 'IBM',
      date: 'Aug 2024',
      link: 'https://edx.org',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=Python+AI'
    },
    {
      id: 'CERT-104',
      name: 'Introduction to PCB Design',
      issuer: 'Autodesk',
      date: 'June 2024',
      link: 'https://autodesk.com',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=PCB+Design'
    },
    {
      id: 'CERT-105',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Mar 2024',
      link: 'https://aws.amazon.com',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=AWS+Cloud'
    },
    {
      id: 'CERT-106',
      name: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: 'Jan 2024',
      link: 'https://coursera.org',
      image: 'https://placehold.co/400x300/e2e8f0/64748b?text=Machine+Learning'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionTitle
        title="Verified Achievements"
        subtitle="Certifications"
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>

      <div className="mt-20 glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-display font-bold mb-4">Continuously Learning</h3>
        <p className="text-foreground/60 leading-relaxed mb-8">
          I am always looking for new ways to expand my knowledge and stay up-to-date with the latest trends in technology.
          Currently pursuing certifications in Advanced Robotics and Blockchain integration.
        </p>
        <button className="px-8 py-3 rounded-full bg-primary text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
          View All on LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Certifications;
