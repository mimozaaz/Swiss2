const hre = require("hardhat");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/utils");
const sendShieldedTransaction = async (signer, destination, data, value) => {
  const rpcLink = hre.network.config.url;
  const [encryptedData] = await encryptDataField(rpcLink, data);
  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data: encryptedData,
    value,
  });
};

async function main() {
<<<<<<< HEAD
  const replace_contractAddress = "0x91350c099DbA0606178E8F3c4120563bE0E9c38F";
=======
  const replace_contractAddress = "0xDbD92b30a98D6De00452Ae3A806bD1EE3440662e";
>>>>>>> 607e4e3
  const [signer] = await hre.ethers.getSigners();

  const replace_contractFactory = await hre.ethers.getContractFactory("TestToken");
  const contract = replace_contractFactory.attach(replace_contractAddress);

  const replace_functionName = "transfer";
  const replace_functionArgs = ["0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1", "1"];
  const transaction = await sendShieldedTransaction(signer, replace_contractAddress, contract.interface.encodeFunctionData(replace_functionName, replace_functionArgs), 0);

  await transaction.wait();
<<<<<<< HEAD
  console.log("Transaction Response: ", transaction.hash);
=======
  console.log("Transaction Response: https://explorer-evm.testnet.swisstronik.com/tx/" + transaction.hash);
>>>>>>> 607e4e3
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
<<<<<<< HEAD
=======

>>>>>>> 607e4e3
