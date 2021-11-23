import { dailyJournal } from "./dailyJournal.js";
import { getEntries } from "./database.js";

const container = document.querySelector("#entries");

const render = () => {
	getEntries().then(() => {
		container.innerHTML = dailyJournal();
	});
};

render();
