# CSC 510 - Homework 1

## REST
Before running the script, you need to set the environment variables for your `TOKEN` and `GIT_USERNAME` from the command line.  

In windows, you can run:
```
setx TOKEN "<token>"
setx GIT_USERNAME "<git-username>"
# You will then need to close the cmd window and reopen.
```
  
In other systems, you can set them in your shell, like in .bash_profile:
  
```
# Edit .bash_profile to have:
export TOKEN="<token>"
export GIT_USERNAME="<git-username>"
# Then reload
$ source ~/.bash_profile
```
  
Now, `script.js` is ready to be executed. Here's how you can run it.
To get the options:
```
$ node script.js --help
```
To run the script:
```
$ node script.js createRepo [repo-name] [repo-description]
$ node script.js editRepo [repo-name]
$ node script.js listBranches [repo-name]
$ node script.js createIssue [repo-name] [issue-name] [issue-description]
$ node script.js listReactions [repo-name] [issue-number]
```

## About Me
The webpage can be found [here](https://pages.github.ncsu.edu/oachary/HW1/).

## Concepts 
All the theoretical questions are answered [here](Concepts.md)