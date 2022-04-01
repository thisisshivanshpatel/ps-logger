# ps-logger

<img src="screenshots/ps-logger.PNG" alt="screenshot" height="200" width="600"/>

- [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://choosealicense.com/licenses/mit/)
 
- [![Npm package total downloads](https://badgen.net/npm/dt/ps-logger)](https://npmjs.com/package/ps-logger)

- <a href="https://dev.to/imshivanshpatel" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="imshivanshpatel" height="30" width="40" /></a>
<a href="https://linkedin.com/in/shivansh-patel-4915b4171" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="shivansh-patel-4915b4171" height="30" width="40" /></a>
<a href="https://instagram.com/programming_updates" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="programming_updates" height="30" width="40" /></a>
- ps-logger is a production grade logger, basically it is used for logging info,warning,error,silly,verbose,prompt and debug statements

#### usage examples:-

```JAVASCRIPT
const logger=require('ps-logger');

logger.info("This is info")
logger.warn("This is warning");
logger.error("This is error");
logger.debug("This is debug");
logger.prompt("This is prompt");
logger.verbose("This is verbose");
logger.silly("This is silly");
```


#### disabling or enabling color
- By default it is set to true,so you dont need to set it as true

```javascript
logger.setColor(false);
```


#### In TypeScript

```javascript
import {info} from "ps-logger";

info(`server is running on port ${port} `)
```