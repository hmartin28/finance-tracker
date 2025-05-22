import express from 'express';
import {
  getTransactionList,
  getTransaction,
  createTransaction,
  updateTransaction,
  removeTransaction,
} from '../controllers/TransactionController.js';

const router = express.Router();

router.get('/get-transaction-list', getTransactionList);
router.get('/get-transaction/:id', getTransaction);
router.post('/create-transaction', createTransaction);
router.put('/update-transaction/:id', updateTransaction);
router.delete('/remove-transaction/:id', removeTransaction);

export default router;
