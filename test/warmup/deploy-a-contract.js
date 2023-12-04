const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { fixtureFactory } = require("../utils");

it("Solves Challenge", async function () {
  const fixture = () => fixtureFactory("DeployChallenge");
  const { contract } = await loadFixture(fixture);
  expect(await contract.isComplete()).to.equal(true);
});
