const express = require ('express');
const router = express.Router();
const symbolsController = require ('../controllers/symbolsController')

router.get('/', symbolsController.getSymbols);

router.get('/:symbol', symbolsController.getSymbol);

//symbol/BTCUSD -- usado para acrescentar uma variavel na frente do header http
router.patch('/:symbol', symbolsController.updateSymbol);

router.post('/sync', symbolsController.syncSymbols);



module.exports = router;