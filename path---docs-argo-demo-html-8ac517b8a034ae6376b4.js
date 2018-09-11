webpackJsonp([0xb735025ee559],{530:function(e,o){e.exports={pathContext:{docHtml:'<h1>Argo Getting Started</h1>\n<p>To see how Argo works, you can run examples of simple workflows and workflows that use artifacts.\nFor the latter, you\'ll set up an artifact repository for storing the artifacts that are passed in\nthe workflows. Here are the requirements and steps to run the workflows.</p>\n<h2>Requirements</h2>\n<ul>\n<li>Installed Kubernetes 1.9 or later</li>\n<li>Installed <a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/">kubectl</a></li>\n<li>Have a <a href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/">kubeconfig</a> file (default location is <code>~/.kube/config</code>).</li>\n</ul>\n<h2>1. Download Argo</h2>\n<p>On Mac:</p>\n<pre><code>brew install argoproj/tap/argo\n</code></pre>\n<p>On Linux:</p>\n<pre><code>curl -sSL -o /usr/local/bin/argo https://github.com/argoproj/argo/releases/download/v2.2.0/argo-linux-amd64\nchmod +x /usr/local/bin/argo\n</code></pre>\n<h2>2. Install the Controller and UI</h2>\n<pre><code>kubectl create ns argo\nkubectl apply -n argo -f https://raw.githubusercontent.com/argoproj/argo/v2.2.0/manifests/install.yaml\n</code></pre>\n<p>NOTE: On GKE, you may need to grant your account the ability to create new clusterroles</p>\n<pre><code>kubectl create clusterrolebinding YOURNAME-cluster-admin-binding --clusterrole=cluster-admin --user=YOUREMAIL@gmail.com\n</code></pre>\n<h2>3. Configure the service account to run workflows</h2>\n<p>For clusters with RBAC enabled, the \'default\' service account is too limited to support features\nlike artifacts, outputs, access to secrets, etc... Run the following command to grant admin\nprivileges to the \'default\' service account in the namespace \'default\':</p>\n<pre><code>kubectl create rolebinding default-admin --clusterrole=admin --serviceaccount=default:default\n</code></pre>\n<p>NOTE: You can also submit workflows which run with a different service account using:</p>\n<pre><code>argo submit --serviceaccount &#x3C;name>\n</code></pre>\n<h2>4. Run Simple Example Workflows</h2>\n<pre><code>argo submit --watch https://raw.githubusercontent.com/argoproj/argo/master/examples/hello-world.yaml\nargo submit --watch https://raw.githubusercontent.com/argoproj/argo/master/examples/coinflip.yaml\nargo submit --watch https://raw.githubusercontent.com/argoproj/argo/master/examples/loops-maps.yaml\nargo list\nargo get xxx-workflow-name-xxx\nargo logs xxx-pod-name-xxx #from get command above\n</code></pre>\n<p>You can also create workflows directly with kubectl. However, the Argo CLI offers extra features\nthat kubectl does not, such as YAML validation, workflow visualization, parameter passing, retries\nand resubmits, suspend and resume, and more.</p>\n<pre><code>kubectl create -f https://raw.githubusercontent.com/argoproj/argo/master/examples/hello-world.yaml\nkubectl get wf\nkubectl get wf hello-world-xxx\nkubectl get po --selector=workflows.argoproj.io/workflow=hello-world-xxx --show-all\nkubectl logs hello-world-yyy -c main\n</code></pre>\n<p>Additional examples are availabe <a href="https://github.com/argoproj/argo/blob/master/examples/README.md">here</a>.</p>\n<h2>5. Install an Artifact Repository</h2>\n<p>Argo supports S3 (AWS, GCS, Minio) as well as Artifactory as artifact repositories. This tutorial\nuses Minio for the sake of portability. Instructions on how to configure other artifact repositories\nare <a href="https://github.com/argoproj/argo/blob/master/ARTIFACT_REPO.md">here</a>.</p>\n<pre><code>brew install kubernetes-helm # mac\nhelm init\nhelm install stable/minio --name argo-artifacts --set service.type=LoadBalancer\n</code></pre>\n<p>Login to the Minio UI using a web browser (port 9000) after exposing obtaining the external IP using <code>kubectl</code>.</p>\n<pre><code>kubectl get service argo-artifacts-minio -o wide\n</code></pre>\n<p>On Minikube:</p>\n<pre><code>minikube service --url argo-artifacts-minio\n</code></pre>\n<p>NOTE: When minio is installed via Helm, it uses the following hard-wired default credentials,\nwhich you will use to login to the UI:</p>\n<ul>\n<li>AccessKey: AKIAIOSFODNN7EXAMPLE</li>\n<li>SecretKey: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY</li>\n</ul>\n<p>Create a bucket named <code>my-bucket</code> from the Minio UI.</p>\n<h2>6. Reconfigure the workflow controller to use the Minio artifact repository</h2>\n<p>Edit the workflow-controller config map to reference the service name (argo-artifacts-minio) and\nsecret (argo-artifacts-minio) created by the helm install:</p>\n<pre><code>kubectl edit cm -n argo workflow-controller-configmap\n...\ndata:\n  config: |\n    artifactRepository:\n      s3:\n        bucket: my-bucket\n        endpoint: argo-artifacts-minio.default:9000\n        insecure: true\n        # accessKeySecret and secretKeySecret are secret selectors.\n        # It references the k8s secret named \'argo-artifacts-minio\'\n        # which was created during the minio helm install. The keys,\n        # \'accesskey\' and \'secretkey\', inside that secret are where the\n        # actual minio credentials are stored.\n        accessKeySecret:\n          name: argo-artifacts-minio\n          key: accesskey\n        secretKeySecret:\n          name: argo-artifacts-minio\n          key: secretkey\n</code></pre>\n<p>NOTE: the Minio secret is retrieved from the namespace you use to run workflows. If Minio is\ninstalled in a different namespace then you will need to create a copy of its secret in the\nnamespace you use for workflows.</p>\n<h2>7. Run a workflow which uses artifacts</h2>\n<pre><code>argo submit https://raw.githubusercontent.com/argoproj/argo/master/examples/artifact-passing.yaml\n</code></pre>\n<h2>8. Access the Argo UI</h2>\n<p>By default, the Argo UI service is not exposed with an external IP. To access the UI, use one of the\nfollowing methods:</p>\n<h4>Method 1: kubectl port-forward</h4>\n<pre><code>kubectl -n argo port-forward deployment/argo-ui 8001:8001\n</code></pre>\n<p>Then visit: <a href="http://127.0.0.1:8001">http://127.0.0.1:8001</a></p>\n<h4>Method 2: kubectl proxy</h4>\n<pre><code>kubectl proxy\n</code></pre>\n<p>Then visit: <a href="http://127.0.0.1:8001/api/v1/namespaces/argo/services/argo-ui/proxy/">http://127.0.0.1:8001/api/v1/namespaces/argo/services/argo-ui/proxy/</a></p>\n<p>NOTE: artifact download and webconsole is not supported using this method</p>\n<h4>Method 3: Expose a LoadBalancer</h4>\n<p>Update the argo-ui service to be of type <code>LoadBalancer</code>.</p>\n<pre><code>kubectl patch svc argo-ui -n argo -p \'{"spec": {"type": "LoadBalancer"}}\'\n</code></pre>\n<p>Then wait for the external IP to be made available:</p>\n<pre><code>kubectl get svc argo-ui -n argo\nNAME      TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE\nargo-ui   LoadBalancer   10.19.255.205   35.197.49.167   80:30999/TCP   1m\n</code></pre>\n<p>NOTE: On Minikube, you won\'t get an external IP after updating the service -- it will always show\n<code>pending</code>. Run the following command to determine the Argo UI URL:</p>\n<pre><code>minikube service -n argo --url argo-ui\n</code></pre>',docPath:"argo/demo",proj:"argo"}}}});
//# sourceMappingURL=path---docs-argo-demo-html-8ac517b8a034ae6376b4.js.map