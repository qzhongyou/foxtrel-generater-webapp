import {Router} from 'express';
import model from '../models/index';

const router = Router();

router.get('/', (req, res) => {
    const data = model();
    res.render('index/index.html', data);
})


export default router;
