/**
 * Users API router
 * @version 2021.11.15
 * @since 2021.11.15
 */
/*----- Imports --------------------------------------------------------------*/
import { Router } from 'express';
import * as usersCtrl from '../controllers/users.js';

/*----- Initialize -----------------------------------------------------------*/
const router = Router();

/*----- Routes ---------------------------------------------------------------*/
router.post('/signup', usersCtrl.create);
router.post('/login', usersCtrl.login);

/*----- Exports --------------------------------------------------------------*/
export default router;
