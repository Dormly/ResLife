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
  | Json[]

export type Database = {
  public: {
    Tables: {
      announcements: {
        Row: {
          created_at: string
          creator_id: number
          description: string
          id: number
          title: string
        }
        Insert: {
          created_at?: string
          creator_id: number
          description?: string
          id?: number
          title?: string
        }
        Update: {
          created_at?: string
          creator_id?: number
          description?: string
          id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "announcements_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      building: {
        Row: {
          abbreviation: string
          campus_id: number
          city: string | null
          id: number
          mailroom_id: number | null
          name: string
          state: string | null
          street: string | null
          zip: number | null
        }
        Insert: {
          abbreviation: string
          campus_id: number
          city?: string | null
          id?: number
          mailroom_id?: number | null
          name: string
          state?: string | null
          street?: string | null
          zip?: number | null
        }
        Update: {
          abbreviation?: string
          campus_id?: number
          city?: string | null
          id?: number
          mailroom_id?: number | null
          name?: string
          state?: string | null
          street?: string | null
          zip?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "building_campus_id_fkey"
            columns: ["campus_id"]
            isOneToOne: false
            referencedRelation: "campus"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "building_mailroom_id_fkey"
            columns: ["mailroom_id"]
            isOneToOne: false
            referencedRelation: "mailroom"
            referencedColumns: ["id"]
          },
        ]
      }
      campus: {
        Row: {
          campus_name: string | null
          id: number
          university_id: number
        }
        Insert: {
          campus_name?: string | null
          id?: number
          university_id: number
        }
        Update: {
          campus_name?: string | null
          id?: number
          university_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "campus_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "university"
            referencedColumns: ["id"]
          },
        ]
      }
      floor_staff: {
        Row: {
          end_date: string | null
          floor_id: number
          id: number
          start_date: string
          user_id: number
        }
        Insert: {
          end_date?: string | null
          floor_id: number
          id?: number
          start_date?: string
          user_id: number
        }
        Update: {
          end_date?: string | null
          floor_id?: number
          id?: number
          start_date?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "floor_staff_floor_id_fkey"
            columns: ["floor_id"]
            isOneToOne: false
            referencedRelation: "floors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "floor_staff_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      floors: {
        Row: {
          building_id: number
          floor_name: string
          id: number
        }
        Insert: {
          building_id: number
          floor_name: string
          id?: number
        }
        Update: {
          building_id?: number
          floor_name?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "floors_building_id_fkey"
            columns: ["building_id"]
            isOneToOne: false
            referencedRelation: "building"
            referencedColumns: ["id"]
          },
        ]
      }
      incidents: {
        Row: {
          created_date: string
          creator_id: number
          date: string
          description: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_date?: string
          creator_id: number
          date?: string
          description?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_date?: string
          creator_id?: number
          date?: string
          description?: string | null
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "incident_record_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      mail_record: {
        Row: {
          id: number
          issued_date: string | null
          issuer_id: number | null
          mailroom_id: number
          received_at: string
          receiver_id: number
          student_id: number
          type: Database["public"]["Enums"]["MailType"]
        }
        Insert: {
          id?: number
          issued_date?: string | null
          issuer_id?: number | null
          mailroom_id: number
          received_at?: string
          receiver_id: number
          student_id: number
          type: Database["public"]["Enums"]["MailType"]
        }
        Update: {
          id?: number
          issued_date?: string | null
          issuer_id?: number | null
          mailroom_id?: number
          received_at?: string
          receiver_id?: number
          student_id?: number
          type?: Database["public"]["Enums"]["MailType"]
        }
        Relationships: [
          {
            foreignKeyName: "mail_entry_issuer_id_fkey"
            columns: ["issuer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mail_entry_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mail_mailroom_id_fkey"
            columns: ["mailroom_id"]
            isOneToOne: false
            referencedRelation: "mailroom"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mail_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      mailroom: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      maintenances: {
        Row: {
          building_id: number | null
          completer_id: number | null
          creator_id: number | null
          date_completed: string | null
          date_submitted: string
          description: string
          id: number
        }
        Insert: {
          building_id?: number | null
          completer_id?: number | null
          creator_id?: number | null
          date_completed?: string | null
          date_submitted?: string
          description: string
          id?: number
        }
        Update: {
          building_id?: number | null
          completer_id?: number | null
          creator_id?: number | null
          date_completed?: string | null
          date_submitted?: string
          description?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "maintenance_entry_completer_id_fkey"
            columns: ["completer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "maintenance_entry_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          created_date: string
          creator_id: number
          date: string
          description: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_date?: string
          creator_id: number
          date?: string
          description?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_date?: string
          creator_id?: number
          date?: string
          description?: string | null
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "report_record_creator_id_fkey"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      room_spaces: {
        Row: {
          id: number
          room_id: number
          space_open: boolean
        }
        Insert: {
          id?: number
          room_id: number
          space_open?: boolean
        }
        Update: {
          id?: number
          room_id?: number
          space_open?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "room_spaces_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          floor_id: number
          id: number
          room: string
        }
        Insert: {
          floor_id: number
          id?: number
          room: string
        }
        Update: {
          floor_id?: number
          id?: number
          room?: string
        }
        Relationships: [
          {
            foreignKeyName: "rooms_floor_id_fkey"
            columns: ["floor_id"]
            isOneToOne: false
            referencedRelation: "floors"
            referencedColumns: ["id"]
          },
        ]
      }
      student_bookings: {
        Row: {
          booking_end: string | null
          booking_start: string
          id: number
          room_space_id: number
          student_id: number | null
        }
        Insert: {
          booking_end?: string | null
          booking_start?: string
          id?: number
          room_space_id: number
          student_id?: number | null
        }
        Update: {
          booking_end?: string | null
          booking_start?: string
          id?: number
          room_space_id?: number
          student_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "student_bookings_room_space_id_fkey"
            columns: ["room_space_id"]
            isOneToOne: false
            referencedRelation: "room_spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_bookings_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          created_at: string
          dob: string
          first_name: string
          id: number
          last_name: string
          preferred_name: string | null
        }
        Insert: {
          created_at?: string
          dob: string
          first_name: string
          id?: number
          last_name: string
          preferred_name?: string | null
        }
        Update: {
          created_at?: string
          dob?: string
          first_name?: string
          id?: number
          last_name?: string
          preferred_name?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assigned_id: number
          completed: boolean
          created_at: string
          description: string
          id: number
          title: string
        }
        Insert: {
          assigned_id: number
          completed?: boolean
          created_at?: string
          description?: string
          id?: number
          title?: string
        }
        Update: {
          assigned_id?: number
          completed?: boolean
          created_at?: string
          description?: string
          id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_assigned_id_fkey"
            columns: ["assigned_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      university: {
        Row: {
          abbreviation: string | null
          id: number
          institution_code: string
          name: string | null
        }
        Insert: {
          abbreviation?: string | null
          id?: number
          institution_code: string
          name?: string | null
        }
        Update: {
          abbreviation?: string | null
          id?: number
          institution_code?: string
          name?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          email: string
          id: number
          name: string
          profile: string | null
          student_id: number | null
          university_id: number
        }
        Insert: {
          created_at?: string
          email?: string
          id?: number
          name: string
          profile?: string | null
          student_id?: number | null
          university_id: number
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          name?: string
          profile?: string | null
          student_id?: number | null
          university_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "university"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      MailType: "Package" | "Letter" | "Perishables"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

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
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

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
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
