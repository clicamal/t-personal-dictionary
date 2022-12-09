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
	<form id="definition-form">
		<input type="text" name="word" placeholder="Word" required>
		<input type="text" name="tranlation" placeholder="Translation" required>
		<input type="text" name="translation-language" placeholder="Traslation language" required>

		<button type="submit">Create</button>
	</form>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'DefinitionForm'
	});
</script>

<style scoped>
	
</style>
