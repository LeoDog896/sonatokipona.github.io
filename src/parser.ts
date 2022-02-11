import type { DictionaryEntry } from "./dict"
import dict from "./dict"

export interface Element {
	content: string,
	dictionaryEntry?: DictionaryEntry
}

export function parser(string: string): Element[] {

	if (!string) return []

	return string.split(/(\s+)/).map((it, index, arr) => {

		if (!it) return {
			content: it
		}

		const foundWords = dict.filter(entry => new RegExp("\\b" + entry.word + "\\b", "i").test(it))

		if (foundWords.length >= 1) {

			return {
				content: it + (index + 1 == arr.length ? "" : " "),
				dictionaryEntry: foundWords[0]
			}
		}

		return {
			content: it + (index + 1 == arr.length ? "" : " ")
		}
	})
}