<script lang="ts">
	import dict from "./dict"
	import Tailwindcss from "./Tailwindcss.svelte"

	let value: string = ""
	
	function processValue(value: string) {
		if (value == "") return ""

		return value.toLowerCase().split("\n").map(line => {
			return line.toLowerCase().split(/(, ?|\? ?|: ?|\. ?|\n| )/).filter(it => it).map(word => {
				const foundReplacement = dict.filter(entry => entry.word == word)

				if (foundReplacement.length == 0) {
					return word
				} else {
					if (foundReplacement[0].translation != null) return foundReplacement[0].translation
					return `[${foundReplacement[0].meanings[0][1]}]`
				}
			}).join("  ")
		}).join("<br/><br/>")
	}

</script>
<Tailwindcss />
<textarea class="resize-none w-full h-1/2" bind:value={value}/>
<p>{@html processValue(value)}</p>