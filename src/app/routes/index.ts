import express from 'express';
import userRoutes from '../../modules/user/userRoute';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/user',
    route: userRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
