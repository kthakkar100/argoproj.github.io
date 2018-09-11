webpackJsonp([0xe5d375fbdbd7],{522:function(e,i){e.exports={pathContext:{docHtml:"<h1>Changelog</h1>\n<h2>2.2.0 (2018-08-30)</h2>\n<h3>Notes about upgrading from v2.1</h3>\n<ul>\n<li>\n<p>The <code>argo install</code> and <code>argo uninstall</code> commands have been removed from the CLI. Instead, plain\nkubernetes manifests are provided to be installed using <code>kubectl apply</code>, or downstreamed into other\ntools (e.g. helm chart, ksonnet prototype, kustomize, etc...).</p>\n</li>\n<li>\n<p>In 2.1, argo would install into the kube-system namespace by default. The new install instructions\nhave been updated to install into a different namespace, <code>argo</code>. In order to move to the recommended\ninstallation location, you should delete the v2.1 resources from kube-system before applying the\nnew manifests to the <code>argo</code> namespace.</p>\n<p>The following commands migrates the workflow-controller-configmap from the <code>kube-system</code> to the\n<code>argo</code> namespace, and deletes all argo resources from the <code>kube-system</code> namespace. Note that this\nwill delete the argo-ui service, resulting in the LoadBalancer being deleted (if created).</p>\n<pre><code>kubectl get cm workflow-controller-configmap -o yaml -n kube-system --export | kubectl apply -n argo -f -\nkubectl delete -n kube-system cm workflow-controller-configmap\nkubectl delete -n kube-system deploy workflow-controller argo-ui\nkubectl delete -n kube-system sa argo argo-ui\nkubectl delete -n kube-system svc argo-ui\n</code></pre>\n</li>\n<li>\n<p>In 2.1, the argoexec sidecar image was configured in the workflow-controller-configmap. This is\nnow configured using a new <code>--executor-image</code> flag in the <code>workflow-controller</code> deployment. This is\nthe preferred way to configure the executor image, since upgrades can now be performed without\nchanging the workflow-controller configmap. The executorImage setting in the config is deprecated\nand may be removed/ignored in a future release.</p>\n</li>\n</ul>\n<h3>Changelog since v2.1</h3>\n<ul>\n<li>Support withItems/withParam and parameter aggregation with DAG templates (issue #801)</li>\n<li>Add ability to aggregate and reference output parameters expanded by loops (issue #861)</li>\n<li>Support for sophisticated expressions in <code>when</code> conditionals (issue #860)</li>\n<li>Introduce Pending node state to highlight failures when starting workflow pods (issue #525)</li>\n<li>Support additional container runtimes through kubelet executor (issue #902) (@JulienBalestra)</li>\n<li>Introduce archive strategies with ability to disable tar.gz archiving (issue #784)</li>\n<li>Introduce <code>keyFormat</code> workflow config to enable flexibility in archive location path (issue #953)</li>\n<li>Introduce <code>argo watch</code> command to watch live workflows from terminal (issue #969)</li>\n<li>Add ability to archive container logs to the artifact repository (issue #454)</li>\n<li>Support for workflow level timeouts (issue #848)</li>\n<li>Introduce <code>argo terminate</code> to terminate a workflow without deleting it (issue #527)</li>\n<li>Introduce <code>withSequence</code> to iterate a range of numbers in a loop (issue #945)</li>\n<li>Github login using go-git, with support for ssh keys (issue #793) (@andreimc)</li>\n<li>Add TTLSecondsAfterFinished field and controller to garbage collect completed workflows (issue #911)</li>\n<li>Add <code>argo delete --older</code> flag to delete completed workflows older than a duration</li>\n<li>Support referencing of global workflow artifacts (issue #900)</li>\n<li>Support submission of workflows from json files (issue #926)</li>\n<li>Support submission of workflows from stdin (issue #926)</li>\n<li>Prometheus metrics and telemetry (issue #896) (@bbc88ks)</li>\n<li>Detect and fail upon unknown fields during argo submit &#x26; lint (issue #892)</li>\n<li>Allow scaling of workflow and pod workers via controller CLI flags (issue #962)</li>\n<li>Allow supplying of parameters from a file during <code>argo submit</code> (issue #796) (@vosmith)</li>\n<li>[UI] UI support/spinning clock for pending pods (@EdanSneh)</li>\n<li>Remove installer/uninstaller (issue #928)</li>\n<li>Update golang compiler to v1.10.3</li>\n<li>Update k8s dependencies to v1.10 and client-go to v7.0</li>\n<li>Update argo-cluster-role to work with OpenShift</li>\n<li>Fix issue where retryStrategy with DAGs fails, even if the step passes after retries (issue #885)</li>\n<li>Fix issue where sidecars and daemons were not reliably killed (issue #879)</li>\n<li>Redundant verifyResolvedVariables check in controller precluded the ability to use {{ }} in other circumstances</li>\n<li>Fix issue where retryStrategy with DAGs fails, even if the step passes after retries (issue #885)</li>\n<li>Fix outbound node metadata with steps templates causing incorrect edges to be rendered in UI</li>\n<li>Fix outbound node metadata with retry nodes causing disconnected nodes to be rendered in UI (issue #880)</li>\n<li>Error workflows which hit k8s/etcd 1M resource size limit (issue #913)</li>\n<li>[UI] Fixed 'X' hiding under page (@EdanSneh)</li>\n<li>[UI] Beautified resource template. Yaml will now indent 2 spaces instead of one space</li>\n</ul>\n<h2>2.1.1 (2018-05-29)</h2>\n<h3>Changelog since v2.1.0</h3>\n<ul>\n<li>Switch to an UnstructuredInformer to guard controller against malformed workflow manifests (issue #632)</li>\n<li>Fix issue where suspend templates were not properly being connected to their children (issue #869)</li>\n<li>Fix issue where a failed step in a template with parallelism would not complete (issue #868)</li>\n<li>Fix issue where <code>argo list</code> age column maxed out at 1d (issue #857)</li>\n<li>Fix issue where volumes were not supported in script templates (issue #852)</li>\n<li>Fix implementation of DAG task targets (issue #865)</li>\n<li>Retrying failed steps templates could potentially result in disconnected children</li>\n<li>[UI] Fix crash while rendering failed workflow with exit handler (issue #815)</li>\n<li>[UI] Fix locating outbound nodes for skipped node</li>\n<li>[UI] Fix JS crash caused by inconsistent workflow state</li>\n<li>[UI] Fix blank help page when using browser navigation</li>\n<li>[UI] API server can filter workflows managed by specific workflow controller (@kzadorozhny)</li>\n<li>[UI] Restore support for accessing the UI using <code>kubectl proxy</code> (@mthx)</li>\n<li>[UI] Pass the namespace when querying the logs (issue #777) (@mthx)</li>\n<li>[UI] Improve workflow sorting (issue #866)</li>\n<li>Add windows support for Argo CLI (@cuericlee)</li>\n<li>Documentation fixes (@mthx, @bodepd)</li>\n</ul>\n<h2>2.1.0 (2018-05-01)</h2>\n<h3>Changelog since v2.0</h3>\n<ul>\n<li>Support for DAG based definition of workflows</li>\n<li>Add <code>spec.parallelism</code> field to limit concurrent pod execution at a workflow level</li>\n<li>Add <code>template.parallelism</code> field to limit concurrent pod execution at a template level</li>\n<li>Add <code>argo suspend</code>, <code>argo resume</code> to suspend and resume workflows</li>\n<li>Add <code>argo resubmit</code> to resubmit a failed workflow</li>\n<li>Add <code>argo retry</code> to retry a failed workflow with the same name</li>\n<li>Add <code>--instanceid</code> flag to <code>argo submit</code> command to submit workflow with controller's specific instance id label</li>\n<li>Add <code>--name</code> and <code>--generate-name</code> to override metadata.name and/or metadata.generateName during submission</li>\n<li>Add <code>argo logs -w</code> to support rendering combined workflow logs</li>\n<li>Experimental support for resubmitting workflows with memoized steps</li>\n<li>Improved parameters and output validation</li>\n<li>UI migrated to React</li>\n<li>Workflow details page redesigned: added DAG view support, added workflow timeline tab.</li>\n<li>Workflow details page enhancements: added sidecar containers details; workflow exist handler is available on DAG diagram and timeline view.</li>\n<li>Support for pod tolerations (@discordianfish)</li>\n<li>Make <code>workflow.namespace</code> available as a global variable (@vreon)</li>\n<li>Support for exported global output parameters and artifacts</li>\n<li>Trim a trailing newline from path-based output parameters</li>\n<li>Add ability to reference global parameters in spec level fields</li>\n<li>Make {{pod.name}} available as a parameter in pod templates</li>\n<li>Argo CLI shell completion support (@mthx)</li>\n<li>Add ability to pass pod annotations and labels at the template levels (@wookasz)</li>\n<li>Add ability to use IAM role from EC2 instance for AWS S3 credentials (@wookasz)</li>\n<li>Abstract the container runtime as an interface to support mocking and future runtimes</li>\n<li>Documentation and examples fixes (@IronPan, @dmonakhov, @bodepd, @mthx, @javierbq, @sebdoido)</li>\n<li>Rewrite the installer</li>\n<li>install &#x26; uninstall commands use --namespace flag (@Fitzse)</li>\n<li>Trim spaces from aws keys (@bodepd)</li>\n<li>Update base image to debian 9.4 (from 9.1) (@mthx)</li>\n<li>Global parameters were not referenceable from artifact arguments</li>\n<li>spec.arguments are optionally supplied during linting</li>\n<li>Fix for CLI not rendering edges correctly for nested workflows</li>\n<li>Fix template.parallelism limiting parallelism of entire workflow</li>\n<li>Fix artifact saving to artifactory (@dougsc)</li>\n<li>Use socket type for hostPath to mount docker.sock (@DSchmidtDev)</li>\n<li>Fix rbac resource versions in install (@dvavili)</li>\n<li>Fix input parameters on a steps template prevent daemon pods from terminating (@adampearse)</li>\n<li>Fix locating outbound nodes for skipped node (issue #825)</li>\n<li>Avoid <code>println</code> which outputs to stderr (@mthx)</li>\n<li>Fix issue where daemoned steps were not terminated properly in DAG templates</li>\n</ul>\n<h2>2.1.0-beta2 (2018-03-29)</h2>\n<h3>Changelog since 2.1.0-beta1</h3>\n<ul>\n<li>Fix <code>argo install</code> does not install argo ui deployment</li>\n</ul>\n<h2>2.1.0-beta1 (2018-03-29)</h2>\n<h3>Changelog since 2.1.0-alpha1</h3>\n<ul>\n<li>Support for exported global output parameters and artifacts</li>\n<li>Introduce <code>argo retry</code> to retry a failed workflow with the same name</li>\n<li>Trim a trailing newline from path-based output parameters</li>\n<li>Add ability to reference global parameters in spec level fields</li>\n<li>Make {{pod.name}} available as a parameter in pod templates</li>\n<li>Argo CLI shell completion support (@mthx)</li>\n<li>Support rendering combined workflow logs using <code>argo logs -w</code></li>\n<li>Add ability to pass pod annotations and labels at the template levels (@wookasz)</li>\n<li>Add ability to use IAM role from EC2 instance for AWS S3 credentials (@wookasz)</li>\n<li>Rewrite the installer</li>\n<li>Abstract the container runtime as an interface to support mocking and future runtimes</li>\n<li>Documentation and examples fixes (@IronPan, @dmonakhov)</li>\n<li>Global parameters were not referenceable from artifact arguments</li>\n<li>spec.arguments are optionally supplied during linting</li>\n<li>Fix for CLI not rendering edges correctly for nested workflows</li>\n<li>Fix template.parallelism limiting parallelism of entire workflow</li>\n<li>Fix artifact saving to artifactory (@dougsc)</li>\n<li>Use socket type for hostPath to mount docker.sock (@DSchmidtDev)</li>\n</ul>\n<h2>2.1.0-alpha1 (2018-02-21)</h2>\n<h3>Changelog since 2.0</h3>\n<ul>\n<li>Support for DAG based definition of workflows</li>\n<li>Add <code>spec.parallelism</code> field to limit concurrent pod execution at a workflow level</li>\n<li>Add <code>template.parallelism</code> field to limit concurrent pod execution at a template level</li>\n<li>Add <code>argo suspend</code>, <code>argo resume</code> to suspend and resume workflows</li>\n<li>Add <code>argo resubmit</code> to resubmit a failed workflow</li>\n<li>Add <code>instanceid</code> parameter support to <code>argo submit</code> command to submit workflow with controller's specific instance id label</li>\n<li>Experimental support for resubmitting workflows with memoized steps</li>\n<li>Improved parameters and output validation</li>\n<li>UI migrated to React.</li>\n<li>Workflow details page redesigned: added DAG view support, added workflow timeline tab.</li>\n<li>Workflow details page enhancements: added sidecar containers details; workflow exist handler is available on DAG diagram and timeline view.</li>\n<li>Support for pod tolerations (@discordianfish)</li>\n<li>Make <code>workflow.namespace</code> available as a global variable (@vreon)</li>\n<li>Trim spaces from aws keys (@bodepd)</li>\n<li>Documentation fixes (@bodepd)</li>\n<li>Fix rbac resource versions in install (@dvavili)</li>\n</ul>\n<h2>2.0.0 (2018-02-06)</h2>\n<ul>\n<li>Add ability to specify affinity rules at both the workflow and template level</li>\n<li>Add ability to specify imagePullSecrets in the workflow.spec</li>\n<li>Generate OpenAPI models for the workflow spec</li>\n<li>Support setting the UI base url</li>\n<li>Fix issue preventing the referencing of artifacts in a container with retries</li>\n<li>Fix issue preventing the use of volumes in a sidecar</li>\n</ul>\n<h2>2.0.0-beta1 (2018-01-18)</h2>\n<ul>\n<li>Use and install minimal RBAC ClusterRoles for workflow-controller and argo-ui deployments</li>\n<li>Introduce <code>retryStrategy</code> field to control set retries for failed/errored containers</li>\n<li>Introduce <code>raw</code> input artifacts</li>\n<li>Add <code>argo install --dry-run</code> to print Kubernetes YAML manifests without installing</li>\n<li>Add <code>argo list</code> sorts by running pods, then by completion time</li>\n<li>Add <code>argo list -o wide</code> to show pod counts and parameter information</li>\n<li>Add <code>argo list --running --completed --status</code> workflow filtering</li>\n<li>Add <code>argo list --since DURATION</code> to filter workflows based on a time duration</li>\n<li>Add ability for steps and resource templates to have outputs parameters</li>\n<li>OpenID Connect auth support (@mthx)</li>\n<li>Increase controller rate limits for much faster processing of highly parallized workflows</li>\n<li>Executor sidecar hardening (retrying of Kube API queries)</li>\n<li>Switch to k8s-codegen generated workflow client and informer</li>\n<li>{{workflow.uuid}} variable corrected to {{workflow.uid}}</li>\n<li>Documentation fixes (@reasonthearchitect, @mthx)</li>\n<li>Prevent a potential k8s scheduler panic from incomplete setting of pod ownership reference</li>\n<li>Fix issues in controller operating on stale workflow state, and incorrectly identifying deleted pods</li>\n</ul>\n<h2>2.0.0-alpha3 (2018-01-02)</h2>\n<ul>\n<li>Introduce the \"resource\" template type for performing CRUD operations on k8s resources</li>\n<li>Support for workflow exit handlers</li>\n<li>Support artifactory as an artifact repository</li>\n<li>Add ability to timeout a container/script using activeDeadlineSeconds</li>\n<li>Add CLI command and flags to wait for a workflow to complete <code>argo wait</code>/<code>argo submit --wait</code></li>\n<li>Add ability to run multiple workflow controllers operating on separate instance ids</li>\n<li>Add ability to run workflows using a specified service account</li>\n<li>Scalability improvements for highly parallelized workflows</li>\n<li>Improved validation of volume mounts with input artifacts</li>\n<li>Argo UI bug fixes and improvements</li>\n<li>Documentation fixes (@javierbq, @anshumanbh)</li>\n<li>Recover from unexpected panics when operating on workflows</li>\n<li>Fix a controller panic when using a script templates with input artifacts</li>\n<li>Fix issue preventing ability to pass JSON as a command line argument</li>\n</ul>\n<h2>2.0.0-alpha2 (2017-12-04)</h2>\n<ul>\n<li>Argo release for KubeCon 2017</li>\n</ul>\n<h2>2.0.0-alpha1 (2017-11-16)</h2>\n<ul>\n<li>Initial release of Argo as a Kubernetes CRD (presented at Bay Area Kubernetes Meetup)</li>\n</ul>\n<h2>1.1.0 (2017-11-08)</h2>\n<ul>\n<li>Reduce sizes of axdb, zookeeper, kafka images by a combined total of ~1.7GB</li>\n</ul>\n<h2>1.0.1 (2017-10-04)</h2>\n<ul>\n<li>Add <code>argo app list</code> and <code>argo app show</code> commands</li>\n<li>Add <code>argo job logs</code> for displaying and following job logs</li>\n<li>Fix issues preventing proper handling of input parameters and output artifacts with dynamic fixtures</li>\n</ul>\n<h2>1.0.0 (2017-07-23)</h2>\n<ul>\n<li>Initial release</li>\n</ul>",docPath:"argo/changelog",proj:"argo"}}}});
//# sourceMappingURL=path---docs-argo-changelog-html-c68aef13381af9f0fe9a.js.map