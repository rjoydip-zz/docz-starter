module.exports = {
    "extends": ["standard", "plugin:jest/recommended"],
    "plugins": [
        "markdown",
        "jest"
    ],
    "overrides": [{
        "files": ["src/**/*.js"],
        "excludedFiles": ["*.test.js", "test/**/*.test.js"],
    }],
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "never"],
        "quotes": ["error", "single"]
    }
};