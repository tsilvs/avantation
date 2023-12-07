# Build and Run

```sh
npm run build && bin\run.cmd -h graph.microsoft.com -b v1.0 --disable-tag G:\test.har
```

Unable to run because the response is not a valid JSON.

```sh
npm run build && bin\run.cmd -h 127.0.0.1:21499 -b api/v1 --disable-tag test/resources/example.single.har
```

```sh
npm run build && bin\run.cmd -h 127.0.0.1:21499 -b api/v1 --disable-tag test/resources/example.multiple.har
```