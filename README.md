Simple WebAssembly - Go

This is an example from the docs. [Get started](https://github.com/golang/go/wiki/WebAssembly#getting-started)  with WebAssembly (Go)

### What

- `main.go`: Go code that will be converted to `lib.wasm` and eventually executed in the browser.
- `./build`: 
    - `wasm_exec.js`: Pulled from Golang as it allows to execute the actual Go code (with polyfills).
    - `index.html`: Index html page served.
    - `lib.wasm`: Executable WebAssembly module source from `main.go`
    - `index.js`: JavaScript module to run WebAssembly.
- `server.go`: Serves `.build.go` directory.
    
