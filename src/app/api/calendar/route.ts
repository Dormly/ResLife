"use server";
import "server-only";

import { NextResponse } from "next/server";
import { getUniversityInfo, createClient } from "@/app/utils/supabase/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const dateParam = searchParams.get("date");
	const date = dateParam ? new Date(dateParam) : new Date();

	const startOfDay = new Date(date.setHours(0, 0, 0, 0)).toISOString();
	const endOfDay = new Date(date.setHours(23, 59, 59, 999)).toISOString();

	const supabase = await createClient();
	const universityData = await getUniversityInfo();

	if (!universityData) {
		return NextResponse.json(
			{ error: "Unable to get session." },
			{ status: 401 },
		);
	}

	const { data: calendar_events, error } = await supabase
		.from("calendar_events")
		.select("id,title,description,start_date,end_date")
		.eq("university_id", universityData.id)
		.eq("platform_type", "ResLife")
		.gte("start_date", startOfDay)
		.lte("end_date", endOfDay);

	if (error) {
		return NextResponse.json(
			{ error: "Unable to get calendar events." + error },
			{ status: 500 },
		);
	}

	return NextResponse.json([...calendar_events]);
}
