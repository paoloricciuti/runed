<script lang="ts">
	import { ElementRect } from "runed";

	let el = $state() as HTMLElement;
	const rect = new ElementRect(() => el);
	const text = $derived(
		Object.entries(rect.current)
			.map(([key, value]) => `${key}: ${value}`)
			.join("\n")
	);
</script>

<div class="rounded-md bg-card p-8">
	<textarea
		bind:this={el}
		class="h-[330px] min-h-[300px] w-[300px] min-w-[200px] resize rounded-md bg-muted p-4"
		value={text}
		readonly
	></textarea>
</div>
