<template>
  <div class="location__card">
    <div class="location__card__media">
      <img src="../assets/street-map.svg" alt="Location Icon">
    </div>
    <div class="location__card__content">
      <h3 class="location__name">{{location.name}}</h3>
      <h4 class="location__address">{{location.address}}</h4>
      <h5 class="location__city">{{location.city}}</h5>
      <p class="location__email">{{location.email}}</p>
    </div>
    <button class="location__action" @click="setLocation(location)">View Details</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'LocationCard',
  props: ['location'],
  methods: {
    ...mapMutations([ 'saveCurrentLocation' ]),
    setLocation(location) {
      this.saveCurrentLocation(location)
    }
  }
}
</script>
<style lang="scss" scoped>
.location {
  &__card {
    border-radius: 8px;
    border: 1px solid rgba(255, 204, 0, 0.2);
    overflow: hidden;
    &__media {
      img {
        width: auto;
        max-height: 200px;
        object-fit: cover;
      }
    }
  }
  &__action {
    background: #FFCD00;
    width: 100%;
    padding: 1rem;
    color: #CD2A00;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    border: none;
  }
}
</style>