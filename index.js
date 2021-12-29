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

//setting time in (HH:MM:SS)
const date=new Date();
const hours=date.getHours();
const minute=date.getMinutes();
const second=date.getSeconds();


const info=(arg)=>{
  log(colors.bold.green('[info]:')+colors.bold.gray(` ${hours}:${minute}:${second} `)+`${arg}`.info);
}

const warn=(arg)=>{
  log(colors.bold.yellow('[warn]:')+colors.bold.gray(` ${hours}:${minute}:${second} `)+`${arg}`.warn);
}

const error=(arg)=>{
  log(colors.bold.red('[error]:')+colors.bold.gray(` ${hours}:${minute}:${second} `)+`${arg}`.error);
}

const debug=(arg)=>{
  log(colors.bold.blue('[debug]:')+colors.bold.gray(` ${hours}:${minute}:${second} `)+`${arg}`.debug);
}

const silly=(arg)=>{
  log(colors.rainbow('[silly]:')+colors.bold.gray(` ${hours}:${minute}:${second} `)+`${arg}`.silly);
}

const verbose=(arg)=>{
  log(colors.bold.cyan('[verbose]:')+colors.bold.gray(` ${hours}:${minute}:${second} `)+`${arg}`.verbose);
}

const prompt=(arg)=>{
    log(colors.bold.grey('[prompt]:')+colors.bold.gray(` ${hours}:${minute}:${second} `)+`${arg}`.prompt);
}

module.exports={info,warn,error,debug,silly,verbose,prompt,setColor}