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
  <div id="root">
    <nav id="navbar">
      <div id="navbar-content-wrapper" class="nav-wrapper teal lighten-1">
        <a id="logo" class="brand-logo">T Personal Dictionary</a>
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
            <Definition v-for="(definition, index) in definitions" :data="definition" :key="index" />
          </ol>
        </div>
      </div>
    </div>

    <footer id="footer" class="page-footer  teal lighten-1">
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
import DefinitionInterface from './interfaces/DefinitionInterface';

export default defineComponent({
  name: 'App',
  components: {
    DefinitionForm,
    Definition
  },
  data() {
    return {
      definitions: [] as DefinitionInterface[]
    }
  },
  methods: {
    addDefinition(payload: DefinitionInterface) {
      this.definitions.push(payload);
    }
  }
});
</script>

<style scoped>
div#navbar-content-wrapper {
  padding-left: 15px;
}

div#content {
  padding: 15px;
}

ol#definitions-list {
  padding-left: 30px;
  list-style-type: none;
}

footer#footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
