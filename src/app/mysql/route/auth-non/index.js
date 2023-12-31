const Router = require('express').Router;
const RemodelingRouter = require('./remodeling');
const tutorialRouter = require('./tutorial');
const recommendRouter = require('./recommend');
const reviewRouter = require('./review');
const companyRouter = require('./company');
const assignRouter = require('./assign');
const badgeRouter = require('./badge')

const router = Router();
router.use("/remodeling", RemodelingRouter);
router.use("/tutorial", tutorialRouter);
router.use("/recommend", recommendRouter);
router.use("/review", reviewRouter);
router.use("/company", companyRouter);
router.use("/assign", assignRouter);
router.use("/badge",badgeRouter);


module.exports = router;