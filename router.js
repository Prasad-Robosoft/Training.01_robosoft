const express = require('express')
const router  = express.Router()
const app = require('./index')
const {saywelcome,calculate,findGreatest,seniorCitizen,frameSentence,cgpaToPercent,learnStrict,learnLopp,learnDates,regExp,spreadRest} = require('./controller/basic')

router.route('/').get(saywelcome)
router.route('/calculator').post(calculate)
router.route('/findGreatest').post(findGreatest)
router.route('/seniorCitizen').post(seniorCitizen)
router.route('/frameSentence').post(frameSentence)
router.route('/cgpaToPercent').post(cgpaToPercent)
router.route('/learnStrict').post(learnStrict)
router.route('/learnLoop').post(learnLopp)
router.route('/learnDates').get(learnDates)
router.route('/regExp').post(regExp)
router.route('/spreadRest').post(spreadRest)

module.exports = router