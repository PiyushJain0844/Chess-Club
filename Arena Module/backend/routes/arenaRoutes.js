const express = require("express");
const Arena = require("../models/Arena");

const router = express.Router();

// Add a new arena
router.post("/", async (req, res) => {
    try {
        const arena = new Arena(req.body);

        await arena.save();

        res.status(201).json(arena);
    } catch (error) {
        res.status(500).json({
            message: "Failed to add arena"
        });
    }
});

// Get all arenas
router.get("/", async (req, res) => {
    try {
        const arenas = await Arena.find().sort({ date: -1 });

        res.status(200).json(arenas);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch arenas"
        });
    }
});

module.exports = router;