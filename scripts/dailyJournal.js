import { entries } from "./entries.js";
import { createEntryForm } from "./journalForm.js";

export const dailyJournal = () => {
	return `
        <h1>Daily Journal</h1>

        <article class="entryForm">
        ${createEntryForm()}
       </article>


        <div class="entryList">
            ${entries()}
            </div>
    `;
};
