//data provide for the daily journal app
//Will hold the raw data about each entry and exports functions
// that other modules will use to filter out the entries

const database = {
	entries: [
		{
            //copy pasted from chapter
			id: 1,
			date: "07/24/2025",
			concept: "HTML & CSS",
			entry: "We talked about HTMl components and how to make grid layouts with Flexbox in CSS.",
			mood: "Ok"
		},
		{
            //copy pasted from chapter
			id: 2,
			date: "07/26/2025",
			concept: "Complex Flexbox",
			entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
			mood: "Sad"
		},
		{
			id: 3,
			date: "07/28/2025",
			concept: "Data Types",
			entry: "We talked about the different data types in Javascript and how to utilize/manipulate them.",
			mood: "Happy"
		},
		{
			id: 4,
			date: "07/30/2025",
			concept: "Functions",
			entry: "Learned how to create and use functions inside of Javascript.",
			mood: "Upset"
		}
	]
};

//export a function that provides a version of the raw data in
//the format that you want

export const getJournalEntries = () => {
	const copyOfData = database.entries.map((entry) => ({ ...entry }));
	return copyOfData;
};
