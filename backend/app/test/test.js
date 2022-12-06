const express = require("express");
const chai = require("chai");
const request = require("supertest");
const { expect } = require("chai");
const app = require("../../server");


describe("POST Create New Profile", () => {
  it("should create profile for the user", () => {
    request(app).post("/api/auth/register").send({}).expect(200).then((res) => {
      expect(res.headers.location).to.be.eql("/api/auth/register");
    })
  })
})