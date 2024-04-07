const Mint = () => {
    const { transactionId } = useParams();
    const [address, setAddress] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        async function initialize() {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setAddress(address);

                const myContractAddress = "0xb7389dbAE585a413120ADfD8974908A7eCB67d72";
                const contract = new ethers.Contract(
                    myContractAddress,
                    Abi,
                    signer
                );
                setContract(contract);
            }
        }
        initialize();
    }, []);

    const mintNFT = async () => {
        try {
            if (!transactionId || !contract) {
                toast.warning("Fill all the required details");
                return;
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const userAddress = await signer.getAddress();
            const tokenURI = `https://ipfs.io/ipfs/${transactionId}`;

            // Mint NFT with user ID, username, wallet address, and transaction ID
            const metadata = {
                userId: "123456",
                userName: "exampleUser",
                userAddress: userAddress,
                transactionId: transactionId
            };

            // Pin metadata to IPFS
            const res = await axios.post(
                "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                metadata,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${jwt}`,
                    },
                }
            );

            // Get the IPFS hash of the metadata
            const metadataHash = res.data.IpfsHash;
            const tokenMetadataURI = `https://ipfs.io/ipfs/${metadataHash}`;

            // Mint the NFT with metadata URI
            await contract.proof(userAddress, tokenMetadataURI);

            toast.success("NFT minted successfully!");
        } catch (error) {
            toast.error("Error minting NFT!");
            console.error(error);
        }
    };

    return (
        <main className="bg-gray-900 h-screen">
            <Navbar />
            <div className='flex justify-center'>
            <div className="container px-40 m-10 w-8/12 overflow-hidden bg-gray-700  rounded-3xl">
                <div className="text-center py-16">
                    <p className="text-md text-gray-400 lg:text-xl">
                        My Address: {address?.slice(0, 10)}...{address?.slice(-10)}
                    </p>
                    <div className="mt-8 text-white">
                        <p className="text-lg font-bold">Transaction Details:</p>
                        <p>ID: {transactionId}</p>
                        <button onClick={mintNFT} className="bg-purple-500 text-white px-4 py-2 mt-4 rounded-md">Mint NFT</button>
                    </div>
                </div>
            </div>
            </div>
            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    theme="colored" />
        </main>
    );
};

export default Mint;
