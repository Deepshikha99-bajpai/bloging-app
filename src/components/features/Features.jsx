import React from 'react';
import styles from './features.module.css';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'AI-Powered Writing',
      description: 'Leverage advanced AI to enhance your blog posts with smart suggestions and automated formatting.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track your blog performance with real-time analytics and engagement metrics.'
    },
    {
      icon: '🎨',
      title: 'Custom Themes',
      description: 'Personalize your blog with dynamic themes and responsive design elements.'
    },
    {
      icon: '🔒',
      title: 'Secure Publishing',
      description: 'Publish with confidence using our encrypted storage and authentication system.'
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'Connect with readers worldwide through our optimized content delivery network.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience blazing-fast load times with our cutting-edge performance optimizations.'
    }
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Future-Ready Features</h2>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;