const args = process.argv.slice(2)

if (args.length == 0) {
    printUsage()
    process.exit(1)
}

switch (args[0]) {
    case "-h":
        printUsage();
        break;

    case "moo":
        console.log('Don\'t even think about it.')
        break;

    case "-v":
        printVer("b", "e");
        break;

    case "-vv":
        printVer("p", "e");
        break;

    case "-vvv":
        printVer("p", "y");
        break;

    default:
        printUsage()
}

function printUsage() {
    console.log([
        "Usage: Earthbone.exe [args]",
        "Options:",
        "   -v      Print Earthbone's version",
        "   -h      Print this help message ",
        "",
        "                   This Earthbone does not have super cow powers."
    ].join("\n"))
}

function printVer(egg: string, egg1: string) {
    console.log(`Earth${egg}on${egg1} v0.0.3`);
}