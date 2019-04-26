<template>
  <div class="main">
    <button id="first-step" v-if="!showSecondStep"
            @click="showConfirmationPopup">FIRST STEP
    </button>

    <button id="second-step" v-if="showSecondStep"
            @click="showCongrats">SECOND STEP
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showSecondStep: false
      }
    },
    methods: {
      async showConfirmationPopup() {
        await this.$swal('Are you sure??')
        this.showSecondStep = true
      },
      async showCongrats() {
        await this.$swal('Congrats!!')
        this.showSecondStep = false
      }
    }
  }
</script>
