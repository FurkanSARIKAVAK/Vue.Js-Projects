<template>
    <div>
        <div class="contact-container">
            <div class="contact-info">
                <h1>Contact Us</h1>
                <p>
                 You can reach out to us using the information below. We'll get back to you as soon as possible.
                </p>
                <div class="contact-details">
                    <p><strong>Phone</strong></p>
                    <p>0555 777 88 99</p>
                    <p><strong>Email</strong></p>
                    <p>info@turquoiseagency.com</p>
                </div>
            </div>
            <div class="contact-form">
                <h2>Submit Creative and Effective Solutions</h2>
                <form>
                    <div class="form-group">
                        <label for="name">Enter your name</label>
                        <input type="text" id="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Enter your email address</label>
                        <input type="email" id="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="message">Write your message</label>
                        <textarea id="message" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send</button>
                </form>
            </div>
        </div>

        <div class="address-section">
            <div class="address-info">
                <h1>Address</h1>
                <p>Here you can find the contact information for brands that want to receive services from Turquoise Agency.</p>
                <div class="address-details">
                    <h3>Address</h3>
                    <p>Side, Acısu Mevkii Sk. D:4; 07600 Manavgat/Antalya</p>
                    <h3>Working Hours</h3>
                    <p>Monday - Friday: 09:00 - 18:00</p>
                </div>
            </div>
            <div class="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24307.276079128438!2d31.385892589599443!3d36.756812158089744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c35a26b4bc59cb%3A0x9bbf4313a2362fe7!2sHotel%20Turquoise!5e1!3m2!1str!2str!4v1754483943747!5m2!1str!2str"
                    style="border: 4px solid #1e90ff; width: 100%; height: 400px;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
}

.contact-info {
  width: 45%;
}

.contact-info h1 {
  font-size: 2.5em;
  color: #1e90ff;
}

.contact-info p {
  font-size: 1.2em;
  color: #1E0342;
  margin-bottom: 20px;
}

.contact-details p {
  font-size: 1em;
  color: #1E0342;
  margin: 5px 0;
}

.contact-form {
  width: 45%;
}

.contact-form h2 {
  font-size: 1.5em;
  color: #1e90ff;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 1em;
  margin-bottom: 5px;
  color: #1E0342;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 1em;
  color: #5e5c5c;
}

.submit-btn {
  background-color: #1e90ff;
  color: #E1F7F5;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2em;
}

.submit-btn:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
  }

  .contact-info,
  .contact-form {
    width: 100%;
  }
}

.address-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
}

.address-info {
  width: 45%;
}

.address-info h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #1e90ff;
}

.address-info p {
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #1E0342;
}

.address-details h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #1E0342;
}

.address-details p {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.map-container {
  width: 50%;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

@media (max-width: 768px) {
  .address-section {
    flex-direction: column;
    text-align: center;
  }

  .address-info,
  .map-container {
    width: 100%;
    margin-bottom: 30px;
  }

  .map-container iframe {
    height: 300px;
  }
}
</style>