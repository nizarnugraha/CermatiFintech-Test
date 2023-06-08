### Requirement to Install
* https://github.com/nvm-sh/nvm
* node >= 15
* npm >= 7
* npx >= 7


### How to Install
* `npm install`


## Folder Structure
```
project
│   README.md
│   run.sh
│   package.json
└───config
│   │ dev.json
│   │ local.json
│
└───test (all BDD testcase)
│   │
│   └───module1
│       │   module1_example1_test.js
│       │   module1_example2_test.js
│       │   ...
│   └───module2
│       │ module2_example1_test.js
│       │ module2_example2_test.js
│       │   ...
│   
└───output (report html)
    │ mochawesome.html
    │ ... 
```

### Configuration Setup
configuration setup is on the folder `config/` this configuration filename is based on `ENVIRONMENT` variable that been setup on the section `Environment Variable` below, meaning if you set `ENVIRONMENT=local` the code will lookup on the folder `config/` for `local.json` file.

#### Add `host` url into for new configuration
1. check on file configuration `.json` file, 
```
"host_varcel": "https://www.cermati.com/gabung",
"host_custom:" "xxxxx" // add new host configuration on below this section
```

2. open `codecept.config.json` 
look up to line 26
```
 // SETUP CONFIGURATION FOR HOST
  process.env.HOST_CERMATI = config.host_cermati;
```


### How to Run
#### Running all testcase
* `./run.sh`

#### Running testcase with specific test file
* `TEST_FILE_PATH=RegisterTest/register_test.js ./run.sh`

#### Running testcase with specific test file and environment
* `ENVIRONMENT=local TEST_FILE_PATH=/*_test.js ./run.sh`



















