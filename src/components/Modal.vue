<template>
  <div class="modal">
    <div class="modal__body">
    <div class="trades__wrapper">
      <div class="trade__card" v-for="(trade, index) in dailyTrades" :key="index">
        {{trade.day || trade}}
        <div class="trade__card__content" v-if="trade._id">
          <p>from ${{trade.open}} to ${{trade.close}}</p>
          <span v-if="trade.open < trade.close">
            &#8679;
          </span>
          <span v-else-if="trade.open > trade.close">
            &#8681;
          </span>
          <span v-else>
            &#8652;
          </span>
        </div>
        <div class="trade__card__content" v-else>
          <p>
            Not Open!
          </p>
        </div>
      </div>
    </div>
    <div class="modal__footer">
      <button @click="closeModal" class="modal__button">Close</button>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Modal',
  data() {
    return {
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    }
  },
  computed: {
    ...mapGetters([
      'currentLocation'
    ]),
    dailyTrades() {
      let tradesArray = this.days
      this.days.map(day => {
        this.currentLocation.hours.map((hour, index) => {
          if( hour.day == day) { tradesArray.splice(index, 1, hour) }
        })
      })
      return tradesArray;
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  width: 100vw;
  height: 100vh;
  background: rgba(255, 204, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  &__body {
    width: 50%;
    background: #ffffff;
    border-radius: 8px;
    margin: auto;
    padding: 2rem;
  }
  &__footer {
    border-top: 1px solid rgba(255, 204, 0, 0.5);
    padding: 10px;
    text-align: right;
    margin-top: 1rem;
  }
  &__button {
    color: #FFCD00;
    padding: 1rem 3rem;
    background: #CD2A00;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }
}
.trades__wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin: 1rem;
}
.trade__card {
  border: 1px solid rgba(255, 204, 0, 0.5);
  border-radius: 8px;
  padding: 1.5rem;
}
</style>