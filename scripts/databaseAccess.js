//data provide for the daily journal app
//Will hold the raw data about each entry and exports functions
// that other modules will use to filter out the entries

const applicationState = {
	entries: [],
	moods: []
};

//export a function that provides a version of the raw data in
//the format that you want

//get container
const container = document.querySelector(".container");

export const getJournalEntries = () => {
	const copyOfData = applicationState.entries.map((entry) => ({ ...entry }));
	return copyOfData;
};

export const getMoods = () => {
	return applicationState.moods.map((mood) => ({ ...mood }));
};

export const fetchEntries = () => {
	return fetch("http://localhost:8088/entries?_expand=mood") //fetch entries from api
		.then((response) => response.json()) //parse as Json
		.then((entries) => (applicationState.entries = entries));
};

export const fetchMoods = () => {
	return fetch("http://localhost:8088/moods")
		.then((res) => res.json())
		.then((moods) => (applicationState.moods = moods));
};

export const saveJournalEntry = (journalEntry) => {
	fetch("http://localhost:8088/entries", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(journalEntry)
	}).then(() => {
		container.dispatchEvent(new CustomEvent("stateChanged"));
	});
};

export const deleteEntry = (id) => {
	fetch(`http://localhost:8088/entries/${id}`, { method: "DELETE" }).then(
		() => container.dispatchEvent(new CustomEvent("stateChanged"))
	);
};
