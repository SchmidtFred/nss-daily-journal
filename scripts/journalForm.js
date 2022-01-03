import { saveJournalEntry, getMoods } from "./databaseAccess.js";

export const createEntryForm = () => {
	const moods = getMoods();

	return `
                <form class="entryForm">
					<!-- put in date -->
					<fieldset>
						<label for="entryDate">Date</label>
						<input
							type="date"
							name="entryDate"
							class="entryForm_date"
						/>
					</fieldset>
					<!-- put in concepts covered -->
					<fieldset>
						<label for="entryConcepts">Concepts Covered</label>
						<input
							type="text"
							name="entryConcepts"
							class="entryForm_concepts"
						/>
					</fieldset>
					<!-- put in journal entry -->
					<fieldset>
						<label for="entryJournal">Journal Entry</label>
						<textarea
							id="entryJournal"
							name="entryJournal"
							class="entryForm_journal"
						></textarea>
					</fieldset>
					<!-- put in mood -->
					<fieldset>
						<label for="entryMood">Mood</label>
						<select
							id="entryMood"
							name="entryMood"
							class="entryForm_mood"
						>
							${moods.map(mood => {
								return `<option value="${mood.id}">${mood.label}</option>`
							}).join("")}
						</select>
					</fieldset>
					<!-- Save journal button -->
					<input type="submit" value="Save Entry" id="entryForm_save" />
				</form>
            `;
};

//event listeners

//get container
const container = document.querySelector(".container");

//button click for save
container.addEventListener("submit", submitEvent => {
	submitEvent.preventDefault();
	//get the select value
	const moodSelect = document.querySelector(".entryForm_mood");

	const newEntry = {
		concept: document.querySelector(".entryForm_concepts").value,
		entry: document.querySelector(".entryForm_journal").value,
		moodId: parseInt(moodSelect.options[moodSelect.selectedIndex].value),
		date: document.querySelector(".entryForm_date").value
	}

	saveJournalEntry(newEntry);
})