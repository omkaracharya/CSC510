# CSC 510 - Homework 5

#### Answers to the concept questions can be found [here](Concepts.md).
#### Screencast for this homework is [here](https://youtu.be/5hXDd8BfIf0).

### Steps to run [`playbook.yml`](playbook.yml)

`ssh` to the VM where `ansible` is installed. Make sure ansible machine can ping the other VM, where we are going to run these commands.

**To confirm we can `ping` the other VM:**
```console
vagrant@vagrant-ubuntu-trusty-64:~$ ssh -i keys/node0.key vagrant@<IP_ADDRESS_OF_THE_OTHER_VM>
```

**To confirm our ansible/node0 VM setup is working:**
```console
vagrant@vagrant-ubuntu-trusty-64:~$ ansible all -i inventory -m ping
```

**To run the playbook:**
```console
vagrant@vagrant-ubuntu-trusty-64:~$ ansible-playbook -i inventory playbook.yml -s
```
