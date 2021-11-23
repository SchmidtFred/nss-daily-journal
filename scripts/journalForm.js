export const createEntryForm = () => {
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
							<option value="Happy">Happy</option>
							<option value="Sad">Sad</option>
							<option value="Upset">Upset</option>
							<option value="Ecstatic">Ecstatic</option>
                            <option value="Ok">Ok</option>
						</select>
					</fieldset>
					<!-- Save journal button -->
					<input type="submit" value="Save Entry" id="entryForm_save" />
				</form>
            `;
};
