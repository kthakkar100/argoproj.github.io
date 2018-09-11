webpackJsonp([83372189206993],{553:function(e,o){e.exports={pathContext:{docHtml:'<h1>Argo - The Workflow Engine for Kubernetes</h1>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/argo-a099ca3512e83579d67b0aa9ede5261a-1df76.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 458px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 49.12663755458516%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvElEQVQoz3WSTWsaURSG58+4838US/fduXRjBVsq1RRBLC204MKUikhLF3blMnFTceEigXTRjdRFMglNDBrrpGp0xvl0ns5cdarBHDicc+957/m455Vc18UXd7Fg4alvxXl979mHdDO+9iXfUU2Hrg5n06XVvPN98GJVaFNs2w78dVwyLYffmsvVcYM/xZfIxy1kFSzLCcCDwSAooGkak8mE2Wwm7hRFQdf1IKnUm9qc9RX6+3vMnj/m+mOOX8Mp/TtTgMrlMrFYjFqtRrFYJJ1Ok0qlyGaz1Ot1kskkmUyG0Wi07LDrjXl1fsH1yRHq53d0f/7g9PSCG6/oZPSXaDRKu90mHA6Ty+VEgWq1SqVSIRQK0Wq1RMJGo7FMaHiTXSp33H7a4zL9lNsvbzmfmBirkQ8ODkkkEqKTZrOJLMsiQSQSoVQqkc/nKRQK//9QLGWqcvP+GSfxJyj7r7ylbG96UzqdDvF4XBQZDodbsWDLGHO08mvmLx4xr37wfxd3BRBUWtl1F71ej/F4LHzHcQJM0KFrWxjfv6F+fYN5dLikyw4O3qfPYgdnpeCxqePOVVzL2ObgAwTe5fvyD6Ll0ylRxLA1AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Argo Image"\n        title=""\n        src="/static/argo-a099ca3512e83579d67b0aa9ede5261a-1df76.png"\n        srcset="/static/argo-a099ca3512e83579d67b0aa9ede5261a-cd6d8.png 148w,\n/static/argo-a099ca3512e83579d67b0aa9ede5261a-56f1f.png 295w,\n/static/argo-a099ca3512e83579d67b0aa9ede5261a-1df76.png 458w"\n        sizes="(max-width: 458px) 100vw, 458px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>News</h2>\n<p>We are excited to welcome <a href="https://www.adobe.com/">Adobe</a> and <a href="https://www.blackrock.com/">BlackRock</a> as the latest corporate members of the Argo Community! We are also thrilled that BlackRock has developed an eventing framework for Argo and has decided to contribute it to the Argo Community. Please check out the new repo and try <a href="https://github.com/argoproj/argo-events">Argo Events</a>!</p>\n<p>If you actively use Argo in your organization and believe that your organization may be interested in actively participating in the Argo Community, please ask a representative to contact saradhi_sreegiriraju@intuit.com for additional information.</p>\n<h2>What is Argo?</h2>\n<p>Argo is an open source container-native workflow engine for getting work done on Kubernetes. Argo is implemented as a Kubernetes CRD (Custom Resource Definition).</p>\n<ul>\n<li>Define workflows where each step in the workflow is a container.</li>\n<li>Model multi-step workflows as a sequence of tasks or capture the dependencies between tasks using a graph (DAG).</li>\n<li>Easily run compute intensive jobs for machine learning or data processing in a fraction of the time using Argo workflows on Kubernetes.</li>\n<li>Run CI/CD pipelines natively on Kubernetes without configuring complex software development products.</li>\n</ul>\n<h2>Why Argo?</h2>\n<ul>\n<li>Argo is designed from the ground up for containers without the overhead and limitations of legacy VM and server-based environments.</li>\n<li>Argo is cloud agnostic and can run on any kubernetes cluster.</li>\n<li>Argo with Kubernetes puts a cloud-scale supercomputer at your fingertips.</li>\n</ul>\n<h2>Documentation</h2>\n<ul>\n<li><a href="https://github.com/argoproj/argo/blob/master/demo.md">Get started here</a></li>\n<li><a href="https://github.com/argoproj/argo/blob/master/examples/README.md">How to write Argo workflow specs</a></li>\n<li><a href="https://github.com/argoproj/argo/blob/master/ARTIFACT_REPO.md">How to configure your artifact repository</a></li>\n</ul>\n<h2>Features</h2>\n<ul>\n<li>DAG or Steps based declaration of workflows</li>\n<li>Artifact support (S3, Artifactory, HTTP, Git, raw)</li>\n<li>Step level input &#x26; outputs (artifacts/parameters)</li>\n<li>Loops</li>\n<li>Parameterization</li>\n<li>Conditionals</li>\n<li>Timeouts (step &#x26; workflow level)</li>\n<li>Retry (step &#x26; workflow level)</li>\n<li>Resubmit (memoized)</li>\n<li>Suspend &#x26; Resume</li>\n<li>Cancellation</li>\n<li>K8s resource orchestration</li>\n<li>Exit Hooks (notifications, cleanup)</li>\n<li>Garbage collection of completed workflow</li>\n<li>Scheduling (affinity/tolerations/node selectors)</li>\n<li>Volumes (ephemeral/existing)</li>\n<li>Parallelism limits</li>\n<li>Daemoned steps</li>\n<li>DinD (docker-in-docker)</li>\n<li>Script steps</li>\n</ul>\n<h2>Who uses Argo?</h2>\n<p>As the Argo Community grows, we\'d like to keep track of our users. Please send a PR with your organization name.</p>\n<p>Currently <strong>officially</strong> using Argo:</p>\n<ol>\n<li><a href="https://www.adobe.com/">Adobe</a> </li>\n<li><a href="https://www.blackrock.com/">BlackRock</a></li>\n<li><a href="https://www.corefiling.com/">CoreFiling</a></li>\n<li><a href="https://cyrusbio.com/">Cyrus Biotechnology</a></li>\n<li><a href="https://www.datadoghq.com/">Datadog</a></li>\n<li><a href="https://gladly.com/">Gladly</a></li>\n<li><a href="https://www.google.com/intl/en/about/our-company/">Google</a></li>\n<li><a href="https://www.interline.io/blog/scaling-openstreetmap-data-workflows/">Interline Technologies</a></li>\n<li><a href="https://www.intuit.com/">Intuit</a></li>\n<li><a href="https://www.localytics.com/">Localytics</a></li>\n<li><a href="https://www.nvidia.com/">NVIDIA</a></li>\n</ol>\n<h2>Community Blogs and Presentations</h2>\n<ul>\n<li><a href="https://www.interline.io/blog/scaling-openstreetmap-data-workflows/">Producing 200 OpenStreetMap extracts in 35 minutes using a scalable data workflow</a></li>\n<li><a href="http://dev.matt.hillsdon.net/2018/03/24/argo-integration-review.html">Argo integration review</a></li>\n<li>TGI Kubernetes with Joe Beda: <a href="https://www.youtube.com/watch?v=M_rxPPLG8pU&#x26;start=859">Argo workflow system</a></li>\n<li><a href="https://docs.google.com/document/d/16aWGQ1Te5IRptFuAIFtg3rONRQqHC1Z3X9rdDHYhYfE">Community meeting minutes and recordings</a></li>\n</ul>\n<h2>Project Resources</h2>\n<ul>\n<li>Argo GitHub:  <a href="https://github.com/argoproj">https://github.com/argoproj</a></li>\n<li>Argo Slack:   <a href="https://join.slack.com/t/argoproj/shared_invite/enQtMzExODU3MzIyNjYzLTA5MTFjNjI0Nzg3NzNiMDZiNmRiODM4Y2M1NWQxOGYzMzZkNTc1YWVkYTZkNzdlNmYyZjMxNWI3NjY2MDc1MzI">click here to join</a></li>\n<li>Argo website: <a href="https://argoproj.github.io/">https://argoproj.github.io/</a></li>\n<li>Argo forum:   <a href="https://groups.google.com/forum/#!forum/argoproj">https://groups.google.com/forum/#!forum/argoproj</a></li>\n</ul>',docPath:"argo/readme",proj:"argo"}}}});
//# sourceMappingURL=path---docs-argo-5d385314ccdf37772831.js.map