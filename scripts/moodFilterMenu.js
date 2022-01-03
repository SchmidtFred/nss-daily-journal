import { getMoods } from "./databaseAccess.js";
import { getMoodFilter } from "./entries.js";

export const moodFilter = () => {
    const moods = getMoods();
    const moodFilter = getMoodFilter();

    return `
    <fieldset class="moodFilterRadio">
    <legend>Filter Entries by Mood</legend>
    <input type="radio" id="0" name="moodFilterOption" value="0" ${(moodFilter === 0) ? "checked=checked":""}/>
    <label for="0">No Filter</label>
        ${moods.map(mood => {
            return `
            <input type="radio" id="${mood.id}" name="moodFilterOption" value="${mood.id}" ${(moodFilter === mood.id) ? "checked=checked":""} />
            <label for="${mood.id}">${mood.label}</label>`
        }).join("")}
    </fieldset>`
}