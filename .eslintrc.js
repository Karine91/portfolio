module.exports = {
    "env":{
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    "extends": "eslint:recommended",
    "parserOptions":{
        "sourceType": "module",
    },
    "rules": {
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        // "indent":[
        //     "error",
        //     4,
        // ],
        "semi":[
            "error",
            "always",
        ],
        "no-unused-vars": 0,
        "no-console": 0,
    },
    "globals": {
        "$": true,
        "jQuery": true,
    }
};