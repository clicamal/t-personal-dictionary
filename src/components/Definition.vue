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
	<li class="definitions-list-item"><i id="language">{{ data.language }}</i>{{ data.word }} — {{ data.translation }}
	</li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Definition from '../interfaces/DefinitionInterface';

export default defineComponent({
	name: 'DefinitionsListItem',
	props: {
		data: {
			type: Object as PropType<Definition>,
			required: true
		}
	}
});
</script>

<style scoped>
i#language {
	color: rgba(0, 0, 0, 0.5);
	padding-right: 10px;
}
</style>
