<template>
    <h1>Counter - Vuex</h1>

    <h2>Direct access: {{ $store.state.count }}</h2>
    <h2>Computerd: {{ countComputed }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt">Random</button>

    <h2>mapState</h2>
    <h2>mapState: {{ count }}</h2>
    <h2>lastMutation: {{ lastMutation }}</h2>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'counter-component',

    computed: {
        countComputed() {
            return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation'])
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })

    },
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        incrementBy() {
            this.$store.commit('incrementBy', 5)
        },
        // ...mapActions(['incrementRandomInt'])
        ...mapActions({
            randomInt: 'incrementRandomInt'
        })
    }
}
</script>

<style>

</style>