<template>
  <div id="app">
    <h1 class="page__header">Trade Locations</h1>
    <div class="location__wrapper" v-if="trades.length != 0">
      <Location v-for="(trade, index) in trades" :location="trade" :key="index" />
    </div>
    <div v-else>Loading...</div>
    <Modal @close="closeModal" v-if="showModal" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations} from 'vuex'
import Location from '@/components/Location.vue'
import Modal from '@/components/Modal.vue'
export default {
  name: 'app',
  components: {
    Location,
    Modal
  },
  data() {
    return {
      isLoading: false,
      showModal: false
    }
  },
  computed: {
    ...mapGetters({
      trades: 'getTrades',
      currentLocation: 'currentLocation'
    })
  },
  watch: {
    currentLocation(val) {
      if(val != {}) {
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    }
  },
  mounted() {
    this.loadTrades()
  },
  methods: {
    ...mapActions(['loadTrades']),
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.location__wrapper {
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
  grid-gap: 2rem;
}
</style>
