<script lang="ts">
	import dict from "./dict"
	import Tailwindcss from "./Tailwindcss.svelte"

	let value: string

	function generateComponent(content: string): string {
		return `<span style="background-color: rgba(158, 218, 240, 0.5);" data-gramm="false">${content}</span>`
	}

	function contentToHTML(content: string): string {

		return dict.reduce((previousValue: string, currentValue) => {
			return previousValue.replace(new RegExp("\\b" + currentValue.word + "\\b", "g"), generateComponent(currentValue.word))
		}, content
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll("'", '&#039;')
		)
	}
</script>
<Tailwindcss />
<textarea 
	placeholder="Enter Toki Pona..."
	id="editing"
	spellcheck="false"
	bind:value={value}
	class="text-transparent bg-transparent w-screen h-screen caret-black fixed left-0 top-0 z-0"
></textarea>
<p class="fixed left-0 top-0 z-10">{@html value ? contentToHTML(value) : ""}</p>