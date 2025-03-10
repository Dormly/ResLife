"use server";
import "server-only"; // Technically not necessary, but we only want the server to have the schema so others cannot reverse engineer it.

export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export type Database = {
	public: {
		Tables: {
			announcements: {
				Row: {
					created_at: string;
					creator_uuid: string | null;
					description: string;
					id: number;
					organization_id: number | null;
					title: string;
					type: Database["public"]["Enums"]["PlatformType"];
					university_id: number | null;
				};
				Insert: {
					created_at?: string;
					creator_uuid?: string | null;
					description?: string;
					id?: number;
					organization_id?: number | null;
					title?: string;
					type?: Database["public"]["Enums"]["PlatformType"];
					university_id?: number | null;
				};
				Update: {
					created_at?: string;
					creator_uuid?: string | null;
					description?: string;
					id?: number;
					organization_id?: number | null;
					title?: string;
					type?: Database["public"]["Enums"]["PlatformType"];
					university_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "announcements_creator_uuid_fkey";
						columns: ["creator_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
					{
						foreignKeyName: "announcements_organization_id_fkey";
						columns: ["organization_id"];
						isOneToOne: false;
						referencedRelation: "organizations";
						referencedColumns: ["id"];
					},
				];
			};
			building: {
				Row: {
					abbreviation: string;
					campus_id: number;
					city: string | null;
					id: number;
					mailroom_id: number | null;
					name: string;
					state: string | null;
					street: string | null;
					zip: number | null;
				};
				Insert: {
					abbreviation: string;
					campus_id: number;
					city?: string | null;
					id?: number;
					mailroom_id?: number | null;
					name: string;
					state?: string | null;
					street?: string | null;
					zip?: number | null;
				};
				Update: {
					abbreviation?: string;
					campus_id?: number;
					city?: string | null;
					id?: number;
					mailroom_id?: number | null;
					name?: string;
					state?: string | null;
					street?: string | null;
					zip?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "building_campus_id_fkey";
						columns: ["campus_id"];
						isOneToOne: false;
						referencedRelation: "campus";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "building_mailroom_id_fkey";
						columns: ["mailroom_id"];
						isOneToOne: false;
						referencedRelation: "mailroom";
						referencedColumns: ["id"];
					},
				];
			};
			calendar_events: {
				Row: {
					description: string | null;
					end_date: string;
					id: number;
					platform_type: Database["public"]["Enums"]["PlatformType"];
					start_date: string;
					title: string;
					university_id: number;
				};
				Insert: {
					description?: string | null;
					end_date: string;
					id?: number;
					platform_type?: Database["public"]["Enums"]["PlatformType"];
					start_date: string;
					title: string;
					university_id: number;
				};
				Update: {
					description?: string | null;
					end_date?: string;
					id?: number;
					platform_type?: Database["public"]["Enums"]["PlatformType"];
					start_date?: string;
					title?: string;
					university_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "calendar_event_university_id_fkey";
						columns: ["university_id"];
						isOneToOne: false;
						referencedRelation: "university";
						referencedColumns: ["id"];
					},
				];
			};
			campus: {
				Row: {
					campus_name: string | null;
					id: number;
					university_id: number;
				};
				Insert: {
					campus_name?: string | null;
					id?: number;
					university_id: number;
				};
				Update: {
					campus_name?: string | null;
					id?: number;
					university_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "campus_university_id_fkey";
						columns: ["university_id"];
						isOneToOne: false;
						referencedRelation: "university";
						referencedColumns: ["id"];
					},
				];
			};
			event_attendees: {
				Row: {
					checked_in: string;
					event_id: number;
					id: number;
					student_id: number;
				};
				Insert: {
					checked_in?: string;
					event_id: number;
					id?: number;
					student_id: number;
				};
				Update: {
					checked_in?: string;
					event_id?: number;
					id?: number;
					student_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "event_attendees_event_id_fkey";
						columns: ["event_id"];
						isOneToOne: false;
						referencedRelation: "events";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "event_attendees_student_id_fkey";
						columns: ["student_id"];
						isOneToOne: false;
						referencedRelation: "students";
						referencedColumns: ["id"];
					},
				];
			};
			events: {
				Row: {
					contact_email: string;
					contact_name: string;
					cost: number | null;
					end_date: string;
					event_description: string;
					event_location: string;
					event_name: string;
					id: number;
					organization_id: number;
					start_date: string;
				};
				Insert: {
					contact_email: string;
					contact_name: string;
					cost?: number | null;
					end_date: string;
					event_description: string;
					event_location: string;
					event_name: string;
					id?: number;
					organization_id: number;
					start_date: string;
				};
				Update: {
					contact_email?: string;
					contact_name?: string;
					cost?: number | null;
					end_date?: string;
					event_description?: string;
					event_location?: string;
					event_name?: string;
					id?: number;
					organization_id?: number;
					start_date?: string;
				};
				Relationships: [
					{
						foreignKeyName: "events_organization_id_fkey";
						columns: ["organization_id"];
						isOneToOne: false;
						referencedRelation: "organizations";
						referencedColumns: ["id"];
					},
				];
			};
			floor_staff: {
				Row: {
					end_date: string | null;
					floor_id: number;
					id: number;
					start_date: string;
					user_uuid: string;
				};
				Insert: {
					end_date?: string | null;
					floor_id: number;
					id?: number;
					start_date?: string;
					user_uuid: string;
				};
				Update: {
					end_date?: string | null;
					floor_id?: number;
					id?: number;
					start_date?: string;
					user_uuid?: string;
				};
				Relationships: [
					{
						foreignKeyName: "floor_staff_floor_id_fkey";
						columns: ["floor_id"];
						isOneToOne: false;
						referencedRelation: "floors";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "floor_staff_user_uuid_fkey";
						columns: ["user_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
				];
			};
			floors: {
				Row: {
					building_id: number;
					floor_name: string;
					id: number;
				};
				Insert: {
					building_id: number;
					floor_name: string;
					id?: number;
				};
				Update: {
					building_id?: number;
					floor_name?: string;
					id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "floors_building_id_fkey";
						columns: ["building_id"];
						isOneToOne: false;
						referencedRelation: "building";
						referencedColumns: ["id"];
					},
				];
			};
			incidents: {
				Row: {
					created_date: string;
					creator_uuid: string;
					date: string;
					description: string | null;
					id: number;
					title: string | null;
				};
				Insert: {
					created_date?: string;
					creator_uuid: string;
					date?: string;
					description?: string | null;
					id?: number;
					title?: string | null;
				};
				Update: {
					created_date?: string;
					creator_uuid?: string;
					date?: string;
					description?: string | null;
					id?: number;
					title?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "incidents_creator_uuid_fkey";
						columns: ["creator_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
				];
			};
			mail_record: {
				Row: {
					id: number;
					issued_date: string | null;
					issuer_uuid: string | null;
					mailroom_id: number;
					received_at: string;
					receiver_uuid: string;
					student_id: number;
					type: Database["public"]["Enums"]["MailType"];
				};
				Insert: {
					id?: number;
					issued_date?: string | null;
					issuer_uuid?: string | null;
					mailroom_id: number;
					received_at?: string;
					receiver_uuid: string;
					student_id: number;
					type: Database["public"]["Enums"]["MailType"];
				};
				Update: {
					id?: number;
					issued_date?: string | null;
					issuer_uuid?: string | null;
					mailroom_id?: number;
					received_at?: string;
					receiver_uuid?: string;
					student_id?: number;
					type?: Database["public"]["Enums"]["MailType"];
				};
				Relationships: [
					{
						foreignKeyName: "mail_mailroom_id_fkey";
						columns: ["mailroom_id"];
						isOneToOne: false;
						referencedRelation: "mailroom";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "mail_record_issuer_uuid_fkey";
						columns: ["issuer_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
					{
						foreignKeyName: "mail_record_receiver_uuid_fkey";
						columns: ["receiver_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
					{
						foreignKeyName: "mail_student_id_fkey";
						columns: ["student_id"];
						isOneToOne: false;
						referencedRelation: "students";
						referencedColumns: ["id"];
					},
				];
			};
			mailroom: {
				Row: {
					id: number;
					name: string;
				};
				Insert: {
					id?: number;
					name: string;
				};
				Update: {
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			maintenances: {
				Row: {
					building_id: number | null;
					completer_uuid: string | null;
					creator_uuid: string;
					date_completed: string | null;
					date_submitted: string;
					description: string;
					id: number;
				};
				Insert: {
					building_id?: number | null;
					completer_uuid?: string | null;
					creator_uuid: string;
					date_completed?: string | null;
					date_submitted?: string;
					description: string;
					id?: number;
				};
				Update: {
					building_id?: number | null;
					completer_uuid?: string | null;
					creator_uuid?: string;
					date_completed?: string | null;
					date_submitted?: string;
					description?: string;
					id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "maintenances_completer_uuid_fkey";
						columns: ["completer_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
					{
						foreignKeyName: "maintenances_creator_uuid_fkey";
						columns: ["creator_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
				];
			};
			organizations: {
				Row: {
					contact_email: string | null;
					contact_name: string | null;
					description: string | null;
					id: number;
					meeting_location: string | null;
					meeting_time: string | null;
					name: string;
					photo: string | null;
					university_id: number;
				};
				Insert: {
					contact_email?: string | null;
					contact_name?: string | null;
					description?: string | null;
					id?: number;
					meeting_location?: string | null;
					meeting_time?: string | null;
					name: string;
					photo?: string | null;
					university_id: number;
				};
				Update: {
					contact_email?: string | null;
					contact_name?: string | null;
					description?: string | null;
					id?: number;
					meeting_location?: string | null;
					meeting_time?: string | null;
					name?: string;
					photo?: string | null;
					university_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "organizations_university_id_fkey";
						columns: ["university_id"];
						isOneToOne: false;
						referencedRelation: "university";
						referencedColumns: ["id"];
					},
				];
			};
			reports: {
				Row: {
					created_date: string;
					creator_uuid: string;
					date: string;
					description: string | null;
					id: number;
					title: string | null;
					type: Database["public"]["Enums"]["ReportType"] | null;
				};
				Insert: {
					created_date?: string;
					creator_uuid: string;
					date?: string;
					description?: string | null;
					id?: number;
					title?: string | null;
					type?: Database["public"]["Enums"]["ReportType"] | null;
				};
				Update: {
					created_date?: string;
					creator_uuid?: string;
					date?: string;
					description?: string | null;
					id?: number;
					title?: string | null;
					type?: Database["public"]["Enums"]["ReportType"] | null;
				};
				Relationships: [
					{
						foreignKeyName: "reports_creator_uuid_fkey";
						columns: ["creator_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
				];
			};
			room_spaces: {
				Row: {
					id: number;
					room_id: number;
					space_open: boolean;
				};
				Insert: {
					id?: number;
					room_id: number;
					space_open?: boolean;
				};
				Update: {
					id?: number;
					room_id?: number;
					space_open?: boolean;
				};
				Relationships: [
					{
						foreignKeyName: "room_spaces_room_id_fkey";
						columns: ["room_id"];
						isOneToOne: false;
						referencedRelation: "rooms";
						referencedColumns: ["id"];
					},
				];
			};
			rooms: {
				Row: {
					floor_id: number;
					id: number;
					room: string;
				};
				Insert: {
					floor_id: number;
					id?: number;
					room: string;
				};
				Update: {
					floor_id?: number;
					id?: number;
					room?: string;
				};
				Relationships: [
					{
						foreignKeyName: "rooms_floor_id_fkey";
						columns: ["floor_id"];
						isOneToOne: false;
						referencedRelation: "floors";
						referencedColumns: ["id"];
					},
				];
			};
			student_bookings: {
				Row: {
					booking_end: string | null;
					booking_start: string;
					id: number;
					room_space_id: number;
					student_id: number;
				};
				Insert: {
					booking_end?: string | null;
					booking_start?: string;
					id?: number;
					room_space_id: number;
					student_id: number;
				};
				Update: {
					booking_end?: string | null;
					booking_start?: string;
					id?: number;
					room_space_id?: number;
					student_id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "student_bookings_room_space_id_fkey";
						columns: ["room_space_id"];
						isOneToOne: false;
						referencedRelation: "room_spaces";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "student_bookings_student_id_fkey";
						columns: ["student_id"];
						isOneToOne: false;
						referencedRelation: "students";
						referencedColumns: ["id"];
					},
				];
			};
			students: {
				Row: {
					created_at: string;
					dob: string;
					first_name: string;
					id: number;
					last_name: string;
					preferred_name: string | null;
				};
				Insert: {
					created_at?: string;
					dob: string;
					first_name: string;
					id?: number;
					last_name: string;
					preferred_name?: string | null;
				};
				Update: {
					created_at?: string;
					dob?: string;
					first_name?: string;
					id?: number;
					last_name?: string;
					preferred_name?: string | null;
				};
				Relationships: [];
			};
			tasks: {
				Row: {
					assigned_uuid: string;
					completed: boolean;
					created_at: string;
					creator_uuid: string;
					description: string;
					id: number;
					title: string;
				};
				Insert: {
					assigned_uuid: string;
					completed?: boolean;
					created_at?: string;
					creator_uuid: string;
					description?: string;
					id?: number;
					title?: string;
				};
				Update: {
					assigned_uuid?: string;
					completed?: boolean;
					created_at?: string;
					creator_uuid?: string;
					description?: string;
					id?: number;
					title?: string;
				};
				Relationships: [
					{
						foreignKeyName: "tasks_assigned_uuid_fkey";
						columns: ["assigned_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
					{
						foreignKeyName: "tasks_creator_uuid_fkey";
						columns: ["creator_uuid"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["uuid"];
					},
				];
			};
			university: {
				Row: {
					abbreviation: string | null;
					id: number;
					institution_code: string;
					name: string;
				};
				Insert: {
					abbreviation?: string | null;
					id?: number;
					institution_code: string;
					name: string;
				};
				Update: {
					abbreviation?: string | null;
					id?: number;
					institution_code?: string;
					name?: string;
				};
				Relationships: [];
			};
			users: {
				Row: {
					name: string | null;
					profile_photo: string | null;
					student_id: number | null;
					university_id: number;
					uuid: string;
				};
				Insert: {
					name?: string | null;
					profile_photo?: string | null;
					student_id?: number | null;
					university_id: number;
					uuid: string;
				};
				Update: {
					name?: string | null;
					profile_photo?: string | null;
					student_id?: number | null;
					university_id?: number;
					uuid?: string;
				};
				Relationships: [
					{
						foreignKeyName: "users_student_id_fkey";
						columns: ["student_id"];
						isOneToOne: false;
						referencedRelation: "students";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "users_university_id_fkey";
						columns: ["university_id"];
						isOneToOne: false;
						referencedRelation: "university";
						referencedColumns: ["id"];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			MailType: "Package" | "Letter" | "Perishables";
			PlatformType: "ResLife" | "OnCampus";
			ReportType: "Standard" | "Maintenance" | "Conduct";
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (PublicSchema["Tables"] & PublicSchema["Views"])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
				Database[PublicTableNameOrOptions["schema"]]["Views"])
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
			Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
				PublicSchema["Views"])
		? (PublicSchema["Tables"] &
				PublicSchema["Views"])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof PublicSchema["Tables"]
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
		: never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
		? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends
		| keyof PublicSchema["Enums"]
		| { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
		: never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
	: PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
		? PublicSchema["Enums"][PublicEnumNameOrOptions]
		: never;

export type CompositeTypes<
	PublicCompositeTypeNameOrOptions extends
		| keyof PublicSchema["CompositeTypes"]
		| { schema: keyof Database },
	CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
		schema: keyof Database;
	}
		? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
		: never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
	? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
	: PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
		? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
		: never;
