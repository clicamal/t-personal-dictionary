<template>
    <div id="darkmode-switch" class="switch">
        <label id="darkmode-switch-label" class="white-text">
            Darkmode Off
            <input id="darkmode-switch-checkbox" type="checkbox" @click="onToggleDarkmode">
            <span class="lever"></span>
            Darkmode On
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DarkmodeSwitch',
    data() {
        return {
            darkmodeOn: false
        };
    },
    emits: ['toggleDarkmode'],
    methods: {
        onToggleDarkmode(): void {
            this.darkmodeOn = !this.darkmodeOn;

            this.$emit('toggleDarkmode', this.darkmodeOn);
        }
    }
});
</script>

<style scoped>

</style>
