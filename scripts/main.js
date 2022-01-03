import { dailyJournal } from "./dailyJournal.js";
import { fetchEntries, fetchMoods } from "./databaseAccess.js";

const container = document.querySelector(".container");

const render = () => {
	fetchEntries()
	.then(() => fetchMoods())
	.then(() => {
		container.innerHTML = dailyJournal();
	});
};

render();

container.addEventListener("stateChanged", (event) => {
	render();
})