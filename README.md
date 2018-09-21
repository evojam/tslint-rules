# @evojam/tslint-rules

[TSLint](https://palantir.github.io/tslint/) rules to unify TypeScript base code conventions between projects in Evojam.

## Installing latest version

Run `npm install --save-dev evojam/tslint-rules`.

## Installing version of choice

Run `npm install --save-dev evojam/tslint-rules#VERSION`

Example: `npm install --save-dev evojam/tslint-rules#v1.0.1` to install version `v1.0.1`.

## Usage

Just extend your `tslint.json` file with set of rules you need (see tslint.json [sample](#sample)).

Rules are grouped by the following manner:
* **common-\*.tslint.json** - based on standard tslint rules
* **eslint.tslint.json** - based on [tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules)
* **immutability.tslint.json** - based on [tslint-immutable](https://github.com/jonaskello/tslint-immutable)
* **angular.tslint.json** - for Angular projects, based on [codelyzer](https://github.com/mgechev/codelyzer)
* **react.tslint.json** - for React projects

For recommended setup you can just extend by `@evojam/tslint-rules/tslint.json`.

### <a name="sample"></a>Sample `tslint.json`:

```json
  {
    "extends": [
      "@evojam/tslint-rules/tslint.json",
      "@evojam/tslint-rules/react.tslint.json"
    ]
  }
```
