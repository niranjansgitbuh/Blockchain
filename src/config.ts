import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Privacy Enhancing Token dApp",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            exchange:
                "andr1dt5dctxluy7xhxtal3dhmwe7fzevgp28mgym9hndas8rjlnj53fsanfrvx",
            cw20: "andr1qe83fan63l7q8dgp6m6rd5wylaszs3t55zmaqq0qtmac0dk78j5q2axmdz",
            name: "Privacy Enhancing Token dApp",
            type: ICollectionType.EXCHANGE,
            id: "embeddables-exchange-1",
        },
    ],
};

export default CONFIG;
