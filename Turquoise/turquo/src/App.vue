<template>
  <div id="app">
    <div class="navbar">
      <div class="logo">
        <router-link to="/"><h1>Turquoise</h1></router-link>
      </div>
      <button class="menu-toggle" @click="toggleMenu">
        <img src="../src/assets/menu.png" alt="Menu">
      </button>
      <ul class="navigation" :class="{ 'active': isMenuOpen }">
        <li><router-link to="/" @click="closeMenu">Home Page</router-link></li>
        <li><router-link to="/about-us" @click="closeMenu">About Us</router-link></li>
        <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      </ul>
    </div>

    <router-view />

    <div class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3 style="color: #1E90FF;">Turquoise Agency</h3>
          <p>We are a digital agency providing digital solutions. From web design to e-commerce solutions.</p>
          <div class="social-icons">
            <a href="#" target="_blank"><img src="../src/assets/linkedin.svg" alt="LinkedIn"></a>
            <a href="#" target="_blank"><img src="../src/assets/instagram.svg" alt="Instagram"></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <p>0555 777 88 99</p>
          <p>E-Mail</p>
        </div>
        <div class="footer-section">
          <h3>Get Information</h3>
          <form class="form">
            <input type="text" placeholder="Enter your brand mail">
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>


<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    box-sizing: border-box;
}

body {
    background-color: #E1F7F5;
}

.navbar {
    background-color: rgba(8, 1, 17, 0.9);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
}

.navbar .logo h1 {
  margin-right: 4rem;
  padding: 15px 15px;
  color: #E1F7F5;
}

.navbar::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, transparent, #1E90FF, transparent);
    animation: slide 7s infinite;
}

@keyframes slide {
    0% {
        left: -100%;
    }
    50% {
        left: 100%;
    }
    100% {
        left: -100%;
    }
}

.navigation {
    display: flex;
    margin: 0;
    padding: 0;
    margin: 30px 20px;
}

.navigation a {
    text-decoration: none;
    color: #E1F7F5;
    font-size: 20px;
    padding: 10px 15px;
}

.navigation a:hover {
    color: #1E90FF;
    background-color: #E1F7F5 ;
    border-radius: 20px;
}

.navigation li {
    margin-right: 5rem;
    list-style: none;
}

.navbar img {
    width: 200px;
    opacity: 0.8;
    border-radius: 10px;
    margin-left: 1rem;
}

.navbar img:hover {
    opacity: 1;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 25px;
    top: 20px;
}

.menu-toggle img {
    width: 30px;
}

@media (max-width: 768px) {
    .navigation {
        position: fixed;
        top: 70px;
        right: -100%;
        width: 250px;
        height: 40%;
        background: rgba(8, 1, 17, 0.7);
        transition: right 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        z-index: 3;
    }

    .navigation.active {
        right: 0;
    }

    .navigation li {
        width: 100%;
        margin-bottom: 15px;
    }

    .menu-toggle {
        display: flex;
        position: absolute;
        right: 25px;
        top: 20px;
    }  
  
    .menu-toggle img {
        width: 40px;
    }
}

.footer {
    background-color: rgba(8, 1, 17, 0.9);
    color: #E1F7F5;
    padding: 20px 0;
    text-align: center;
}

.footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 10px;
}

.footer-section {
    flex: 1;
    min-width: 200px;
    margin: 10px;
}

.footer-section h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.footer-section p {
    font-size: 1em;
    line-height: 1.5;
    margin: 10px 0px;
}

.social-icons a img {
    width: 30px;
    margin: 0 10px;
    filter: invert(100%);
}

.form input[type="text"] {
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 80%;
    margin-bottom: 10px;
}

.form button {
    padding: 10px 20px;
    background-color: #1E90FF;
    color: #E1F7F5;
    border: none;
    border-radius: 5px;
    margin-left: 15px;
    cursor: pointer;
}

.form button:hover {
  background-color:  #054c92;
}

.footer-bottom {
    background-color: #1E90FF;
    padding: 10px 0;
    margin-top: 20px;
    margin-bottom: 20px;
}

.footer-bottom p {
    margin: 0;
    font-size: 0.9em;
}

</style>
