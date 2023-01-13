# Staking Contract

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is a Solidity smart contract for a staking pool. It allows users to deposit an ERC20 token (specified in the constructor) into the pool and earn rewards in another ERC20 token (specified by the rewardTokenAddress variable).

The rewards are distributed based on the user's proportion of the total staked tokens in the pool and the period reward token count. The contract also has functionality for the owner to update the reward token address, period reward token count, and calculation factor, as well as view the pool's total staked supply and the remaining lock time for a user's deposit.

The contract also has functionality for users to withdraw their staked tokens and for the owner to emergency withdraw user's tokens.

Code is a stripped down version of [Clasic locked Staking contract](https://github.com/pexcoinadmin/staking_contracts/blob/main/contracts/classic_locked_staking.sol)

## Functions

- deposit(): allows a user to deposit ERC20 tokens into the pool and earn rewards based on the proportion of their stake to the total staked tokens in the pool.
- withdraw(): allows a user to withdraw their staked tokens from the pool.
- emergencyWithdraw(): allows the owner to emergency withdraw a user's staked tokens from the pool.
- getPeriodRewardTokenCount(): allows the owner to view the number of reward tokens distributed per reward period.
- setPoolRewardTokenCount(): allows the owner to update the number of reward tokens distributed per reward period.
- getPoolTotalStakedSupply(): allows anyone to view the total number of staked tokens in the pool.
- getCalculationFactor(): allows the owner to view the calculation factor used to determine a user's rewards.
- setCalculationFactor(): allows the owner to update the calculation factor used to determine a user's rewards.
- remainLockTime(): allows anyone to view the remaining lock time for a user's deposit.
- setRewardTokenAddress() : allows the owner to update the address of the reward token.

## License

MIT
