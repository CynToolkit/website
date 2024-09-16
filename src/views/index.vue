<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="flex align-items-center justify-content-between py-3">
          <div class="logo">Cyn</div>
          <nav>
            <RouterLink
              v-for="item in menuItems"
              :key="item.label"
              :to="item.to"
              class="nav-link"
            >
              <i :class="item.icon"></i>
              {{ item.label }}
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import Button from "primevue/button";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import CircleConfirm from "@/components/CircleConfirm.vue";
import { useTimeAgo } from "@vueuse/core";
import AnimatedArrow from "@/components/AnimatedArrow.vue";

const menuItems = ref([
  { label: "Home", icon: "pi pi-home", to: { name: 'Home' } },
  { label: "Features", icon: "pi pi-star", to: { name: 'Home', hash: "#features" } },
  { label: "Documentation", icon: "pi pi-question-circle", to: "https://docs.cyn.armaldio.xyz" },
  { label: "Pricing", icon: "pi pi-dollar", to: { name: 'Home', hash: "#pricing" } },
  { label: "Download", icon: "pi pi-download", to: { name: 'Download' } },
  { label: "Contact", icon: "pi pi-envelope", to: { name: 'Contact' } },
]);
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

body {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text-color);
}

:root {
  --primary-color: #4f46e5;
  --primary-color_hover: #4f46e51a;
  --surface-ground: #f9fafb;
  --surface-section: #ffffff;
  --text-color: #1f2937;
  --surface-card: #ffffff;
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

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header {
  background-color: var(--surface-card);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }

  i {
    margin-right: 0.5rem;
  }
}

.hero {
  background-color: var(--surface-ground);
  padding: 6rem 0;
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

.features {
  background-color: var(--surface-section);
  padding: 4rem 0;
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
  background-color: var(--surface-card);
  border-radius: 8px;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

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
  background-color: var(--surface-ground);
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
  box-shadow: 0px 0px 15px -3px rgba(0,0,0,0.1);
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
</style>

<style>
body {
  margin: 0;
}
</style>
