import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile, getUsers } from '../controllers/userController.js' 
import { admin, protect } from '../middleware/authMiddleware.js'
import { updateUserProfile } from '../controllers/userController.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router
