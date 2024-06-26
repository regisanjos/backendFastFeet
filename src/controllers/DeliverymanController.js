const express = require('express');
const router = express.Router();
const deliverymanService = require('../BLL/deliverymanService');

// Create Deliveryman
router.post('/', async (req, res) => {
  try {
    const deliveryman = await deliverymanService.createDeliveryman(req.body);
    res.status(201).json(deliveryman);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Deliverymen
router.get('/', async (req, res) => {
  try {
    const deliverymen = await deliverymanService.getDeliverymen();
    res.status(200).json(deliverymen);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Deliveryman by ID
router.get('/:id', async (req, res) => {
  try {
    const deliveryman = await deliverymanService.getDeliverymanById(req.params.id);
    res.status(200).json(deliveryman);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update Deliveryman
router.put('/:id', async (req, res) => {
  try {
    const deliveryman = await deliverymanService.updateDeliveryman(req.params.id, req.body);
    res.status(200).json(deliveryman);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Deliveryman
router.delete('/:id', async (req, res) => {
  try {
    await deliverymanService.deleteDeliveryman(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;