import { Request, Response } from "express";
import { Session } from "express-session";
import { Connection } from "typeorm";
import { buildDataLoaders } from "../utils/dataLoaders";
import Redis from "ioredis";

export type MyContext = {
  req: Request & { session: Session & { userId: number } };
  res: Response;
  connection: Connection;
  redis: Redis;
  dataLoaders: ReturnType<typeof buildDataLoaders>;
};
