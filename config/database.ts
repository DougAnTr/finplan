import { env } from "process";
import { Sequelize } from "sequelize";

export const db = new Sequelize(env.POSTGRES_URL!);
