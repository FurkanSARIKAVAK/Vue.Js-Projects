<template>
    <div>
        <div class="hero-section">
            <div class="image-box">
                <img src="../assets/images/services/branding.jpg">
                <div class="overlay-text">Corporate Identity</div>
            </div>
            <div class="image-box">
                <img src="../assets/images/services/web.jpg">
                <div class="overlay-text">Web Design</div>
            </div>
            <div class="image-box">
                <img src="../assets/images/services/social-media.jpg">
                <div class="overlay-text">Social Media Managment</div>
            </div>
        </div>

        <div class="service-container">
            <div class="service-box">
                <img src="../assets/images/services/design.png" alt="design">
                <p>Unique page and custom design</p>
            </div>
            <div class="service-box">
                <img src="../assets/images/services/seo.png" alt="seo">
                <p>SEO-friendly understandable panel</p>
            </div>
            <div class="service-box">
                <img src="../assets/images/services/responsive.png" alt="responsive">
                <p>Responsive design</p>
            </div>
            <div class="service-box">
                <img src="../assets/images/services/cms.png" alt="cms">
                <p>Advanced CMS module</p>
            </div>
        </div>

        <div class="service-container">
                <div class="service-box">
                    <img src="../assets/images/services/strategy.png" alt="strategy">
                    <p>Custom social media strategy</p>
                </div>
                <div class="service-box">
                    <img src="../assets/images/services/content.png" alt="content">
                    <p>Target audience analysis</p>
                </div>
            <div class="service-box">
                <img src="../assets/images/services/analysis.png" alt="analytics">
                <p>Detailed analytics</p>
            </div>
            <div class="service-box">
                <img src="../assets/images/services/community.png" alt="community">
                <p>Active community management</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.hero-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    background: linear-gradient(135deg, #1E0342, #1E90FF);
}

.image-box {
    position: relative;
    width: 22%;
    height: 400px; /* Sabit yükseklik */
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease;
    margin: 20px 0;
}

.image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 15px;
    transition: transform 0.3s ease;
}

.overlay-text {
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: #E1F7F5;
    font-size: 1.5em;
    font-weight: bold;
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.7);
}

.image-box::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 144, 255, 0.4);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: scale(1.5);
    border-radius: 15px;
    z-index: 1;
}

.image-box:hover::after {
    opacity: 1;
    transform: scale(1);
}

.image-box:hover img {
    transform: scale(1.1);
}

.overlay-text {
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: #E1F7F5;
    font-size: 1.5em;
    font-weight: bold;
    text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.7);
    z-index: 2;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInTop {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.image-box:nth-child(1) {
    animation: slideInLeft 2s ease-in-out;
}

.image-box:nth-child(2) {
    animation: slideInTop 2s ease-in-out;
}

.image-box:nth-child(3) {
    animation: slideInRight 2s ease-in-out;
}

.service-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
}

.service-box {
    background-color: #9edff8;
    border-radius: 10px;
    padding: 20px;
    width: 22%;
    text-align: center;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    margin: 30px 10px;
}

.service-box img {
    width: 50px;
    height: 50px;
    margin: 20px 10px;
}

.service-box p {
    font-size: 16px;
    font-weight: bold;
    color: #1E0342;
    margin-top: 0;
}

.service-box:hover {
    transform: translateY(-10px);
}

@media (max-width: 768px) {
    .hero-section {
        flex-direction: column;
        padding: 25px;
    }

    .image-box {
        width: 100%;
        height: 300px;
        margin-bottom: 20px;
    }

    .image-box img {
        height: 100%;
    }

    .service-container {
        flex-direction: column;
        padding: 10px;
    }

    .service-box {
        width: 80%;
        margin: 20px 0;
    }
}
</style>