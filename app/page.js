"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    alt: "Floral wedding decor on a table",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80",
    alt: "Golden wedding ceremony details",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "Sunlit outdoor venue",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    alt: "Elegant table setting for a celebration",
  },
];

const events = [
  {
    title: "Wedding Ceremony",
    time: "Monday, 2nd March 2026 · 11:40 AM",
    description:
      "Join us for the sacred muhurtham followed by blessings and family rituals.",
  },
  {
    title: "Reception",
    time: "Monday, 2nd March 2026 · 6:00 PM onwards",
    description:
      "An evening of dinner, music, and celebration with friends and family.",
  },
  {
    title: "Family Welcome",
    time: "Sunday, 1st March 2026 · 7:00 PM",
    description:
      "Warm meet-and-greet to welcome guests arriving early for the celebrations.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeEvent, setActiveEvent] = useState(events[0]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const onChange = (event) => setReducedMotion(event.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  return (
    <div className="page">
      <main>
        <section className="hero">
          <div className="hero-inner">
            <motion.div
              className="hero-content"
              variants={stagger}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <motion.p className="top-kuladevatha" variants={fadeInUp}>
                ॐ With the blessings of our Kuladevatha ॐ
              </motion.p>
              <motion.h1 className="hero-title" variants={fadeInUp}>
                Wedding Invitation
              </motion.h1>
              <motion.p className="hero-subtitle" variants={fadeInUp}>
                With the divine grace of the Almighty and the blessings of our
                elders, we joyfully invite you to grace the auspicious wedding
                ceremony of
              </motion.p>

              <motion.div className="names" variants={fadeInUp}>
                <span className="name">Abhishek Shetty</span>
                <span className="with">with</span>
                <span className="name">Sagarika</span>
              </motion.div>

              <motion.div className="hero-details" variants={fadeInUp}>
                <div className="detail-card">
                  <p className="detail-title">Muhurtham</p>
                  <p className="detail-copy">
                    Monday, 2nd March 2026
                    <br />
                    at 11:40 AM
                  </p>
                </div>
                <div className="detail-card">
                  <p className="detail-title">Venue</p>
                  <p className="detail-copy">
                    Lakshmi Janardhana Sabha Bhavana
                    <br />
                    Shamili, NH-66, Udupi
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-carousel"
              aria-label="Wedding moments carousel"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselImages[activeIndex].src}
                  className="carousel-slide active"
                  style={{
                    backgroundImage: `url(${carouselImages[activeIndex].src})`,
                  }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: reducedMotion ? 0 : 1 }}
                  aria-label={carouselImages[activeIndex].alt}
                />
              </AnimatePresence>
              <div className="carousel-overlay" />
              <div className="carousel-caption">
                A celebration of love, family, and tradition
              </div>
              <div className="carousel-dots">
                {carouselImages.map((image, index) => (
                  <button
                    key={`${image.src}-dot`}
                    type="button"
                    className={`carousel-dot ${
                      index === activeIndex ? "active" : ""
                    }`}
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <motion.h2
              className="section-title"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              Families
            </motion.h2>
            <motion.div
              className="section-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div className="family-card" variants={fadeInUp}>
                <h3>Groom</h3>
                <p>
                  Son of Sri Rakesh R. Shetty & Smt. Shantha R. Shetty
                  <br />
                  Brother of Pratheek Shetty
                  <br />
                  Grandson of Smt. Indira & Sri Rathnakar
                  <br />
                  and Late Sri Siddhayya & Smt. Gulabi
                </p>
              </motion.div>
              <motion.div className="family-card" variants={fadeInUp}>
                <h3>Bride</h3>
                <p>
                  Daughter of Sri Jyothi Prabhakar & Prabhakar V Hosur
                  <br />
                  Granddaughter of Gowramma and Ramappa
                  <br />
                  and Gowramma and Venkateshappa
                </p>
              </motion.div>
            </motion.div>
            <div className="divider" />
            <motion.p
              className="hero-subtitle"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              With great pleasure, we also invite you on behalf of Sri Mahesh R,
              Smt. Smitha Mahesh & Anagha Mahesh, and all our family members, to
              share in this joyous occasion.
            </motion.p>
          </div>
        </section>

        <section className="section kan-section">
          <div className="container">
            <motion.h2
              className="section-title"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              ಮಂತ್ರಮುಗ್ಧ ಆಹ್ವಾನ
            </motion.h2>
            <motion.p
              className="kan-copy"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              ॐ ನಮ್ಮ ಕುಲದೇವತೆಯ ಆಶೀರ್ವಾದದೊಂದಿಗೆ ॐ <br />
              ಸರ್ವಶಕ್ತನ ದೈವದ ಕೃಪೆ ಮತ್ತು ನಮ್ಮ ಹಿರಿಯರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ನಾವು ನಿಮ್ಮನ್ನು
              ಈ ಶುಭ ವಿವಾಹ ಸಮಾರಂಭಕ್ಕೆ ಸಂತೋಷದಿಂದ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.
              <br />
              <br />
              ಅಭಿಷೇಕ್ ಶೆಟ್ಟಿ
              <br />
              ಮತ್ತು
              <br />
              ಸಾಗರಿಕಾ
              <br />
              <br />
              ಸೋಮವಾರ, ಮಾರ್ಚ್ 2, 2026 | ಬೆಳಿಗ್ಗೆ 11:40 ಗಂಟೆಗೆ
              <br />
              ಲಕ್ಷ್ಮೀ ಜನಾರ್ದನ ಸಭಾ ಭವನ, ಶಾಮಿಲಿ, NH-66, ಉಡುಪಿ
            </motion.p>
          </div>
        </section>

        <section className="section events-section">
          <div className="container">
            <motion.h2
              className="section-title"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              Events
            </motion.h2>
            <motion.div
              className="event-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {events.map((event) => (
                <motion.button
                  key={event.title}
                  type="button"
                  className={`event-card ${
                    activeEvent.title === event.title ? "active" : ""
                  }`}
                  onClick={() => setActiveEvent(event)}
                  variants={fadeInUp}
                >
                  <span className="event-title">{event.title}</span>
                  <span className="event-time">{event.time}</span>
                </motion.button>
              ))}
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.title}
                className="event-detail"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <h3>{activeEvent.title}</h3>
                <p>{activeEvent.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="section location-section">
          <div className="container location-grid">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Location</h2>
              <p className="hero-subtitle">
                Lakshmi Janardhana Sabha Bhavana
                <br />
                Shamili, NH-66, Udupi
              </p>
              <a
                className="map-link"
                href="https://maps.app.goo.gl/kMif3EDwQK31uwe16"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </motion.div>
            <motion.div
              className="location-panel"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <p>Plan your travel and arrive early to enjoy the celebrations.</p>
              <div className="location-tags">
                <span>NH-66</span>
                <span>Udupi</span>
                <span>Parking Available</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="closing">
          <div className="container">
            <motion.em
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              Your gracious presence, blessings, and good wishes are the
              greatest gift to the newlyweds.
            </motion.em>
            <div className="divider" />
            <motion.p
              className="signature"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              With warm regards
            </motion.p>
            <motion.p
              className="hero-subtitle"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Sri Rakesh R. Shetty & Smt. Shantha R. Shetty
            </motion.p>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <p>Designed and developed by Pratheek Shetty</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
