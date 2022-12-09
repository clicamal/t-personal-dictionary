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
	<form id="definition-form" @submit="onSubmit">
		<div id="word-data" class="input-field inline definition-form-data">
			<input ref="word" v-model="word" id="word-input" type="text" name="word" class="definition-form-input"
				autocomplete="off" required>
			<label id="word-label" for="word-input" class="definition-form-label">Word</label>
		</div>

		<div id="translation-data" class="input-field inline definition-form-data">
			<input ref="translation" v-model="translation" id="translation-input" type="text" name="translation"
				class="definition-form-input" autocomplete="off" required>
			<label id="translation-label" for="translation-input" class="definition-form-label">Translation</label>
		</div>

		<div id="language-data" class="input-field inline definition-form-data">
			<input ref="language" v-model="language" id="language-input" type="text" name="language"
				class="definition-form-input" autocomplete="on" required>
			<label id="language-label" for="language-input" class="definition-form-label">Language</label>
		</div>

		<div id="definition-form-submit-button-wrapper" class="input-field inline">
			<button id="definition-form-submit-button" type="submit" class="btn">Create</button>
		</div>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'DefinitionForm',
	data() {
		return {
			word: '',
			translation: '',
			language: ''
		};
	},
	emits: ['addDefinition'],
	methods: {
		onSubmit(event: Event) {
			event.preventDefault();

			this.$emit('addDefinition', {
				word: this.word,
				translation: this.translation,
				language: this.language
			});

			this.word = '';
			this.translation = '';

			(this.$refs.word as HTMLElement).focus();
		}
	}
});
</script>

<style scoped>

</style>
