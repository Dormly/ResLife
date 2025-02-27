/*
 * StandardReport.tsx
 *
 * Standard Report Form Contents
 */

import Form from "./FormComponents/Form";
import InputSection from "./FormComponents/InputSection";
import DatePicker from "./FormComponents/DatePicker";
import { SectionType } from "./FormComponents/InputSection";

export default function StandardReport() {
	return (
		<Form>
			<InputSection title="Title" />
			<DatePicker title="Report Date & Time" time={true} />
			<InputSection title="Location" />
			<InputSection type={SectionType.Paragraph} title="Description" />
		</Form>
	);
}
