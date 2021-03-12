package main

import (
	"flag"
	"log"
	"net/http"
)

const (
	port = ":4545"
	target = "./public"
)

var (
	listen = flag.String("listen", port, "listen address")
	dir    = flag.String("dir", target, "directory to serve")
)

func main() {
	flag.Parse()
	log.Printf("listening on %q...", *listen)
	log.Fatal(http.ListenAndServe(*listen, http.FileServer(http.Dir(*dir))))
}