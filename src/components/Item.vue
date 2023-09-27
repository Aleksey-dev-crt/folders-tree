<template>
	<div v-if="!this.$store.state.items[itemName]?.deleted">
		<div class="container">
			<div class="wrapper">
				<img v-if="type === 'folder'" src="@/assets/folder.svg" alt="file" />
				<img v-if="type === 'file'" src="@/assets/file.svg" alt="file" />
				<input
					v-model="itemName"
					@keyup.enter="handleEdit"
					class="item-name"
					type="text"
					ref="inputRef"
					disabled
				/>
			</div>
			<Buttons
				@edit="handleEdit"
				@delete="handleDelete"
				:editPermission="editPermission"
			/>
		</div>
		<div class="slot">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import Buttons from '@/components/Buttons.vue';
export default {
	name: 'Item',
	components: { Buttons },
	props: {
		type: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			itemName: this.name,
			editPermission: false,
		};
	},

	//До монтирования компонентов формируем стэйт, ключи - названия папок/файлов, значения - объект с флагом deleted
	beforeMount() {
		this.$store.commit('setItem', {
			key: this.itemName,
			value: { deleted: false },
		});
	},

	methods: {
		//При нажтии кнопки редактирования добавляем/убираем аттрибут disabled у инпута, делаем на него фокус, меняем флаг editPermission
		handleEdit() {
			this.$refs.inputRef.disabled = !this.$refs.inputRef.disabled;
			this.$refs.inputRef.focus();
			this.editPermission = !this.editPermission;
		},

		handleDelete() {
			this.$store.commit('setDeleted', { name: this.itemName, deleted: true });
		},
	},

	watch: {
		//Следим за полем ItemName, при его изменении коммитим соответствующую мутацию
		itemName(newName, oldName) {
			if (oldName != newName)
				this.$store.commit('setName', { oldName, newName });
		},
	},
};
</script>

<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 5px;
}

.wrapper {
	display: flex;
}

.item-name {
	all: unset;
}

.slot {
	margin-left: 20px;
}
</style>

