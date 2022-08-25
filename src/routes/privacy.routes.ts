import express from "express";
import { privacyController } from "../controllers/privacyController";

const router = express.Router();

router
    .get("/userprivacy/:id", privacyController.findUserPrivacy)
    .post("/userprivacy", privacyController.creatPrivacyObject)
    .put("/userprivacy/:id", privacyController.handlePrivacyState)
    
export default router;