import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import './static/animate.scss'

export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
