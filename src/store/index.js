import { createStore } from 'vuex';

export default createStore({
	state: {
		items: {},
	},
	mutations: {
		//Наполняем поле items ключ - имя папки/файла, значение - объект с флагом deleted
		setItem(state, payload) {
			state.items[payload.key] = payload.value;
		},

		//При изменении имени папки/файла создаем в items новый ключ с новым именем, ключ со старым именем удаляем
		setName(state, payload) {
			state.items[payload.newName] = state.items[payload.oldName];
			delete state.items[payload.oldName];
		},

		//При удалении меняем флаг deleted
		setDeleted(state, payload) {
			state.items[payload.name].deleted = payload.deleted;
		},
	},
});

