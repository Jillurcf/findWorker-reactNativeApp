{
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "useTabs": false,
        "tabWidth": 6,
        "endOfLine": "auto",
        "bracketSameLine": true
      }
    ]
  }
}
