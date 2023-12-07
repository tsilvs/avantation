# Build and Run

- 遇到 `pathParamRegex` (預設為數字) 就會變成動態變數

    ```sh
    '^([0-9]|[-$@!~%^*()_+])+$'
    ```

    ```sh
    npm run build && cd demo && ..\bin\run.cmd -h demo.avantation.in -b api/v1 --disable-tag Avantation_2019-03-03.har && cd ..
    ```

- 只要沒有 `pathParamRegex` 就會變成靜態變數

    ```sh
    npm run build && cd demo && ..\bin\run.cmd -h graph.microsoft.com -b v1.0 --disable-tag G:\test.har
    ```
