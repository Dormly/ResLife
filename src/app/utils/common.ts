function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const month = date.getMonth() + 1; // Months are 0-indexed
	const day = date.getDate();
	const year = date.getFullYear();

	return `${month}/${day}/${year}`;
}

export { formatDate };