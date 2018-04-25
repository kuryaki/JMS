import { Router } from "express";

import logger from "../util/logger";
import { Address } from "../model/address";
import { JobPosition } from "./model";

const router = Router();

router.get("/", async (req, res) => {
    logger.info({ log: "this" });
    const jobPos = await JobPosition.find();
    res.send({ hello: "world", jobPos });
});

router.post("/create", async (req, res) => {
    console.log("MY REQUEST BODY=" + JSON.stringify(req.body));
    logger.info("creating Recruiter");
    let newJob = req.body;
    const aJob = new JobPosition({
        title: newJob.title,
        description: newJob.description,
        tags: newJob.tags,
        status: newJob.status,
        postDate: newJob.postDate
    });
    await aJob.save();
    res.send("ok");
});

export const JobPositionController: Router = router;
