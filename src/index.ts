import { GameManager } from "./model/gameManager";

const main = async () => {
    const gm = new GameManager();
    await gm.start();
}

if (require.main === module) {
    main().then(() => {
        process.exit(0);
    }).catch(() => {
        process.exit(1);
    });
}
