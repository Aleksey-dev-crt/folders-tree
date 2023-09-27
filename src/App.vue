<template>
	<header class="header">
		<h1 class="header__title">Vue3 folders tree</h1>
	</header>

	<main class="main">
		<Item type="folder" name="Dir 1">
			<Item type="folder" name="Dir 1-1">
				<Item type="file" name="File 1-1-1" />
			</Item>
			<Item type="file" name="File 1-2" />
		</Item>
		<Item type="folder" name="Dir 2">
			<Item type="folder" name="Dir 2-1">
				<Item type="file" name="File 2-2" />
			</Item>
			<Item type="file" name="File 2" />
		</Item>
	</main>
</template>
<script>
import Item from '@/components/Item.vue';

export default {
	name: 'App',
	components: {
		Item,
	},
};
</script>

<style>
body {
	margin: 0;
	background: linear-gradient(90deg, #bfc1c2, #e3f0ed, #bfc9c3);
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin-top: 60px;
}

.header__title {
	text-align: center;
}

.main {
	margin: auto;
	box-sizing: border-box;
	max-width: 350px;
	min-height: 252px;
	padding: 10px;
	border-radius: 5px;
	box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
		rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  background: #ffffffa8;
}
</style>

