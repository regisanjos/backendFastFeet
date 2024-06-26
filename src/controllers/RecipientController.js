const express = require('express');
const router = express.Router();
const recipientService = require('../BLL/recipientService');
const { authenticateToken, authorizeRole } = require('../middleware/auth');

// Create Recipient
router.post('/', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
  try {
    const recipient = await recipientService.createRecipient(req.body);
    res.status(201).json(recipient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Recipients
router.get('/', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
  try {
    const recipients = await recipientService.getRecipients();
    res.status(200).json(recipients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Recipient by ID
router.get('/:id', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
  try {
    const recipient = await recipientService.getRecipientById(req.params.id);
    res.status(200).json(recipient);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Update Recipient
router.put('/:id', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
  try {
    const recipient = await recipientService.updateRecipient(req.params.id, req.body);
    res.status(200).json(recipient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete Recipient
router.delete('/:id', authenticateToken, authorizeRole('ADMIN'), async (req, res) => {
  try {
    await recipientService.deleteRecipient(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;