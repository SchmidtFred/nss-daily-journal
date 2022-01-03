import { getJournalEntries, deleteEntry } from "./databaseAccess.js";

let moodFilter = 0;

export const getMoodFilter = () => {return moodFilter};

export const entries = () => {
    let entries = getJournalEntries();

    if (moodFilter !== 0) {
        entries = entries.filter(entry => entry.moodId === moodFilter);
    }
    

    let allEntriesAsHTML = '';

    for (const entry of entries) {
        allEntriesAsHTML += `
            <section class="entry">
                <h2 class="concept">${entry.concept}</h2>
                <div class="entry">${entry.entry}</div>
                <div class="mood">I Felt: ${entry.mood.label}</div>
                <div class="date">${entry.date}</div>
                <button class="deleteBtn" id="delete--${entry.id}">Delete</button>
            </section>
        `
    }

    return allEntriesAsHTML;
}

//get container
const mainContainer = document.querySelector(".container");

//delete button listener
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete--")) {
        const [ ,entryId] = clickEvent.id.split("--");
        deleteEntry(parseInt(entryId));
    }
})

mainContainer.addEventListener("change", changeEvent => {
    if (changeEvent.target.name === "moodFilterOption") {
        moodFilter = parseInt(changeEvent.target.value);
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    }
})