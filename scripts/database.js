//data provide for the daily journal app
//Will hold the raw data about each entry and exports functions
// that other modules will use to filter out the entries

const database = {
	entries: []
};

//export a function that provides a version of the raw data in
//the format that you want

export const getJournalEntries = () => {
	const copyOfData = database.entries.map((entry) => ({ ...entry }));
	return copyOfData;
};

export const getEntries = () => {
	return fetch("http://localhost:8088/entries") //fetch entries from api
		.then((response) => response.json()) //parse as Json
		.then(entries =>
			database.entries = entries
		)
};