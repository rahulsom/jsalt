(require 'cljs.build.api)

;;;   :asset-path -> this will be what is written in the js file that Ratpack will
;;;                  serve in handlers DSL
;;;   :output-dir -> this is physical location of files
;;;   :output-to ->  compiled cljs sources will out putted to this file
(cljs.build.api/build "src/main/cljs"
{ :output-to "build/generated/js/jsalt.cljs.js"
  :optimizations :advanced
  :pretty-print true
  })