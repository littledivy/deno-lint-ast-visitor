import Visitor from "./index.ts";
import { ImportDeclaration } from "./types.ts";

class ImportVisitorThatDoesNothing extends Visitor {
  visitImportDeclaration(e: ImportDeclaration): ImportDeclaration {
    console.log(e);
    return e;
  }
}

new ImportVisitorThatDoesNothing().visitProgram(
  {
    "type": "Module",
    "span": { "start": 1, "end": 30, "ctxt": 0 },
    "body": [
      {
        "type": "ImportDeclaration",
        "span": { "start": 1, "end": 30, "ctxt": 0 },
        "specifiers": [
          {
            "type": "ImportNamespaceSpecifier",
            "span": { "start": 8, "end": 16, "ctxt": 0 },
            "local": {
              "type": "Identifier",
              "span": { "start": 13, "end": 16, "ctxt": 0 },
              "value": "asd",
              "optional": false,
            },
          },
        ],
        "source": {
          "type": "StringLiteral",
          "span": { "start": 22, "end": 29, "ctxt": 0 },
          "value": "./asd",
          "has_escape": false,
        },
        // Type errors when passed hardcoded, otherwise works charm at runtime (passed from Rust)
        "typeOnly": false,
        "asserts": null,
      },
    ],
  },
);
