if (!WebAssembly.instantiateStreaming) {
    // polyfill
    console.log("Loaded using polyfill")
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

const go = new Go();

let mod, inst;

WebAssembly.instantiateStreaming(fetch("lib.wasm"), go.importObject).then(
    result => {
        mod = result.module;
        inst = result.instance;

        const btn =  document.getElementById("runBtn")
        btn.disabled = false;

        btn.addEventListener("click", () => {
           run()
       } )
    }
);

async function run() {
    await go.run(inst);
    inst = await WebAssembly.instantiate(mod, go.importObject); // reset instance
}