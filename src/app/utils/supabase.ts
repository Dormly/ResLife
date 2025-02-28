import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://ertqiknveclsdywsbiuu.supabase.co";

const supabaseServiceKey: string =
	process.env.SUPABASE_SERVICE_KEY === undefined
		? ""
		: process.env.SUPABASE_SERVICE_KEY;

export default createClient<Database>(supabaseUrl, supabaseServiceKey);

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
					creator_id: number;
					description: string;
					id: number;
					title: string;
				};
				Insert: {
					created_at?: string;
					creator_id: number;
					description?: string;
					id?: number;
					title?: string;
				};
				Update: {
					created_at?: string;
					creator_id?: number;
					description?: string;
					id?: number;
					title?: string;
				};
				Relationships: [
					{
						foreignKeyName: "announcements_creator_id_fkey";
						columns: ["creator_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			building: {
				Row: {
					city: string | null;
					id: number;
					mailroom_id: number | null;
					name: string;
					state: string | null;
					street: string | null;
					zip: number | null;
				};
				Insert: {
					city?: string | null;
					id?: number;
					mailroom_id?: number | null;
					name: string;
					state?: string | null;
					street?: string | null;
					zip?: number | null;
				};
				Update: {
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
						foreignKeyName: "building_mailroom_id_fkey";
						columns: ["mailroom_id"];
						isOneToOne: false;
						referencedRelation: "mailroom";
						referencedColumns: ["id"];
					},
				];
			};
			incident_record: {
				Row: {
					created_date: string;
					creator_id: number;
					date: string;
					description: string | null;
					id: number;
					title: string | null;
				};
				Insert: {
					created_date?: string;
					creator_id: number;
					date?: string;
					description?: string | null;
					id?: number;
					title?: string | null;
				};
				Update: {
					created_date?: string;
					creator_id?: number;
					date?: string;
					description?: string | null;
					id?: number;
					title?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "incident_record_creator_id_fkey";
						columns: ["creator_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			mail_record: {
				Row: {
					id: number;
					issued_date: string | null;
					issuer_id: number | null;
					mailroom_id: number;
					received_at: string;
					receiver_id: number;
					student_id: number;
					type: Database["public"]["Enums"]["MailType"];
				};
				Insert: {
					id?: number;
					issued_date?: string | null;
					issuer_id?: number | null;
					mailroom_id: number;
					received_at?: string;
					receiver_id: number;
					student_id: number;
					type: Database["public"]["Enums"]["MailType"];
				};
				Update: {
					id?: number;
					issued_date?: string | null;
					issuer_id?: number | null;
					mailroom_id?: number;
					received_at?: string;
					receiver_id?: number;
					student_id?: number;
					type?: Database["public"]["Enums"]["MailType"];
				};
				Relationships: [
					{
						foreignKeyName: "mail_entry_issuer_id_fkey";
						columns: ["issuer_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "mail_entry_receiver_id_fkey";
						columns: ["receiver_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "mail_mailroom_id_fkey";
						columns: ["mailroom_id"];
						isOneToOne: false;
						referencedRelation: "mailroom";
						referencedColumns: ["id"];
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
			maintenance_record: {
				Row: {
					building_id: number | null;
					completer_id: number | null;
					creator_id: number | null;
					date_completed: string | null;
					date_submitted: string;
					description: string;
					id: number;
				};
				Insert: {
					building_id?: number | null;
					completer_id?: number | null;
					creator_id?: number | null;
					date_completed?: string | null;
					date_submitted?: string;
					description: string;
					id?: number;
				};
				Update: {
					building_id?: number | null;
					completer_id?: number | null;
					creator_id?: number | null;
					date_completed?: string | null;
					date_submitted?: string;
					description?: string;
					id?: number;
				};
				Relationships: [
					{
						foreignKeyName: "maintenance_entry_completer_id_fkey";
						columns: ["completer_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "maintenance_entry_creator_id_fkey";
						columns: ["creator_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			report_record: {
				Row: {
					created_date: string;
					creator_id: number;
					date: string;
					description: string | null;
					id: number;
					title: string | null;
				};
				Insert: {
					created_date?: string;
					creator_id: number;
					date?: string;
					description?: string | null;
					id?: number;
					title?: string | null;
				};
				Update: {
					created_date?: string;
					creator_id?: number;
					date?: string;
					description?: string | null;
					id?: number;
					title?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: "report_record_creator_id_fkey";
						columns: ["creator_id"];
						isOneToOne: false;
						referencedRelation: "users";
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
				};
				Insert: {
					created_at?: string;
					dob: string;
					first_name: string;
					id?: number;
					last_name: string;
				};
				Update: {
					created_at?: string;
					dob?: string;
					first_name?: string;
					id?: number;
					last_name?: string;
				};
				Relationships: [];
			};
			tasks: {
				Row: {
					assigned_id: number;
					completed: boolean;
					created_at: string;
					description: string;
					id: number;
					title: string;
				};
				Insert: {
					assigned_id: number;
					completed?: boolean;
					created_at?: string;
					description?: string;
					id?: number;
					title?: string;
				};
				Update: {
					assigned_id?: number;
					completed?: boolean;
					created_at?: string;
					description?: string;
					id?: number;
					title?: string;
				};
				Relationships: [
					{
						foreignKeyName: "tasks_assigned_id_fkey";
						columns: ["assigned_id"];
						isOneToOne: false;
						referencedRelation: "users";
						referencedColumns: ["id"];
					},
				];
			};
			users: {
				Row: {
					created_at: string;
					email: string;
					id: number;
					name: string;
					student_id: number | null;
				};
				Insert: {
					created_at?: string;
					email?: string;
					id?: number;
					name: string;
					student_id?: number | null;
				};
				Update: {
					created_at?: string;
					email?: string;
					id?: number;
					name?: string;
					student_id?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: "users_student_id_fkey";
						columns: ["student_id"];
						isOneToOne: false;
						referencedRelation: "students";
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
