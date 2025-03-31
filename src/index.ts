import express, { Request, Response } from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
   }