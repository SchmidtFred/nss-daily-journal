import { entries } from "./entries.js";

export const dailyJournal = () => {
    return `
        <div class="entryList">
            ${entries()}
            </div>
    `
}