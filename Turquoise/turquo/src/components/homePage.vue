<template>
    <div>
      <div class="header">
        <div class="text-content">
          <div class="title">
            <h1>Make a difference in the <span style="color: #9AC8CD;">Digital World</span>.</h1>
            <div class="world">
              <img src="../assets/images/home/world.gif">
            </div>
          </div>
          <div class="text">
            <h2>Empowering your business with innovative <span style="color: #9AC8CD;">software</span> solutions.</h2>
          </div>
        </div>
        <div class="phone" @click="goContact">
          <img src="../assets/images/home/phone.png">
        </div>
      </div>
  
      <div class="laptop">
        <img src="../assets/images/home/laptop.png">
      </div>
  
      <section class="solutions">
        <div class="text-solutions">
          <h2>Creative and Effective Digital Solutions</h2>
          <p><span style="color: #1E90FF;">Turquoise Agency</span> offers creative and effective solutions for brands
            that want to leave a mark in the digital world. We provide a wide range of services, from web design to e-commerce site solutions, from social media management to corporate identity work.</p>
          <div class="stats">
            <div class="stat-item">
              <h3>150+</h3>
              <p>Effective Reach</p>
            </div>
            <div class="stat-item">
              <h3>15</h3>
              <p>Strong Digital Identity</p>
            </div>
          </div>
        </div>
        <div class="image-solutions">
          <img src="../assets/images/home/software.png">
        </div>
      </section>
  
      <section class="presentation">
        <h2>Creative Solutions Presentation</h2>
        <p>We are a digital agency that provides creative and effective solutions in the digital world. From web design
          to e-commerce site solutions, we provide support in every field.</p>
        <div class="panel">
          <div class="panels">
            <img src="../assets/images/home/managment.png">
            <div class="panel-text">
              <h3>Social Media Management</h3>
              <p>We manage the social media accounts of brands professionally. We ensure that customers reach their target audience most effectively.</p>
            </div>
          </div>
          <div class="panels">
            <img src="../assets/images/home/corporative.png">
            <div class="panel-text">
              <h3>Corporate Identity Studies</h3>
              <p>We offer effective solutions to strengthen the digital identities of brands. Our goal is to ensure that target audiences are reached in the most effective way.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  

<script>
export default {
  methods: {
    goContact () {
      this.$router.push('/contact');
    }
  }
}
</script>

<style scoped>
.header {
    background-image: url('../assets/images/home/header.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    color: #E1F7F5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
}

.text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right: 400px;
}

.title {
    margin-bottom: 20px;
}

.title h1 {
    margin: 20px 0;
}

.text {
    margin-top: 20px;
    margin-bottom: 20px;
}

.world img {
    width: 175px;
    border-radius: 100px;
}

.phone img {
    width: 100%;
}

.phone {
    animation: slide-in 3s ease-out;
    margin-right: 50px;
    cursor: pointer;
}

@keyframes slide-in {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .header {
        height: auto;
        padding: 20px 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .text-content {
        width: 100%;
        margin: 20px 0;
        align-items: center;
        text-align: center;
    }

    .phone img {
        width: 60%;
    }

    .phone {
        margin-top: 20px;
        margin-bottom: 0;
        margin-right: 0;
    }

    .laptop {
        display: none;
    }

    .solutions {
      display: flex;
      flex-direction: column;
    }

    .image-solutions img {
      display: none;
    }

    .text-solutions h2 {
      text-align: center;
      margin: 30px 10px;
    }

    .stat-item {
      margin-top: 40px;
    }
}

.laptop {
    position: absolute;
    top: 520px;
    left: 50%;
    transform: translate(-50%);
    width: 300px;
}

.laptop img{
    width: 100%;
}

.solutions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    margin: 40px 20px;
}

.text-solutions {
    max-width: 100%;
}

.text-solutions h2 {
    font-size: 2rem;
    color: #1E0342;
    margin: 30px 10px;
}

.text-solutions p {
    font-size: 18px;
    color: #508C9B;
    line-height: 1.6;
    font-weight: 700;
    margin: 20px 10px;
}

.stats {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

.stat-item {
    text-align: center;
}

.stat-item h3 {
    font-size: 36px;
    color: #1E90FF;
}

.stat-item p {
    font-size: 18px;
    color: #1E0342;
    font-weight: 700;
}

.image-solutions img {
    width: 100%;
    min-width: 600px;
    height: 100%;;
    border-radius: 10px;
}

section.presentation {
    text-align: center;
    padding: 50px 20px;
    margin: 80px 20px;
    border-radius: 10px;
    box-shadow: 0 8px 8px rgba(0,0,0,0.3);
    background-image: url('../assets/images/home/blue.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.presentation h2 {
    font-size: 2.5em;
    margin: 30px 0;
    color: #E1F7F5;
}

.presentation p {
    font-size: 1.2em;
    font-weight: 600;
    color: #E1F7F5;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 20px 50px;
}

.panel {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
}

.panels {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    max-width: 400px;
    margin: 20px;
    text-align: left;
}

.panels img {
    width: 100%;
    height: auto;
}

.panel-text {
    padding: 10px;
}

.panel-text h3 {
    margin-top: 5px;
    font-size: 1.5em;
    color: #1E0342;
    text-align: center;
}

.panel-text p {
    color: #80afb4;
    font-size: 1.2em;
    font-weight: 700;
}

</style>