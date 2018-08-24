let lines = [
    " ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   &. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&    &&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   #&&&&&&&&&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&    &&&&&&&&&&&&&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&   &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&    & &   &&&&&&&&&   /&  &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&   &&&&& &&&&&   &    &&&&&  &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&   &&&&&&&&& &&&&&&&&,   &&&&&&  &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&   (&&&&&&&&&&&& &&&&&&&&&&&&   #&&  &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&.   &&&&&&&&&&&&&&&  &&&&&&&&&&&&&&&&    &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&   &&&&&&&&&&&&&&&&   & &&&&&&&&&&&&&&&&&&  &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&   &&&&&&&&&&&&&&&&   &&&&& &&&&&&&&&&&&&&&&&&  &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&   &&&&&&&&&&&&&&&&   &&&&&&& &&&&&&&&&  &&&&&&&  &&&&&&&&. &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&    &&&&&&&&&&&&&&&    &&& &&&&&&&&& &&   &&&  &&&&&&&&  &   &&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&    &&&&&&&&& &&&&&.    &&&&&&&&  &&&&    &&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&   &&&&&& &&&&&&&&  &&&&&&&&  &&&&&&&&   &&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&,   &&&&&&&&&&&&&&&    && &&&&&&&&  &&&&&&&&  &&&&&&&&&&&&   &&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&   *&&&&&&&&&&&&&&&   (&&&&&&&  &&&&&&&&  &&&&&&&&&&&&&&&*   &&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&   &&&&  &&&&&&&&.     &&&&&&&&&&&&&&&   ,&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&%     &&&&&&&&. &&&&   &&&&&&&&&&&&&&&&   &&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     &&&&&&&&&&&&&&&  &&&&&&&&. &&&&&&&   &&&&&&&&&&&&&&&%  .&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&   &&&&&&&&&&&&&&&&&&&&&&. &&&   &&&&&&&&&&&&&&&&   &&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&   &&&&&&&&&&&&&&&&&&.   #&&&&&&&&&&&&&&&   %&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&  ,   &&&&&&&&&&&    &&&&&&&&&&&&&&&    &&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&  &&&&   (&&&&   &&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&  &&&&&&&&   &&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&  &&&&    &&&&&&&&&&&&&&&   .&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&  &   &&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&  &&&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&&&&&&&&&&&&&&&   %&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&&&&&&&&&&&    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&   &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&     &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    "   ██╗  ██╗ ██████╗ ██████╗ ███████╗██████╗ ██╗  ██╗   ███╗   ██╗ ██████╗ ",
    "   ██║ ██╔╝██╔═══██╗██╔══██╗██╔════╝╚════██╗██║  ██║   ████╗  ██║██╔═══██╗",
    "   █████╔╝ ██║   ██║██║  ██║█████╗   █████╔╝███████║   ██╔██╗ ██║██║   ██║",
    "   ██╔═██╗ ██║   ██║██║  ██║██╔══╝  ██╔═══╝ ╚════██║   ██║╚██╗██║██║   ██║",
    "   ██║  ██╗╚██████╔╝██████╔╝███████╗███████╗     ██║██╗██║ ╚████║╚██████╔╝",
    "   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚══════╝     ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",                                                                                                 
    " "
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function draw(speed) {
    for (var i = 0; i < lines.length; i++) {
        console.log(lines[i]);
        await sleep(speed);
    }
}

draw(50);