initSidebarItems({"constant":[["DAYS",""],["HOURS",""],["MILLISECS_PER_BLOCK",""],["MINUTES",""],["SLOT_DURATION",""],["VERSION",""],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""],["WEIGHT_PER_SECOND",""]],"enum":[["BalancesCall","Dispatchable calls."],["Call",""],["Event",""],["OriginCaller",""],["TimestampCall","Dispatchable calls."]],"fn":[["native_version","The version information used to identify this runtime when compiled natively."]],"macro":[["construct_runtime","Construct a runtime, with the given name and the given modules."],["parameter_types","Create new implementations of the `Get` trait."]],"mod":[["api",""],["opaque","Opaque types. These are used by the CLI to instantiate machinery that don't need to know the specifics of the runtime. They can then be made to be agnostic over specific formats of data like extrinsics, allowing for them to continue syncing the network through upgrades to even the core data structures."]],"struct":[["AvailableBlockRatio",""],["BlockExecutionWeight","Importing a block with 0 txs takes ~5 ms"],["BlockGasLimit",""],["BlockHashCount",""],["ChainId",""],["EthereumFindAuthor",""],["ExistentialDeposit",""],["ExtrinsicBaseWeight","Executing 10,000 System remarks (no-op) txs takes ~1.26 seconds -> ~125 µs per tx"],["FixedGasPrice","Fixed gas price of `1`."],["GenesisConfig",""],["IdentityFee","Implementor of `WeightToFeePolynomial` that maps one unit of weight to one unit of fee."],["MaxLocks",""],["MaximumBlockLength",""],["MaximumBlockWeight","We allow for 2 seconds of compute with a 6 second average block time."],["MaximumExtrinsicWeight","Assume 10% of weight for average on_initialize calls."],["MinimumPeriod",""],["Origin",""],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["Perbill","A fixed point representation of a number in the range [0, 1]."],["Permill","A fixed point representation of a number in the range [0, 1]."],["RocksDbWeight","By default, Substrate uses RocksDB, so this will be the weight used throughout the runtime."],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["TransactionByteFee",""],["TransactionConverter",""],["Version",""]],"trait":[["BuildStorage","Complex storage builder stuff."],["FindAuthor","A trait for finding the author of a block header based on the `PreRuntime` digests contained within it."],["KeyOwnerProofSystem","Something which can compute and check proofs of a historical key owner and return full identification data of that key owner."],["Randomness",""],["StorageValue","A trait for working with macro-generated storage values under the substrate storage API."]],"type":[["AccountId","Some way of identifying an account on the chain. We intentionally make it equivalent to the public key of our transaction signing scheme."],["AccountIndex","The type for looking up accounts. We don't expect more than 4 billion of them, but you never know..."],["Address","The address format for describing accounts."],["Aura",""],["AuraConfig",""],["Balance","Balance of an account."],["Balances",""],["BalancesConfig",""],["Block","Block type as expected by this runtime."],["BlockId","BlockId type as expected by this runtime."],["BlockNumber","Type of block number."],["CheckedExtrinsic","Extrinsic type that has already been checked."],["ConsensusEngineId","Consensus engine unique ID."],["DigestItem","Digest item type."],["EVM",""],["EVMConfig",""],["Ethereum",""],["EthereumConfig",""],["Executive","Executive: handles dispatch to the various modules."],["Grandpa",""],["GrandpaConfig",""],["Hash","A hash of some data used by the chain."],["Header","Block header type as expected by this runtime."],["Index","Index of a transaction in the chain."],["RandomnessCollectiveFlip",""],["Signature","Alias to 512-bit hash when used in the context of a transaction signature on the chain."],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The SignedExtension to the basic transaction logic."],["Sudo",""],["SudoConfig",""],["System",""],["SystemConfig",""],["Timestamp",""],["TransactionPayment",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Weight","Numeric range of a transaction weight."]]});