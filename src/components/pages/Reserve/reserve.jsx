import React, { useState } from 'react';
import './Reserve.css';

const ReservePage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '19:00',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    requests: ''
  });
  const [showModal, setShowModal] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.date && formData.name && formData.email && formData.phone) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      date: '',
      time: '19:00',
      guests: '2',
      name: '',
      email: '',
      phone: '',
      requests: ''
    });
  };

  return (
    <div className="reserve-page">
      <section className="reserve-page-hero">
        <div className="reserve-page-hero-overlay"></div>
        <div className="reserve-page-hero-content">
          <p className="reserve-page-hero-eyebrow">TABLE RESERVATION</p>
          <h1 className="reserve-page-hero-title">Reserve Your Table</h1>
        </div>
      </section>

      <section className="reserve-page-content">
        <div className="reserve-page-container">
          <div className="reserve-page-form-wrapper">
            <h2 className="reserve-page-form-title">Make a Reservation</h2>
            <form className="reserve-page-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" name="date" min={today} value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                    <optgroup label="Lunch">
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                    </optgroup>
                    <optgroup label="Dinner">
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                      <option value="20:30">20:30</option>
                      <option value="21:00">21:00</option>
                      <option value="21:30">21:30</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="guests">Guests</label>
                <select id="guests" name="guests" value={formData.guests} onChange={handleChange} required>
                  {[...Array(12).keys()].map(i => (
                    <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="requests">Special Requests</label>
                <textarea id="requests" name="requests" rows="4" placeholder="Dietary requirements, celebrations, seating preferences..." value={formData.requests} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="reserve-page-submit">CONFIRM RESERVATION</button>
            </form>
          </div>
          
          <div className="reserve-page-info-wrapper">
            <div className="info-card">
              <h3>Dress Code</h3>
              <p>Smart casual is expected. Gentlemen are kindly asked to refrain from wearing shorts or athletic wear.</p>
            </div>
            <div className="info-card">
              <h3>Cancellation Policy</h3>
              <p>We kindly request 24 hours notice for cancellations. Late cancellations may incur a fee of €50 per person.</p>
            </div>
            <div className="info-card">
              <h3>Private Dining</h3>
              <p>Our salon priv&#233; accommodates up to 12 guests for an exclusive, bespoke experience. Contact us at events@maisonelian.com.</p>
            </div>
            <div className="info-card">
              <h3>Special Occasions</h3>
              <p>Celebrating a birthday, anniversary, or special moment? Let us know and we'll make it unforgettable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reserve-page-footer-bar">
        <div className="footer-bar-container">
          <div className="footer-bar-item">
            <span className="icon">&#128338;</span>
            <p>Open Tue&#8211;Sat, Lunch & Dinner</p>
          </div>
          <div className="footer-bar-item">
            <span className="icon">&#128222;</span>
            <p>Call +33 1 42 25 68 00</p>
          </div>
          <div className="footer-bar-item">
            <span className="icon">&#128205;</span>
            <p>14 Rue du Faubourg Saint-Honor&#233;, 75008 Paris</p>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="reserve-page-modal-overlay">
          <div className="reserve-page-modal">
            <h2>Reservation Confirmed</h2>
            <p>Thank you, {formData.name}. Your table for {formData.guests} on {formData.date} at {formData.time} has been reserved.</p>
            <p>A confirmation email will be sent to {formData.email}.</p>
            <button className="reserve-page-modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservePage;
