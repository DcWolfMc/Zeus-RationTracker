import Express from "express";
import { Purchase } from "../models/purchaseModel.js";
const router = Express.Router();

//GET ALL
router.get("/", async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.json(purchases);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});
//GET ONE
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const purchase = await Purchase.findById(id);
    if (!purchase) {
      return res
        .status(404)
        .json({ massage: `Não foi possível encontrar a compra de ID ${id}.` });
    }
    res.json(purchase);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});
//CREATE ONE
router.post("/", async (req, res) => {
  try {
    const purchase = await Purchase.create(req.body);
    return res.status(201).json(purchase);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
});
//UPDATE ONE
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const purchase = await Purchase.findByIdAndUpdate(id, req.body);
    if (!purchase) {
      return res
        .status(404)
        .json({ massage: `Não foi possível encontrar a compra de ID ${id}.` });
    } else {
        const updatedPurchase = await Purchase.findById(id);
        return res.send(updatedPurchase);}
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});
//DELETE ONE
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const purchase = await Purchase.findByIdAndDelete(id, req.body);
    if (!purchase) {
      return res
        .status(404)
        .json({ massage: `Não foi possível encontrar a compra de ID ${id}.` });
    } else return res.status(200).json({massage:"Purchase Deleted"});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});
export default router;
