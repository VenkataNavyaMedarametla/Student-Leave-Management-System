import { mysqlTable, int, varchar, text, datetime, boolean } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const leaveRequests = mysqlTable(
  "leave_requests",
  {

    // PRIMARY KEY
    id: int("id")
      .primaryKey()
      .autoincrement(),

    // STUDENT DETAILS
    studentId: varchar(
      "student_id",
      { length: 50 }
    ).notNull(),

    studentName: varchar(
      "student_name",
      { length: 100 }
    ).notNull(),

    studentEmail: varchar(
      "student_email",
      { length: 100 }
    ),

    className: varchar(
      "class_name",
      { length: 50 }
    ),

    // FACULTY DETAILS
    teacherId: varchar(
      "teacher_id",
      { length: 50 }
    ),

    teacherName: varchar(
      "teacher_name",
      { length: 100 }
    ),

    // LEAVE DETAILS
    leaveType: varchar(
      "leave_type",
      { length: 50 }
    ),

    startDate: varchar(
      "start_date",
      { length: 20 }
    ),

    endDate: varchar(
      "end_date",
      { length: 20 }
    ),

    totalDays: int(
      "total_days"
    ),

    reason: text(
      "reason"
    ),

    parentContact: varchar(
      "parent_contact",
      { length: 20 }
    ),

    // STATUS
    status: varchar(
      "status",
      { length: 20 }
    ).default("pending"),

    teacherComment: text(
      "teacher_comment"
    ),

    // TIMESTAMPS
    submittedAt: datetime(
      "submitted_at"
    ).default(
      sql`CURRENT_TIMESTAMP`
    ),

    processedAt: datetime(
      "processed_at"
    ),

    processedBy: varchar(
      "processed_by",
      { length: 100 }
    )

  }
);

export const notifications = mysqlTable(
  "notifications",
  {

    // PRIMARY KEY
    id: int("id")
      .primaryKey()
      .autoincrement(),

    // STUDENT
    studentId: varchar(
      "student_id",
      { length: 50 }
    ),

    // LEAVE REQUEST ID
    leaveId: int(
      "leave_id"
    ),

    // NOTIFICATION CONTENT
    title: varchar(
      "title",
      { length: 200 }
    ),

    message: text(
      "message"
    ),

    // READ STATUS
    isRead: boolean(
      "is_read"
    ).default(false),

    // CREATED TIME
    createdAt: datetime(
      "created_at"
    ).default(
      sql`CURRENT_TIMESTAMP`
    )

  }
);