import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { sessions } from "../sessions";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 50 }).notNull(),
    password: varchar("password", { length: 12 }).notNull(),
    email: text("email").notNull(),
    joined_on: timestamp("joined_on").defaultNow(),
});

export const usersRelation = relations(users, ({ many }) => {
    return {
        sessions: many(sessions),
    };
});
