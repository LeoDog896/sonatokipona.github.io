import type { DictionaryEntry } from "./dict"
import dict from "./dict"

export interface Element {
	content: string,
	dictionaryEntry?: DictionaryEntry
}

export function parser(string: string): Element[] {

	if (!string) return []

	return string.split(/ /).filter(it => it).map((it, index, arr) => {

		const foundWords = dict.filter(entry => new RegExp("\\b" + entry.word + "\\b").test(it))

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