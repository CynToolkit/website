<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="flex align-items-center justify-content-between py-3">
          <div class="logo">
            <RouterLink class="nav-link-logo" :to="{ name: 'Home' }">
              Cyn
            </RouterLink>
          </div>
          <nav class="hidden lg:flex">
            <component
              v-for="item in menuItems"
              :key="item.label"
              :is="item.external ? 'a' : 'RouterLink'"
              :to="!item.external ? item.to : undefined"
              :href="item.external ? item.to : undefined"
              class="nav-link"
              :class="{ 'icon-only': item.iconOnly }"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
              :disabled="item.disabled"
            >
              <i :class="item.icon"></i>
              <span v-if="!item.iconOnly">{{ item.label }}</span>
            </component>
          </nav>
          <Button
            icon="pi pi-bars"
            @click="toggleMobileMenu"
            class="p-button-text lg:hidden"
          />
        </div>
      </div>
    </header>
    <div v-if="mobileMenuOpen" class="mobile-menu lg:hidden">
      <component
        v-for="item in menuItems"
        :key="item.label"
        :is="item.external ? 'a' : 'RouterLink'"
        :to="!item.external ? item.to : undefined"
        :href="item.external ? item.to : undefined"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
        :disabled="item.disabled"
        class="mobile-nav-link"
        @click="closeMobileMenu"
      >
        <i :class="item.icon"></i>
        {{ item.label }}
      </component>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "primevue/button";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

const menuItems = ref([
  { label: "Home", icon: "pi pi-home", to: { name: "Home" } },
  {
    label: "Features",
    icon: "pi pi-star",
    to: { name: "Home", hash: "#features" },
  },
  {
    label: "Pricing",
    icon: "pi pi-dollar",
    to: { name: "Home", hash: "#pricing" },
  },

  { label: "Download", icon: "pi pi-download", to: { name: "Download" } },

  {
    label: "Documentation",
    icon: "pi pi-question-circle",
    to: "//docs.cyn.armaldio.xyz",
    external: true,
    disabled: true,
  },
  {
    label: "Support",
    icon: "pi pi-heart",
    to: "//polar.sh/cyn",
    external: true,
    disabled: false,
  },
  {
    label: "Github",
    icon: "pi pi-github",
    to: "//github.com/CynToolkit/cyn",
    external: true,
    disabled: false,
    iconOnly: true,
  },
  {
    label: "Discord",
    icon: "pi pi-discord",
    to: "//discord.gg/MzNw26cBb5",
    external: true,
    disabled: false,
    iconOnly: true,
  },

  {
    label: "Contact",
    icon: "pi pi-envelope",
    to: { name: "Contact" },
    disabled: true,
    iconOnly: true,
  },
]);

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--surface-card);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.nav-link-logo {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: var(--primary-color);
  }
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
  i {
    margin-right: 0.5rem;
  }
}

.icon-only {
  margin-left: 2rem;
}

.icon-only ~ .icon-only {
  margin-left: 0.5rem;
}

.mobile-menu {
  background-color: var(--surface-card);
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.mobile-nav-link {
  display: block;
  color: var(--text-color);
  text-decoration: none;
  padding: 0.75rem 0;
  font-weight: 500;
  transition: color 0.3s ease;
  &:hover {
    color: var(--primary-color);
  }
  i {
    margin-right: 0.5rem;
  }
}

a[disabled="true"] {
  color: #666;
  pointer-events: none;
}
</style>

<style lang="scss">
/* @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

body {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text-color);
  margin: 0;
} */

:root {
  --primary-color: #4f46e5;
  --primary-color_hover: #4f46e51a;
  --surface-ground: #f9fafb;
  --surface-section: #ffffff;
  --text-color: #1f2937;
  --surface-card: #ffffff;
}
</style>
