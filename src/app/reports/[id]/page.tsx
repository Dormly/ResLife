import supabase from "@/app/utils/supabase";
import Report from "@/app/components/reports/Report";

export default async function ReportPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	// TODO: Error catching
	const id = parseInt(await params.then((p) => p.id));

	const { data: report } = await supabase
		.from("reports")
		.select(
			"id,creator_id(name,profile),title,description,date,created_date,type",
		)
		.eq("id", id)
		.single();

	if (!report) {
		return <div className="p-[1.25rem]">Report not found.</div>;
	}

	return (
		<div className="p-[1.25rem]">
			<Report
				id={id}
				title={report.title ?? ""}
				author={report.creator_id.name}
				profile={report.creator_id.profile ?? ""}
				type={report.type}
				description={report.description ?? ""}
				date={report.date}
				created_date={report.created_date}
			/>
		</div>
	);
}
