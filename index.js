'use strict';

const express = require('express');

class expressProblemJsonResponse {
  static register () {
    /**
     *
     * @param {Object} problemDocument
     */
    express.response.httpProblemJSON = function (problemDocument) {
      this.set('Content-Type', 'application/problem+json');
      this.status(problemDocument.status);
      this.send(problemDocument);
    };
  }
}

module.exports = expressProblemJsonResponse;
