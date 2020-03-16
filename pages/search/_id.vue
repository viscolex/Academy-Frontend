<template>
  <div>
    <div class="columns medium-3" v-for="result in results">
      <div class="card">
        <div class="card-divider">
          {{ result.title }}
        </div>
        <div class="card-section">
          <p>{{ result.abstract }}.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
