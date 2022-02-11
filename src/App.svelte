<script lang="ts">
	import { parser } from "./parser"
	import Tailwindcss from "./Tailwindcss.svelte"
	import tippy from "sveltejs-tippy";

	let content: string
	let area: HTMLTextAreaElement
</script>
<Tailwindcss />
<textarea 
	placeholder="Enter Toki Pona..."
	spellcheck="false"
	bind:value={content}
	bind:this={area}
	data-gramm="false"
	class="resize-none font-text text-transparent outline-none bg-transparent w-screen h-screen whitespace-normal caret-black fixed p-10 left-0 top-0"
></textarea>
<p class="fixed font-text left-0 top-0 p-10 cursor-text select-none w-screen h-screen whitespace-normal" on:click={() => area.focus()}>
	{#if content}
		{#each content.split("\n") as splitContentLine}
			{#each parser(splitContentLine) as parsedContentLine}
				{#if parsedContentLine.dictionaryEntry}
					<span
						class="bg-blue-100/50"
						use:tippy={{
							content: `<span style="font-family: 'Montserrat', sans-serif;">${parsedContentLine.dictionaryEntry.translation}</span>`,
							allowHTML: true,
							placement: "bottom"
						}}
					>{parsedContentLine.content}</span>
				{:else}
					<span>{parsedContentLine.content}</span>
				{/if}
			{/each}
			<br/>
		{/each}
	{/if}
</p>