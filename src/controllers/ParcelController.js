const express = require('express');
const router = express.Router();
const parcelService = require('../BLL/parcelService');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Create Parcel
router.post('/', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
  try {
    const parcel = await parcelService.createParcel(req.body);
    res.status(201).json(parcel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Parcels
router.get('/', authenticateToken, async (req, res) => {
  try {
    const parcels = await parcelService.getParcels();
    res.status(200).json(parcels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update Parcel Status
router.patch('/:id/status', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
  try {
    const parcel = await parcelService.updateParcelStatus(req.params.id, req.body.status);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Withdraw Parcel
router.patch('/:id/withdraw', authenticateToken, authorizeRole('DELIVERYMAN'), async (req, res) => {
  try {
    const parcel = await parcelService.withdrawParcel(req.params.id, req.user.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deliver Parcel
router.patch('/:id/deliver', authenticateToken, authorizeRole('DELIVERYMAN'), async (req, res) => {
  try {
    const parcel = await parcelService.deliverParcel(req.params.id, req.body.photoUrl);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Return Parcel
router.patch('/:id/return', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
  try {
    const parcel = await parcelService.returnParcel(req.params.id);
    res.status(200).json(parcel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
