<template>
    <div>
      <section class="about-us">
        <div class="content">
          <h2>Who is Turquoise Agency?</h2>
          <p>
            At Turquoise Agency, we believe in crafting digital solutions that resonate with your brand's identity and values. Specializing in corporate identity, social media management, and web design, we have successfully bridged the gap between creativity and technology.
          </p>
          <p>
            From innovative web designs that captivate users to robust corporate identities that stand out in the market, our expertise ensures that your brand makes a lasting impression.
          </p>
          <p>
            Since our inception, Turquoise Agency has been at the forefront of digital transformation, helping businesses thrive in the ever-evolving digital landscape. Our social media management strategies are designed to amplify your brand’s voice, while our tailored web design services create user experiences that drive engagement and growth.
          </p>
          <p>
            Trust us to bring your vision to life, and take your brand to new heights with our comprehensive suite of digital services.
          </p>
        </div>
        <div class="stats">
          <div class="stat-item">
            <img src="../assets/images/aboutUs/customer.jpg" alt="Customers">
          </div>
          <div class="stat-item">
            <img src="../assets/images/aboutUs/project.jpg" alt="Projects">
          </div>
          <div class="stat-item">
            <img src="../assets/images/aboutUs/software.jpg" alt="Software">
          </div>
          <div class="stat-item">
            <img src="../assets/images/aboutUs/office.jpg" alt="Office">
          </div>
        </div>
      </section>
  
      <section class="collaborators scroll-animation">
        <h2>Our Collaborators</h2>
        <p>We work with brands that want to leave a mark in the digital world.</p>
        <div class="collaborators-gallery">
          <div class="collaborator-item">
            <a href="#" target="_blank">
              <img src="../assets/images/aboutUs/hepsiburada.svg" alt="Collaborator 1">
            </a>
          </div>
          <div class="collaborator-item">
            <a href="#" target="_blank">
              <img src="../assets/images/aboutUs/vestel.png" alt="Collaborator 2">
            </a>
          </div>
          <div class="collaborator-item">
            <a href="#" target="_blank">
              <img src="../assets/images/aboutUs/getir.png" alt="Collaborator 3">
            </a>
          </div>
          <div class="collaborator-item">
            <a href="#" target="_blank">
              <img src="../assets/images/aboutUs/ea.svg" alt="Collaborator 4">
            </a>
          </div>
        </div>
      </section>

      <div class="container scroll-animation">
        <div class="image-section">
          <img src="../assets/images/aboutUs/workplace.jpg" class="image">
        </div>
        <div class="text-section">
          <div class="rating">★★★★★</div>
            <p class="description">
            Turquoise Agency offers creative and effective solutions for brands that want to make a mark in the digital world.
            </p>
            <div class="user-info">
              <img src="../assets/images/aboutUs/avatar.jpg" class="avatar"/>
            <span class="username">Customer Comment</span>
            </div>
          </div>
        </div>
      </div>
  </template>
  

<script>
  export default {
  mounted() {
    const elements = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.2
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  }
}
</script>

<style scoped>
.about-us {
    background-image: url('../assets/images/aboutUs/header.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 50px;
}

.content {
    width: 70%;
    color: #E1F7F5;
    text-align: left;
    margin: 30px 10px;
}

.content h2 {
    font-size: 2.5em;
    color: #1E90FF;
    margin-bottom: 30px;
}

.content p {
    font-size: 1.2em;
    line-height: 1.5;
    font-weight: 600;
    margin-top: 8px;
}

.stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    width: 50%;
    padding-left: 30px;
    margin: 100px 10px;
}

.stat-item {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0; 
    transform: translateY(20px);
    animation: fadeInUp 3s ease forwards;
    transition: transform 0.3s, box-shadow 0.3s;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.stat-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.stat-item:hover img {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(30, 144, 255, 0.5);
}

@media (max-width: 768px) {
    .about-us {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px;
    }

    .content {
        margin-bottom: 30px;
        max-width: 100%;
    }

    .stats {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding-left: 0;
    }

    .stat-item {
        width: 70%;
        margin: 10px 0;
    }

    .stat-item img {
        width: 100%;
        height: auto;
        margin-bottom: 15px;
        padding-left: 0;
    }
}

.collaborators h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
    text-align: center;
    color: #1E0342;
}

.collaborators p {
    font-size: 1.5em;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;
    color: #1E0342;
}

.collaborators {
    padding: 50px 20px;
    text-align: center;
    background-color: #E1F7F5;
    margin: 60px 0;
}

.collaborators-gallery {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.collaborator-item {
    flex: 1;
    margin: 10px;
    min-width: 150px;
}

.collaborator-item img {
    width: 50%;
    border-radius: 10px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s;
}

.collaborator-item img:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 20px rgba(30, 144, 255, 0.5);
}

.collaborator-item img:hover {
    transform: scale(1.05);
}

@media (max-width: 768px) {
    .collaborators-gallery {
        flex-direction: row;
        align-items: center;
    }

    .collaborator-item {
        max-width: 60%;
    }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 20px;
  background-color: #E1F7F5;
  margin: 60px 10px 40px 10px;
}

.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image {
  height: auto;
  object-fit: cover;
  max-width: 100%;
}

.text-section {
  flex: 1;
  max-width: 50%;
  background-color: #1E90FF;
  color: #E1F7F5;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.rating {
  font-size: 24px;
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  margin-bottom: 20px;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.username {
  font-size: 16px;
  font-weight: bold;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.scroll-animation {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.5s ease-out;
}

.scroll-animation.visible {
  animation: slideUp 1.5s forwards;
  opacity: 1;
  transform: translateY(0);
}
</style>