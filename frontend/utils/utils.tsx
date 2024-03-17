
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseTestHooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useContractRead, useContractWrite, useNetwork, useChainId } from "wagmi"

export const baseTestHooksABI = [
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: '', internalType: 'BalanceDelta', type: 'int256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterAddLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterDonate',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: '', internalType: 'uint160', type: 'uint160' },
			{ name: '', internalType: 'int24', type: 'int24' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterInitialize',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: '', internalType: 'BalanceDelta', type: 'int256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterRemoveLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.SwapParams',
				type: 'tuple',
				components: [
					{ name: 'zeroForOne', internalType: 'bool', type: 'bool' },
					{ name: 'amountSpecified', internalType: 'int256', type: 'int256' },
					{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
				],
			},
			{ name: '', internalType: 'BalanceDelta', type: 'int256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterSwap',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeAddLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeDonate',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: '', internalType: 'uint160', type: 'uint160' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeInitialize',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeRemoveLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.SwapParams',
				type: 'tuple',
				components: [
					{ name: 'zeroForOne', internalType: 'bool', type: 'bool' },
					{ name: 'amountSpecified', internalType: 'int256', type: 'int256' },
					{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
				],
			},
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeSwap',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{ type: 'error', inputs: [], name: 'HookNotImplemented' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Constants
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const constantsABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'SQRT_RATIO_121_100',
		outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'SQRT_RATIO_1_1',
		outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'SQRT_RATIO_1_2',
		outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'SQRT_RATIO_1_4',
		outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'SQRT_RATIO_2_1',
		outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'SQRT_RATIO_4_1',
		outputs: [{ name: '', internalType: 'uint160', type: 'uint160' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterABI = [
	{
		stateMutability: 'nonpayable',
		type: 'constructor',
		inputs: [{ name: '_poolManager', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: '', internalType: 'BalanceDelta', type: 'int256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterAddLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
		name: 'afterAddLiquidityCount',
		outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterDonate',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: '', internalType: 'uint160', type: 'uint160' },
			{ name: '', internalType: 'int24', type: 'int24' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterInitialize',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: '', internalType: 'BalanceDelta', type: 'int256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterRemoveLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.SwapParams',
				type: 'tuple',
				components: [
					{ name: 'zeroForOne', internalType: 'bool', type: 'bool' },
					{ name: 'amountSpecified', internalType: 'int256', type: 'int256' },
					{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
				],
			},
			{ name: '', internalType: 'BalanceDelta', type: 'int256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterSwap',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
		name: 'afterSwapCount',
		outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeAddLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
		name: 'beforeAddLiquidityCount',
		outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeDonate',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: '', internalType: 'uint160', type: 'uint160' },
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeInitialize',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeRemoveLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: '',
				internalType: 'struct IPoolManager.SwapParams',
				type: 'tuple',
				components: [
					{ name: 'zeroForOne', internalType: 'bool', type: 'bool' },
					{ name: 'amountSpecified', internalType: 'int256', type: 'int256' },
					{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
				],
			},
			{ name: '', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeSwap',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
		name: 'beforeSwapCount',
		outputs: [{ name: 'count', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'pure',
		type: 'function',
		inputs: [],
		name: 'getHookPermissions',
		outputs: [
			{
				name: '',
				internalType: 'struct Hooks.Permissions',
				type: 'tuple',
				components: [
					{ name: 'beforeInitialize', internalType: 'bool', type: 'bool' },
					{ name: 'afterInitialize', internalType: 'bool', type: 'bool' },
					{ name: 'beforeAddLiquidity', internalType: 'bool', type: 'bool' },
					{ name: 'afterAddLiquidity', internalType: 'bool', type: 'bool' },
					{ name: 'beforeRemoveLiquidity', internalType: 'bool', type: 'bool' },
					{ name: 'afterRemoveLiquidity', internalType: 'bool', type: 'bool' },
					{ name: 'beforeSwap', internalType: 'bool', type: 'bool' },
					{ name: 'afterSwap', internalType: 'bool', type: 'bool' },
					{ name: 'beforeDonate', internalType: 'bool', type: 'bool' },
					{ name: 'afterDonate', internalType: 'bool', type: 'bool' },
					{ name: 'noOp', internalType: 'bool', type: 'bool' },
					{ name: 'accessLock', internalType: 'bool', type: 'bool' },
				],
			},
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'poolManager',
		outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{ type: 'error', inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }], name: 'HookAddressNotValid' },
	{ type: 'error', inputs: [], name: 'HookNotImplemented' },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterAddress = {
	5: '0x0000000000000000000000000000000000000000',
	420: '0x0000000000000000000000000000000000000000',
	1442: '0x0000000000000000000000000000000000000000',
	31337: '0x330ae74DAA74d90FAc17045EbBa5bA7d233f69D9',
	80001: '0x0000000000000000000000000000000000000000',
	84531: '0x0000000000000000000000000000000000000000',
	421613: '0x0000000000000000000000000000000000000000',
	421614: '0x0000000000000000000000000000000000000000',
	534351: '0x0000000000000000000000000000000000000000',
	11155111: '0x0000000000000000000000000000000000000000',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x0000000000000000000000000000000000000000)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x0000000000000000000000000000000000000000)
 */
export const counterConfig = { address: counterAddress, abi: counterABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CurrencyLibrary
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const currencyLibraryABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'NATIVE',
		outputs: [{ name: '', internalType: 'Currency', type: 'address' }],
	},
	{ type: 'error', inputs: [], name: 'ERC20TransferFailed' },
	{ type: 'error', inputs: [], name: 'NativeTransferFailed' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Deployers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deployersABI = [
	{ stateMutability: 'payable', type: 'receive' },
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'LIQ_PARAMS',
		outputs: [
			{ name: 'tickLower', internalType: 'int24', type: 'int24' },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
			{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'REMOVE_LIQ_PARAMS',
		outputs: [
			{ name: 'tickLower', internalType: 'int24', type: 'int24' },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
			{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
		],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'DOMAIN_SEPARATOR',
		outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
		],
		name: 'allowance',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'address', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'decimals',
		outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'name',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'address', type: 'address' }],
		name: 'nonces',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'value', internalType: 'uint256', type: 'uint256' },
			{ name: 'deadline', internalType: 'uint256', type: 'uint256' },
			{ name: 'v', internalType: 'uint8', type: 'uint8' },
			{ name: 'r', internalType: 'bytes32', type: 'bytes32' },
			{ name: 's', internalType: 'bytes32', type: 'bytes32' },
		],
		name: 'permit',
		outputs: [],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'symbol',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'totalSupply',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address' },
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'spender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Approval',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Transfer',
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6909
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6909ABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
		],
		name: 'allowance',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
		],
		name: 'balanceOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
		],
		name: 'isOperator',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'operator', internalType: 'address', type: 'address' },
			{ name: 'approved', internalType: 'bool', type: 'bool' },
		],
		name: 'setOperator',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'spender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Approval',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'operator', internalType: 'address', type: 'address', indexed: true },
			{ name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
		],
		name: 'OperatorSet',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'caller', internalType: 'address', type: 'address', indexed: false },
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{ name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Transfer',
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC6909Claims
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc6909ClaimsABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
		],
		name: 'allowance',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
		],
		name: 'balanceOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
		],
		name: 'isOperator',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'operator', internalType: 'address', type: 'address' },
			{ name: 'approved', internalType: 'bool', type: 'bool' },
		],
		name: 'setOperator',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'spender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Approval',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'operator', internalType: 'address', type: 'address', indexed: true },
			{ name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
		],
		name: 'OperatorSet',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'caller', internalType: 'address', type: 'address', indexed: false },
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{ name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Transfer',
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FeeLibrary
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const feeLibraryABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'DYNAMIC_FEE_FLAG',
		outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'STATIC_FEE_MASK',
		outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fees
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const feesABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MAX_SWAP_FEE',
		outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MIN_PROTOCOL_FEE_DENOMINATOR',
		outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'recipient', internalType: 'address', type: 'address' },
			{ name: 'currency', internalType: 'Currency', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'collectProtocolFees',
		outputs: [{ name: 'amountCollected', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'owner',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'protocolFeeController',
		outputs: [{ name: '', internalType: 'contract IProtocolFeeController', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
		name: 'protocolFeesAccrued',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
		name: 'setOwner',
		outputs: [],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [{ name: 'controller', internalType: 'contract IProtocolFeeController', type: 'address' }],
		name: 'setProtocolFeeController',
		outputs: [],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'oldOwner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
		],
		name: 'OwnerChanged',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'protocolFeeController', internalType: 'address', type: 'address', indexed: false }],
		name: 'ProtocolFeeControllerUpdated',
	},
	{ type: 'error', inputs: [], name: 'ERC20TransferFailed' },
	{ type: 'error', inputs: [], name: 'FeeNotDynamic' },
	{ type: 'error', inputs: [], name: 'FeeTooLarge' },
	{ type: 'error', inputs: [], name: 'InvalidCaller' },
	{ type: 'error', inputs: [], name: 'NativeTransferFailed' },
	{ type: 'error', inputs: [], name: 'ProtocolFeeCannotBeFetched' },
	{ type: 'error', inputs: [], name: 'ProtocolFeeControllerCallFailedOrInvalidResult' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HookMiner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const hookMinerABI = [
	{
		stateMutability: 'pure',
		type: 'function',
		inputs: [
			{ name: 'deployer', internalType: 'address', type: 'address' },
			{ name: 'salt', internalType: 'uint256', type: 'uint256' },
			{ name: 'creationCode', internalType: 'bytes', type: 'bytes' },
		],
		name: 'computeAddress',
		outputs: [{ name: 'hookAddress', internalType: 'address', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'deployer', internalType: 'address', type: 'address' },
			{ name: 'flags', internalType: 'uint160', type: 'uint160' },
			{ name: 'creationCode', internalType: 'bytes', type: 'bytes' },
			{ name: 'constructorArgs', internalType: 'bytes', type: 'bytes' },
		],
		name: 'find',
		outputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'bytes32', type: 'bytes32' },
		],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const hooksABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'NO_OP_SELECTOR',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{ type: 'error', inputs: [], name: 'FailedHookCall' },
	{ type: 'error', inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }], name: 'HookAddressNotValid' },
	{ type: 'error', inputs: [], name: 'InvalidHookResponse' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IClaims
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iClaimsABI = [
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'account', internalType: 'address', type: 'address' },
			{ name: 'currency', internalType: 'Currency', type: 'address' },
		],
		name: 'balanceOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'currency', internalType: 'Currency', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'currency', internalType: 'Currency', type: 'address', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Burn',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{ name: 'currency', internalType: 'Currency', type: 'address', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Mint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{ name: 'currency', internalType: 'Currency', type: 'address', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Transfer',
	},
	{ type: 'error', inputs: [], name: 'InsufficientBalance' },
	{ type: 'error', inputs: [], name: 'InvalidAddress' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IDynamicFeeManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iDynamicFeeManagerABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'getFee',
		outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Minimal
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MinimalABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'spender', internalType: 'address', type: 'address' },
		],
		name: 'allowance',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'recipient', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{ name: 'recipient', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'spender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Approval',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{ name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Transfer',
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6909Claims
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6909ClaimsABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
		],
		name: 'allowance',
		outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
		],
		name: 'balanceOf',
		outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'spender', internalType: 'address', type: 'address' },
		],
		name: 'isOperator',
		outputs: [{ name: 'approved', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'approved', internalType: 'bool', type: 'bool' },
		],
		name: 'setOperator',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFees
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFeesABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MIN_PROTOCOL_FEE_DENOMINATOR',
		outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'Currency', type: 'address' }],
		name: 'protocolFeesAccrued',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'protocolFeeController', internalType: 'address', type: 'address', indexed: false }],
		name: 'ProtocolFeeControllerUpdated',
	},
	{ type: 'error', inputs: [], name: 'FeeNotDynamic' },
	{ type: 'error', inputs: [], name: 'FeeTooLarge' },
	{ type: 'error', inputs: [], name: 'ProtocolFeeCannotBeFetched' },
	{ type: 'error', inputs: [], name: 'ProtocolFeeControllerCallFailedOrInvalidResult' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IHooks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iHooksABI = [
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterAddLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'amount0', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount1', internalType: 'uint256', type: 'uint256' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterDonate',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'tick', internalType: 'int24', type: 'int24' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterInitialize',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterRemoveLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.SwapParams',
				type: 'tuple',
				components: [
					{ name: 'zeroForOne', internalType: 'bool', type: 'bool' },
					{ name: 'amountSpecified', internalType: 'int256', type: 'int256' },
					{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
				],
			},
			{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'afterSwap',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeAddLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'amount0', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount1', internalType: 'uint256', type: 'uint256' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeDonate',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeInitialize',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeRemoveLiquidity',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.SwapParams',
				type: 'tuple',
				components: [
					{ name: 'zeroForOne', internalType: 'bool', type: 'bool' },
					{ name: 'amountSpecified', internalType: 'int256', type: 'int256' },
					{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
				],
			},
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'beforeSwap',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILockCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLockCallbackABI = [
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'lockCaller', internalType: 'address', type: 'address' },
			{ name: 'data', internalType: 'bytes', type: 'bytes' },
		],
		name: 'lockAcquired',
		outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolManagerABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MAX_TICK_SPACING',
		outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MIN_PROTOCOL_FEE_DENOMINATOR',
		outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MIN_TICK_SPACING',
		outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
		],
		name: 'allowance',
		outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
		],
		name: 'balanceOf',
		outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'burn',
		outputs: [],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'locker', internalType: 'address', type: 'address' },
			{ name: 'currency', internalType: 'Currency', type: 'address' },
		],
		name: 'currencyDelta',
		outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'amount0', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount1', internalType: 'uint256', type: 'uint256' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'donate',
		outputs: [{ name: '', internalType: 'BalanceDelta', type: 'int256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
		name: 'extsload',
		outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'slot', internalType: 'bytes32', type: 'bytes32' },
			{ name: 'nSlots', internalType: 'uint256', type: 'uint256' },
		],
		name: 'extsload',
		outputs: [{ name: 'value', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'getCurrentHook',
		outputs: [{ name: '_currentHook', internalType: 'contract IHooks', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'tickLower', internalType: 'int24', type: 'int24' },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
		],
		name: 'getLiquidity',
		outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
		name: 'getLiquidity',
		outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
		name: 'getLock',
		outputs: [
			{ name: 'locker', internalType: 'address', type: 'address' },
			{ name: 'lockCaller', internalType: 'address', type: 'address' },
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'getLockLength',
		outputs: [{ name: '_length', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'getLockNonzeroDeltaCount',
		outputs: [{ name: '_nonzeroDeltaCount', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: 'word', internalType: 'int16', type: 'int16' },
		],
		name: 'getPoolBitmapInfo',
		outputs: [{ name: 'tickBitmap', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: 'tick', internalType: 'int24', type: 'int24' },
		],
		name: 'getPoolTickInfo',
		outputs: [
			{
				name: '',
				internalType: 'struct Pool.TickInfo',
				type: 'tuple',
				components: [
					{ name: 'liquidityGross', internalType: 'uint128', type: 'uint128' },
					{ name: 'liquidityNet', internalType: 'int128', type: 'int128' },
					{ name: 'feeGrowthOutside0X128', internalType: 'uint256', type: 'uint256' },
					{ name: 'feeGrowthOutside1X128', internalType: 'uint256', type: 'uint256' },
				],
			},
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'tickLower', internalType: 'int24', type: 'int24' },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
		],
		name: 'getPosition',
		outputs: [
			{
				name: 'position',
				internalType: 'struct Position.Info',
				type: 'tuple',
				components: [
					{ name: 'liquidity', internalType: 'uint128', type: 'uint128' },
					{ name: 'feeGrowthInside0LastX128', internalType: 'uint256', type: 'uint256' },
					{ name: 'feeGrowthInside1LastX128', internalType: 'uint256', type: 'uint256' },
				],
			},
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
		name: 'getSlot0',
		outputs: [
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'tick', internalType: 'int24', type: 'int24' },
			{ name: 'protocolFee', internalType: 'uint16', type: 'uint16' },
		],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'initialize',
		outputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'spender', internalType: 'address', type: 'address' },
		],
		name: 'isOperator',
		outputs: [{ name: 'approved', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'payable',
		type: 'function',
		inputs: [
			{ name: 'lockTarget', internalType: 'address', type: 'address' },
			{ name: 'data', internalType: 'bytes', type: 'bytes' },
		],
		name: 'lock',
		outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'mint',
		outputs: [],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'modifyLiquidity',
		outputs: [{ name: '', internalType: 'BalanceDelta', type: 'int256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'Currency', type: 'address' }],
		name: 'protocolFeesAccrued',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
		name: 'reservesOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'approved', internalType: 'bool', type: 'bool' },
		],
		name: 'setOperator',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'setProtocolFee',
		outputs: [],
	},
	{
		stateMutability: 'payable',
		type: 'function',
		inputs: [{ name: 'token', internalType: 'Currency', type: 'address' }],
		name: 'settle',
		outputs: [{ name: 'paid', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.SwapParams',
				type: 'tuple',
				components: [
					{ name: 'zeroForOne', internalType: 'bool', type: 'bool' },
					{ name: 'amountSpecified', internalType: 'int256', type: 'int256' },
					{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
				],
			},
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'swap',
		outputs: [{ name: '', internalType: 'BalanceDelta', type: 'int256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'currency', internalType: 'Currency', type: 'address' },
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'take',
		outputs: [],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'updateDynamicSwapFee',
		outputs: [],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'dynamicSwapFee', internalType: 'uint24', type: 'uint24', indexed: false },
		],
		name: 'DynamicSwapFeeUpdated',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'currency0', internalType: 'Currency', type: 'address', indexed: true },
			{ name: 'currency1', internalType: 'Currency', type: 'address', indexed: true },
			{ name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
			{ name: 'tickSpacing', internalType: 'int24', type: 'int24', indexed: false },
			{ name: 'hooks', internalType: 'contract IHooks', type: 'address', indexed: false },
		],
		name: 'Initialize',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'sender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'tickLower', internalType: 'int24', type: 'int24', indexed: false },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: false },
			{ name: 'liquidityDelta', internalType: 'int256', type: 'int256', indexed: false },
		],
		name: 'ModifyLiquidity',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'protocolFeeController', internalType: 'address', type: 'address', indexed: false }],
		name: 'ProtocolFeeControllerUpdated',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'protocolFee', internalType: 'uint16', type: 'uint16', indexed: false },
		],
		name: 'ProtocolFeeUpdated',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'sender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'amount0', internalType: 'int128', type: 'int128', indexed: false },
			{ name: 'amount1', internalType: 'int128', type: 'int128', indexed: false },
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160', indexed: false },
			{ name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
			{ name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
			{ name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
		],
		name: 'Swap',
	},
	{ type: 'error', inputs: [], name: 'CurrenciesOutOfOrderOrEqual' },
	{ type: 'error', inputs: [], name: 'CurrencyNotSettled' },
	{ type: 'error', inputs: [], name: 'FeeNotDynamic' },
	{ type: 'error', inputs: [], name: 'FeeTooLarge' },
	{
		type: 'error',
		inputs: [
			{ name: 'locker', internalType: 'address', type: 'address' },
			{ name: 'currentHook', internalType: 'address', type: 'address' },
		],
		name: 'LockedBy',
	},
	{ type: 'error', inputs: [], name: 'MaxCurrenciesTouched' },
	{ type: 'error', inputs: [], name: 'NotPoolManagerToken' },
	{ type: 'error', inputs: [], name: 'PoolNotInitialized' },
	{ type: 'error', inputs: [], name: 'ProtocolFeeCannotBeFetched' },
	{ type: 'error', inputs: [], name: 'ProtocolFeeControllerCallFailedOrInvalidResult' },
	{ type: 'error', inputs: [], name: 'TickSpacingTooLarge' },
	{ type: 'error', inputs: [], name: 'TickSpacingTooSmall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IProtocolFeeController
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iProtocolFeeControllerABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{
				name: 'poolKey',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'protocolFeeForPool',
		outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// InvalidReturnSizeProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const invalidReturnSizeProtocolFeeControllerTestABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'protocolFeeForPool',
		outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockErc20ABI = [
	{
		stateMutability: 'nonpayable',
		type: 'constructor',
		inputs: [
			{ name: '_name', internalType: 'string', type: 'string' },
			{ name: '_symbol', internalType: 'string', type: 'string' },
			{ name: '_decimals', internalType: 'uint8', type: 'uint8' },
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'DOMAIN_SEPARATOR',
		outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
		],
		name: 'allowance',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'address', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address' },
			{ name: 'value', internalType: 'uint256', type: 'uint256' },
		],
		name: 'burn',
		outputs: [],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'decimals',
		outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'value', internalType: 'uint256', type: 'uint256' },
		],
		name: 'mint',
		outputs: [],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'name',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'address', type: 'address' }],
		name: 'nonces',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'value', internalType: 'uint256', type: 'uint256' },
			{ name: 'deadline', internalType: 'uint256', type: 'uint256' },
			{ name: 'v', internalType: 'uint8', type: 'uint8' },
			{ name: 'r', internalType: 'bytes32', type: 'bytes32' },
			{ name: 's', internalType: 'bytes32', type: 'bytes32' },
		],
		name: 'permit',
		outputs: [],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'symbol',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'totalSupply',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address' },
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'spender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Approval',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Transfer',
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NoDelegateCall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const noDelegateCallABI = [{ type: 'error', inputs: [], name: 'DelegateCallNotAllowed' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OutOfBoundsProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const outOfBoundsProtocolFeeControllerTestABI = [
	{
		stateMutability: 'pure',
		type: 'function',
		inputs: [
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'protocolFeeForPool',
		outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OverflowProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const overflowProtocolFeeControllerTestABI = [
	{
		stateMutability: 'pure',
		type: 'function',
		inputs: [
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'protocolFeeForPool',
		outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Owned
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownedABI = [
	{ stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'owner',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
		name: 'setOwner',
		outputs: [],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'oldOwner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
		],
		name: 'OwnerChanged',
	},
	{ type: 'error', inputs: [], name: 'InvalidCaller' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolABI = [
	{ type: 'error', inputs: [], name: 'NoLiquidityToReceiveFees' },
	{ type: 'error', inputs: [], name: 'PoolAlreadyInitialized' },
	{ type: 'error', inputs: [], name: 'PoolNotInitialized' },
	{
		type: 'error',
		inputs: [
			{ name: 'sqrtPriceCurrentX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
		],
		name: 'PriceLimitAlreadyExceeded',
	},
	{
		type: 'error',
		inputs: [{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' }],
		name: 'PriceLimitOutOfBounds',
	},
	{ type: 'error', inputs: [], name: 'SwapAmountCannotBeZero' },
	{ type: 'error', inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }], name: 'TickLiquidityOverflow' },
	{
		type: 'error',
		inputs: [{ name: 'tickLower', internalType: 'int24', type: 'int24' }],
		name: 'TickLowerOutOfBounds',
	},
	{ type: 'error', inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }], name: 'TickNotInitialized' },
	{
		type: 'error',
		inputs: [{ name: 'tickUpper', internalType: 'int24', type: 'int24' }],
		name: 'TickUpperOutOfBounds',
	},
	{
		type: 'error',
		inputs: [
			{ name: 'tickLower', internalType: 'int24', type: 'int24' },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
		],
		name: 'TicksMisordered',
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolDonateTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const poolDonateTestABI = [
	{
		stateMutability: 'nonpayable',
		type: 'constructor',
		inputs: [{ name: '_manager', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'IS_TEST',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'payable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'amount0', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount1', internalType: 'uint256', type: 'uint256' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'donate',
		outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [],
		name: 'failed',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: 'rawData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'lockAcquired',
		outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'manager',
		outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
		name: 'log_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'log_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
		name: 'log_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
		name: 'log_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address', type: 'address', indexed: false },
		],
		name: 'log_named_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
		],
		name: 'log_named_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
		],
		name: 'log_named_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
		],
		name: 'log_named_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'string', type: 'string', indexed: false },
		],
		name: 'log_named_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
		name: 'log_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'logs',
	},
	{ type: 'error', inputs: [], name: 'ERC20TransferFailed' },
	{ type: 'error', inputs: [], name: 'NativeTransferFailed' },
] as const

/**
 *
 */
export const poolDonateTestAddress = {
	31337: '0x4FA6C7a3A9b84F2A8340D4d33190F84e307B085c',
} as const

/**
 *
 */
export const poolDonateTestConfig = { address: poolDonateTestAddress, abi: poolDonateTestABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolInitializeTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const poolInitializeTestABI = [
	{
		stateMutability: 'nonpayable',
		type: 'constructor',
		inputs: [{ name: '_manager', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'IS_TEST',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [],
		name: 'failed',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'initialize',
		outputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: 'rawData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'lockAcquired',
		outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'manager',
		outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
		name: 'log_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'log_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
		name: 'log_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
		name: 'log_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address', type: 'address', indexed: false },
		],
		name: 'log_named_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
		],
		name: 'log_named_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
		],
		name: 'log_named_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
		],
		name: 'log_named_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'string', type: 'string', indexed: false },
		],
		name: 'log_named_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
		name: 'log_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'logs',
	},
] as const

/**
 *
 */
export const poolInitializeTestAddress = {
	31337: '0xFEB29bB43e36c0F8488F78bba2E8E94F0D829Fa1',
} as const

/**
 *
 */
export const poolInitializeTestConfig = { address: poolInitializeTestAddress, abi: poolInitializeTestABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export const poolManagerABI = [
	{
		stateMutability: 'nonpayable',
		type: 'constructor',
		inputs: [{ name: 'controllerGasLimit', internalType: 'uint256', type: 'uint256' }],
	},
	{ stateMutability: 'payable', type: 'receive' },
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MAX_SWAP_FEE',
		outputs: [{ name: '', internalType: 'uint24', type: 'uint24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MAX_TICK_SPACING',
		outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MIN_PROTOCOL_FEE_DENOMINATOR',
		outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'MIN_TICK_SPACING',
		outputs: [{ name: '', internalType: 'int24', type: 'int24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
		],
		name: 'allowance',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'spender', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'approve',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
		],
		name: 'balanceOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'burn',
		outputs: [],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'recipient', internalType: 'address', type: 'address' },
			{ name: 'currency', internalType: 'Currency', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'collectProtocolFees',
		outputs: [{ name: 'amountCollected', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'locker', internalType: 'address', type: 'address' },
			{ name: 'currency', internalType: 'Currency', type: 'address' },
		],
		name: 'currencyDelta',
		outputs: [{ name: 'currencyDelta', internalType: 'int256', type: 'int256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'amount0', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount1', internalType: 'uint256', type: 'uint256' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'donate',
		outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
		name: 'extsload',
		outputs: [{ name: 'value', internalType: 'bytes32', type: 'bytes32' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'startSlot', internalType: 'bytes32', type: 'bytes32' },
			{ name: 'nSlots', internalType: 'uint256', type: 'uint256' },
		],
		name: 'extsload',
		outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'getCurrentHook',
		outputs: [{ name: '', internalType: 'contract IHooks', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: '_owner', internalType: 'address', type: 'address' },
			{ name: 'tickLower', internalType: 'int24', type: 'int24' },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
		],
		name: 'getLiquidity',
		outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
		name: 'getLiquidity',
		outputs: [{ name: 'liquidity', internalType: 'uint128', type: 'uint128' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'i', internalType: 'uint256', type: 'uint256' }],
		name: 'getLock',
		outputs: [
			{ name: 'locker', internalType: 'address', type: 'address' },
			{ name: 'lockCaller', internalType: 'address', type: 'address' },
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'getLockLength',
		outputs: [{ name: '_length', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'getLockNonzeroDeltaCount',
		outputs: [{ name: '_nonzeroDeltaCount', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: 'word', internalType: 'int16', type: 'int16' },
		],
		name: 'getPoolBitmapInfo',
		outputs: [{ name: 'tickBitmap', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: 'tick', internalType: 'int24', type: 'int24' },
		],
		name: 'getPoolTickInfo',
		outputs: [
			{
				name: '',
				internalType: 'struct Pool.TickInfo',
				type: 'tuple',
				components: [
					{ name: 'liquidityGross', internalType: 'uint128', type: 'uint128' },
					{ name: 'liquidityNet', internalType: 'int128', type: 'int128' },
					{ name: 'feeGrowthOutside0X128', internalType: 'uint256', type: 'uint256' },
					{ name: 'feeGrowthOutside1X128', internalType: 'uint256', type: 'uint256' },
				],
			},
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: '_owner', internalType: 'address', type: 'address' },
			{ name: 'tickLower', internalType: 'int24', type: 'int24' },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
		],
		name: 'getPosition',
		outputs: [
			{
				name: 'position',
				internalType: 'struct Position.Info',
				type: 'tuple',
				components: [
					{ name: 'liquidity', internalType: 'uint128', type: 'uint128' },
					{ name: 'feeGrowthInside0LastX128', internalType: 'uint256', type: 'uint256' },
					{ name: 'feeGrowthInside1LastX128', internalType: 'uint256', type: 'uint256' },
				],
			},
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
		name: 'getSlot0',
		outputs: [
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'tick', internalType: 'int24', type: 'int24' },
			{ name: 'protocolFee', internalType: 'uint16', type: 'uint16' },
		],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'initialize',
		outputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
		],
		name: 'isOperator',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'payable',
		type: 'function',
		inputs: [
			{ name: 'lockTarget', internalType: 'address', type: 'address' },
			{ name: 'data', internalType: 'bytes', type: 'bytes' },
		],
		name: 'lock',
		outputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'mint',
		outputs: [],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'modifyLiquidity',
		outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'owner',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'id', internalType: 'PoolId', type: 'bytes32' }],
		name: 'pools',
		outputs: [
			{
				name: 'slot0',
				internalType: 'struct Pool.Slot0',
				type: 'tuple',
				components: [
					{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160' },
					{ name: 'tick', internalType: 'int24', type: 'int24' },
					{ name: 'protocolFee', internalType: 'uint16', type: 'uint16' },
					{ name: 'swapFee', internalType: 'uint24', type: 'uint24' },
				],
			},
			{ name: 'feeGrowthGlobal0X128', internalType: 'uint256', type: 'uint256' },
			{ name: 'feeGrowthGlobal1X128', internalType: 'uint256', type: 'uint256' },
			{ name: 'liquidity', internalType: 'uint128', type: 'uint128' },
		],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'protocolFeeController',
		outputs: [{ name: '', internalType: 'contract IProtocolFeeController', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
		name: 'protocolFeesAccrued',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
		name: 'reservesOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'operator', internalType: 'address', type: 'address' },
			{ name: 'approved', internalType: 'bool', type: 'bool' },
		],
		name: 'setOperator',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
		name: 'setOwner',
		outputs: [],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'setProtocolFee',
		outputs: [],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [{ name: 'controller', internalType: 'contract IProtocolFeeController', type: 'address' }],
		name: 'setProtocolFeeController',
		outputs: [],
	},
	{
		stateMutability: 'payable',
		type: 'function',
		inputs: [{ name: 'currency', internalType: 'Currency', type: 'address' }],
		name: 'settle',
		outputs: [{ name: 'paid', internalType: 'uint256', type: 'uint256' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.SwapParams',
				type: 'tuple',
				components: [
					{ name: 'zeroForOne', internalType: 'bool', type: 'bool' },
					{ name: 'amountSpecified', internalType: 'int256', type: 'int256' },
					{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
				],
			},
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'swap',
		outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'currency', internalType: 'Currency', type: 'address' },
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'take',
		outputs: [],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transfer',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{ name: 'receiver', internalType: 'address', type: 'address' },
			{ name: 'id', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount', internalType: 'uint256', type: 'uint256' },
		],
		name: 'transferFrom',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'updateDynamicSwapFee',
		outputs: [],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'spender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Approval',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'dynamicSwapFee', internalType: 'uint24', type: 'uint24', indexed: false },
		],
		name: 'DynamicSwapFeeUpdated',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'currency0', internalType: 'Currency', type: 'address', indexed: true },
			{ name: 'currency1', internalType: 'Currency', type: 'address', indexed: true },
			{ name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
			{ name: 'tickSpacing', internalType: 'int24', type: 'int24', indexed: false },
			{ name: 'hooks', internalType: 'contract IHooks', type: 'address', indexed: false },
		],
		name: 'Initialize',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'sender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'tickLower', internalType: 'int24', type: 'int24', indexed: false },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24', indexed: false },
			{ name: 'liquidityDelta', internalType: 'int256', type: 'int256', indexed: false },
		],
		name: 'ModifyLiquidity',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'operator', internalType: 'address', type: 'address', indexed: true },
			{ name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
		],
		name: 'OperatorSet',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'oldOwner', internalType: 'address', type: 'address', indexed: true },
			{ name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
		],
		name: 'OwnerChanged',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'protocolFeeController', internalType: 'address', type: 'address', indexed: false }],
		name: 'ProtocolFeeControllerUpdated',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'protocolFee', internalType: 'uint16', type: 'uint16', indexed: false },
		],
		name: 'ProtocolFeeUpdated',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32', indexed: true },
			{ name: 'sender', internalType: 'address', type: 'address', indexed: true },
			{ name: 'amount0', internalType: 'int128', type: 'int128', indexed: false },
			{ name: 'amount1', internalType: 'int128', type: 'int128', indexed: false },
			{ name: 'sqrtPriceX96', internalType: 'uint160', type: 'uint160', indexed: false },
			{ name: 'liquidity', internalType: 'uint128', type: 'uint128', indexed: false },
			{ name: 'tick', internalType: 'int24', type: 'int24', indexed: false },
			{ name: 'fee', internalType: 'uint24', type: 'uint24', indexed: false },
		],
		name: 'Swap',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'caller', internalType: 'address', type: 'address', indexed: false },
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{ name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
			{ name: 'amount', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'Transfer',
	},
	{ type: 'error', inputs: [], name: 'CannotUpdateEmptyPosition' },
	{ type: 'error', inputs: [], name: 'CurrenciesOutOfOrderOrEqual' },
	{ type: 'error', inputs: [], name: 'CurrencyNotSettled' },
	{ type: 'error', inputs: [], name: 'DelegateCallNotAllowed' },
	{ type: 'error', inputs: [], name: 'ERC20TransferFailed' },
	{ type: 'error', inputs: [], name: 'FailedHookCall' },
	{ type: 'error', inputs: [], name: 'FeeNotDynamic' },
	{ type: 'error', inputs: [], name: 'FeeTooLarge' },
	{ type: 'error', inputs: [{ name: 'hooks', internalType: 'address', type: 'address' }], name: 'HookAddressNotValid' },
	{ type: 'error', inputs: [], name: 'InvalidCaller' },
	{ type: 'error', inputs: [], name: 'InvalidHookResponse' },
	{ type: 'error', inputs: [], name: 'InvalidPrice' },
	{ type: 'error', inputs: [], name: 'InvalidPriceOrLiquidity' },
	{ type: 'error', inputs: [], name: 'InvalidSqrtRatio' },
	{ type: 'error', inputs: [], name: 'InvalidTick' },
	{
		type: 'error',
		inputs: [
			{ name: 'locker', internalType: 'address', type: 'address' },
			{ name: 'currentHook', internalType: 'address', type: 'address' },
		],
		name: 'LockedBy',
	},
	{ type: 'error', inputs: [], name: 'MaxCurrenciesTouched' },
	{ type: 'error', inputs: [], name: 'NativeTransferFailed' },
	{ type: 'error', inputs: [], name: 'NoLiquidityToReceiveFees' },
	{ type: 'error', inputs: [], name: 'NotEnoughLiquidity' },
	{ type: 'error', inputs: [], name: 'NotPoolManagerToken' },
	{ type: 'error', inputs: [], name: 'PoolAlreadyInitialized' },
	{ type: 'error', inputs: [], name: 'PoolNotInitialized' },
	{ type: 'error', inputs: [], name: 'PoolNotInitialized' },
	{
		type: 'error',
		inputs: [
			{ name: 'sqrtPriceCurrentX96', internalType: 'uint160', type: 'uint160' },
			{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' },
		],
		name: 'PriceLimitAlreadyExceeded',
	},
	{
		type: 'error',
		inputs: [{ name: 'sqrtPriceLimitX96', internalType: 'uint160', type: 'uint160' }],
		name: 'PriceLimitOutOfBounds',
	},
	{ type: 'error', inputs: [], name: 'PriceOverflow' },
	{ type: 'error', inputs: [], name: 'ProtocolFeeCannotBeFetched' },
	{ type: 'error', inputs: [], name: 'ProtocolFeeControllerCallFailedOrInvalidResult' },
	{ type: 'error', inputs: [], name: 'SafeCastOverflow' },
	{ type: 'error', inputs: [], name: 'SwapAmountCannotBeZero' },
	{ type: 'error', inputs: [{ name: 'tick', internalType: 'int24', type: 'int24' }], name: 'TickLiquidityOverflow' },
	{
		type: 'error',
		inputs: [{ name: 'tickLower', internalType: 'int24', type: 'int24' }],
		name: 'TickLowerOutOfBounds',
	},
	{
		type: 'error',
		inputs: [
			{ name: 'tick', internalType: 'int24', type: 'int24' },
			{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
		],
		name: 'TickMisaligned',
	},
	{ type: 'error', inputs: [], name: 'TickSpacingTooLarge' },
	{ type: 'error', inputs: [], name: 'TickSpacingTooSmall' },
	{
		type: 'error',
		inputs: [{ name: 'tickUpper', internalType: 'int24', type: 'int24' }],
		name: 'TickUpperOutOfBounds',
	},
	{
		type: 'error',
		inputs: [
			{ name: 'tickLower', internalType: 'int24', type: 'int24' },
			{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
		],
		name: 'TicksMisordered',
	},
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export const poolManagerAddress = {
	5: '0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b',
	420: '0xb673AE03413860776497B8C9b3E3F8d4D8745cB3',
	1442: '0xb673AE03413860776497B8C9b3E3F8d4D8745cB3',
	31337: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
	80001: '0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6',
	84531: '0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D',
	421613: '0xC94a4C0a89937E278a0d427bb393134E68d5ec09',
	421614: '0xb673AE03413860776497B8C9b3E3F8d4D8745cB3',
	534351: '0xeb4708989b42f0cd327A6Bd8f76a931429137fd7',
	11155111: '0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x3A9D48AB9751398BbFa63ad67599Bb04e4BdF98b)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x84642fEf6ef575e3B2f4d7C72022F24AB9C9Ffa6)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0x0Bf5c45Bc0419229FB512bb00366A612877ffF2D)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xC94a4C0a89937E278a0d427bb393134E68d5ec09)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xb673AE03413860776497B8C9b3E3F8d4D8745cB3)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x7B2B5A2c377B34079589DDbCeA20427cdb7C8219)
 */
export const poolManagerConfig = { address: poolManagerAddress, abi: poolManagerABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolModifyLiquidityTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolModifyLiquidityTestABI = [
	{
		stateMutability: 'nonpayable',
		type: 'constructor',
		inputs: [{ name: '_manager', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'IS_TEST',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [],
		name: 'failed',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: 'rawData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'lockAcquired',
		outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'manager',
		outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		stateMutability: 'payable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{
				name: 'params',
				internalType: 'struct IPoolManager.ModifyLiquidityParams',
				type: 'tuple',
				components: [
					{ name: 'tickLower', internalType: 'int24', type: 'int24' },
					{ name: 'tickUpper', internalType: 'int24', type: 'int24' },
					{ name: 'liquidityDelta', internalType: 'int256', type: 'int256' },
				],
			},
			{ name: 'hookData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'modifyLiquidity',
		outputs: [{ name: 'delta', internalType: 'BalanceDelta', type: 'int256' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
		name: 'log_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'log_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
		name: 'log_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
		name: 'log_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address', type: 'address', indexed: false },
		],
		name: 'log_named_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
		],
		name: 'log_named_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
		],
		name: 'log_named_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
		],
		name: 'log_named_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'string', type: 'string', indexed: false },
		],
		name: 'log_named_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
		name: 'log_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'logs',
	},
	{ type: 'error', inputs: [], name: 'ERC20TransferFailed' },
	{ type: 'error', inputs: [], name: 'NativeTransferFailed' },
] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolModifyLiquidityTestAddress = {
	5: '0x83feDBeD11B3667f40263a88e8435fca51A03F8C',
	420: '0x30654C69B212AD057E817EcA26da6c5edA32E2E7',
	1442: '0x30654C69B212AD057E817EcA26da6c5edA32E2E7',
	31337: '0x3079c0319F8734239eB06765666468F7B76Eb505',
	80001: '0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763',
	84531: '0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710',
	421613: '0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b',
	421614: '0x30654C69B212AD057E817EcA26da6c5edA32E2E7',
	534351: '0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49',
	11155111: '0xeb4708989b42f0cd327A6Bd8f76a931429137fd7',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0x83feDBeD11B3667f40263a88e8435fca51A03F8C)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0xB7b74B407E9bA6c070C5B5CC7E6B8E59e4642763)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xaFB341c8a50e4Bdec4E419Be7F3a6127E3BD6710)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xeb1aAdAC0a10Ac2eDFCbE496C3BCBc1dea4F994b)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x30654C69B212AD057E817EcA26da6c5edA32E2E7)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xeb4708989b42f0cd327A6Bd8f76a931429137fd7)
 */
export const poolModifyLiquidityTestConfig = {
	address: poolModifyLiquidityTestAddress,
	abi: poolModifyLiquidityTestABI,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolSwapTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolSwapTestABI = [{ "type": "constructor", "inputs": [{ "name": "_manager", "type": "address", "internalType": "contract IPoolManager" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "IS_TEST", "inputs": [], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "excludeArtifacts", "inputs": [], "outputs": [{ "name": "excludedArtifacts_", "type": "string[]", "internalType": "string[]" }], "stateMutability": "view" }, { "type": "function", "name": "excludeContracts", "inputs": [], "outputs": [{ "name": "excludedContracts_", "type": "address[]", "internalType": "address[]" }], "stateMutability": "view" }, { "type": "function", "name": "excludeSenders", "inputs": [], "outputs": [{ "name": "excludedSenders_", "type": "address[]", "internalType": "address[]" }], "stateMutability": "view" }, { "type": "function", "name": "failed", "inputs": [], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "lockAcquired", "inputs": [{ "name": "rawData", "type": "bytes", "internalType": "bytes" }], "outputs": [{ "name": "", "type": "bytes", "internalType": "bytes" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "manager", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract IPoolManager" }], "stateMutability": "view" }, { "type": "function", "name": "swap", "inputs": [{ "name": "key", "type": "tuple", "internalType": "struct PoolKey", "components": [{ "name": "currency0", "type": "address", "internalType": "Currency" }, { "name": "currency1", "type": "address", "internalType": "Currency" }, { "name": "fee", "type": "uint24", "internalType": "uint24" }, { "name": "tickSpacing", "type": "int24", "internalType": "int24" }, { "name": "hooks", "type": "address", "internalType": "contract IHooks" }] }, { "name": "params", "type": "tuple", "internalType": "struct IPoolManager.SwapParams", "components": [{ "name": "zeroForOne", "type": "bool", "internalType": "bool" }, { "name": "amountSpecified", "type": "int256", "internalType": "int256" }, { "name": "sqrtPriceLimitX96", "type": "uint160", "internalType": "uint160" }] }, { "name": "testSettings", "type": "tuple", "internalType": "struct PoolSwapTest.TestSettings", "components": [{ "name": "withdrawTokens", "type": "bool", "internalType": "bool" }, { "name": "settleUsingTransfer", "type": "bool", "internalType": "bool" }, { "name": "currencyAlreadySent", "type": "bool", "internalType": "bool" }] }, { "name": "hookData", "type": "bytes", "internalType": "bytes" }], "outputs": [{ "name": "delta", "type": "int256", "internalType": "BalanceDelta" }], "stateMutability": "payable" }, { "type": "function", "name": "targetArtifactSelectors", "inputs": [], "outputs": [{ "name": "targetedArtifactSelectors_", "type": "tuple[]", "internalType": "struct StdInvariant.FuzzSelector[]", "components": [{ "name": "addr", "type": "address", "internalType": "address" }, { "name": "selectors", "type": "bytes4[]", "internalType": "bytes4[]" }] }], "stateMutability": "view" }, { "type": "function", "name": "targetArtifacts", "inputs": [], "outputs": [{ "name": "targetedArtifacts_", "type": "string[]", "internalType": "string[]" }], "stateMutability": "view" }, { "type": "function", "name": "targetContracts", "inputs": [], "outputs": [{ "name": "targetedContracts_", "type": "address[]", "internalType": "address[]" }], "stateMutability": "view" }, { "type": "function", "name": "targetSelectors", "inputs": [], "outputs": [{ "name": "targetedSelectors_", "type": "tuple[]", "internalType": "struct StdInvariant.FuzzSelector[]", "components": [{ "name": "addr", "type": "address", "internalType": "address" }, { "name": "selectors", "type": "bytes4[]", "internalType": "bytes4[]" }] }], "stateMutability": "view" }, { "type": "function", "name": "targetSenders", "inputs": [], "outputs": [{ "name": "targetedSenders_", "type": "address[]", "internalType": "address[]" }], "stateMutability": "view" }, { "type": "event", "name": "log", "inputs": [{ "name": "", "type": "string", "indexed": false, "internalType": "string" }], "anonymous": false }, { "type": "event", "name": "log_address", "inputs": [{ "name": "", "type": "address", "indexed": false, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "log_array", "inputs": [{ "name": "val", "type": "uint256[]", "indexed": false, "internalType": "uint256[]" }], "anonymous": false }, { "type": "event", "name": "log_array", "inputs": [{ "name": "val", "type": "int256[]", "indexed": false, "internalType": "int256[]" }], "anonymous": false }, { "type": "event", "name": "log_array", "inputs": [{ "name": "val", "type": "address[]", "indexed": false, "internalType": "address[]" }], "anonymous": false }, { "type": "event", "name": "log_bytes", "inputs": [{ "name": "", "type": "bytes", "indexed": false, "internalType": "bytes" }], "anonymous": false }, { "type": "event", "name": "log_bytes32", "inputs": [{ "name": "", "type": "bytes32", "indexed": false, "internalType": "bytes32" }], "anonymous": false }, { "type": "event", "name": "log_int", "inputs": [{ "name": "", "type": "int256", "indexed": false, "internalType": "int256" }], "anonymous": false }, { "type": "event", "name": "log_named_address", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "address", "indexed": false, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "log_named_array", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "uint256[]", "indexed": false, "internalType": "uint256[]" }], "anonymous": false }, { "type": "event", "name": "log_named_array", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "int256[]", "indexed": false, "internalType": "int256[]" }], "anonymous": false }, { "type": "event", "name": "log_named_array", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "address[]", "indexed": false, "internalType": "address[]" }], "anonymous": false }, { "type": "event", "name": "log_named_bytes", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "bytes", "indexed": false, "internalType": "bytes" }], "anonymous": false }, { "type": "event", "name": "log_named_bytes32", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "bytes32", "indexed": false, "internalType": "bytes32" }], "anonymous": false }, { "type": "event", "name": "log_named_decimal_int", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "int256", "indexed": false, "internalType": "int256" }, { "name": "decimals", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "log_named_decimal_uint", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "decimals", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "log_named_int", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "int256", "indexed": false, "internalType": "int256" }], "anonymous": false }, { "type": "event", "name": "log_named_string", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "string", "indexed": false, "internalType": "string" }], "anonymous": false }, { "type": "event", "name": "log_named_uint", "inputs": [{ "name": "key", "type": "string", "indexed": false, "internalType": "string" }, { "name": "val", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "log_string", "inputs": [{ "name": "", "type": "string", "indexed": false, "internalType": "string" }], "anonymous": false }, { "type": "event", "name": "log_uint", "inputs": [{ "name": "", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "logs", "inputs": [{ "name": "", "type": "bytes", "indexed": false, "internalType": "bytes" }], "anonymous": false }, { "type": "error", "name": "ERC20TransferFailed", "inputs": [] }, { "type": "error", "name": "NativeTransferFailed", "inputs": [] }, { "type": "error", "name": "NoSwapOccurred", "inputs": [] }] as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolSwapTestAddress = {
	5: '0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c',
	420: '0x24C731645ee1e35C3219153d370EBd79784D1E91',
	1442: '0x24C731645ee1e35C3219153d370EBd79784D1E91',
	31337: '0xAf7CCF0Ff7Ef054A1db43330F5431958Ab4A9441',
	80001: '0x6550fa0D92B38F52C37D32d71084A7B270226Ba5',
	84531: '0xe99395035e1a89b6da10a73821Fc60158d5e59E9',
	421613: '0xa26b026581Fa923CFf3084119bf2d14060945a63',
	421614: '0x24C731645ee1e35C3219153d370EBd79784D1E91',
	534351: '0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395',
	11155111: '0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49',
} as const

/**
 * - [__View Contract on Goerli Etherscan__](https://goerli.etherscan.io/address/0xF8AADC65Bf1Ec1645ef931317fD48ffa734a185c)
 * - [__View Contract on Optimism Goerli Etherscan__](https://goerli-optimism.etherscan.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Polygon Zk Evm Testnet Polygon Scan__](https://testnet-zkevm.polygonscan.com/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * -
 * - [__View Contract on Polygon Mumbai Polygon Scan__](https://mumbai.polygonscan.com/address/0x6550fa0D92B38F52C37D32d71084A7B270226Ba5)
 * - [__View Contract on Base Goerli Basescan__](https://goerli.basescan.org/address/0xe99395035e1a89b6da10a73821Fc60158d5e59E9)
 * - [__View Contract on Arbitrum Goerli Arbiscan__](https://goerli.arbiscan.io/address/0xa26b026581Fa923CFf3084119bf2d14060945a63)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x24C731645ee1e35C3219153d370EBd79784D1E91)
 * - [__View Contract on Scroll Sepolia Blockscout__](https://sepolia-blockscout.scroll.io/address/0x3A0c2cF7c40A7B417AE9aB6ccBF60e86d8437395)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x5Bf9FAbb0d56515658b7d5CC4B1F5c4EaED09e49)
 */
export const poolSwapTestConfig = { address: poolSwapTestAddress, abi: poolSwapTestABI } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolTakeTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolTakeTestABI = [
	{
		stateMutability: 'nonpayable',
		type: 'constructor',
		inputs: [{ name: '_manager', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'IS_TEST',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [],
		name: 'failed',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: 'rawData', internalType: 'bytes', type: 'bytes' },
		],
		name: 'lockAcquired',
		outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'manager',
		outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
	},
	{
		stateMutability: 'payable',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
			{ name: 'amount0', internalType: 'uint256', type: 'uint256' },
			{ name: 'amount1', internalType: 'uint256', type: 'uint256' },
		],
		name: 'take',
		outputs: [],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
		name: 'log_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'log_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
		name: 'log_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
		name: 'log_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address', type: 'address', indexed: false },
		],
		name: 'log_named_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
		],
		name: 'log_named_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
		],
		name: 'log_named_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
		],
		name: 'log_named_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'string', type: 'string', indexed: false },
		],
		name: 'log_named_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
		name: 'log_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'logs',
	},
	{ type: 'error', inputs: [], name: 'SafeCastOverflow' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolTestBase
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolTestBaseABI = [
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'lockCaller', internalType: 'address', type: 'address' },
			{ name: 'data', internalType: 'bytes', type: 'bytes' },
		],
		name: 'lockAcquired',
		outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'manager',
		outputs: [{ name: '', internalType: 'contract IPoolManager', type: 'address' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Position
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const positionABI = [{ type: 'error', inputs: [], name: 'CannotUpdateEmptyPosition' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const protocolFeeControllerTestABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [
			{
				name: 'key',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'protocolFeeForPool',
		outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [
			{ name: 'id', internalType: 'PoolId', type: 'bytes32' },
			{ name: 'fee', internalType: 'uint16', type: 'uint16' },
		],
		name: 'setSwapFeeForPool',
		outputs: [],
	},
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [{ name: '', internalType: 'PoolId', type: 'bytes32' }],
		name: 'swapFeeForPool',
		outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RevertingProtocolFeeControllerTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const revertingProtocolFeeControllerTestABI = [
	{
		stateMutability: 'pure',
		type: 'function',
		inputs: [
			{
				name: '',
				internalType: 'struct PoolKey',
				type: 'tuple',
				components: [
					{ name: 'currency0', internalType: 'Currency', type: 'address' },
					{ name: 'currency1', internalType: 'Currency', type: 'address' },
					{ name: 'fee', internalType: 'uint24', type: 'uint24' },
					{ name: 'tickSpacing', internalType: 'int24', type: 'int24' },
					{ name: 'hooks', internalType: 'contract IHooks', type: 'address' },
				],
			},
		],
		name: 'protocolFeeForPool',
		outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
	},
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastABI = [{ type: 'error', inputs: [], name: 'SafeCastOverflow' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SqrtPriceMath
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sqrtPriceMathABI = [
	{ type: 'error', inputs: [], name: 'InvalidPrice' },
	{ type: 'error', inputs: [], name: 'InvalidPriceOrLiquidity' },
	{ type: 'error', inputs: [], name: 'NotEnoughLiquidity' },
	{ type: 'error', inputs: [], name: 'PriceOverflow' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testABI = [
	{
		stateMutability: 'view',
		type: 'function',
		inputs: [],
		name: 'IS_TEST',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		inputs: [],
		name: 'failed',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
		name: 'log_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
		name: 'log_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'log_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
		name: 'log_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
		name: 'log_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address', type: 'address', indexed: false },
		],
		name: 'log_named_address',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
		],
		name: 'log_named_array',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
		],
		name: 'log_named_bytes',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
		],
		name: 'log_named_bytes32',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
			{ name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_decimal_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'int256', type: 'int256', indexed: false },
		],
		name: 'log_named_int',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'stri	ng', type: 'string', indexed: false },
		],
		name: 'log_named_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'key', internalType: 'string', type: 'string', indexed: false },
			{ name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
		],
		name: 'log_named_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
		name: 'log_string',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
		name: 'log_uint',
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
		name: 'logs',
	},
] as const

export function useErc20Allowance<
	TFunctionName extends 'allowance',
	TSelectData,
>(
	config: any,
) {
	return useContractRead({ abi: erc20ABI, functionName: 'allowance', ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc20BalanceOf<
	TFunctionName extends 'balanceOf',
	TSelectData,
>(
	config: any,
) {
	return useContractRead({ abi: erc20ABI, functionName: 'balanceOf', ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc20ABI}__ and `functionName` set to `"decimals"`.
 */
export function useErc20Decimals<
	TFunctionName extends 'decimals',
	TSelectData,
>(
	config: any,
) {
	return useContractRead({ abi: erc20ABI, functionName: 'decimals', ...config })
}

export function useErc20Approve(
	config: any,
) {
	return useContractWrite({
		abi: erc20ABI,
		functionName: 'approve',
		...config,
	} as any)
}


export const MAX_UINT = 115792089237316195423570985008687907853269984665640564039457584007913129639935;

// allows for unlimited slippage
export const MIN_SQRT_PRICE_LIMIT = 4295128739 + 1;
export const MAX_SQRT_PRICE_LIMIT = 1461446703485210103287273052203988822378723970342 - 1;

export const ZERO_ADDR = "0x0000000000000000000000000000000000000000";

export const BLANK_TOKEN = {
	address: "0x000000000000000000000000000000000000dEaD",
	symbol: "BLANK",
	name: "BLANK",
	decimals: 18,
	totalSupply: { formatted: "0", value: 0 },
};

export function usePoolSwapTestSwap(
	config?: any
) {
	return useContractWrite({
		abi: poolSwapTestABI,
		address: '0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e',
		functionName: 'swap',
		...config,
	} as any)
}
