import { getJournalEntries } from "./database.js";

export const entries = () => {
    const entries = getJournalEntries();
    let allEntriesAsHTML = '';

    for (const entry of entries) {
        allEntriesAsHTML += `
            <section class="entry">
                <h2 class="concept">${entry.concept}</h2>
                <div class="entry">${entry.entry}</div>
                <div class="mood">I Felt: ${entry.mood}</div>
                <div class="date">${entry.date}</div>
            </section>
        `
    }

    return allEntriesAsHTML;
}