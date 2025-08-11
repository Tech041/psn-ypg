import { Router } from "express";
import { RevisionQuestions } from "../controllers/questions.controller.js";

const questionRouter = Router();

questionRouter.get("/questions", RevisionQuestions);

export default questionRouter;
