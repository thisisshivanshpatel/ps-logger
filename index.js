const colors=require("colors");
const log=console.log

//enabling and disabling color
const setColor=(color=true)=>{ 
color?colors.enable():colors.disable()
}

//setting theme
colors.setTheme({
    silly: 'rainbow',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });



const info=(arg)=>{
  log(colors.bold.green('[info]:')+`${arg}`.info);
}

const warn=(arg)=>{
  log(colors.bold.yellow('[warn]:')+`${arg}`.warn);
}

const error=(arg)=>{
    log(colors.bold.red('[error]:')+`${arg}`.error);
}

const debug=(arg)=>{
    log(colors.bold.blue('[debug]:')+`${arg}`.debug);
}

const silly=(arg)=>{
    log(colors.rainbow('[silly]:')+`${arg}`.silly);
}

const verbose=(arg)=>{
    log(colors.bold.cyan('[verbose]:')+`${arg}`.verbose);
}

const prompt=(arg)=>{
    log(colors.bold.grey('[prompt]:')+`${arg}`.prompt);
}

module.exports={info,warn,error,debug,silly,verbose,prompt,setColor}