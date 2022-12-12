<!--
  Copyright (C) 2022  Tarcísio J. S. Rodrigues <justother94@gmail.com>

  This file is part of t-personal-dictionary, and it is licensed
  under the GNU General Public License 3.0. A copy of the license
  can be viewed at <https://www.gnu.org/licenses/gpl-3.0.html>.

  t-personal-dictionary is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
-->

<template>
  <div id="root" :class="{ 'darkmode': darkmodeOn }">
    <nav id="navbar">
      <div id="navbar-content-wrapper" class="nav-wrapper teal lighten-1">
        <a id="logo" class="brand-logo">T Personal Dictionary</a>

        <ul id="navbar-menu-list" class="right hide-on-med-and-down">
          <DarkmodeSwitch @toggle-darkmode="toggleDarkmode" />
        </ul>
      </div>
    </nav>
    <div id="content">
      <div id="definition-form-wrapper">
        <DefinitionForm @add-definition="addDefinition" />
      </div>

      <div id="definitions-wrapper">
        <div id="definitions">
          <h4 id="definitions-heading">Definitions:</h4>
          <ol id="definitions-list">
            <div v-if="noDefinitions" class="definitions-list-item">
              No definitions created yet :(
            </div>
            <Definition v-for="(definition, index) in definitions" :data="definition" :key="index" />
          </ol>
        </div>
      </div>
    </div>

    <footer id="footer" class="page-footer teal lighten-1">
      <div id="footer-content-wrapper" class="container">
        <div id="copyright-notice-wrapper" class="footer-copyright  teal lighten-1">
          <div id="copyright-notice" class="container">
            © 2022 Tarcísio J. S. Rodrigues
            <a id="license-anchor" class="grey-text text-lighten-4 right" target="_blank"
              href="https://www.gnu.org/licenses/gpl-3.0.html">License</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefinitionForm from './components/DefinitionForm.vue';
import Definition from './components/Definition.vue';
import DarkmodeSwitch  from './components/DarkmodeSwitch.vue';
import DefinitionInterface from './interfaces/DefinitionInterface';

export default defineComponent({
  name: 'App',
  components: {
    DefinitionForm,
    Definition,
    DarkmodeSwitch
  },
  data() {
    return {
      definitions: [] as DefinitionInterface[],
      darkmodeOn: false
    };
  },
  computed: {
    noDefinitions(): boolean {
      return this.definitions.length === 0;
    }
  },
  methods: {
    addDefinition(payload: DefinitionInterface) {
      this.definitions.push(payload);
    },
    toggleDarkmode(payload: boolean) {
        this.darkmodeOn = payload;
    }
  }
});
</script>

<style scoped>
div#root {
  --theme-color: #00897b;
  --secondary-color: #e0f2f1;
  --text-color: black;
  background-color: var(--secondary-color);
  color: var(--text-color);
}

div#root.darkmode {
  --theme-color: #263238;
  --secondary-color: #546e7a;
  --text-color: white;
}

div#navbar-content-wrapper {
  padding-left: 15px;
  padding-right: 15px;
  background-color: var(--theme-color) !important;
}

div#content {
  padding: 15px;
  height: 100vh;
}

ol#definitions-list {
  padding-left: 30px;
  list-style-type: none;
}

footer#footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: var(--theme-color) !important;
}

div#copyright-notice-wrapper {
  background-color: var(--theme-color) !important;
}
</style>
