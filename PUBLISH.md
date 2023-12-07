
1. Change `package.json` version

2. Rebuild

    ```sh
    npm run clean && npm run build
    ```

3. Publish

    ```sh
    npm publish --access public
    ```

---

[Mark as deprecated](https://docs.npmjs.com/deprecating-and-undeprecating-packages-or-package-versions)

```sh
npm deprecate @willh/avantation@2.1.0 "Unable to run"
npm deprecate @willh/avantation@2.1.1 "Unable to run"
npm deprecate @willh/avantation@2.1.2 "Unable to run"
```