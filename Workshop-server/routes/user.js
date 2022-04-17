const { createAdmin, adminDashboard, signin, adminAuth, addProduct, verifyToken, getProducts, addStaff, addClient, getStaff, getClient, deleteStaff, deleteClient, updateStaff, getAdmin, updateAdmin } = require('../controllers/user');
const authorization = require('../middleware/jwt-auth');
const { requireAdmin, requireClient } = require('../middleware/userAuth');
const fileUpload = require('../middleware/file-upload');
const router = require('express').Router();


router.post('/admin/signup', createAdmin);
router.post('/signin', signin);
router.get('/admin',authorization, requireAdmin, getAdmin);
router.post('/admin/verify', adminAuth);
router.post('/products/create', authorization, requireAdmin, fileUpload.single('file'), addProduct);
router.get('/products/', authorization, requireAdmin, getProducts);
router.get('/staff/', authorization, requireAdmin, getStaff);
router.patch('/staff/update', authorization, requireAdmin, updateStaff);
router.patch('/admin/update', authorization, requireAdmin, updateAdmin);
router.delete('/staff/delete', authorization, requireAdmin, deleteStaff);
router.delete('/client/delete', authorization, requireAdmin, deleteClient);
router.get('/client/', authorization, requireAdmin, getClient);
router.post('/staff/create', authorization, requireAdmin, fileUpload.single('file'), addStaff);
router.post('/client/create', authorization, requireAdmin, fileUpload.single('file'), addClient);
router.get('/admin/dashboard', authorization, adminDashboard);
router.get('/verify', authorization, verifyToken);

module.exports = router;