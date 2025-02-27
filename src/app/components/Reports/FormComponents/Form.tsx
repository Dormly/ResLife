export default function Form({ children }: { children: React.ReactNode }) {
	function submit(formData: { get: (arg0: string) => any }) {
		const query = formData.get("title");
		alert(query);
	}
	return (
		<form className="flex flex-col items-start gap-[1.25rem]" action={submit}>
			{children}
		</form>
	);
}
