const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// конфигурация сервера
const config = (app) => {
  // USE
  app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }));
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));
};

module.exports = config;
