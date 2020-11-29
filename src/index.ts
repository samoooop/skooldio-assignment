const main = () => {
    console.log('Hello World!');
}

if (require.main === module) {
    main();
    const a = 1;
}
