import type { Pretty } from '../../types.js'

export interface Selectors {
  [x: string]: unknown
}

export type ErrorSelectors = {
  '0xa14c4b50': 'URIQueryForNonexistentToken()'
  '0xa1148100': 'TransferFromIncorrectOwner()'
  '0x59c896be': 'TransferCallerNotOwnerNorApproved()'
  '0xdf2d9b42': 'OwnerQueryForNonexistentToken()'
  '0xcfb3b942': 'ApprovalCallerNotOwnerNorApproved()'
  '0xcf4700e4': 'ApprovalQueryForNonexistentToken()'
  '0x8f4eb604': 'BalanceQueryForZeroAddress()'
  '0xd1a57ed6': 'TransferToNonERC721ReceiverImplementer()'
  '0xea553b34': 'TransferToZeroAddress()'
  '0x30cd7471': 'NotOwner()'
  '0xc19f17a9': 'NotApproved()'
  '0x39f3e3fd': 'InvalidBasicOrderParameterEncoding()'
  '0x466aa616': 'MissingOriginalConsiderationItems()'
  '0x21ccfeb7': 'InvalidTime(uint256,uint256)'
  '0x8ffff980': 'InsufficientNativeTokensSupplied()'
  '0x69f95827': 'InvalidERC721TransferAmount(uint256)'
  '0xa61be9f0': 'InvalidMsgValue(uint256)'
  '0xbc806b96': 'NativeTokenTransferGenericFailure(address,uint256)'
  '0x91b3e514': 'MissingItemAmount()'
  '0xd13d53d4': 'InvalidCallToConduit(address)'
  '0x1cf99b26': 'InvalidConduit(bytes32,address)'
  '0xc63cf089': 'InexactFraction()'
  '0x133c37c6': 'OrderCriteriaResolverOutOfRange(uint8)'
  '0xa8930e9a': 'UnresolvedConsiderationCriteria(uint256,uint256)'
  '0xd6929332': 'UnresolvedOfferCriteria(uint256,uint256)'
  '0x94eb6af6': 'CriteriaNotEnabledForItem()'
  '0x375c24c1': 'MissingFulfillmentComponentOnAggregation(uint8)'
  '0xa5f54208': 'ConsiderationNotMet(uint256,uint256,uint256)'
  '0xbced929d': 'MismatchedFulfillmentOfferAndConsiderationComponents(uint256)'
  '0x93979285': 'InvalidContractOrder(bytes32)'
  '0x7fa8a987': 'NoReentrantCalls()'
  '0x4f7fb80d': 'BadContractSignature()'
  '0x1f003d0a': 'BadSignatureV(uint8)'
  '0x8baa579f': 'InvalidSignature()'
  '0x10fda3e1': 'OrderAlreadyFilled(bytes32)'
  '0xfb5014fc': 'InvalidRestrictedOrder(bytes32)'
  '0x6ab37ce7': 'UnusedItemParameters()'
  '0xf486bc87': 'TokenTransferGenericFailure(address,address,address,uint256,uint256)'
  '0x12d3f5a3': 'InvalidNativeOfferItem()'
  '0x09bde339': 'InvalidProof()'
  '0xd5da9a1b': 'NoSpecifiedOrdersAvailable()'
  '0x7fda7279': 'InvalidFulfillmentComponentData()'
  '0x4e487b71': 'Panic(uint256)'
  '0x98e9db6e': 'OfferAndConsiderationRequiredOnFulfillment()'
  '0xee9e0e63': 'OrderPartiallyFilled(bytes32)'
  '0x5a052b32': 'BadFraction()'
  '0xa11b63ff': 'PartialFillsNotEnabledForOrder()'
  '0x2165628a': 'ConsiderationLengthNotEqualToTotalOriginal()'
  '0xfed398fc': 'CannotCancelOrder()'
  '0x1a515574': 'OrderIsCancelled(bytes32)'
}

export type EventSelectors = {
  '0xe1fffcc4': 'Deposit(address,uint256)'
  '0xddf252ad': 'Transfer(address,address,uint256)'
  '0x8c5be1e5': 'Approval(address,address,uint256)'
  '0x7fcf532c': 'Withdrawal(address,uint256)'
  '0x4b9f2d36': 'OrdersMatched(bytes32[])'
  '0x6bacc01d': 'OrderCancelled(bytes32,address,address)'
}

export type FunctionSelectors = {
  '0x06fdde03': 'name()'
  '0x2e1a7d4d': 'withdraw(uint256)'
  '0x095ea7b3': 'approve(address,uint256)'
  '0x18160ddd': 'totalSupply()'
  '0x23b872dd': 'transferFrom(address,address,uint256)'
  '0x313ce567': 'decimals()'
  '0x70a08231': 'balanceOf(address)'
  '0x95d89b41': 'symbol()'
  '0xa9059cbb': 'transfer(address,uint256)'
  '0xd0e30db0': 'deposit()'
  '0xdd62ed3e': 'allowance(address,address)'
  '0xe8e33700': 'addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256)'
  '0xf305d719': 'addLiquidityETH(address,uint256,uint256,uint256,address,uint256)'
  '0xfb3bdb41': 'swapETHForExactTokens(uint256,address[],address,uint256)'
  '0xc45a0155': 'factory()'
  '0xded9382a': 'removeLiquidityETHWithPermit(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)'
  '0xaf2979eb': 'removeLiquidityETHSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256)'
  '0xb6f9de95': 'swapExactETHForTokensSupportingFeeOnTransferTokens(uint256,address[],address,uint256)'
  '0xbaa2abde': 'removeLiquidity(address,address,uint256,uint256,uint256,address,uint256)'
  '0x8803dbee': 'swapTokensForExactTokens(uint256,uint256,address[],address,uint256)'
  '0xad5c4648': 'WETH()'
  '0xad615dec': 'quote(uint256,uint256,uint256)'
  '0x791ac947': 'swapExactTokensForETHSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)'
  '0x7ff36ab5': 'swapExactETHForTokens(uint256,address[],address,uint256)'
  '0x85f8c259': 'getAmountIn(uint256,uint256,uint256)'
  '0x4a25d94a': 'swapTokensForExactETH(uint256,uint256,address[],address,uint256)'
  '0x5b0d5984': 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)'
  '0x5c11d795': 'swapExactTokensForTokensSupportingFeeOnTransferTokens(uint256,uint256,address[],address,uint256)'
  '0x1f00ca74': 'getAmountsIn(uint256,address[])'
  '0x2195995c': 'removeLiquidityWithPermit(address,address,uint256,uint256,uint256,address,uint256,bool,uint8,bytes32,bytes32)'
  '0x38ed1739': 'swapExactTokensForTokens(uint256,uint256,address[],address,uint256)'
  '0x02751cec': 'removeLiquidityETH(address,uint256,uint256,uint256,address,uint256)'
  '0x054d50d4': 'getAmountOut(uint256,uint256,uint256)'
  '0x18cbafe5': 'swapExactTokensForETH(uint256,uint256,address[],address,uint256)'
  '0x46423aa7': 'getOrderStatus(bytes32)'
  '0x5b34b966': 'incrementCounter()'
  '0x79df72bd': 'getOrderHash((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256))'
  '0x87201b41': 'fulfillAvailableAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],(uint256,uint256)[][],(uint256,uint256)[][],bytes32,address,uint256)'
  '0x88147732': 'validate(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[])'
  '0xa8174404': 'matchOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],((uint256,uint256)[],(uint256,uint256)[])[])'
  '0xa900866b': 'getContractOffererNonce(address)'
  '0xb3a34c4c': 'fulfillOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes),bytes32)'
  '0xe7acab24': 'fulfillAdvancedOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes),(uint256,uint8,uint256,uint256,bytes32[])[],bytes32,address)'
  '0xed98a574': 'fulfillAvailableOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],(uint256,uint256)[][],(uint256,uint256)[][],bytes32,uint256)'
  '0xf07ec373': 'getCounter(address)'
  '0xf2d12b12': 'matchAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],((uint256,uint256)[],(uint256,uint256)[])[],address)'
  '0xf47b7740': 'information()'
  '0xfb0f3ee1': 'fulfillBasicOrder((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))'
  '0xc87b56dd': 'tokenURI(uint256)'
  '0xa0712d68': 'mint(uint256)'
  '0xdb7fd408': 'mint(uint256,bytes)'
  '0x6a627842': 'mint(address)'
  '0x8456cb59': 'pause()'
  '0xf2fde38b': 'transferOwnership(address)'
}

export type SelectorsByType = {
  Errors: ErrorSelectors
  Events: EventSelectors
  Functions: FunctionSelectors
}

export type BytecodeSelectors = Pretty<
  {
    [K in keyof ErrorSelectors]: ErrorSelectors[K]
  } & {
    [K in keyof EventSelectors]: EventSelectors[K]
  } & {
    [K in keyof FunctionSelectors]: FunctionSelectors[K]
  }
>
