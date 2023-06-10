import { Data, Sensors } from "@prisma/client";

export type data = Omit<Data, "id">;
export type reading = Omit<Data, "id" | "time">;
export type sensors = Omit<Sensors, "id">;
