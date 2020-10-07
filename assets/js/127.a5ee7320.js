(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{427:function(e,t,n){"use strict";n.r(t);var a=n(43),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("🔥 If you'd like to learn more Azure Tips and Tricks, then follow me on "),n("a",{attrs:{href:"http://twitter.com/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("twitter"),n("OutboundLink")],1),e._v(" or stay tuned to this blog!.")]),e._v(" "),n("p",[e._v("📺 Watch the video : "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=MeLf-cg_8nc&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=64&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to work with Azure Blueprints "),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/governance/blueprints/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Blueprints"),n("OutboundLink")],1)])]),e._v(" "),n("h4",{attrs:{id:"working-with-azure-blueprints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#working-with-azure-blueprints","aria-hidden":"true"}},[e._v("#")]),e._v(" Working with Azure Blueprints")]),e._v(" "),n("p",[e._v("It is important to have a repeatable process to create and update your Azure resources. For instance, you should create code, like Azure resource Manager (ARM) Templates, to create and update your environment with. When you have this, you can easily create and destroy an environment, like a development environment, that has all sorts of resources in it, like a Cosmos DB and a couple of Web Apps. Using templates like these, you ensure that your environments are always the same and that they can be created and destroyed quickly, because they don't require manual work. In addition to ARM templates, you should also automate the granting and revoking of access rights and applying compliance policies on resources.")]),e._v(" "),n("p",[e._v("All of this can be managed with "),n("a",{attrs:{href:"https://azure.microsoft.com/services/blueprints?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Blueprints"),n("OutboundLink")],1),e._v(". Azure Blueprints provides a mechanism that allows you to create and update artifacts (like policies and ARM templates) and assign them to environments and version them. Using this, you can store these artifacts and manage their versions and relate them to environments. For instance, you can see that version 1.1 of the dev environment blueprint is deployed to the xyz-subscription.")]),e._v(" "),n("p",[e._v("Let's take a look at how to create and assign an Azure Blueprint.")]),e._v(" "),n("h4",{attrs:{id:"_1-create-a-new-azure-blueprint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-new-azure-blueprint","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Create a new Azure Blueprint")]),e._v(" "),n("p",[e._v("We'll create a new Azure Blueprint and its artifacts in the Azure portal.")]),e._v(" "),n("ol",[n("li",[e._v("You can find Azure Blueprint under the Policy service. In the Azure portal, go to "),n("strong",[e._v("All resources")]),e._v(" and search for "),n("strong",[e._v("Blueprint")]),e._v(". You should find the "),n("strong",[e._v("Blueprint")]),e._v(" service. Click on it")]),e._v(" "),n("li",[e._v("In the Azure Blueprint blade, the "),n("strong",[e._v("Getting started")]),e._v(" blade opens automatically. Click on the "),n("strong",[e._v("Create")]),e._v(" button")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/CreateABlueprint.png")}}),e._v(" "),n("p",[e._v("(Create a Blueprint in the Azure portal)")]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Fill in a "),n("strong",[e._v("Name")]),e._v(" for the Blueprint")]),e._v(" "),n("li",[e._v("Select the Blueprint "),n("strong",[e._v("definition location")]),e._v(". This is where the Blueprint will be stored. The location is an "),n("strong",[e._v("Azure Management Group")]),e._v(". If you don't have one yet, you need to create one. You can do that by searching for "),n("strong",[e._v("Management Group")]),e._v(" in the "),n("strong",[e._v("All Resources")]),e._v(" tab in the Azure portal and creating one from there. You should make sure to move at least one subscription under that Management group, so that the subscription has that Management Group as parent. You can also create different hierarchies, which determine the scope of your Blueprint. You can learn more about that "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/governance/blueprints/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1)])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/FoldSubscriptionIntoManagementGroup.png")}}),e._v(" "),n("p",[e._v("(Make sure that the subscription has a parent Management Group)")]),e._v(" "),n("ol",{attrs:{start:"6"}},[n("li",[e._v("Once you've filled in all of the Blueprint definition details, click on "),n("strong",[e._v("Next: Artifacts")])]),e._v(" "),n("li",[e._v("You can now create the contents of the Blueprint. You can add things like "),n("strong",[e._v("Role assignments")]),e._v(", "),n("strong",[e._v("ARM templates")]),e._v(" and "),n("strong",[e._v("Policies")])])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/AddBlueprintArtifacts.png")}}),e._v(" "),n("p",[e._v("(Add Blueprint artifacts)")]),e._v(" "),n("ol",{attrs:{start:"8"}},[n("li",[e._v("Add some artifacts and add at least one that creates a resource group")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/CreateResourceGroupArtifact.png")}}),e._v(" "),n("p",[e._v("(Add Blueprint a Resource Group artifact)")]),e._v(" "),n("ol",{attrs:{start:"9"}},[n("li",[e._v("Click "),n("strong",[e._v("Save draft")]),e._v(" to save the Blueprint. It will now be saved but it won't be deployed yet")])]),e._v(" "),n("h4",{attrs:{id:"_2-publish-and-assign-the-azure-blueprint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-publish-and-assign-the-azure-blueprint","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Publish and assign the Azure Blueprint")]),e._v(" "),n("p",[e._v("The Blueprint is now saved as a draft. You can now publish it and assign it to a subscription to deploy it.")]),e._v(" "),n("ol",[n("li",[e._v("First, we need to publish the blueprint. This takes it out of the "),n("strong",[e._v("draft status")]),e._v(", which means that you can't make any changes to this version of the blueprint anymore. In the "),n("strong",[e._v("Blueprints Definitions")]),e._v(" menu, find and navigate to your blueprint")]),e._v(" "),n("li",[e._v("Now click "),n("strong",[e._v("Publish Blueprint")]),e._v(" and assign a "),n("strong",[e._v("version number")]),e._v(" to it")]),e._v(" "),n("li",[e._v("Click Publish to mark the Blueprint as published and ready to assign")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/PublishBlueprint.png")}}),e._v(" "),n("p",[e._v("(Publish Blueprint in the Azure portal)")]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("We can now assign the published blueprint to a subscription. Again, navigate to the blueprint from the "),n("strong",[e._v("Blueprint Definitions")]),e._v(" menu")]),e._v(" "),n("li",[e._v("Right-click on the blueprint (or left-click on the ellipsis) and select "),n("strong",[e._v("Assign Blueprint")])]),e._v(" "),n("li",[e._v("Pick the "),n("strong",[e._v("subscription")]),e._v(" that you want to assign the blueprint to (all of the artifacts in the blueprint will be deployed to this subscription)")]),e._v(" "),n("li",[e._v("Fill in a "),n("strong",[e._v("Name")]),e._v(" for the assignment")]),e._v(" "),n("li",[e._v("Select a "),n("strong",[e._v("location")]),e._v(" that will be used to deploy the managed identity in that will be used to deploy your blueprint")]),e._v(" "),n("li",[e._v("Select the publication "),n("strong",[e._v("version")]),e._v(" of the blueprint that you want to assign")]),e._v(" "),n("li",[e._v("Leave the "),n("strong",[e._v("Lock")]),e._v(" setting to "),n("strong",[e._v("Don't Lock")])]),e._v(" "),n("li",[e._v("Now fill in the "),n("strong",[e._v("parameter values")]),e._v(" for the artifacts. Some of them need values from you, like the identity of a user assignment or a name for a resource group")]),e._v(" "),n("li",[e._v("Click "),n("strong",[e._v("Assign")]),e._v(" to assign the blueprint and make it start deploying the artifacts to the subscription")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/PublishBlueprint.png")}}),e._v(" "),n("p",[e._v("(Assign Blueprint in the Azure portal)")]),e._v(" "),n("p",[e._v("Now that the blueprint has been assigned, you can see its status in the "),n("strong",[e._v("Assigned Blueprints")]),e._v(" menu. From there, you can view details about the assignment (like how the deployment is doing) and update or un-assign the blueprint.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/BlueprintAssignment.png")}}),e._v(" "),n("p",[e._v("(Assigned Blueprints in the Azure portal)")]),e._v(" "),n("p",[e._v("Finally, the deployment will be finished and the resources will be deployed. In my case, I've deployed a Web App, that gets a simple website from a Git repository. All of which, is described in the ARM template in the blueprint. This results in a fully deployed and running application.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/RunTheAppblue.png")}}),e._v(" "),n("p",[e._v("(Simple website running in a Web App deployed by the Azure Blueprint)")]),e._v(" "),n("h4",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("Azure Blueprints is a great way to link deployments to deployment artifacts. This way, you can keep track of what is deployed, what version of the deployment scripts (artifacts) was used and manage the deployment and artifact lifecycle effectively. In the example above, we did all of that manually. You can also automate this process using tools like Azure DevOps. Go and check it out!")])])},[],!1,null,null,null);t.default=r.exports}}]);