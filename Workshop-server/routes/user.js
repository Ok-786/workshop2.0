const { createAdmin, adminDashboard, signin, adminAuth, addProduct, verifyToken, getProducts, addStaff, getStaff } = require('../controllers/user');
const authorization = require('../middleware/jwt-auth');
const { requireAdmin, requireClient } = require('../middleware/userAuth');
const fileUpload = require('../middleware/file-upload');
const router = require('express').Router();


router.post('/admin/signup', createAdmin);
router.post('/signin', signin);
router.post('/admin/verify', adminAuth);
router.post('/products/create', authorization, requireAdmin, fileUpload.single('file'), addProduct);
router.get('/products/', authorization, requireAdmin, getProducts);
router.get('/staff/', authorization, requireAdmin, getStaff);
router.post('/staff/create', authorization, requireAdmin, fileUpload.single('file'), addStaff);
router.get('/admin/dashboard', authorization, adminDashboard);
router.get('/verify', authorization, verifyToken);

module.exports = router;