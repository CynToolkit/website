<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="grid hero-grid">
          <div class="col-12">
            <div class="hero-content">
              <div class="hero-text">
                <h1 class="hero-title fade-in mb-6">
                  <div>Your Game's Pipeline</div>
                  <div>
                    <span>Fully </span><span class="accent">Automated</span>
                  </div>
                </h1>
                <div class="hero-description mt-4 fade-in-delay">
                  <div class="mb-2">
                    Design custom workflows to compress assets, package for
                    multiple platforms, deploy to Steam or itch.io and more.
                  </div>
                  <div class="">
                    Streamline your path from editor to player, so you can focus
                    more on creating amazing games.
                  </div>
                </div>
              </div>
              <div class="hero-animation">
                <div class="node" ref="$firstNode">
                  <div class="title">Compress images</div>
                  <CircleConfirm
                    color="green"
                    ref="$firstIcon"
                    class="icon"
                  ></CircleConfirm>
                </div>
                <AnimatedArrow ref="$arrow1" />
                <div class="node" ref="$secondNode">
                  <div class="title">Package for desktop</div>
                  <CircleConfirm
                    color="green"
                    ref="$secondIcon"
                    class="icon"
                  ></CircleConfirm>
                </div>
                <AnimatedArrow ref="$arrow2" />
                <div class="node" ref="$thirdNode">
                  <div class="title">Upload to Steam</div>
                  <CircleConfirm
                    color="green"
                    ref="$thirdIcon"
                    class="icon"
                  ></CircleConfirm>
                </div>
              </div>
            </div>
            <div class="hero-cta fade-in-delay-2">
              <Button
                as="router-link"
                label="Download now"
                class="p-button-lg primary-btn"
                icon="pi pi-arrow-right"
                iconPos="right"
                :to="{ name: 'Download' }"
              ></Button>
              <Button
                as="router-link"
                label="For Construct 3 Users"
                class="p-button-lg p-button-secondary p-button-outlined ml-3 primary-btn"
                :to="{ name: 'Construct3' }"
              ></Button>
              <!-- <Button
                label="Watch Demo"
                class="p-button-lg p-button-outlined ml-3 primary-btn"
                icon="pi pi-play"
                iconPos="left"
              ></Button> -->
            </div>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/akMziFN6PFA?si=RCAfSgOMLtBoj_jF"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features" id="features">
      <div class="container">
        <h2 class="section-title text-center mb-5 fade-in">
          Powerful Features
        </h2>
        <div class="grid">
          <div
            class="col-12 sm:col-12 md:col-6 lg:col-4 p-3 fade-in-delay"
            v-for="(feature, index) in features"
            :key="feature.title"
          >
            <div
              class="feature-card"
              :class="{
                'feature-card--in-development': feature.inDevelopment,
              }"
            >
              <div class="feature-card-icon">
                <i :class="feature.icon"></i>
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TestimonialSection />

    <section class="pricing" id="pricing">
      <div class="container">
        <h2 class="section-title text-center mb-5 fade-in">Pricing</h2>
        <div class="grid">
          <div class="tiers">
            <div
              class="col-12 sm:col-12 md:col-6 lg:col-4 p-3 fade-in-delay tier"
              v-for="tier in tiers"
              :key="tier.name"
            >
              <div class="feature-card">
                <h3>{{ tier.name }}</h3>
                <p class="price">
                  <span class="price-text">${{ tier.price }}</span
                  >/{{ tier.unit }}
                </p>
                <div class="get-started-button">
                  <Button
                    as="router-link"
                    :to="{ name: 'Download' }"
                    class="p-button-lg primary-btn"
                    size="large"
                    fluid
                    v-if="tier.price === 0 || tier.price > 0"
                    >Download now</Button
                  >
                  <Button
                    class="p-button-lg primary-btn"
                    size="large"
                    fluid
                    v-else
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
              <ul class="features">
                <li
                  v-for="feature in tier.features"
                  :key="feature.name"
                  class="feature"
                >
                  <span v-if="feature.type === 'benefit'">
                    <i class="pi pi-check-circle green icon"></i>
                  </span>
                  <span v-else-if="feature.type === 'limitation'">
                    <i class="pi pi-times-circle red icon"></i>
                  </span>
                  <span class="text">{{ feature.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p class="pricing-notes">All plans are free during beta</p>
        <p class="pricing-notes small-notes">
          Until launch, all prices subject to change
        </p>
      </div>
    </section>

    <section class="cta">
      <div class="container text-center">
        <h2 class="fade-in">
          Ready to revolutionize your game development pipeline?
        </h2>
        <Button
          label="Download now"
          class="p-button-lg mt-3 fade-in-delay primary-btn"
          icon="pi pi-arrow-right"
          iconPos="right"
          as="router-link"
          :to="{ name: 'Download' }"
        ></Button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "primevue/button";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import CircleConfirm from "@/components/CircleConfirm.vue";
import AnimatedArrow from "@/components/AnimatedArrow.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";

interface Feature {
  name: string;
  type: "benefit" | "limitation";
}

interface Tier {
  name: string;
  price: number;
  unit: string;
  features: Feature[];
}

const tiers = ref<Tier[]>([
  {
    name: "Free",
    price: 0,
    unit: "month",
    features: [
      { name: "Actions from all integrations", type: "benefit" },
      { name: "Unlimited local pipelines", type: "benefit" },

      { name: "Email support", type: "benefit" },
      { name: "Community support", type: "benefit" },

      { name: "Single user", type: "limitation" },
      { name: "Pipelines limited to 10 actions", type: "limitation" },
      { name: "Only manual pipelines", type: "limitation" },
    ],
  },
  {
    name: "Individual",
    price: 0,
    unit: "month",
    features: [
      { name: "Actions from all integrations", type: "benefit" },
      { name: "Unlimited pipelines (cloud & local)", type: "benefit" },
      { name: "Unlimited actions & triggers", type: "benefit" },
      { name: "Themes", type: "benefit" },

      { name: "Email support", type: "benefit" },
      { name: "Community support", type: "benefit" },

      { name: "Single user", type: "limitation" },
    ],
  },
  {
    name: "Team",
    price: 0,
    unit: "month",
    features: [
      { name: "Actions from all integrations", type: "benefit" },
      { name: "Unlimited pipelines (cloud & local)", type: "benefit" },
      { name: "Unlimited actions & triggers", type: "benefit" },
      { name: "Shared pipelines", type: "benefit" },

      { name: "Faster email support", type: "benefit" },
      { name: "Community support", type: "benefit" },

      { name: "Analytics", type: "benefit" },
    ],
  },
  // ... other tiers
]);

const features = ref([
  {
    title: "Cross-Platform Support",
    description:
      "Package your game effortlessly for multiple platforms including Windows, macOS, and Linux.",
    inDevelopment: false,
    icon: "pi pi-desktop",
  },
  {
    title: "Deploy anywhere",
    description:
      "Upload your game to platforms like Steam and itch.io for quick deployments.",
    inDevelopment: false,
    icon: "pi pi-cloud",
  },
  {
    title: "Integrate with anything",
    description:
      "Seamlessly integrate with popular game editors like Construct 3 and Godot.",
    inDevelopment: false,
    icon: "pi pi-code",
  },
  {
    title: "Easy to Use",
    description:
      "Intuitive design, so you can automate your pipeline without needing a degree in DevOps.",
    inDevelopment: false,
    icon: "pi pi-check-circle",
  },
  {
    title: "Custom Script Integration",
    description:
      "Incorporate custom scripts and tools into your automation pipelines.",
    inDevelopment: false,
    icon: "pi pi-code",
  },
  {
    title: "Cloud-Powered Workflows",
    description:
      "Offload complex builds to the cloud, freeing up your local resources.",
    inDevelopment: true,
    icon: "pi pi-cloud",
  },
  {
    title: "Secure Data Storage",
    description:
      "Your game pipeline can be stored securely in our cloud infrastructure.",
    inDevelopment: true,
    icon: "pi pi-lock",
  },
  {
    title: "Secrets support",
    description: "Share pipelines with others without exposing your secrets.",
    inDevelopment: true,
    icon: "pi pi-key",
  },
  {
    title: "Analytics",
    description: "Get insights into your pipeline's performance.",
    inDevelopment: true,
    icon: "pi pi-key",
  },
]);

const $firstIcon = ref<InstanceType<typeof CircleConfirm>>();
const $secondIcon = ref<InstanceType<typeof CircleConfirm>>();
const $thirdIcon = ref<InstanceType<typeof CircleConfirm>>();

const $firstNode = ref<HTMLDivElement>();
const $secondNode = ref<HTMLDivElement>();
const $thirdNode = ref<HTMLDivElement>();

const $arrow1 = ref<InstanceType<typeof AnimatedArrow>>();
const $arrow2 = ref<InstanceType<typeof AnimatedArrow>>();

const delay = ref(0);

const interval = setInterval(() => {
  console.log("delay.value", delay.value);
  if (delay.value === 0) {
    if ($firstNode.value) {
      $firstNode.value.classList.add("animate-node");
    }
  }

  if (delay.value === 1) {
    if ($arrow1.value) {
      $arrow1.value.animateHead();
      $arrow1.value.animateLine();
    }
  }

  if (delay.value === 2) {
    if ($secondNode.value) {
      $secondNode.value.classList.add("animate-node");
    }
  }

  if (delay.value === 3) {
    if ($arrow2.value) {
      $arrow2.value.animateHead();
      $arrow2.value.animateLine();
    }
  }

  if (delay.value === 4) {
    if ($thirdNode.value) {
      $thirdNode.value.classList.add("animate-node");
    }
  }

  if (delay.value === 5) {
    if ($firstIcon.value) {
      $firstIcon.value.start();
    }
  }

  if (delay.value === 6) {
    if ($secondIcon.value) {
      $secondIcon.value.start();
    }
  }

  if (delay.value === 7) {
    if ($thirdIcon.value) {
      $thirdIcon.value.start();
    }
  }

  if (delay.value >= 10) {
    clearInterval(interval);
  }

  delay.value += 1;
}, 500);
</script>

<style lang="scss" scoped>
.primary-btn {
  text-decoration: none;
}

.primary-btn:not(.p-button-outlined) {
  background: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
  color: white !important;
}

.primary-btn.p-button-outlined {
  color: var(--primary-color);
  border-color: var(--primary-color);

  &:hover {
    color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
    background: var(--primary-color_hover) !important;
  }
}

.hero {
  background-color: var(--surface-ground);
  padding: 4rem 0;
}

.hero-grid {
  justify-content: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  color: var(--text-color);
  text-align: center;
  display: flex;
  flex-direction: column;

  .accent {
    color: var(--primary-color);
    text-decoration: underline;
  }
}

.hero-cta {
  display: flex;
  align-items: center;
  justify-content: center;
}

.video {
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-description {
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
}

.features {
  padding: 2rem 0 4rem;
  background: #fff;
}

.pricing {
  padding: 2rem 0 4rem;
  background: var(--surface-ground);

  .pricing-notes {
    text-align: center;

    &.small-notes {
      font-size: 0.75rem;
      color: #666;
    }
  }
}

.demo {
  background-color: var(--surface-section);
  padding: 4rem 0;
}

.section-title {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.feature-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 1rem 2rem;
  height: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  border: 1px solid #f1f1f1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: var(--text-color);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  &--in-development {
    &::after {
      content: "In Development";
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: var(--primary-color);
      color: white;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
    }
  }
}

.feature-card-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.cta {
  background-color: #fff;
  padding: 4rem 0;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
  }
}

.hero-animation {
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: space-between;
  // gap: 2.5rem;
  padding: 16px 0 48px 0;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-image {
    margin-top: 2rem;
  }

  .feature-card {
    margin-bottom: 1rem;
  }
}

// Subtle fade-in animations
.fade-in {
  animation: fadeIn 0.8s ease-out;
}

.fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.2s both;
}

.fade-in-delay-2 {
  animation: fadeIn 0.8s ease-out 0.4s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInFade {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.node {
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;
  border: 1px solid #1f2937;
  width: 300px;
  height: 100%;
  transform: translateX(50px);
  opacity: 0;
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.1);
  background: #f5f5f5;
  border: 1px solid #dfdfdf;

  &.animate-node {
    animation: slideInFade 0.5s forwards, slideIn 0.5s forwards;
  }

  .title {
    font-size: 1.25rem;
    color: var(--text-color);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
}

.tiers {
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;

  .feature-card {
    height: auto;
  }

  .features {
    padding: 1.5rem;
    background-color: var(--surface-ground);

    li {
      padding: 0.25rem 0;
    }
  }

  .tier {
    width: calc(1200px / 3);
    padding: 20px;
    border-radius: 5px;
  }

  .price {
    .price-text {
      font-size: 2em;
      font-weight: bold;
    }
  }
}

@media (max-width: 1280px) {
  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-animation {
    display: none;
  }

  //   .tiers {
  //     flex-direction: column;
  //     justify-content: center;
  //   }
}

.red {
  color: red;
}

.green {
  color: green;
}

.features {
  list-style: none;

  .feature {
    .icon {
      margin-right: 0.5rem;
    }

    .text {
      font-size: 0.9rem;
    }
  }
}

.get-started-button {
  text-align: center;
  margin-top: 1rem;
}
</style>

<style>
body {
  margin: 0;
}
</style>
