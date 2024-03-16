# ETHLondon2024 - Athoos

## **This Repo implements a EIP712 version of a Uniswap v4 Hook (16/03/2024) 🦄**

### **Forked from the [v4-template](https://github.com/uniswapfoundation/v4-template)**

1.  The example hook [HookVerify.sol](src/HookVerify.sol) demonstrates the a `beforeSwap()` implementation with EIP712 signature verification (given in the swap hook data parameter)
2.  The test template [HookVerify.t.sol](test/HookVerify.t.sol) preconfigures the v4 pool manager, test tokens.

## Info

Deployed on [Base Sepolia Testnet](https://sepolia.base.org) using the following addresses:

<details>
    ```bash
        CREATE2_DEPLOYER: 0x4e59b44847b379578588920cA78FbF26c0B4956C
        Athoos BUCK deployed to 0x56ba6046cc51b859DAA4Eb6D445DE99C5b1E4391
        Athoos USD deployed to 0x06B2B98dB45481dd0878Bb07979Ba0A79b60A49e
        Hook deployed to 0x020A5bE4a8BCbd885fEC6122e3beE4e8F3Baaaa2

        PoolManager deployed to 0xd962b16F4ec712D705106674E944B04614F077be
        PoolModifyLiquidityTest deployed to 0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16
        PoolSwapTest deployed to 0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e
    ```

</details>

---

## Set up

_requires [foundry](https://book.getfoundry.sh)_

```
forge install
forge test
```

### Local Development (Anvil)

Other than writing unit tests (recommended!), you can only deploy & test hooks on [anvil](https://book.getfoundry.sh/anvil/)

```bash
# start anvil with TSTORE support
# (`foundryup`` to update if cancun is not an option)
anvil --hardfork cancun

# in a new terminal
forge script script/Anvil.s.sol \
    --rpc-url http://localhost:8545 \
    --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \
    --broadcast
```

<details>
<summary><h3>Testnets</h3></summary>

NOTE: 11/21/2023, the Goerli deployment is out of sync with the latest v4. **It is recommend to use local testing instead**

~~For testing on Goerli Testnet the Uniswap Foundation team has deployed a slimmed down version of the V4 contract (due to current contract size limits) on the network.~~

~~The relevant addresses for testing on Goerli are the ones below~~

```bash
POOL_MANAGER = 0x0
POOL_MODIFY_POSITION_TEST = 0x0
SWAP_ROUTER = 0x0
```

Update the following command with your own private key:

```
forge script script/00_HookVerify.s.sol \
--rpc-url https://base-sepolia.g.alchemy.com/v2/<api-key> \
--private-key [your_private_key_on_goerli_here] \
--broadcast
```

### _Deploying your own Tokens For Testing_

Because V4 is still in testing mode, most networks don't have liquidity pools live on V4 testnets. We recommend launching your own test tokens and expirementing with them that. We've included in the templace a Mock UNI and Mock USDC contract for easier testing. You can deploy the contracts and when you do you'll have 1 million mock tokens to test with for each contract. See deployment commands below

```
forge create script/mocks/mUNI.sol:MockUNI \
--rpc-url [your_rpc_url_here] \
--private-key [your_private_key_on_goerli_here]
```

```
forge create script/mocks/mUSDC.sol:MockUSDC \
--rpc-url [your_rpc_url_here] \
--private-key [your_private_key_on_goerli_here]
```

</details>

---

<details>
<summary><h2>Troubleshooting</h2></summary>

### _Permission Denied_

When installing dependencies with `forge install`, Github may throw a `Permission Denied` error

Typically caused by missing Github SSH keys, and can be resolved by following the steps [here](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)

Or [adding the keys to your ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent), if you have already uploaded SSH keys

### Hook deployment failures

Hook deployment failures are caused by incorrect flags or incorrect salt mining

1. Verify the flags are in agreement:
   - `getHookCalls()` returns the correct flags
   - `flags` provided to `HookMiner.find(...)`
2. Verify salt mining is correct:
   - In **forge test**: the *deploye*r for: `new Hook{salt: salt}(...)` and `HookMiner.find(deployer, ...)` are the same. This will be `address(this)`. If using `vm.prank`, the deployer will be the pranking address
   - In **forge script**: the deployer must be the CREATE2 Proxy: `0x4e59b44847b379578588920cA78FbF26c0B4956C`
     - If anvil does not have the CREATE2 deployer, your foundry may be out of date. You can update it with `foundryup`

</details>

---

Additional resources:

[v4-periphery](https://github.com/uniswap/v4-periphery) contains advanced hook implementations that serve as a great reference

[v4-core](https://github.com/uniswap/v4-core)

[v4-by-example](https://v4-by-example.org)
