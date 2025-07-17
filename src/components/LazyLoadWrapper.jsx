// src/components/LazyLoadWrapper.jsx
import { useInView } from "react-intersection-observer";

const LazyLoadWrapper = ({ children, threshold = 0.2, triggerOnce = true }) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return <div ref={ref}>{inView ? children : null}</div>;
};

export default LazyLoadWrapper;
