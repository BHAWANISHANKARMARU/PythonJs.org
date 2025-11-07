import { motion } from 'framer-motion';
import styles from './Features.module.css';

const features = [
  {
    title: 'Fast & Efficient',
    description: 'Leverage modern features for high-performance applications.',
    icon: 'bi-speedometer2',
  },
  {
    title: 'Readable & Clean',
    description: 'Write beautiful, Pythonic code that is easy to maintain.',
    icon: 'bi-code-slash',
  },
  {
    title: 'Concurrent by Design',
    description: 'Built-in support for asynchronous operations and concurrency.',
    icon: 'bi-cpu',
  },
];

const Features = () => {
  return (
    <div className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="col-md-4"
            >
              <div className={styles.featureCard}>
                <i className={`bi ${feature.icon} ${styles.featureIcon}`}></i>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
