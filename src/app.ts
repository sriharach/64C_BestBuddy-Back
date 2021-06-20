import createError from 'http-errors'
import express from 'express';
import path from 'path'
import upload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'

import errorHandler from './middleware/errorHandler'

/* Router */
import indexRouter from './routes'
import authRouter from './routes/authRouter'
import uploadRouter from './routes/uploadRouter'
import masterDataRouter from './routes/masterDataRouter'
import applyRouter from './routes/applyRouter'
import jobPositionRouter from './routes/jobPositionRouter'


/* config app */
const app = express();

app.use(cors());
app.use(helmet());
app.use(upload())

// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Router */
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/upload', uploadRouter);
app.use('/masterData', masterDataRouter);
app.use('/apply', applyRouter);
app.use('/jobPosition', jobPositionRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use(errorHandler);
export default app;