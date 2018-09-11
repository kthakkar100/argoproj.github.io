webpackJsonp([4040935058382],{529:function(o,e){o.exports={pathContext:{docHtml:'<h1>How to contribute (Work in progress)</h1>\n<h2>How to report a bug</h2>\n<p>Open an issue at <a href="https://github.com/argoproj/">https://github.com/argoproj/</a></p>\n<ul>\n<li>What did you do? (how to reproduce)</li>\n<li>What did you see? (include logs and screenshots as appropriate)</li>\n<li>What did you expect?</li>\n</ul>\n<h2>How to contribute a bug fix</h2>\n<p>Go to <a href="https://github.com/argoproj/">https://github.com/argoproj/</a></p>\n<ul>\n<li>Open an issue and discuss it.</li>\n<li>Create a pull request for your fix.</li>\n</ul>\n<h2>How to suggest a new feature</h2>\n<p>Go to <a href="https://groups.google.com/forum/#!forum/argoproj">https://groups.google.com/forum/#!forum/argoproj</a></p>\n<ul>\n<li>Create a new topic to discuss your feature.</li>\n</ul>\n<h2>How to setup your dev environment</h2>\n<h3>Requirements</h3>\n<ul>\n<li>Golang 1.10</li>\n<li>Docker</li>\n<li>\n<p>dep v0.5</p>\n<ul>\n<li>Mac Install: <code>brew install dep</code></li>\n</ul>\n</li>\n<li>gometalinter v2.0.5</li>\n</ul>\n<h3>Quickstart</h3>\n<pre><code>$ go get github.com/argoproj/argo\n$ cd $(go env GOPATH)/src/github.com/argoproj/argo\n$ dep ensure -vendor-only\n$ make\n</code></pre>\n<h3>Build workflow-controller and executor images</h3>\n<p>The following will build the workflow-controller and executor images tagged with the <code>latest</code> tag, then push to a personal dockerhub repository:</p>\n<pre><code>$ make controller-image executor-image IMAGE_TAG=latest IMAGE_NAMESPACE=jessesuen DOCKER_PUSH=true\n</code></pre>\n<h3>Build argo cli</h3>\n<pre><code>$ make cli\n$ ./dist/argo version\n</code></pre>\n<h3>Deploying controller with alternative controller/executor images</h3>\n<pre><code>$ argo install --controller-image jessesuen/workflow-controller:latest --executor-image jessesuen/argoexec:latest\n</code></pre>',docPath:"argo/contributing",proj:"argo"}}}});
//# sourceMappingURL=path---docs-argo-contributing-html-d6802e070598e0236c1d.js.map