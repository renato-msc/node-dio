import { Router } from "express";
import * as pc from "./controller/players-controller";
import * as cc from "./controller/clubs-controller";

const router = Router();

router.get("/players", pc.getPlayer);
router.post("/players", pc.postPlayer);
router.delete("/players/:id", pc.deletePlayer);
router.patch("/players/:id", pc.updatePlayer);

router.get("/players/:id", pc.getPlayerByID);

router.get("/clubs", cc.getClubs);

export default router;