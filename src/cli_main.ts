const mane = require("./index")

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

    case "info":
        switch(args[1]){
            case "-j":
                console.log(mane.GetEnv.getJreVer());
                break;

            case "-p":
                console.log(mane.GetEnv.isJrePresent());
                break;

            default:
                console.log(mane.GetEnv.getOsInfo());
                break;     
        }    
        break;

    default:
        printUsage()
}

function printUsage() {
    console.log([
        "Usage: Earthbone [Options] [args]",
        "Args:",
        "   info    Print System Info as JSON",
        "       [-j]    Print Java Runtime Version",
        "       [-p]    Check if Java presents",
        "",
        "Options:",
        "   -v      Print Earthbone's version",
        "   -h      Print this help message ",
        "",
        "           This Earthbone does not have Super Cow Powers. And no easter eggs of course."
    ].join("\n"))
}

function printVer(egg: string, egg1: string) {
    console.log(`Earth${egg}on${egg1} v0.0.3`);
}