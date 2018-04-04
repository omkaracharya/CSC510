# Concepts
* **Why should developers use configuration management tools to manage their software programs? What can go wrong?**  
  * It is a good idea to create system images to avoid configuration problems within a project team. 
  * But, the problem occurs, whenever the system configuration changes as the system image also needs to be changed. Thus, managing these many images is not feasible. 
  * What these configuration management tools like `Puppet`, `Ansible`, `Chef`, etc. do is instead of storing the process of configuration, they store the state of the system. They give preference to capturing the state of the system so that everyone who is working on that project can have the same system configuration. CM tools make sure that everyone is in the same state.
  * Performing this is very easy with these tools as there is no client-server architecture involved. 
  * It just contains a script (like `.yml` files) to perform the tasks and tests.

* **Explain the difference between continuous integration, continuous delivery, and continuous deployment, in your own words.**  
  * **Continuous Integration:**  
    * It is a workflow strategy which ensures that every developer's changes in the code will safely integrate into to the project. 
    * It helps in catching the bugs in the changes that are made and reducing the merge conflicts. It also makes sure that the project is working even after the changes are continuously integrated.
  * **Continuous Delivery:**  
    * It is a practice of developing the software such that you could release it at any time in the software development lifecycle.
    * It takes the help of **Continuous Integration** to add modularity in the software to make it ready in the *production-like* environment.
  * **Continuous Deployment:**  
    * It is an extension of the continuous delivery which promises to deploy the newly developed features into production safely.
    * This is a completely automated process unlike **Continuous Delivery** which involves some business decisions for the deployment.
