/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import {task, types} from "hardhat/config";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {FeeDistributor} from "../typechain-types";

/*
    npx hardhat deploy-distributor --network ropsten --vetoken 0xA1a6f77436975de137aF90853D922c6Acfb1885B --starttime 8412154 --distributiontoken 0x7AEc85F0a47E018E6d0ac1FE05349c5124f6823F --admin 0x0fB20862cF5fA9e07db54C711DB272A4e2a4554E --emergency-return 0x0fB20862cF5fA9e07db54C711DB272A4e2a4554E --fee-percent 50000000000000000 --fee-collector 0x0fB20862cF5fA9e07db54C711DB272A4e2a4554E --exec-tx true
*/
task("deploy-distributor", "Deploys the fee distributor smart contract")
    .addParam(
        "vetoken",
        "sFIEF address",
        "0x0000000000000000000000000000000000000000",
        types.string
    )
    .addParam("starttime", "Time for distribution to start", 999999999, types.int)
    .addParam(
        "distributiontoken",
        "FEIF addrsss",
        "0x0000000000000000000000000000000000000000",
        types.string
    )
    .addParam("admin", "Admin address", "0x0000000000000000000000000000000000000000", types.string)
    .addParam(
        "emergencyReturn",
        "Address to transfer distToken balance to if contract is killed",
        "0x0000000000000000000000000000000000000000",
        types.string
    )
    .addParam("feePercent", "Performace fee percent", 500000000000000000, types.int)
    .addParam(
        "feeCollector",
        "Address performace fee is sent to",
        "0x0000000000000000000000000000000000000000",
        types.string
    )
    .addParam("execTx", "True to execute the transaction. Otherwise false.", false, types.boolean)
    .setAction(async (taskArgs, env: HardhatRuntimeEnvironment) => {
        const {
            vetoken,
            starttime,
            distributiontoken,
            admin,
            emergencyReturn,
            feeCollector,
            feePercent,
            execTx,
        } = taskArgs;
        const {ethers} = env;
        const signers = await ethers.getSigners();
        const executor = signers[0];

        console.log(`Executor Address (# index):    ${executor.address}`);
        console.log(
            `sFIEF / StartTime / FIEF / Admin / Emergency / FeePercent / FeeCollector :      ${vetoken} / ${starttime} / ${distributiontoken} / ${admin} / ${emergencyReturn} / ${feePercent} / ${feeCollector}`
        );
        console.log(`Execute TX?:                   ${execTx}`);
        if (!execTx) {
            console.log(`TX was cancelled.`);
            return;
        }

        const tokenFactory = await ethers.getContractFactory("FeeDistributor");
        const feeDistributor = (await tokenFactory.deploy(
            vetoken,
            starttime,
            distributiontoken,
            admin,
            emergencyReturn,
            feePercent,
            feeCollector
        )) as FeeDistributor;

        console.log(
            `npx hardhat verify ${feeDistributor.address} --network ${env.network.name} ${vetoken} "${starttime}" "${distributiontoken}" "${admin}" "${emergencyReturn}" ${feePercent} ${feeCollector}`
        );
    });
module.exports = {};
