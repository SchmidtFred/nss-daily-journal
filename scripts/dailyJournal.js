import { entries } from "./entries.js";
import { createEntryForm } from "./journalForm.js";
import { moodFilter } from "./moodFilterMenu.js";

export const dailyJournal = () => {
	return `
        <h1>Daily Journal</h1>

        ${createEntryForm()}

        ${moodFilter()}

        <section class="entryList">
            ${entries()}
        </section>
    `;
};
