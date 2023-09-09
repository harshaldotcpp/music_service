import { bigserial, integer, pgTable, timestamp } from "drizzle-orm/pg-core";

import { users } from "../users/";
import { relations } from "drizzle-orm";

export const sessions = pgTable("sessions", {
    id: bigserial("id", { mode: "number" }).primaryKey(),
    user_id: integer("user_id").references(() => users.id),
    expiry: timestamp("expiry").notNull(),
});

export const sessionsRelation = relations(sessions, ({ one }) => ({
    user: one(users, {
        fields: [sessions.user_id],
        references: [users.id],
    }),
}));
