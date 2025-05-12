<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <h2 class="section-title text-center mb-5 fade-in">What Developers Say</h2>
      <div class="testimonial-list">
        <div class="testimonial-card fade-in" v-for="testimonial in testimonials" :key="testimonial.author">
          <p class="testimonial-quote">“{{ testimonial.quote }}”</p>
          <div class="testimonial-author">
            <a :href="testimonial.authorLink" target="_blank" rel="noopener" class="testimonial-name">{{ testimonial.author }}</a>
            <a :href="testimonial.link" v-if="testimonial.company" target="_blank" rel="noopener" class="testimonial-company">{{ (testimonial.author ? ', ' : '') + testimonial.company }}</a>
            <a v-if="testimonial.link" :href="testimonial.link" target="_blank" rel="noopener" class="testimonial-link">🔗</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: `Pipelab has made it super easy to quickly iterate and spread builds of DeadWire to the rest of the team. After setting it up the one click electron export and upload to steam can’t be beaten.`,
    author: 'Shotgun Anaconda',
    authorLink: 'https://x.com/shotgunanaconda',
    company: 'DeadWire',
    link: 'https://store.steampowered.com/app/2995100/DeadWire/'
  },
  {
    quote: `Pipelab is amazing. If you're a serious game developer, it has everything you need to automate your deploying process into multiple platforms, and it's all seamless.`,
    // author: 'Yin',
    company: 'Asteristic Game Studio',
    link: 'https://asteristic.com/'
  }
];
</script>

<style scoped>
.testimonials {
  background: #f9f9fb;
  padding: 4rem 0 3rem 0;
}
.section-title {
  font-size: 2.2rem;
  color: var(--text-color);
  margin-bottom: 2.5rem;
}
.testimonial-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.testimonial-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 3px 16px rgba(0,0,0,0.07);
  padding: 2rem 2.5rem;
  max-width: 420px;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}
.testimonial-quote {
  font-size: 1.1rem;
  font-style: italic;
  color: #333;
  margin-bottom: 1.2rem;
}
.testimonial-author {
  font-weight: bold;
  color: #1f2937;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.testimonial-company {
  color: #666;
  font-weight: normal;
}
.testimonial-link {
  /* margin-left: 0.4rem; */
  color: var(--primary-color);
  font-size: 0.rem;
  text-decoration: none;
}
@media (max-width: 768px) {
  .testimonial-list {
    flex-direction: column;
    align-items: center;
  }
  .testimonial-card {
    max-width: 95vw;
    padding: 1.2rem 1rem;
  }
}
</style>
