import express from 'express';
import { listUUIDs } from '../controllers/uuid';

export default (router: express.Router) => {
    router.get('/admin/cards', listUUIDs)
}