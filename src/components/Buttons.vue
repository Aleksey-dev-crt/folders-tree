<template>
	<div class="buttons">
		<button
			type="button"
			class="button edit"
			:class="{ active: editPermission }"
			@click="$emit('edit')"
		></button>
		<button
			type="button"
			class="button delete"
			@click="$emit('delete')"
		></button>
	</div>
</template>

<script>
export default {
	name: 'Button',
	props: {
		editPermission: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped>
.buttons {
	display: flex;
	gap: 3px;
}

.button {
	all: unset;
	width: 20px;
	height: 20px;
}

.button:active {
	opacity: 0.7;
	transform: translateY(1px);
}

.edit {
	background: url('../assets/edit.svg') center no-repeat;
}

.delete {
	background: url('../assets/delete.svg') center no-repeat;
}

.active {
	opacity: 0.7;
}
</style>

