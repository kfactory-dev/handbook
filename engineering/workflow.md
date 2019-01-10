# Our development workflow 
The Centrifuge protocol and products are built using a specific workflow. The repos located in the [CentrifugeInc](https://github.com/CentrifugeInc) organisation will be specific to organisation-related projects; repos located in the [Centrifuge](https://github.com/centrifuge) organisation are protocol/product related projects.

## Creating a fork
First, fork the repo that you will be working on to your local machine

```bash
# Clone your fork to your local machine
$ git clone git@github.com:USERNAME/FORKED-PROJECT.git
```

## Keep Your Fork Up to Date

These steps ensure that you are working on the latest version of the repo

```bash
# Add 'upstream' repo to list of remotes
$ git remote add upstream https://github.com/UPSTREAM-USER/ORIGINAL-PROJECT.git

# Verify the new remote named 'upstream'
$ git remote -v
```

Whenever you want to update your fork with the latest upstream changes, you'll need to first fetch the upstream repo's branches and latest commits to bring them into your repository:

```bash
# Fetch from upstream remote
$ git fetch upstream
```
Now, checkout your own branch and merge the corresponding upstream branch:

```bash
# Checkout your branch and merge upstream
$ git checkout <BRANCH>
$ git merge upstream/<BRANCH>
```

## Submitting Pull Requests

Please branch off your own repo and commit any changes to this branch. When you have pushed this branch to your forked repo, you may submit a pull request to the upstream repo.

